// Utility functions used across DocuSign NPM package

var fs = require('fs'); // core
var util = require('util');
var request = require('request');
var async = require('async');
var temp = require('temp');
var stream = require('stream');
var crypto = require('crypto');

exports.DocuSignError = DocuSignError;
function DocuSignError (message) {
  this.message = message;
  this.name = 'DocuSignError';
  Error.captureStackTrace(this, DocuSignError);
}
DocuSignError.prototype = Object.create(Error.prototype);
DocuSignError.prototype.constrcutor = DocuSignError;

exports.validateCallback = function (testCallback, callback) {
  if (typeof testCallback !== 'function') {
    return callback({error: 'Callback is not a function.  You must pass a valid function as callback to this method'});
  } else {
    return callback(null);
  }
};

/**
 * Creates guids for use with when creating new users
 *
 * @memberOf Private
 * @function
 * @returns {string}
 */
exports.generateNewGuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = crypto.randomBytes(16).toString('hex');
    var v = (c === 'x') ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Provides an environment specific URL for the highest level API calls
 *
 * @memberOf Private
 * @function
 * @returns {string}
 */
exports.getApiUrl = function () {
  var env = process.env.targetEnv;
  return 'https://' + env + '.docusign.net/restapi/v2';
};

/**
 * Formats and return an authorization header with the given oAuth token
 *
 * @memberOf Private
 * @function
 * @param token
 * @returns {{Authorization: string}}
 */
exports.getHeaders = function (token) {
  return {
    Authorization: 'bearer ' + token
  };
};

/**
 * Helper function for making web requests to DocuSign
 *
 * @memberOf Private
 * @function
 * @param apiName - name of the API to be requested
 * @param options - options for the request
 * @param logResponse - flag indicating whether the response object should be echoed to the logs
 * @param callback
 */
exports.makeRequest = function (apiName, options, logResponse, callback) {
  logResponse = logResponse === 'true';
  var data;
  if ('json' in options) {
    data = JSON.stringify(options.json);
  } else if ('multipart' in options) {
    var json;
    try {
      json = JSON.parse(options.multipart[0].body);
    } catch(_) {
      json = null;
    }
    if (json !== null) {
      data = JSON.stringify(json);
    } else {
      data = '';
    }
  } else if ('form' in options) {
    data = JSON.stringify(options.form);
  } else {
    data = '';
  }

  if (logResponse) {
    util.log(util.format('DS API %s Request:\n  %s %s\t  %s', apiName, options.method, options.url, data));
  }

  request(options, function (error, response, body) {
    if (error) {
      callback(error);
      return;
    }

    var json, err, errMsg;
    try {
      json = JSON.parse(body);
    } catch(_) {
      json = null;
    }

    if (json === null) { // successful request; no json in response body
      callback(null, body);
    } else if ('errorCode' in json) {
      errMsg = util.format('DS API %s (Error Code: %s) Error:\n  %s', apiName, json.errorCode, json.message);
      err = new DocuSignError(errMsg);
      util.log(errMsg);
      callback(err, json);
    } else if ('error' in json) {
      errMsg = util.format('DS API %s Error:\n  %s \n\nDescription: %s', apiName, json.error, json.error_description);
      err = new DocuSignError(errMsg);
      util.log(errMsg);
      callback(err, json);
    } else { // no error
      if (logResponse) {
        util.log(util.format('DS API %s Response:\n  %s', apiName, JSON.stringify(json)));
      }
      callback(null, json);
    }
  });
};

/**
 *
 *  This function constructs and sends a multipart request.
 *
 * `mpUrl` is a string containing the URL where the multipart request
 * will be made to.
 *
 * `mpHeaders` is an object that contains HTTP headers for the whole
 * request. These will be combined with the appropriate Content-Type (CT)
 * header, so providing the CT header is not required.
 *
 * `parts` is a list of objects of structure { headers, body }
 * -> where `headers` is an object of HTTP headers and values.
 * -> where `body` is a string or Node.js stream object.
 *
 * Returns into `callback` with the expected `request` parameters of
 * structure { error, request, body }.
 *
 *
 * @memberOf Private
 * @function
 * @param mpUrl
 * @param mpHeaders
 * @param parts
 * @param callback
 */

exports.sendMultipart = function (mpUrl, mpHeaders, parts, callback) {
  var crlf = '\r\n';

  var tempPath = temp.path('docusign');
  var multipart = fs.createWriteStream(tempPath);

  var boundary = exports.generateNewGuid();
  mpHeaders['Content-Type'] = 'multipart/form-data; boundary=' + boundary;

  async.eachSeries(parts, function (part, next) {
    var headers = Object.keys(part.headers).map(function (key) {
      return key + ': ' + part.headers[key];
    }).join(crlf);

    multipart.write('--' + boundary + crlf);
    multipart.write(headers);
    multipart.write(crlf + crlf);

    var body = (Buffer.isBuffer(part.body) || typeof part.body === 'string') ?
      _createStringStream(part.body) : part.body;

    body.on('data', function (chunk) {
      multipart.write(chunk);
    });
    body.on('end', function () {
      multipart.write(crlf);
      next(null); // continue
    });
    body.resume();

  }, function () { // called when all is done
    multipart.write('--' + boundary + '--');
    multipart.end(function () {
      fs.createReadStream(tempPath).pipe(request({
        method: 'POST',
        url: mpUrl,
        headers: mpHeaders
      }, function (error, response, body) {
        fs.unlinkSync(tempPath);
        callback(error, response, body);
      }));
    });
  });
};

function _createStringStream (str) {
  var s = new stream.Readable();
  s.pause();
  s.push(str);
  s.push(null);
  return s;
}
