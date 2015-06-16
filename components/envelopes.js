/**
 * Wrapper dealing with DS views APIs
 *
 */

var streamifier = require('streamifier');
var async = require('async');
var fs = require('fs'); // core
var dsUtils = require('./../dsUtils');
var util = require('util');

exports.init = function(accountId, baseUrl, accessToken) {
  return {
    getConsoleUrl: function(callback){
      getConsoleUrl(accessToken, baseUrl, callback);
    },
    getEnvelopeList: function(fromDate, callback){
      getEnvelopeList(accessToken, baseUrl, fromDate, callback);
    },
    getView: function(action, fullName, email, files, returnUrl, event, callback){
      getView(accessToken, baseUrl, action, fullName, email, files, returnUrl, event, callback);
    },
    sendEnvelope: function(recipients, emailSubject, files, callback){
      sendEnvelope(accessToken, baseUrl, recipients, emailSubject, files, callback);
    },
  }
}

/**
 * Gets a list of envelopes starting from the designated date backwards
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {function} callback - Returned in the form of function(response).
 */

function getConsoleUrl(apiToken, baseUrl, callback) {
  var options = {
    method: 'POST',
    url: baseUrl + '/views/console',
    headers: dsUtils.getHeaders(apiToken),
  };

  dsUtils.makeRequest('Get Dashboard URL', options, process.env.dsDebug, function(response) {
    callback(response);
  });
};

/**
 * Gets a list of envelopes that have been created starting from the designated date to the present.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} fromDate - Date string.
 * @param {function} callback - Returned in the form of function(err, response).
 */
function getEnvelopeList(apiToken, baseUrl, fromDate, callback) {
  fromDate = new Date(fromDate);

  var options = {
    method: 'GET',
    url: baseUrl + '/envelopes?from_date=' + (fromDate.getMonth() + 1) + '%2F' + fromDate.getDate() + "%2F" + fromDate.getFullYear(),
    headers: dsUtils.getHeaders(apiToken)
  };

  dsUtils.makeRequest("Get Envelope List", options, process.env.dsDebug, function(response) {
    if('errorCode' in response) {
      return callback({error:response.errorCode});
    }
    else {
      return callback(null, response);
    }
  });
};

/**
 * Request a Signature on a Document.
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {JSON} recipients - JSON object with recipient information. For more information on how to construct
 *    a recipient object please visit: <a>https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#REST%20API%20References/Recipient Parameter.htm</a>
 * @param {string} emailSubject - Subject of the email sent for the envelope created.
 * @param {object[]} files - A list of file objects to be uploaded into DS.
 *   @param {string} files[].name - The name of the file.
 *   @param {string} files[].extension - The extension of the file (e.g. `pdf`).
 *   @param {string} files[].url - The URL to download from.
 *   @param {string} files[].base64 - The base64-encoded buffer of the file
 * @param {function} callback - Returns the PDF file buffer in the given `encoding`. Returned in the form of function(response).
 */

