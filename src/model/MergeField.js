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
    define(['ApiClient', 'model/PathExtendedElement', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathExtendedElement'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.MergeField = factory(root.Docusign.ApiClient, root.Docusign.PathExtendedElement, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PathExtendedElement, PropertyMetadata) {
  'use strict';


  /**
   * The MergeField model module.
   * @module model/MergeField
   */

  /**
   * Constructs a new <code>MergeField</code>.
   * Contains information for transfering values between Salesforce data fields and DocuSign Tabs.
   * @alias module:model/MergeField
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MergeField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MergeField} obj Optional instance to populate.
   * @return {module:model/MergeField} The populated <code>MergeField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowSenderToEdit')) {
        obj['allowSenderToEdit'] = ApiClient.convertToType(data['allowSenderToEdit'], 'String');
      }
      if (data.hasOwnProperty('allowSenderToEditMetadata')) {
        obj['allowSenderToEditMetadata'] = PropertyMetadata.constructFromObject(data['allowSenderToEditMetadata']);
      }
      if (data.hasOwnProperty('configurationType')) {
        obj['configurationType'] = ApiClient.convertToType(data['configurationType'], 'String');
      }
      if (data.hasOwnProperty('configurationTypeMetadata')) {
        obj['configurationTypeMetadata'] = PropertyMetadata.constructFromObject(data['configurationTypeMetadata']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('pathExtended')) {
        obj['pathExtended'] = ApiClient.convertToType(data['pathExtended'], [PathExtendedElement]);
      }
      if (data.hasOwnProperty('pathExtendedMetadata')) {
        obj['pathExtendedMetadata'] = PropertyMetadata.constructFromObject(data['pathExtendedMetadata']);
      }
      if (data.hasOwnProperty('pathMetadata')) {
        obj['pathMetadata'] = PropertyMetadata.constructFromObject(data['pathMetadata']);
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'String');
      }
      if (data.hasOwnProperty('rowMetadata')) {
        obj['rowMetadata'] = PropertyMetadata.constructFromObject(data['rowMetadata']);
      }
      if (data.hasOwnProperty('writeBack')) {
        obj['writeBack'] = ApiClient.convertToType(data['writeBack'], 'String');
      }
      if (data.hasOwnProperty('writeBackMetadata')) {
        obj['writeBackMetadata'] = PropertyMetadata.constructFromObject(data['writeBackMetadata']);
      }
    }
    return obj;
  }

  /**
   * When set to **true**, the sender can modify the value of the custom tab during the sending process.
   * @member {String} allowSenderToEdit
   */
  exports.prototype['allowSenderToEdit'] = undefined;
  /**
   * Metadata that indicates if the sender can edit the `allowSenderToEdit` property.
   * @member {module:model/PropertyMetadata} allowSenderToEditMetadata
   */
  exports.prototype['allowSenderToEditMetadata'] = undefined;
  /**
   * If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
   * @member {String} configurationType
   */
  exports.prototype['configurationType'] = undefined;
  /**
   * Metadata that indicates if the sender can edit the `configurationType` property.
   * @member {module:model/PropertyMetadata} configurationTypeMetadata
   */
  exports.prototype['configurationTypeMetadata'] = undefined;
  /**
   * Sets the object associated with the custom tab. Currently this is the Salesforce Object.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PathExtendedElement>} pathExtended
   */
  exports.prototype['pathExtended'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/PropertyMetadata} pathExtendedMetadata
   */
  exports.prototype['pathExtendedMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `path` property is editable. 
   * @member {module:model/PropertyMetadata} pathMetadata
   */
  exports.prototype['pathMetadata'] = undefined;
  /**
   * Specifies the row number in a Salesforce table that the merge field value corresponds to.
   * @member {String} row
   */
  exports.prototype['row'] = undefined;
  /**
   * Metadata that indicates whether the `row` property is editable. 
   * @member {module:model/PropertyMetadata} rowMetadata
   */
  exports.prototype['rowMetadata'] = undefined;
  /**
   * When wet to true, the information entered in the tab automatically updates the related Salesforce data when an envelope is completed.
   * @member {String} writeBack
   */
  exports.prototype['writeBack'] = undefined;
  /**
   * Metadata that indicates if the sender can edit the `writeBack` property.
   * @member {module:model/PropertyMetadata} writeBackMetadata
   */
  exports.prototype['writeBackMetadata'] = undefined;



  return exports;
}));


