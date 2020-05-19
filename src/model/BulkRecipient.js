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
    define(['ApiClient', 'model/BulkRecipientSignatureProvider', 'model/BulkRecipientTabLabel', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkRecipientSignatureProvider'), require('./BulkRecipientTabLabel'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkRecipient = factory(root.Docusign.ApiClient, root.Docusign.BulkRecipientSignatureProvider, root.Docusign.BulkRecipientTabLabel, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, BulkRecipientSignatureProvider, BulkRecipientTabLabel, ErrorDetails) {
  'use strict';


  /**
   * The BulkRecipient model module.
   * @module model/BulkRecipient
   */

  /**
   * Constructs a new <code>BulkRecipient</code>.
   * @alias module:model/BulkRecipient
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkRecipient} obj Optional instance to populate.
   * @return {module:model/BulkRecipient} The populated <code>BulkRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ApiClient.convertToType(data['errorDetails'], [ErrorDetails]);
      }
      if (data.hasOwnProperty('identification')) {
        obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('recipientSignatureProviderInfo')) {
        obj['recipientSignatureProviderInfo'] = ApiClient.convertToType(data['recipientSignatureProviderInfo'], [BulkRecipientSignatureProvider]);
      }
      if (data.hasOwnProperty('rowNumber')) {
        obj['rowNumber'] = ApiClient.convertToType(data['rowNumber'], 'String');
      }
      if (data.hasOwnProperty('tabLabels')) {
        obj['tabLabels'] = ApiClient.convertToType(data['tabLabels'], [BulkRecipientTabLabel]);
      }
    }
    return obj;
  }

  /**
   * If a value is provided, the recipient must enter the value as the access code to view and sign the envelope.   Maximum Length: 50 characters and it must conform to the account's access code format setting.  If blank, but the signer `accessCode` property is set in the envelope, then that value is used.  If blank and the signer `accessCode` property is not set, then the access code is not required.
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * Specifies the recipient's email address.   Maximum length: 100 characters.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Array or errors.
   * @member {Array.<module:model/ErrorDetails>} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Specifies the authentication check used for the signer. If blank then no authentication check is required for the signer. Only one value can be used in this field.  The acceptable values are:  * KBA: Enables the normal ID check authentication set up for your account. * Phone: Enables phone authentication. * SMS: Enables SMS authentication.
   * @member {String} identification
   */
  exports.prototype['identification'] = undefined;
  /**
   * Specifies the recipient's name.   Maximum length: 50 characters.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specifies a note that is unique to this recipient. This note is sent to the recipient via the signing email. The note displays in the signing UI near the upper left corner of the document on the signing screen.  Maximum Length: 1000 characters.
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * This is only used if the Identification field value is Phone or SMS. The value for this field can be a valid telephone number or, if Phone, usersupplied (SMS authentication cannot use a user supplied number). Parenthesis and dashes can be used in the telephone number.  If `usersupplied` is used, the signer supplies his or her own telephone number.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BulkRecipientSignatureProvider>} recipientSignatureProviderInfo
   */
  exports.prototype['recipientSignatureProviderInfo'] = undefined;
  /**
   * 
   * @member {String} rowNumber
   */
  exports.prototype['rowNumber'] = undefined;
  /**
   * Specifies values used to populate recipient tabs with information. This allows each bulk recipient signer to have different values for their associated tabs. Any number of `tabLabel` columns can be added to the bulk recipient file.  The information used in the bulk recipient file header must be the same as the `tabLabel` for the tab.  The values entered in this column are automatically inserted into the corresponding tab for the recipient in the same row.  Note that this option cannot be used for tabs that do not have data or that are automatically populated data such as Signature, Full Name, Email Address, Company, Title, and Date Signed tabs.
   * @member {Array.<module:model/BulkRecipientTabLabel>} tabLabels
   */
  exports.prototype['tabLabels'] = undefined;



  return exports;
}));


