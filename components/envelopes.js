// Wrapper dealing with DS views APIs

var Bluebird = require('bluebird');
var streamifier = require('streamifier');
var fs = require('fs'); // core
var dsUtils = require('./../dsUtils');
var util = require('util');
var request = require('request');
var forEach = require('lodash.foreach');
var isEmpty = require('lodash.isempty');
var merge = require('lodash.merge');
var log = dsUtils.log;
var DocuSignError = dsUtils.DocuSignError;

exports.init = function (accountId, baseUrl, accessToken) {
  return {
    /**
     * Gets the DocuSign Embedded Dashboard view
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {function} [callback] - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getConsoleUrl: function (callback) {
      return getConsoleUrl(accessToken, baseUrl).asCallback(callback);
    },

    /**
     * Gets a list of envelopes that have been created starting from the designated date to the present.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} fromDate - Date string.
     * @param {function} [callback] - Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getEnvelopeList: function (fromDate, callback) {
      return getEnvelopeList(accessToken, baseUrl, fromDate).asCallback(callback);
    },

    /**
     * Wrapper function that is designed for high convenience scenario
     * where you have all information up front about what action user wants to do
     * with the documents, the list of documents & their buffers, etc
     *
     * Pass all of that in this convenience function and the API handles both creating the
     * envelope and getting the embedUrl for the DocuSign envelope configuration view of the document
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} action - The DS process to use. Valid values are:
     *   `sign` - Only the user signs the envelope.
     *   `send` - Recipients selected by the user sign the envelope.
     *   `both` - The user and selected recipients sign the envelope.
     * @param {string} fullName - The full name of the user.
     * @param {string} email - The email address of the user.
     * @param {object[]} files - A list of file objects to be uploaded into DS.
     *   @param {string} files.name - The name of the file.
     *   @param {string} files.extension - The extension of the file (e.g. `pdf`).
     *   @param {string} files.url - The URL to download from.
     *   @param {string} files.base64 - The base64-encoded buffer of the file.
     *     contents (`files[].url` does not need to be set).
     * @param {string} returnUrl - The URL to be redirected to after the
     *   DS process is done.
     * @param {object} event - An object with values concerning what happens
     *   after the DS process is done (e.g. webhook registration). Can be `null`.
     *   @param {string} event.platform - The name of the calling app.
     *   @param {object} event.recipients - Mirrors DS API Recipients structure
     *     (note that `recipientId` will be filled in by this function).
     *   @param {boolean} event.showSignAndReturn - A flag to control whether
     *     or not to show the Sign & Return popup after the user signs.
     *   @param {object} event.eventNotification - This object mirrors the
     *     structure of the event notification request in the DS API.
     * @param {function} [callback] - Returns the response body from DS API
     *   (this also includes an additional `envelopeId` field). Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getView: function (action, fullName, email, files, returnUrl, event, callback) {
      return getView(accessToken, baseUrl, action, fullName, email, files, returnUrl, event).asCallback(callback);
    },

    /**
     * Request a Signature on a Document.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {JSON} recipients - JSON object with recipient information. For more information on how to construct
     *    a recipient object please visit: <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Recipient Parameter.htm">Recipient Parameters</a>
     * @param {string} emailSubject - Subject of the email sent for the envelope created.
     * @param {object[]} files - A list of file objects to be uploaded into DS.
     *   @param {string} files[].name - The name of the file.
     *   @param {string} files[].extension - The extension of the file (e.g. `pdf`).
     *   @param {object} files[].source - The file source to use
     *     @param {string} files[].source.type - The type of source, either `base64`, `path`, or `url`
     *     @param {string|buffer} files[].source.content - The base64-encoded buffer of the file, OR the local file path, OR the url to download.
     * @param {object} additionalParams - Please visit <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Send%20an%20Envelope.htm%3FTocPath%3DREST%2520API%2520References%7CSend%2520an%2520Envelope%2520or%2520Create%2520a%2520Draft%2520Envelope%7C_____0">Envelope Parameters</a>
     * @param {function} [callback] - Returns the PDF file buffer in the given `encoding`. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    sendEnvelope: function (recipients, emailSubject, files, additionalParams, callback) {
      return sendEnvelope(accessToken, baseUrl, recipients, emailSubject, files, additionalParams).asCallback(callback);
    },
    /**
     * Get information about the specified Envelope.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} envelopeId - ID of envelope to get documents from.
     * @param {function} [callback] - Returns the envelope information in a JSON object. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     *
     */
    getEnvelopeInfo: function (envelopeId, callback) {
      return getEnvelopeInfo(accessToken, baseUrl, envelopeId).asCallback(callback);
    },

    /**
     * Sets the status of an existing envelope
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} envelopeId - ID of envelope to get documents from.
     * @param {string} status - either `sent` or `voided`
     * @param {object} additionalParams - additional params such as the voidReason
     * @param {function} [callback] - Returns the envelope information in a JSON object. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     *
     */
    setEnvelopeStatus: function (envelopeId, status, additionalParams, callback) {
      return setEnvelopeStatus(accessToken, baseUrl, envelopeId, status, additionalParams).asCallback(callback);
    },

    /**
     * Get all the signed documents that were in the given envelope.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} envelopeId - ID of envelope to get documents from.
     * @param {string} encoding - Node.js buffer encoding for the returned value.
     *   Pass `null` for binary or `base64` for Base64 encoding.
     * @param {boolean} attachCertificate - A flag to decide whether or not to
     *   attach the Certificate of Completion (CoC) into the returned PDF.
     * @param {function} [callback] - Returns the PDF file buffer in the given `encoding`. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getSignedDocuments: function (envelopeId, encoding, attachCertificate, callback) {
      return getSignedDocuments(accessToken, baseUrl, envelopeId, encoding, attachCertificate).asCallback(callback);
    },

    /**
     * Get the URL for the Embedded Signing View.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} userId - The unique userId of the recipient (required or name and email are required).
     * @param {string} recipientName - The full name of the recipient (required if userId null).
     * @param {string} email - The email address of the recipient (required if userId null).
     * @param {string} clientUserId - This is required to designate signer as embedded.
     * @param {string} envelopeId - ID of envelope to get documents from.
     * @param {string} returnUrl - URL you want the Embedded View to return to after you have signed the envelope.
     * @param {string} authMethod - The main authentication method that gets listed in the certificate of completion.
     * @param {function} [callback] - Returns the embedded signing url for the recipient. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getSignerView: function (userId, recipientName, email, clientUserId, envelopeId, returnUrl, authMethod, callback) {
      return getSignerView(accessToken, baseUrl, userId, recipientName, email, clientUserId, envelopeId, returnUrl, authMethod).asCallback(callback);
    },

    /**
     * Request Signature via Template.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} emailSubject - The Email Subject of the Envelope created from the Template you wish to send.
     * @param {string} templateId - ID of template you wish to create an envelope from.
     * @param {array} templateRoles - Array of JSON objects of templateRoles. For more information please visit:
     *    https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST API References/Send an Envelope from a Template.htm%3FTocPath%3DREST%2520API%2520References%7C_____39
     * @param {object} additionalParams - Please visit <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Send%20an%20Envelope.htm%3FTocPath%3DREST%2520API%2520References%7CSend%2520an%2520Envelope%2520or%2520Create%2520a%2520Draft%2520Envelope%7C_____0">Envelope Parameters</a>
     * @param {function} [callback] - Returns JSON object with envelope information. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     *
     */
    sendTemplate: function (emailSubject, templateId, templateRoles, additionalParams, callback) {
      return sendTemplate(accessToken, baseUrl, emailSubject, templateId, templateRoles, additionalParams).asCallback(callback);
    },

    /**
     * Creates an envelope from a template, and then obtains a view of the newly created envelope
     * for the envelope sender.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} templateId - ID of template you wish to create an envelope from.
     * @param {string} returnUrl - URL you want the Embedded View to return to after you have tagged the envelope.
     * @param {function} [callback] - Returns the Embedded Sending View created from the template. Returned in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getTemplateView: function (templateId, returnUrl, callback) {
      return getTemplateView(accessToken, baseUrl, templateId, returnUrl).asCallback(callback);
    },

    /**
     * Get a list of recipients for a given `envelopeId`.
     *
     * @memberOf Envelopes
     * @public
     * @function
     * @param {string} envelopeId - ID of envelope to get list of recipients from.
     * @param {function} [callback] - Returns the list of recipients in the form of function(error, response).
     * @returns {Promise} - A thenable bluebird Promise; if callback is given it is called before the promise is resolved
     */
    getRecipients: function (envelopeId, callback) {
      return getRecipients(accessToken, baseUrl, envelopeId).asCallback(callback);
    }
  };
};

