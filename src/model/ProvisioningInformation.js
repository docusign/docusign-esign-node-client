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
    root.Docusign.ProvisioningInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ProvisioningInformation model module.
   * @module model/ProvisioningInformation
   */

  /**
   * Constructs a new <code>ProvisioningInformation</code>.
   * @alias module:model/ProvisioningInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProvisioningInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProvisioningInformation} obj Optional instance to populate.
   * @return {module:model/ProvisioningInformation} The populated <code>ProvisioningInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultConnectionId')) {
        obj['defaultConnectionId'] = ApiClient.convertToType(data['defaultConnectionId'], 'String');
      }
      if (data.hasOwnProperty('defaultPlanId')) {
        obj['defaultPlanId'] = ApiClient.convertToType(data['defaultPlanId'], 'String');
      }
      if (data.hasOwnProperty('distributorCode')) {
        obj['distributorCode'] = ApiClient.convertToType(data['distributorCode'], 'String');
      }
      if (data.hasOwnProperty('distributorPassword')) {
        obj['distributorPassword'] = ApiClient.convertToType(data['distributorPassword'], 'String');
      }
      if (data.hasOwnProperty('passwordRuleText')) {
        obj['passwordRuleText'] = ApiClient.convertToType(data['passwordRuleText'], 'String');
      }
      if (data.hasOwnProperty('planPromotionText')) {
        obj['planPromotionText'] = ApiClient.convertToType(data['planPromotionText'], 'String');
      }
      if (data.hasOwnProperty('purchaseOrderOrPromAllowed')) {
        obj['purchaseOrderOrPromAllowed'] = ApiClient.convertToType(data['purchaseOrderOrPromAllowed'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} defaultConnectionId
   */
  exports.prototype['defaultConnectionId'] = undefined;
  /**
   * 
   * @member {String} defaultPlanId
   */
  exports.prototype['defaultPlanId'] = undefined;
  /**
   * The code that identifies the billing plan groups and plans for the new account.
   * @member {String} distributorCode
   */
  exports.prototype['distributorCode'] = undefined;
  /**
   * The password for the distributorCode.
   * @member {String} distributorPassword
   */
  exports.prototype['distributorPassword'] = undefined;
  /**
   * 
   * @member {String} passwordRuleText
   */
  exports.prototype['passwordRuleText'] = undefined;
  /**
   * 
   * @member {String} planPromotionText
   */
  exports.prototype['planPromotionText'] = undefined;
  /**
   * 
   * @member {String} purchaseOrderOrPromAllowed
   */
  exports.prototype['purchaseOrderOrPromAllowed'] = undefined;



  return exports;
}));


