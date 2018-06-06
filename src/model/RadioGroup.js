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
    define(['ApiClient', 'model/Radio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Radio'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RadioGroup = factory(root.Docusign.ApiClient, root.Docusign.Radio);
  }
}(this, function(ApiClient, Radio) {
  'use strict';


  /**
   * The RadioGroup model module.
   * @module model/RadioGroup
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RadioGroup</code>.
   * @alias module:model/RadioGroup
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RadioGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RadioGroup} obj Optional instance to populate.
   * @return {module:model/RadioGroup} The populated <code>RadioGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('conditionalParentLabel')) {
        obj['conditionalParentLabel'] = ApiClient.convertToType(data['conditionalParentLabel'], 'String');
      }
      if (data.hasOwnProperty('conditionalParentValue')) {
        obj['conditionalParentValue'] = ApiClient.convertToType(data['conditionalParentValue'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('radios')) {
        obj['radios'] = ApiClient.convertToType(data['radios'], [Radio]);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('requireAll')) {
        obj['requireAll'] = ApiClient.convertToType(data['requireAll'], 'String');
      }
      if (data.hasOwnProperty('requireInitialOnSharedChange')) {
        obj['requireInitialOnSharedChange'] = ApiClient.convertToType(data['requireInitialOnSharedChange'], 'String');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
    }
    return obj;
  }

  /**
   * For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
   * @member {String} conditionalParentLabel
   */
  exports.prototype['conditionalParentLabel'] = undefined;
  /**
   * For conditional fields, this is the value of the parent tab that controls the tab's visibility.  If the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active. 
   * @member {String} conditionalParentValue
   */
  exports.prototype['conditionalParentValue'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * Specifies the locations and status for radio buttons that are grouped together.
   * @member {Array.<module:model/Radio>} radios
   */
  exports.prototype['radios'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
   * @member {String} requireAll
   */
  exports.prototype['requireAll'] = undefined;
  /**
   * Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
   * @member {String} requireInitialOnSharedChange
   */
  exports.prototype['requireInitialOnSharedChange'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;



  return exports;
}));