function sendEnvelope(apiToken, baseUrl, recipients, emailSubject, files, callback) {
  var documents = [];
  var parts = [];

  var logResponse = process.env.dsDebug == 'true' ? true: false

  files.forEach(function(file, index){
    var documentId = index + 1;
    documents.push({
      documentId: documentId,
      name: file.name,
      fileExtension: file.extension,
    });

    if(logResponse)
      util.log("Now retrieving the following file with documentId: %s \n %s", documentId, JSON.stringify(file).substr(0, 256));

    var download;
    if('path' in file){
      download = fs.createReadStream(file.path);
    } else if ('base64' in file) {
      download = streamifier.createReadStream(new Buffer(file.base64, 'base64'));
    } else {
      download = request({
        method: 'GET',
        url: file.url,
        encoding: null,
      });
    }
    download.pause();

    parts.push({
      headers: {
        'Content-Disposition': 'documentId=' + documentId,
      },
      body: download,
    });
  });

  var recipientCounter = 2;
  var generateId = function(recipient) {
    recipient.recipientId = recipientCounter;
    recipientCounter++;
  }
  
  recipients.signers.forEach(generateId);

  var data = {
    recipients: recipients,
    emailSubject: emailSubject,
    documents: documents,
    status: 'sent',
  }

  parts.unshift({
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  dsUtils.sendMultipart(baseUrl + '/envelopes', {
    Authorization: 'bearer ' + apiToken,
  }, parts, function(error, response, body){
    try {
      callback(false, JSON.parse(body));
    } catch (e){
      callback(true, body || 'Any empty response body was received.');
    }
  });

}

/**
 * Wrapper function that is designed for high convenience scenario
 * where you have all information up front about what action user wants to do
 * with the documents, the list of documents & their buffers, etc
 *
 * Pass all of that in this convenience function and the API handles both creating the
 * envelope and getting the embedUrl for the DocuSign envelope configuration view of the document
 *
 * @param {string} apiToken - DocuSign API OAuth2 access token.
 * @param {string} baseUrl - DocuSign API base URL.
 * @param {string} action - The DS process to use. Valid values are:
 *   `sign` - Only the user signs the envelope.
 *   `send` - Recipients selected by the user sign the envelope.
 *   `both` - The user and selected recipients sign the envelope.
 * @param {string} fullName - The full name of the user.
 * @param {string} email - The email address of the user.
 * @param {object[]} files - A list of file objects to be uploaded into DS.
 *   @param {string} files[].name - The name of the file.
 *   @param {string} files[].extension - The extension of the file (e.g. `pdf`).
 *   @param {string} files[].url - The URL to download from.
 *   @param {string} files[].base64 - The base64-encoded buffer of the file.
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
 * @param {function} callback - Returns the response body from DS API
 *   (this also includes an additional `envelopeId` field). Returned in the form of function(response).
 */

function getView(apiToken, baseUrl, action, fullName, email, files, returnUrl, event, callback) {
  async.waterfall([

    function createNewEnvelope(next) {
      _createEnvelope(apiToken, baseUrl, action, fullName, email, files, event, function(error, response) {
        if (error) {
          callback({ error: 'An error has occurred: ' + response });
          next(true); // end the waterfall
          return;
        } else if ('errorCode' in response) {
          callback({ error: response.errorCode + ': ' + response.message });
          next(true); // end the waterfall
          return;
        }

        next(null, response.uri, response.envelopeId);
      });
    },

    function getEnvelopeEmbedView(envelopeUri, envelopeId, next) {
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
        headers: dsUtils.getHeaders(apiToken, baseUrl),
        json: data,
      };

      dsUtils.makeRequest('Get Envelope View', options, process.env.dsDebug, function(response) {
        if ('errorCode' in response) {
          callback({ error: response.errorCode + ': ' + response.message });
          next(true); // end the waterfall
          return;
        }

        // return the envelope ID for the post-signing page
        response.envelopeId = envelopeId;

        callback(response);
        next(null);
      });
    },

  ]);
}

function _createEnvelope(apiToken, baseUrl, action, fullName, email, files, event, callback) {
  var logResponse = process.env.dsDebug == 'true' ? true: false
  if(logResponse)
    util.log('Starting to create envelope');

  // construct the parts of the multipart request
  var documents = [];
  var parts = [];
  var customFields = [];

  files.forEach(function(file, index) {
    var documentId = index + 1;
    documents.push({
      documentId: documentId,
      name: file.name,
      fileExtension: file.extension,
    });

    if(logResponse)
      util.log("Now retrieving the following file with documentId: %s \n %s", documentId, JSON.stringify(file).substr(0, 256));

    var download;
    if ('path' in file) {
      download = fs.createReadStream(file.path);
    } else if ('base64' in file) {
      download = streamifier.createReadStream(new Buffer(file.base64, 'base64'));
    } else if ('url' in file) {
      download = request({
        method: 'GET',
        url: file.url,
        encoding: null, // get file as binary buffer
      });
    } else {
      callback(true, 'Files array provided had no buffer or url to retrieve file from.');
    }
    download.pause();

    parts.push({
      headers: {
        'Content-Disposition': 'documentId=' + documentId,
      },
      body: download,
    });
  });


  var recipients;
  if (event && 'recipients' in event) {
    recipients = event.recipients;
  } else {
    recipients = {
      signers: [],
      carbonCopies: [],
    };
  }

  // generate recipient IDs to satisfy DS API
  var recipientCounter = 2;
  var generateId = function(recipient) {
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
      email: email,
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
      textCustomFields: customFields,
    },
  };

  if(event != null){
    if ('eventNotification' in event) {
      body.eventNotification = event.eventNotification;
    } else {
      body.eventNotification = {
        url: event.url,
        loggingEnabled: true,
        envelopeEvents: [{
          envelopeEventStatusCode: 'completed',
          includeDocuments: true,
        }],
      };
    }
  }

  parts.unshift({
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });


  dsUtils.sendMultipart(baseUrl + '/envelopes', {
    Authorization: 'bearer ' + apiToken,
  }, parts, function(error, response, body) {
    try {
      callback(false, JSON.parse(body));
    } catch (e) {
      callback(true, body || 'An empty response body was received.');
    }
  });
};