/**
 * Gets the DocuSign Embedded Dashboard view
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @returns {Promise} - A thenable bluebird Promise
 */

function getConsoleUrl (apiToken, baseUrl) {
  var options = {
    method: 'POST',
    url: baseUrl + '/views/console',
    headers: dsUtils.getHeaders(apiToken)
  };

  return dsUtils.makeRequest('Get Dashboard URL', options);
}

/**
 * Gets a list of envelopes that have been created starting from the designated date to the present.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} fromDate - Date string.
 * @returns {Promise} - A thenable bluebird Promise
 */
function getEnvelopeList (apiToken, baseUrl, fromDate) {
  fromDate = new Date(fromDate);
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes?from_date=' + (fromDate.getMonth() + 1) + '%2F' + fromDate.getDate() + '%2F' + fromDate.getFullYear(),
    headers: dsUtils.getHeaders(apiToken)
  };
  return dsUtils.makeRequest('Get Envelope List', options);
}

/**
 * Request a Signature on a Document.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {JSON} recipients - JSON object with recipient information. For more information on how to construct
 *    a recipient object please visit: <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Recipient Parameter.htm">Recipient Parameters</a>
 * @param {string} emailSubject - Subject of the email sent for the envelope created.
 * @param {object[]} files - A list of file objects to be uploaded into DS.
 *   @param {string} files[].name - The name of the file.
 *   @param {string} files[].extension - The extension of the file (e.g. `pdf`).
 *   @param {object} files[].source - The file source to use
 *     @param {string} files[].source.type - The type of source, either `base64`, `path`, or `url`
 *     @param {string|buffer} files[].source.content - The base64-encoded buffer of the file, OR the local file path, OR the url to download.
 * @param {object} additionalParams - Please visit <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Send%20an%20Envelope.htm%3FTocPath%3DREST%2520API%2520References%7CSend%2520an%2520Envelope%2520or%2520Create%2520a%2520Draft%2520Envelope%7C_____0">Envelope Parameters</a>
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the PDF file buffer in the given `encoding`.
 */
