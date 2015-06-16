/**
 * Wrapper for envelope APIs
 *
 */

var async = require('async');
var request = require('request');
var dsUtils = require('./../dsUtils');

exports.init = function(accountId, baseUrl, accessToken) {
  return {
    getEnvelopeInfo: function(envelopeId, callback){
      getEnvelopeInfo(accessToken, baseUrl, envelopeId, callback);
    },
    getSignedDocuments: function(envelopeId, encoding, attachCertificate, callback){
      getSignedDocuments(accessToken, baseUrl, envelopeId, encoding, attachCertificate, callback);
    },
    getSignerView: function(userId, recipientName, email, clientUserId, envelopeId, returnUrl, callback){
      getSignerView(accessToken, baseUrl, userId, recipientName, email, clientUserId, envelopeId, returnUrl, callback);
    },
    sendTemplate: function(emailSubject, templateId, templateRoles, callback){
      sendTemplate(accessToken, baseUrl, emailSubject, templateId, templateRoles, callback);
    },
    getTemplateView: function(templateId, returnUrl, callback){
      getTemplateView(accessToken, baseUrl, templateId, returnUrl, callback);
    },
    getRecipients: function(envelopeId, callback){
      getRecipients(accessToken, baseUrl, envelopeId, callback);
    }
  }
}


/**
 * Get information about the specified Envelope.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {function} callback - Returns the envelope information in a JSON object. Returned in the form of function(response).
 */
function getEnvelopeInfo(apiToken, baseUrl, envelopeId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes/' + envelopeId,
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get Envelope Information', options, process.env.dsDebug, function(response){
    if('errorCode' in response){
      callback({ error: response.errorCode + ': ' + response.message });
      return;
    }
    callback(response);
  });

};

/**
 * Get all the signed documents that were in the given envelope.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {string} encoding - Node.js buffer encoding for the returned value.
 *   Pass `null` for binary or `base64` for Base64 encoding.
 * @param {boolean} attachCertificate - A flag to decide whether or not to
 *   attach the Certificate of Completion (CoC) into the returned PDF.
 * @param {function} callback - Returns the PDF file buffer in the given `encoding`. Returned in the form of function(response).
 */
function getSignedDocuments(apiToken, baseUrl, envelopeId, encoding, attachCertificate, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes/' + envelopeId + '/documents/combined?certificate=' + attachCertificate,
    headers: dsUtils.getHeaders(apiToken),
    encoding: encoding
  };

  request(options, function(error, response, body) {
    if (response.statusCode != 200 && response.statusCode != 201){
      callback({ error: response.statusCode + ': ' + error });
      return;
    }
    callback(body);
  });
};

/**
 * Get the URL for the Embedded Signing View.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - DocuSign userId.
 * @param {string} clientUserId - This is required if the signer is an offline signer.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {string} returnUrl - URL you want the Embedded View to return to after you have signed the envelope.
 * @param {function} callback - Returns the PDF file buffer in the given `encoding`. Returned in the form of function(response).
 */
function getSignerView(apiToken, baseUrl, userId, recipientName, email, clientUserId, envelopeId, returnUrl, callback) {
  var data = {
    returnUrl: returnUrl,
    authenticationMethod: 'email',
    userId: userId,
    userName: recipientName,
    email: email,
  };

  if(clientUserId){
    data.clientUserId = clientUserId;
  }

  var options = {
    method: 'POST',
    url: baseUrl + '/envelopes/' + envelopeId + '/views/recipient',
    headers: dsUtils.getHeaders(apiToken),
    json: data,
  };

  dsUtils.makeRequest('Get Signer View', options, process.env.dsDebug, function(response) {
    if ('errorCode' in response) {
      callback({ error: response.errorCode + ': ' + response.message });
      return;
    }

    callback(response);
  });
};

/**
 * Request Signature via Template.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} emailSubject - The Email Subject of the Envelope created from the Template you wish to send.
 * @param {string} templateId - ID of template you wish to create an envelope from.
 * @param {array} templateRoles - Array of JSON objects of templateRoles. For more information please visit:
 *    https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST API References/Send an Envelope from a Template.htm%3FTocPath%3DREST%2520API%2520References%7C_____39
 * @param {function} callback - Returns JSON object with envelope information. Returned in the form of function(response).
 *
 */

function sendTemplate(apiToken, baseUrl, emailSubject, templateId, templateRoles, callback) {

  var data = {
    emailSubject: emailSubject,
    templateId: templateId,
    templateRoles: templateRoles,
    status: 'sent'
  }

  var options = {
    method: 'POST',
    url: baseUrl + '/envelopes',
    headers: dsUtils.getHeaders(apiToken),
    json: data,
  }

  dsUtils.makeRequest('Send Template', options, process.env.dsDebug, function(response){
    if('errorCode' in response) {
      callback({ error: response.errorCode + ': ' + response.message });
      return;
    }

    callback(response);
  });

}


/**
 * Creates an envelope from a template, and then obtains a view of the newly created envelope
 * for the envelope sender.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} templateId - ID of template you wish to create an envelope from.
 * @param {string} returnUrl - URL you want the Embedded View to return to after you have tagged the envelope.
 * @param {function} callback - Returns the Embedded Sending View created from the template. Returned in the form of function(response).
 */
function getTemplateView(apiToken, baseUrl, templateId, returnUrl, callback) {
  async.waterfall([

    function createEnvelope(next) {
      var options = {
        method: 'POST',
        url: baseUrl + '/envelopes',
        headers: dsUtils.getHeaders(apiToken),
        json: {
          templateId: templateId,
          status: 'created'
        }
      };

      dsUtils.makeRequest('Create Envelope From Template', options, process.env.dsDebug, function(response) {
        if ('errorCode' in response) {
          callback({ error: response.errorCode + ': ' + response.message });
          next(true); // end the waterfall
          return;
        }

        next(null, response.envelopeId);
      });
    },

    function getView(envelopeId, next) {
      var options = {
        method: 'POST',
        url: baseUrl + '/envelopes/' + envelopeId + '/views/sender',
        headers: dsUtils.getHeaders(apiToken),
        json: {
          returnUrl: returnUrl,
        },
      };

      dsUtils.makeRequest('Get Template View', options, process.env.dsDebug, function(response) {
        if ('errorCode' in response) {
          callback({ error: response.errorCode + ': ' + response.message });
          next(true); // end the waterfall
          return;
        }

        callback(response);
        next(null);
      });
    },

  ]);
};


/**
 * Get a list of recipients for a given `envelopeId`.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get list of recipients from.
 * @param {function} callback - Returns the list of recipients in the form of function(response).
 */
function getRecipients(apiToken, baseUrl, envelopeId, callback) {
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes/' + envelopeId + '/recipients',
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest('Get List of Recipients', options, false, function(response) {
    callback(response);
  });
};

