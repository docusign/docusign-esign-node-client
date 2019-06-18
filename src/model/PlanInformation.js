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
    define(['ApiClient', 'model/AddOn', 'model/FeatureSet', 'model/RecipientDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddOn'), require('./FeatureSet'), require('./RecipientDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PlanInformation = factory(root.Docusign.ApiClient, root.Docusign.AddOn, root.Docusign.FeatureSet, root.Docusign.RecipientDomain);
  }
}(this, function(ApiClient, AddOn, FeatureSet, RecipientDomain) {
  'use strict';


  /**
   * The PlanInformation model module.
   * @module model/PlanInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PlanInformation</code>.
   * An object used to identify the features and attributes of the account being created.
   * @alias module:model/PlanInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanInformation} obj Optional instance to populate.
   * @return {module:model/PlanInformation} The populated <code>PlanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addOns')) {
        obj['addOns'] = ApiClient.convertToType(data['addOns'], [AddOn]);
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('freeTrialDaysOverride')) {
        obj['freeTrialDaysOverride'] = ApiClient.convertToType(data['freeTrialDaysOverride'], 'String');
      }
      if (data.hasOwnProperty('planFeatureSets')) {
        obj['planFeatureSets'] = ApiClient.convertToType(data['planFeatureSets'], [FeatureSet]);
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('recipientDomains')) {
        obj['recipientDomains'] = ApiClient.convertToType(data['recipientDomains'], [RecipientDomain]);
      }
    }
    return obj;
  }

  /**
   * Reserved:
   * @member {Array.<module:model/AddOn>} addOns
   */
  exports.prototype['addOns'] = undefined;
  /**
   * Specifies the ISO currency code for the account.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Reserved for DocuSign use only.
   * @member {String} freeTrialDaysOverride
   */
  exports.prototype['freeTrialDaysOverride'] = undefined;
  /**
   * A complex type that sets the feature sets for the account.
   * @member {Array.<module:model/FeatureSet>} planFeatureSets
   */
  exports.prototype['planFeatureSets'] = undefined;
  /**
   * The DocuSign Plan ID for the account.
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/RecipientDomain>} recipientDomains
   */
  exports.prototype['recipientDomains'] = undefined;



  return exports;
}));