function sendEnvelope (apiToken, baseUrl, recipients, emailSubject, files, additionalParams) {
  return Bluebird.try(function () {
    var documents = [];
    var parts = [];
    additionalParams = additionalParams != null ? additionalParams : {};

    forEach(files, createMultipartFilesPrep(parts, documents));

    var recipientCounter = 2;
    var generateId = function (recipient) {
      recipient.recipientId = recipientCounter;
      recipientCounter++;
    };

    recipients.signers.forEach(generateId);

    var data = merge({}, additionalParams, {
      recipients: recipients,
      emailSubject: emailSubject,
      documents: documents,
      status: 'sent'
    }, function (a, b) {
      return Array.isArray(a) ? a.concat(b) : undefined;
    });

    parts.unshift({
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return dsUtils.sendMultipart(baseUrl + '/envelopes', {
      Authorization: 'bearer ' + apiToken
    }, parts)
    .spread(function (response, body) {
      if (isEmpty(body)) {
        throw new DocuSignError('Any empty response body was received.');
      }

      try {
        var parsedBody = JSON.parse(body);
      } catch (e) {
        throw new DocuSignError('Problem trying to parse the body');
      }
      return parsedBody;
    });
  });
}

/**
 * Helper method to prep files for multipart submission
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param  {array} parts - Array to push multipart files into
 * @param  {array} documents - Array to push file meta data into
 * @return {function} Function to be used with forEach
 */
function createMultipartFilesPrep (parts, documents) {
  return function (file, index) {
    var documentId = index + 1;
    documents.push({
      documentId: documentId,
      name: file.name,
      fileExtension: file.extension
    });

    log('Now retrieving the following file with documentId: %s \n %s', documentId, JSON.stringify(file).substr(0, 256));

    var download;
    var fileSource = file.source;
    switch (fileSource.type) {
      case 'path':
        download = fs.createReadStream(fileSource.content);
        break;

      case 'base64':
        download = streamifier.createReadStream(new Buffer(fileSource.content, 'base64'));
        break;

      case 'url':
        download = request({
          method: 'GET',
          url: fileSource.content,
          encoding: null
        });
        break;
      default:
        throw new DocuSignError('Files array had no buffer, local file path, or url to retrieve file from.');
    }
    download.pause();

    parts.push({
      headers: {
        'Content-Disposition': 'documentId=' + documentId
      },
      body: download
    });
  };
}

/**
 * Wrapper function that is designed for high convenience scenario
 * where you have all information up front about what action user wants to do
 * with the documents, the list of documents & their buffers, etc
 *
 * Pass all of that in this convenience function and the API handles both creating the
 * envelope and getting the embedUrl for the DocuSign envelope configuration view of the document
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} action - The DS process to use. Valid values are:
 *   `sign` - Only the user signs the envelope.
 *   `send` - Recipients selected by the user sign the envelope.
 *   `both` - The user and selected recipients sign the envelope.
 * @param {string} fullName - The full name of the user.
 * @param {string} email - The email address of the user.
 * @param {object[]} files - A list of file objects to be uploaded into DS.
 *   @param {string} files.name - The name of the file.
 *   @param {string} files.extension - The extension of the file (e.g. `pdf`).
 *   @param {object} files[].source - The file source to use
 *     @param {string} files[].source.type - The type of source, either `base64`, `path`, or `url`
 *     @param {string|buffer} files[].source.content - The base64-encoded buffer of the file, OR the local file path, OR the url to download.
 * @param {string} returnUrl - The URL to be redirected to after the
 *   DS process is done.
 * @param {object} event - An object with values concerning what happens
 *   after the DS process is done (e.g. webhook registration). Can be `null`.
 *   @param {string} event.platform - The name of the calling app.
 *   @param {object} event.recipients - Mirrors DS API Recipients structure
 *     (note that `recipientId` will be filled in by this function).
 *   @param {boolean} event.showSignAndReturn - A flag to control whether
 *     or not to show the Sign & Return popup after the user signs.
 *   @param {object} event.eventNotification - This object mirrors the
 *     structure of the event notification request in the DS API.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the response body from DS API (including an additional `envelopeId` field).
 */
function getView (apiToken, baseUrl, action, fullName, email, files, returnUrl, event) {
  function createNewEnvelope () {
    return new Bluebird(function (resolve, reject) {
      _createEnvelope(apiToken, baseUrl, action, fullName, email, files, event, function (error, response) {
        if (error) {
          return reject(error);
        } else if ('errorCode' in response) {
          var errMsg = util.format('(Error Code: %s) Error:\n  %s', response.errorCode, JSON.stringify(response.message));
          var err = new DocuSignError(errMsg, {errorCode: response.errorCode});
          return reject(err);
        }
        resolve([response.uri, response.envelopeId]);
      });
    });
  }

  function getEnvelopeEmbedView (envelopeUri, envelopeId) {
    var data = {};
    if (action === 'sign') {
      data = {
        returnUrl: returnUrl,
        authenticationMethod: 'email',
        recipientId: 1,
        userName: fullName,
        email: email
      };
    } else {
      data = {
        returnUrl: returnUrl
      };
    }

    var ending = (action === 'sign') ? 'recipient' : 'sender';

    // this controls whether or not to show the Sign and Return popup at the end of the process
    if (event != null && 'showSignAndReturn' in event) {
      ending += '?disable_cc_for_selfsign=' + !event.showSignAndReturn;
    }

    var options = {
      method: 'POST',
      url: baseUrl + envelopeUri + '/views/' + ending,
      headers: dsUtils.getHeaders(apiToken),
      json: data
    };

    return dsUtils.makeRequest('Get Envelope View', options).then(function (response) {
      // return the envelope ID for the post-signing page
      response.envelopeId = envelopeId;
      return response;
    });
  }

  return createNewEnvelope().spread(getEnvelopeEmbedView);
}

/**
 * Internal method to create an envelope based on a specified action
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} action - The DS process to use. Valid values are:
 *   `sign` - Only the user signs the envelope.
 *   `send` - Recipients selected by the user sign the envelope.
 *   `both` - The user and selected recipients sign the envelope.
 * @param {string} fullName - The full name of the user.
 * @param {string} email - The email address of the user.
 * @param {object[]} files - A list of file objects to be uploaded into DS.
 *   @param {string} files.name - The name of the file.
 *   @param {string} files.extension - The extension of the file (e.g. `pdf`).
 *   @param {object} files[].source - The file source to use
 *     @param {string} files[].source.type - The type of source, either `base64`, `path`, or `url`
 *     @param {string|buffer} files[].source.content - The base64-encoded buffer of the file, OR the local file path, OR the url to download.
 * @param {object} event - An object with values concerning what happens
 *   after the DS process is done (e.g. webhook registration). Can be `null`.
 *   @param {string} event.platform - The name of the calling app.
 *   @param {object} event.recipients - Mirrors DS API Recipients structure
 *     (note that `recipientId` will be filled in by this function).
 *   @param {boolean} event.showSignAndReturn - A flag to control whether
 *     or not to show the Sign & Return popup after the user signs.
 *   @param {object} event.eventNotification - This object mirrors the
 *     structure of the event notification request in the DS API.
 * @param {function} [callback] - Returns a thenable Bluebird Promise including additional `envelopeId` field in the response
 */

function _createEnvelope (apiToken, baseUrl, action, fullName, email, files, event) {
  return Bluebird.try(function () {
    log('Starting to create envelope');

    // construct the parts of the multipart request
    var documents = [];
    var parts = [];
    var customFields = [];

    forEach(files, createMultipartFilesPrep(parts, documents));

    var recipients;
    if (event && 'recipients' in event) {
      recipients = event.recipients;
    } else {
      recipients = {
        signers: [],
        carbonCopies: []
      };
    }

    // generate recipient IDs to satisfy DS API
    var recipientCounter = 2;
    var generateId = function (recipient) {
      recipient.recipientId = recipientCounter;
      recipientCounter++;
    };
    recipients.signers.forEach(generateId);
    recipients.carbonCopies.forEach(generateId);

    if (action !== 'send') {
      // add self as a recipient
      recipients.signers.unshift({
        recipientId: 1,
        name: fullName,
        email: email
      });
    }

    var subjectPrefix = 'Please DocuSign this document: ';
    var subjectEnding = (files.length > 0) ? files[0].name : '';

    var body = {
      status: (action === 'sign') ? 'sent' : 'created',
      recipients: recipients,
      emailSubject: (action === 'sign') ? subjectEnding : (subjectPrefix + subjectEnding),
      documents: documents,
      customFields: {
        textCustomFields: customFields
      }
    };

    if (event != null) {
      if ('eventNotification' in event) {
        body.eventNotification = event.eventNotification;
      } else {
        body.eventNotification = {
          url: event.url,
          loggingEnabled: true,
          envelopeEvents: [{
            envelopeEventStatusCode: 'completed',
            includeDocuments: true
          }]
        };
      }
    }

    parts.unshift({
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return dsUtils.sendMultipart(baseUrl + '/envelopes', {
      Authorization: 'bearer ' + apiToken
    }, parts)
    .spread(function (response, body) {
      if (isEmpty(body)) {
        throw new DocuSignError('Any empty response body was received.');
      }

      try {
        var parsedBody = JSON.parse(body);
      } catch (e) {
        throw new DocuSignError('Problem trying to parse the body');
      }
      return parsedBody;
    });
  });
}

/**
 * Get information about the specified Envelope.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the envelope information in a JSON object
 */
function getEnvelopeInfo (apiToken, baseUrl, envelopeId) {
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes/' + envelopeId,
    headers: dsUtils.getHeaders(apiToken)
  };

  return dsUtils.makeRequest('Get Envelope Information', options);
}

/**
 * Sets the envelope status.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {string} status - either `sent` or `voided`
 * @param {object} additionalParams - additional params such as the voidReason
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the envelope information in a JSON object.
 */
function setEnvelopeStatus (apiToken, baseUrl, envelopeId, status, additionalParams) {
  var options = {
    method: 'PUT',
    url: baseUrl + '/envelopes/' + envelopeId,
    headers: dsUtils.getHeaders(apiToken)
  };

  var data = merge({}, additionalParams, {
    status: status
  }, function (a, b) {
    return Array.isArray(a) ? a.concat(b) : undefined;
  });

  options.json = data;

  return dsUtils.makeRequest('Set Envelope Status', options);
}

/**
 * Get all the signed documents that were in the given envelope.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {string} encoding - Node.js buffer encoding for the returned value.
 *   Pass `null` for binary or `base64` for Base64 encoding.
 * @param {boolean} attachCertificate - A flag to decide whether or not to
 *   attach the Certificate of Completion (CoC) into the returned PDF.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the PDF file buffer in the given `encoding`.
 */
function getSignedDocuments (apiToken, baseUrl, envelopeId, encoding, attachCertificate) {
  return new Bluebird(function (resolve, reject) {
    var options = {
      method: 'GET',
      url: baseUrl + '/envelopes/' + envelopeId + '/documents/combined?certificate=' + attachCertificate,
      headers: dsUtils.getHeaders(apiToken),
      encoding: encoding
    };

    // @todo: fix this to use makeRequest
    request(options, function (error, response, body) {
      if (error) {
        return reject(error);
      }
      if (response.statusCode !== 200 && response.statusCode !== 201) {
        var parsedBody, message, errorCode;
        try {
          parsedBody = JSON.parse(body.toString());
          message = parsedBody.message;
          errorCode = parsedBody.errorCode;
        } catch (e) {
          message = body.toString();
          errorCode = null;
        }
        return reject(new DocuSignError(response.statusCode + ': ' + message, {
          statusCode: response.statusCode,
          errorCode: errorCode
        }));
      }
      resolve(body);
    });
  })
  .catch(DocuSignError, function (error) {
    dsUtils.log('DS API Get Signed Documents Error:\n %s', error.message);
    throw error;
  });
}

/**
 * Get the URL for the Embedded Signing View.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} userId - The DocuSign userId of the recipient (required or name and email are required).
 * @param {string} recipientName - Name of the recipient (required if userId is null).
 * @param {string} email - Email of the recipient (required if userId is null).
 * @param {string} clientUserId - Required for embedded signers, client provided string.
 * @param {string} envelopeId - ID of envelope to get documents from.
 * @param {string} returnUrl - URL you want the Embedded View to return to after you have signed the envelope.
 * @param {string} authMethod - The main authentication method that gets listed in the certificate of completion.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the embedded signing URL.
 */
function getSignerView (apiToken, baseUrl, userId, recipientName, email, clientUserId, envelopeId, returnUrl, authMethod) {
  var data = {};

  if (clientUserId === null) {
    throw new DocuSignError('clientUserId is a required recipient parameter for embedded signing.');
  }

  if (!userId) {
    data = {
      returnUrl: returnUrl,
      authenticationMethod: authMethod,
      clientUserId: clientUserId,
      userName: recipientName,
      email: email
    };
  } else {
    data = {
      returnUrl: returnUrl,
      authenticationMethod: authMethod,
      clientUserId: clientUserId,
      userId: userId
    };
  }

  var options = {
    method: 'POST',
    url: baseUrl + '/envelopes/' + envelopeId + '/views/recipient',
    headers: dsUtils.getHeaders(apiToken),
    json: data
  };

  return dsUtils.makeRequest('Get Signer View', options);
}

/**
 * Request Signature via Template.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} emailSubject - The Email Subject of the Envelope created from the Template you wish to send.
 * @param {string} templateId - ID of template you wish to create an envelope from.
 * @param {array} templateRoles - Array of JSON objects of templateRoles. For more information please visit:
 *    https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST API References/Send an Envelope from a Template.htm%3FTocPath%3DREST%2520API%2520References%7C_____39
 * @param {object} additionalParams - Please visit <a href="https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Send%20an%20Envelope.htm%3FTocPath%3DREST%2520API%2520References%7CSend%2520an%2520Envelope%2520or%2520Create%2520a%2520Draft%2520Envelope%7C_____0">Envelope Parameters</a>
 * @returns {Promise} - A thenable bluebird Promise fulfilled with envelope information
 */
function sendTemplate (apiToken, baseUrl, emailSubject, templateId, templateRoles, additionalParams) {
  additionalParams = additionalParams != null ? additionalParams : {};

  var data = merge({}, additionalParams, {
    emailSubject: emailSubject,
    templateId: templateId,
    templateRoles: templateRoles,
    status: 'sent'
  }, function (a, b) {
    return Array.isArray(a) ? a.concat(b) : undefined;
  });

  var options = {
    method: 'POST',
    url: baseUrl + '/envelopes',
    headers: dsUtils.getHeaders(apiToken),
    json: data
  };

  return dsUtils.makeRequest('Send Template', options);
}

/**
 * Creates an envelope from a template, and then obtains a view of the newly created envelope
 * for the envelope sender.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} templateId - ID of template you wish to create an envelope from.
 * @param {string} returnUrl - URL you want the Embedded View to return to after you have tagged the envelope.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the Embedded Sending View created from the template.
 */
function getTemplateView (apiToken, baseUrl, templateId, returnUrl) {
  function createEnvelope () {
    var options = {
      method: 'POST',
      url: baseUrl + '/envelopes',
      headers: dsUtils.getHeaders(apiToken),
      json: {
        templateId: templateId,
        status: 'created'
      }
    };
    return dsUtils.makeRequest('Create Envelope From Template', options).then(function (response) {
      return response.envelopeId;
    });
  }

  function getView (envelopeId) {
    var options = {
      method: 'POST',
      url: baseUrl + '/envelopes/' + envelopeId + '/views/sender',
      headers: dsUtils.getHeaders(apiToken),
      json: {
        returnUrl: returnUrl
      }
    };
    return dsUtils.makeRequest('Get Template View', options).then(function (response) {
      return response;
    });
  }

  return createEnvelope().then(getView);
}

/**
 * Get a list of recipients for a given `envelopeId`.
 *
 * @memberOf Envelopes
 * @private
 * @function
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} envelopeId - ID of envelope to get list of recipients from.
 * @returns {Promise} - A thenable bluebird Promise fulfilled with the list of recipients
 */
function getRecipients (apiToken, baseUrl, envelopeId) {
  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes/' + envelopeId + '/recipients',
    headers: dsUtils.getHeaders(apiToken)
  };

  return dsUtils.makeRequest('Get List of Recipients', options);
}
