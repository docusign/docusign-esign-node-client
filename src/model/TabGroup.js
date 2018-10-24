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
    define(['ApiClient', 'model/ErrorDetails', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TabGroup = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, ErrorDetails, PropertyMetadata) {
  'use strict';


  /**
   * The TabGroup model module.
   * @module model/TabGroup
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TabGroup</code>.
   * @alias module:model/TabGroup
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TabGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TabGroup} obj Optional instance to populate.
   * @return {module:model/TabGroup} The populated <code>TabGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('childTabLabels')) {
        obj['childTabLabels'] = ApiClient.convertToType(data['childTabLabels'], ['String']);
      }
      if (data.hasOwnProperty('childTabLabelsMetadata')) {
        obj['childTabLabelsMetadata'] = PropertyMetadata.constructFromObject(data['childTabLabelsMetadata']);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('groupLabel')) {
        obj['groupLabel'] = ApiClient.convertToType(data['groupLabel'], 'String');
      }
      if (data.hasOwnProperty('groupLabelMetadata')) {
        obj['groupLabelMetadata'] = PropertyMetadata.constructFromObject(data['groupLabelMetadata']);
      }
      if (data.hasOwnProperty('groupRule')) {
        obj['groupRule'] = ApiClient.convertToType(data['groupRule'], 'String');
      }
      if (data.hasOwnProperty('groupRuleMetadata')) {
        obj['groupRuleMetadata'] = PropertyMetadata.constructFromObject(data['groupRuleMetadata']);
      }
      if (data.hasOwnProperty('maximumAllowed')) {
        obj['maximumAllowed'] = ApiClient.convertToType(data['maximumAllowed'], 'String');
      }
      if (data.hasOwnProperty('maximumAllowedMetadata')) {
        obj['maximumAllowedMetadata'] = PropertyMetadata.constructFromObject(data['maximumAllowedMetadata']);
      }
      if (data.hasOwnProperty('minimumRequired')) {
        obj['minimumRequired'] = ApiClient.convertToType(data['minimumRequired'], 'String');
      }
      if (data.hasOwnProperty('minimumRequiredMetadata')) {
        obj['minimumRequiredMetadata'] = PropertyMetadata.constructFromObject(data['minimumRequiredMetadata']);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientIdMetadata')) {
        obj['recipientIdMetadata'] = PropertyMetadata.constructFromObject(data['recipientIdMetadata']);
      }
      if (data.hasOwnProperty('tabId')) {
        obj['tabId'] = ApiClient.convertToType(data['tabId'], 'String');
      }
      if (data.hasOwnProperty('tabIdMetadata')) {
        obj['tabIdMetadata'] = PropertyMetadata.constructFromObject(data['tabIdMetadata']);
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateLockedMetadata')) {
        obj['templateLockedMetadata'] = PropertyMetadata.constructFromObject(data['templateLockedMetadata']);
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('templateRequiredMetadata')) {
        obj['templateRequiredMetadata'] = PropertyMetadata.constructFromObject(data['templateRequiredMetadata']);
      }
      if (data.hasOwnProperty('validationMessage')) {
        obj['validationMessage'] = ApiClient.convertToType(data['validationMessage'], 'String');
      }
      if (data.hasOwnProperty('validationMessageMetadata')) {
        obj['validationMessageMetadata'] = PropertyMetadata.constructFromObject(data['validationMessageMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<String>} childTabLabels
   */
  exports.prototype['childTabLabels'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} childTabLabelsMetadata
   */
  exports.prototype['childTabLabelsMetadata'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} groupLabel
   */
  exports.prototype['groupLabel'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} groupLabelMetadata
   */
  exports.prototype['groupLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} groupRule
   */
  exports.prototype['groupRule'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} groupRuleMetadata
   */
  exports.prototype['groupRuleMetadata'] = undefined;
  /**
   * 
   * @member {String} maximumAllowed
   */
  exports.prototype['maximumAllowed'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} maximumAllowedMetadata
   */
  exports.prototype['maximumAllowedMetadata'] = undefined;
  /**
   * 
   * @member {String} minimumRequired
   */
  exports.prototype['minimumRequired'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} minimumRequiredMetadata
   */
  exports.prototype['minimumRequiredMetadata'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} recipientIdMetadata
   */
  exports.prototype['recipientIdMetadata'] = undefined;
  /**
   * The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].     
   * @member {String} tabId
   */
  exports.prototype['tabId'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} tabIdMetadata
   */
  exports.prototype['tabIdMetadata'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} templateLockedMetadata
   */
  exports.prototype['templateLockedMetadata'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} templateRequiredMetadata
   */
  exports.prototype['templateRequiredMetadata'] = undefined;
  /**
   * The message displayed if the custom tab fails input validation (either custom of embedded).
   * @member {String} validationMessage
   */
  exports.prototype['validationMessage'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} validationMessageMetadata
   */
  exports.prototype['validationMessageMetadata'] = undefined;



  return exports;
}));


