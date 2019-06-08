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
    define(['ApiClient', 'model/BccEmailAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BccEmailAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EmailSettings = factory(root.Docusign.ApiClient, root.Docusign.BccEmailAddress);
  }
}(this, function(ApiClient, BccEmailAddress) {
  'use strict';


  /**
   * The EmailSettings model module.
   * @module model/EmailSettings
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EmailSettings</code>.
   * A complex element that allows  the sender to override some envelope email setting information. This can be used to override the Reply To email address and name associated with the envelope and to override the BCC email addresses to which an envelope is sent.   When the emailSettings information is used for an envelope, it only applies to that envelope.   **IMPORTANT**: The emailSettings information is not returned in the GET for envelope status. Use GET /email_settings to return information about the emailSettings.   EmailSettings consists of:   * replyEmailAddressOverride - The Reply To email used for the envelope. DocuSign will verify that a correct email format is used, but does not verify that the email is active. Maximum Length: 100 characters. * replyEmailNameOverride - The name associated with the Reply To email address. Maximum Length: 100 characters. * bccEmailAddresses - An array of up to five email addresses to which the envelope is sent to as a BCC email. Only users with canManageAccount setting set to true can use this option.  DocuSign verifies that the email format is correct, but does not verify that the email is active. Using this overrides the BCC for Email Archive information setting for this envelope. Maximum Length: 100 characters. *Example*: if your account has BCC for Email Archive set up for the email address &#39;archive@mycompany.com&#39; and you send an envelope using the BCC Email Override to send a BCC email to &#39;salesarchive@mycompany.com&#39;, then a copy of the envelope is only sent to the &#39;salesarchive@mycompany.com&#39; email address.
   * @alias module:model/EmailSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EmailSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailSettings} obj Optional instance to populate.
   * @return {module:model/EmailSettings} The populated <code>EmailSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bccEmailAddresses')) {
        obj['bccEmailAddresses'] = ApiClient.convertToType(data['bccEmailAddresses'], [BccEmailAddress]);
      }
      if (data.hasOwnProperty('replyEmailAddressOverride')) {
        obj['replyEmailAddressOverride'] = ApiClient.convertToType(data['replyEmailAddressOverride'], 'String');
      }
      if (data.hasOwnProperty('replyEmailNameOverride')) {
        obj['replyEmailNameOverride'] = ApiClient.convertToType(data['replyEmailNameOverride'], 'String');
      }
    }
    return obj;
  }

  /**
   * A list of email addresses that receive a copy of all email communications for an envelope. You can use this for archiving purposes.
   * @member {Array.<module:model/BccEmailAddress>} bccEmailAddresses
   */
  exports.prototype['bccEmailAddresses'] = undefined;
  /**
   * 
   * @member {String} replyEmailAddressOverride
   */
  exports.prototype['replyEmailAddressOverride'] = undefined;
  /**
   * 
   * @member {String} replyEmailNameOverride
   */
  exports.prototype['replyEmailNameOverride'] = undefined;



  return exports;
}));


