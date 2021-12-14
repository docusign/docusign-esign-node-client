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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ExternalPrimaryAccountRecipientAuthRequirements = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ExternalPrimaryAccountRecipientAuthRequirements model module.
   * @module model/ExternalPrimaryAccountRecipientAuthRequirements
   */

  /**
   * Constructs a new <code>ExternalPrimaryAccountRecipientAuthRequirements</code>.
   * @alias module:model/ExternalPrimaryAccountRecipientAuthRequirements
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExternalPrimaryAccountRecipientAuthRequirements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalPrimaryAccountRecipientAuthRequirements} obj Optional instance to populate.
   * @return {module:model/ExternalPrimaryAccountRecipientAuthRequirements} The populated <code>ExternalPrimaryAccountRecipientAuthRequirements</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('idVerification')) {
        obj['idVerification'] = ApiClient.convertToType(data['idVerification'], 'String');
      }
      if (data.hasOwnProperty('kba')) {
        obj['kba'] = ApiClient.convertToType(data['kba'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
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
   * 
   * @member {String} idVerification
   */
  exports.prototype['idVerification'] = undefined;
  /**
   * 
   * @member {String} kba
   */
  exports.prototype['kba'] = undefined;
  /**
   * 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;



  return exports;
}));


