/**
 * `DocusignTokenError` error.
 *
 * DocusignTokenError represents an error received from a Docusign's token
 * endpoint.
 *
 * References:
 *   - https://www.docusign.com/p/RESTAPIGuide/RESTAPIGuide.htm#OAuth2/OAuth2 Response Codes.htm
 *
 * @constructor
 * @param {string} [message]
 * @param {string} [type]
 * @param {number} [code]
 * @param {number} [subcode]
 * @param {string} [traceID]
 * @access public
 */
function DocusignTokenError(message, type, code, subcode, traceID) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'DocusignTokenError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.traceID = traceID;
  this.status = 500;
}

// Inherit from `Error`.
DocusignTokenError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = DocusignTokenError;