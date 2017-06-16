/**
 * `DocusignAuthorizationError` error.
 *
 * DocusignAuthorizationError represents an error in response to an
 * authorization request on Docusign.
 *
 * References:
 *   - https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#OAuth2/OAuth2 Response Codes.htm
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function DocusignAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'DocusignAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

// Inherit from `Error`.
DocusignAuthorizationError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = DocusignAuthorizationError;