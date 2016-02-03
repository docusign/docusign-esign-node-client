// Utility functions used across DocuSign NPM package

var fs = require('fs'); // core
var util = require('util');
var Bluebird = require('bluebird');
var request = require('request');
var temp = require('temp');
var stream = require('stream');
var uuid = require('uuid');
var assign = require('lodash.assign');
var isPlainObject = require('lodash.isplainobject');

exports.DocuSignError = DocuSignError;
function DocuSignError (message, errorDetails) {
  errorDetails = errorDetails || {};
  /* istanbul ignore if */
  if (message instanceof DocuSignError) {
    return message;
  }
  this.message = message;
  this.name = 'DocuSignError';
  assign(this, errorDetails);
  Error.captureStackTrace(this, DocuSignError);
}
DocuSignError.prototype = Object.create(Error.prototype);
DocuSignError.prototype.constrcutor = DocuSignError;

/**
 * Simple space to share internal state
 *
 * @memberOf Utils
 * @private
 * @type {Object}
 */
exports.internalState = {};

/**
 * General logging function for debugging use
 *
 * @memberOf Utils
 * @private
 * @function
 */
exports.log = debugLog;
function debugLog () {
  var isDebugLogEnabled = exports.internalState.dsDebug === 'true' || /docusign/ig.test(process.env.DEBUG);
  /* istanbul ignore if */
  if (isDebugLogEnabled) {
    var timestamp = '[' + new Date().toISOString() + ']';
    console.log.apply(console, [timestamp].concat(arguments));
  }
}

/**
 * Creates guids for use with when creating new users
 *
 * @memberOf Utils
 * @private
 * @function
 * @returns {string}
 */
exports.generateNewGuid = uuid;

/**
 * Provides an environment specific URL for the highest level API calls
 *
 * @memberOf Utils
 * @private
 * @function
 * @returns {string}
 */
exports.getApiUrl = function () {
  var env = exports.internalState.targetEnv;
  return 'https://' + env + '.docusign.net/restapi/v2';
};

/**
 * Formats and return an authorization header with the given oAuth token
 *
 * @memberOf Utils
 * @private
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
 * @memberOf Utils
 * @private
 * @function
 * @param apiName - name of the API to be requested
 * @param options - options for the request
 * @param callback
 * @returns {Promise} - A thenable bluebird Promise; If callback is given it is called before the promise is resolved
 */
exports.makeRequest = function (apiName, options, callback) {
  var makeRequestAsync = new Bluebird(function (resolve, reject) {
    var data;
    if ('json' in options) {
      data = options.json;
    } else {
      data = '';
    }

    exports.log(util.format('DS API %s Request:\n  %s %s\t  %s\nHeaders: %s', apiName, options.method, options.url, util.inspect(data, {depth: null}), util.inspect(options.headers, {depth: null})));

    request(options, function (error, response, body) {
      if (error) {
        return reject(error);
      }

      var errorDetails = {};

      if (response.statusCode >= 400) {
        errorDetails.statusCode = response.statusCode;
      }

      var json, err, errMsg;
      try {
        json = JSON.parse(body);
      } catch (_) {
        if (isPlainObject(body)) {
          json = body;
        } else {
          json = null;
        }
      }

      if (json === null) { // successful request; no json in response body
        resolve(body);
      } else if ('errorCode' in json) {
        errMsg = util.format('DS API %s (Error Code: %s) Error:\n  %s', apiName, json.errorCode, json.message);
        errorDetails.errorCode = json.errorCode;
        err = new DocuSignError(errMsg, errorDetails);
        reject(err);
      } else if ('error' in json) {
        errMsg = util.format('DS API %s Error:\n  %s \n\nDescription: %s', apiName, json.error, json.error_description);
        errorDetails.errorCode = json.error;
        err = new DocuSignError(errMsg, errorDetails);
        reject(err);
      } else { // no error
        exports.log(util.format('DS API %s Response:\n  %s', apiName, JSON.stringify(json)));
        resolve(json);
      }
    });
  });
  return makeRequestAsync.asCallback(callback).catch(DocuSignError, function (error) {
    exports.log(error.message);
    throw error;
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
 * @memberOf Utils
 * @private
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

  exports.log('mpHeaders', mpHeaders);

  var buildMultipartBody = parts.reduce(function (lastPromise, part) {
    return lastPromise.then(function () {
      return new Bluebird(function (resolve, reject) {
        var headers = Object.keys(part.headers).map(function (key) {
          return key + ': ' + part.headers[key];
        }).join(crlf);
        exports.log('part.headers', part.headers);

        multipart.write('--' + boundary + crlf);
        multipart.write(headers);
        multipart.write(crlf + crlf);

        var body = (Buffer.isBuffer(part.body) || typeof part.body === 'string')
          ? _createStringStream(part.body) : part.body;

        body.on('data', function (chunk) {
          multipart.write(chunk);
        });
        body.on('end', function () {
          multipart.write(crlf);
          resolve();
        });
        body.resume();
      });
    });
  }, Bluebird.resolve());

  return new Bluebird(function (resolve, reject) {
    buildMultipartBody.then(function () { // called when all is done
      multipart.write('--' + boundary + '--');
      var endAsync = Bluebird.promisify(multipart.end, {context: multipart});

      return endAsync().then(function () {
        fs.createReadStream(tempPath).pipe(request({
          method: 'POST',
          url: mpUrl,
          headers: mpHeaders
        }, function (error, response, body) {
          try {
            fs.unlinkSync(tempPath);
          } catch (e) {
            exports.log('Failed to fs.unlink', e);
          }
          if (error) {
            return reject(error);
          }
          exports.log('sendMultipart response body', body);
          resolve([response, body]);
        }));
      })
      .catch(function (err) {
        exports.log('sendMultipart error', err);
        reject(err);
      });
    });
  }).asCallback(callback, { spread: true });
};

function _createStringStream (str) {
  var s = new stream.Readable();
  s.pause();
  s.push(str);
  s.push(null);
  return s;
}
