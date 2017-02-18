/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientViewRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RecipientViewRequest model module.
   * @module model/RecipientViewRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientViewRequest</code>.
   * @alias module:model/RecipientViewRequest
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>RecipientViewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientViewRequest} obj Optional instance to populate.
   * @return {module:model/RecipientViewRequest} The populated <code>RecipientViewRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('pingUrl')) {
        obj['pingUrl'] = ApiClient.convertToType(data['pingUrl'], 'String');
      }
      if (data.hasOwnProperty('pingFrequency')) {
        obj['pingFrequency'] = ApiClient.convertToType(data['pingFrequency'], 'String');
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = ApiClient.convertToType(data['authenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('assertionId')) {
        obj['assertionId'] = ApiClient.convertToType(data['assertionId'], 'String');
      }
      if (data.hasOwnProperty('authenticationInstant')) {
        obj['authenticationInstant'] = ApiClient.convertToType(data['authenticationInstant'], 'String');
      }
      if (data.hasOwnProperty('securityDomain')) {
        obj['securityDomain'] = ApiClient.convertToType(data['securityDomain'], 'String');
      }
    }
    return obj;
  }

  /**
   * A sender created value that shows the recipient is embedded (captive).   Maximum length: 100 characters.
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. If user ID is used and a client user ID is provided, the value in the `userId` property must match a recipient ID (which can be retrieved with a GET recipients call) for the envelope. If a user ID is used and a clientUser ID is not provided, the user ID match the user ID of the authenticating user.
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * The URL the recipient is directed to on certain events. DocuSign sends returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are:   * cancel (recipient cancels signing) * decline (recipient declines signing) * exception (exception occurs) * fax_pending (recipient has fax pending) * check); session_timeout (session times out) * completes signing) * expires) * viewing_complete (recipient completes viewing the envelope)  ## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
   * @member {String} pingUrl
   */
  exports.prototype['pingUrl'] = undefined;
  /**
   * Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
   * @member {String} pingFrequency
   */
  exports.prototype['pingFrequency'] = undefined;
  /**
   * A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion.
   * @member {String} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * A unique identifier of the authentication event executed by the client application.
   * @member {String} assertionId
   */
  exports.prototype['assertionId'] = undefined;
  /**
   * A sender generated value that indicates the date/time that the signer was authenticated.
   * @member {String} authenticationInstant
   */
  exports.prototype['authenticationInstant'] = undefined;
  /**
   * The domain in which the user authenticated.
   * @member {String} securityDomain
   */
  exports.prototype['securityDomain'] = undefined;



  return exports;
}));


