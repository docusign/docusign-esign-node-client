/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RecipientTokenClientURLs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientTokenClientURLs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientViewRequest = factory(root.Docusign.ApiClient, root.Docusign.RecipientTokenClientURLs);
  }
}(this, function(ApiClient, RecipientTokenClientURLs) {
  'use strict';


  /**
   * The RecipientViewRequest model module.
   * @module model/RecipientViewRequest
   */

  /**
   * Constructs a new <code>RecipientViewRequest</code>.
   * The request body for the [EnvelopeViews: createRecipient](/docs/esign-rest-api/reference/envelopes/envelopeviews/createrecipient/) and [EnvelopeViews: createSharedRecipient](/docs/esign-rest-api/reference/envelopes/envelopeviews/createsharedrecipient/) methods.
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

      if (data.hasOwnProperty('assertionId')) {
        obj['assertionId'] = ApiClient.convertToType(data['assertionId'], 'String');
      }
      if (data.hasOwnProperty('authenticationInstant')) {
        obj['authenticationInstant'] = ApiClient.convertToType(data['authenticationInstant'], 'String');
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = ApiClient.convertToType(data['authenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('clientURLs')) {
        obj['clientURLs'] = RecipientTokenClientURLs.constructFromObject(data['clientURLs']);
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('frameAncestors')) {
        obj['frameAncestors'] = ApiClient.convertToType(data['frameAncestors'], ['String']);
      }
      if (data.hasOwnProperty('messageOrigins')) {
        obj['messageOrigins'] = ApiClient.convertToType(data['messageOrigins'], ['String']);
      }
      if (data.hasOwnProperty('pingFrequency')) {
        obj['pingFrequency'] = ApiClient.convertToType(data['pingFrequency'], 'String');
      }
      if (data.hasOwnProperty('pingUrl')) {
        obj['pingUrl'] = ApiClient.convertToType(data['pingUrl'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('securityDomain')) {
        obj['securityDomain'] = ApiClient.convertToType(data['securityDomain'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('xFrameOptions')) {
        obj['xFrameOptions'] = ApiClient.convertToType(data['xFrameOptions'], 'String');
      }
      if (data.hasOwnProperty('xFrameOptionsAllowFromUrl')) {
        obj['xFrameOptionsAllowFromUrl'] = ApiClient.convertToType(data['xFrameOptionsAllowFromUrl'], 'String');
      }
    }
    return obj;
  }

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
   * A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion.
   * @member {String} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * 
   * @member {module:model/RecipientTokenClientURLs} clientURLs
   */
  exports.prototype['clientURLs'] = undefined;
  /**
   * A sender created value that shows the recipient is embedded (captive).   Maximum length: 100 characters.
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {Array.<String>} frameAncestors
   */
  exports.prototype['frameAncestors'] = undefined;
  /**
   * 
   * @member {Array.<String>} messageOrigins
   */
  exports.prototype['messageOrigins'] = undefined;
  /**
   * Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
   * @member {String} pingFrequency
   */
  exports.prototype['pingFrequency'] = undefined;
  /**
   * A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
   * @member {String} pingUrl
   */
  exports.prototype['pingUrl'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * The url the recipient is redirected to after the signing session has ended. DocuSign redirects to the url and includes an event parameter that can be used by your application. Possible event parameter values:   * cancel (recipient canceled the signing operation) * decline (recipient declined to sign) * exception (an exception occurred) * fax_pending (recipient has a fax pending) * session_timeout (session timed out) * signing_complete (signer completed the signing ceremony) * ttl_expired (the TTL, time to live, timer expired) * viewing_complete (recipient completed viewing the envelope)  ###### Note: Include https:// in the URL or the redirect might not succeed on some browsers. 
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * The domain in which the user authenticated.
   * @member {String} securityDomain
   */
  exports.prototype['securityDomain'] = undefined;
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
   * 
   * @member {String} xFrameOptions
   */
  exports.prototype['xFrameOptions'] = undefined;
  /**
   * 
   * @member {String} xFrameOptionsAllowFromUrl
   */
  exports.prototype['xFrameOptionsAllowFromUrl'] = undefined;



  return exports;
}));


