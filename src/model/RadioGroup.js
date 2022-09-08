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
    define(['ApiClient', 'model/PropertyMetadata', 'model/Radio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'), require('./Radio'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RadioGroup = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata, root.Docusign.Radio);
  }
}(this, function(ApiClient, PropertyMetadata, Radio) {
  'use strict';


  /**
   * The RadioGroup model module.
   * @module model/RadioGroup
   */

  /**
   * Constructs a new <code>RadioGroup</code>.
   * This group tab is used to place radio buttons on a document. The `radios` property contains a list of [`radio`](/docs/esign-rest-api/reference/envelopes/enveloperecipienttabs/) objects  associated with the group. Only one radio button can be selected in a group. 
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
      if (data.hasOwnProperty('conditionalParentLabelMetadata')) {
        obj['conditionalParentLabelMetadata'] = PropertyMetadata.constructFromObject(data['conditionalParentLabelMetadata']);
      }
      if (data.hasOwnProperty('conditionalParentValue')) {
        obj['conditionalParentValue'] = ApiClient.convertToType(data['conditionalParentValue'], 'String');
      }
      if (data.hasOwnProperty('conditionalParentValueMetadata')) {
        obj['conditionalParentValueMetadata'] = PropertyMetadata.constructFromObject(data['conditionalParentValueMetadata']);
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentIdMetadata')) {
        obj['documentIdMetadata'] = PropertyMetadata.constructFromObject(data['documentIdMetadata']);
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('groupNameMetadata')) {
        obj['groupNameMetadata'] = PropertyMetadata.constructFromObject(data['groupNameMetadata']);
      }
      if (data.hasOwnProperty('originalValue')) {
        obj['originalValue'] = ApiClient.convertToType(data['originalValue'], 'String');
      }
      if (data.hasOwnProperty('originalValueMetadata')) {
        obj['originalValueMetadata'] = PropertyMetadata.constructFromObject(data['originalValueMetadata']);
      }
      if (data.hasOwnProperty('radios')) {
        obj['radios'] = ApiClient.convertToType(data['radios'], [Radio]);
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientIdGuid')) {
        obj['recipientIdGuid'] = ApiClient.convertToType(data['recipientIdGuid'], 'String');
      }
      if (data.hasOwnProperty('recipientIdGuidMetadata')) {
        obj['recipientIdGuidMetadata'] = PropertyMetadata.constructFromObject(data['recipientIdGuidMetadata']);
      }
      if (data.hasOwnProperty('recipientIdMetadata')) {
        obj['recipientIdMetadata'] = PropertyMetadata.constructFromObject(data['recipientIdMetadata']);
      }
      if (data.hasOwnProperty('requireAll')) {
        obj['requireAll'] = ApiClient.convertToType(data['requireAll'], 'String');
      }
      if (data.hasOwnProperty('requireAllMetadata')) {
        obj['requireAllMetadata'] = PropertyMetadata.constructFromObject(data['requireAllMetadata']);
      }
      if (data.hasOwnProperty('requireInitialOnSharedChange')) {
        obj['requireInitialOnSharedChange'] = ApiClient.convertToType(data['requireInitialOnSharedChange'], 'String');
      }
      if (data.hasOwnProperty('requireInitialOnSharedChangeMetadata')) {
        obj['requireInitialOnSharedChangeMetadata'] = PropertyMetadata.constructFromObject(data['requireInitialOnSharedChangeMetadata']);
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('sharedMetadata')) {
        obj['sharedMetadata'] = PropertyMetadata.constructFromObject(data['sharedMetadata']);
      }
      if (data.hasOwnProperty('shareToRecipients')) {
        obj['shareToRecipients'] = ApiClient.convertToType(data['shareToRecipients'], 'String');
      }
      if (data.hasOwnProperty('shareToRecipientsMetadata')) {
        obj['shareToRecipientsMetadata'] = PropertyMetadata.constructFromObject(data['shareToRecipientsMetadata']);
      }
      if (data.hasOwnProperty('tabType')) {
        obj['tabType'] = ApiClient.convertToType(data['tabType'], 'String');
      }
      if (data.hasOwnProperty('tabTypeMetadata')) {
        obj['tabTypeMetadata'] = PropertyMetadata.constructFromObject(data['tabTypeMetadata']);
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
      if (data.hasOwnProperty('tooltip')) {
        obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
      }
      if (data.hasOwnProperty('tooltipMetadata')) {
        obj['tooltipMetadata'] = PropertyMetadata.constructFromObject(data['tooltipMetadata']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('valueMetadata')) {
        obj['valueMetadata'] = PropertyMetadata.constructFromObject(data['valueMetadata']);
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
   * Metadata that indicates whether the `conditionalParentLabel` property is editable.
   * @member {module:model/PropertyMetadata} conditionalParentLabelMetadata
   */
  exports.prototype['conditionalParentLabelMetadata'] = undefined;
  /**
   * For conditional fields, this is the value of the parent tab that controls the tab's visibility.  If the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active. 
   * @member {String} conditionalParentValue
   */
  exports.prototype['conditionalParentValue'] = undefined;
  /**
   * Metadata that indicates whether the `conditionalParentValue` property is editable.
   * @member {module:model/PropertyMetadata} conditionalParentValueMetadata
   */
  exports.prototype['conditionalParentValueMetadata'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * Metadata that indicates whether the `documentId` property is editable.
   * @member {module:model/PropertyMetadata} documentIdMetadata
   */
  exports.prototype['documentIdMetadata'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * Metadata that indicates whether the `groupName` property is editable.
   * @member {module:model/PropertyMetadata} groupNameMetadata
   */
  exports.prototype['groupNameMetadata'] = undefined;
  /**
   * The initial value of the tab when it was sent to the recipient. 
   * @member {String} originalValue
   */
  exports.prototype['originalValue'] = undefined;
  /**
   * Metadata that indicates whether the `originalValue` property is editable.
   * @member {module:model/PropertyMetadata} originalValueMetadata
   */
  exports.prototype['originalValueMetadata'] = undefined;
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
   * 
   * @member {String} recipientIdGuid
   */
  exports.prototype['recipientIdGuid'] = undefined;
  /**
   * Metadata that indicates whether the `recipientIdGuid` property is editable.
   * @member {module:model/PropertyMetadata} recipientIdGuidMetadata
   */
  exports.prototype['recipientIdGuidMetadata'] = undefined;
  /**
   * Metadata that indicates whether the `recipientId` property is editable.
   * @member {module:model/PropertyMetadata} recipientIdMetadata
   */
  exports.prototype['recipientIdMetadata'] = undefined;
  /**
   * When set to **true** and shared is true, information must be entered in this field to complete the envelope. 
   * @member {String} requireAll
   */
  exports.prototype['requireAll'] = undefined;
  /**
   * Metadata that indicates whether the `requireAll` property is editable.
   * @member {module:model/PropertyMetadata} requireAllMetadata
   */
  exports.prototype['requireAllMetadata'] = undefined;
  /**
   * Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
   * @member {String} requireInitialOnSharedChange
   */
  exports.prototype['requireInitialOnSharedChange'] = undefined;
  /**
   * Metadata that indicates whether the `requireInitialOnSharedChange` property is editable.
   * @member {module:model/PropertyMetadata} requireInitialOnSharedChangeMetadata
   */
  exports.prototype['requireInitialOnSharedChangeMetadata'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * Metadata that indicates whether the `shared` property is editable.
   * @member {module:model/PropertyMetadata} sharedMetadata
   */
  exports.prototype['sharedMetadata'] = undefined;
  /**
   * 
   * @member {String} shareToRecipients
   */
  exports.prototype['shareToRecipients'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/PropertyMetadata} shareToRecipientsMetadata
   */
  exports.prototype['shareToRecipientsMetadata'] = undefined;
  /**
   * 
   * @member {String} tabType
   */
  exports.prototype['tabType'] = undefined;
  /**
   * Metadata that indicates whether the `tabType` property is editable.
   * @member {module:model/PropertyMetadata} tabTypeMetadata
   */
  exports.prototype['tabTypeMetadata'] = undefined;
  /**
   * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients. 
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * Metadata that indicates whether the `templateLocked` property is editable.
   * @member {module:model/PropertyMetadata} templateLockedMetadata
   */
  exports.prototype['templateLockedMetadata'] = undefined;
  /**
   * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * Metadata that indicates whether the `templateRequired` property is editable.
   * @member {module:model/PropertyMetadata} templateRequiredMetadata
   */
  exports.prototype['templateRequiredMetadata'] = undefined;
  /**
   * 
   * @member {String} tooltip
   */
  exports.prototype['tooltip'] = undefined;
  /**
   * Metadata that indicates whether the `tooltip` property is editable.
   * @member {module:model/PropertyMetadata} tooltipMetadata
   */
  exports.prototype['tooltipMetadata'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Metadata that indicates whether the `value` property is editable.
   * @member {module:model/PropertyMetadata} valueMetadata
   */
  exports.prototype['valueMetadata'] = undefined;



  return exports;
}));


