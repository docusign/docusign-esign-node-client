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
    define(['ApiClient', 'model/ErrorDetails', 'model/MergeField', 'model/PropertyMetadata', 'model/SmartContractInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./MergeField'), require('./PropertyMetadata'), require('./SmartContractInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TabGroup = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.MergeField, root.Docusign.PropertyMetadata, root.Docusign.SmartContractInformation);
  }
}(this, function(ApiClient, ErrorDetails, MergeField, PropertyMetadata, SmartContractInformation) {
  'use strict';


  /**
   * The TabGroup model module.
   * @module model/TabGroup
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

      if (data.hasOwnProperty('anchorAllowWhiteSpaceInCharacters')) {
        obj['anchorAllowWhiteSpaceInCharacters'] = ApiClient.convertToType(data['anchorAllowWhiteSpaceInCharacters'], 'String');
      }
      if (data.hasOwnProperty('anchorAllowWhiteSpaceInCharactersMetadata')) {
        obj['anchorAllowWhiteSpaceInCharactersMetadata'] = PropertyMetadata.constructFromObject(data['anchorAllowWhiteSpaceInCharactersMetadata']);
      }
      if (data.hasOwnProperty('anchorCaseSensitive')) {
        obj['anchorCaseSensitive'] = ApiClient.convertToType(data['anchorCaseSensitive'], 'String');
      }
      if (data.hasOwnProperty('anchorCaseSensitiveMetadata')) {
        obj['anchorCaseSensitiveMetadata'] = PropertyMetadata.constructFromObject(data['anchorCaseSensitiveMetadata']);
      }
      if (data.hasOwnProperty('anchorHorizontalAlignment')) {
        obj['anchorHorizontalAlignment'] = ApiClient.convertToType(data['anchorHorizontalAlignment'], 'String');
      }
      if (data.hasOwnProperty('anchorHorizontalAlignmentMetadata')) {
        obj['anchorHorizontalAlignmentMetadata'] = PropertyMetadata.constructFromObject(data['anchorHorizontalAlignmentMetadata']);
      }
      if (data.hasOwnProperty('anchorIgnoreIfNotPresent')) {
        obj['anchorIgnoreIfNotPresent'] = ApiClient.convertToType(data['anchorIgnoreIfNotPresent'], 'String');
      }
      if (data.hasOwnProperty('anchorIgnoreIfNotPresentMetadata')) {
        obj['anchorIgnoreIfNotPresentMetadata'] = PropertyMetadata.constructFromObject(data['anchorIgnoreIfNotPresentMetadata']);
      }
      if (data.hasOwnProperty('anchorMatchWholeWord')) {
        obj['anchorMatchWholeWord'] = ApiClient.convertToType(data['anchorMatchWholeWord'], 'String');
      }
      if (data.hasOwnProperty('anchorMatchWholeWordMetadata')) {
        obj['anchorMatchWholeWordMetadata'] = PropertyMetadata.constructFromObject(data['anchorMatchWholeWordMetadata']);
      }
      if (data.hasOwnProperty('anchorString')) {
        obj['anchorString'] = ApiClient.convertToType(data['anchorString'], 'String');
      }
      if (data.hasOwnProperty('anchorStringMetadata')) {
        obj['anchorStringMetadata'] = PropertyMetadata.constructFromObject(data['anchorStringMetadata']);
      }
      if (data.hasOwnProperty('anchorTabProcessorVersion')) {
        obj['anchorTabProcessorVersion'] = ApiClient.convertToType(data['anchorTabProcessorVersion'], 'String');
      }
      if (data.hasOwnProperty('anchorTabProcessorVersionMetadata')) {
        obj['anchorTabProcessorVersionMetadata'] = PropertyMetadata.constructFromObject(data['anchorTabProcessorVersionMetadata']);
      }
      if (data.hasOwnProperty('anchorUnits')) {
        obj['anchorUnits'] = ApiClient.convertToType(data['anchorUnits'], 'String');
      }
      if (data.hasOwnProperty('anchorUnitsMetadata')) {
        obj['anchorUnitsMetadata'] = PropertyMetadata.constructFromObject(data['anchorUnitsMetadata']);
      }
      if (data.hasOwnProperty('anchorXOffset')) {
        obj['anchorXOffset'] = ApiClient.convertToType(data['anchorXOffset'], 'String');
      }
      if (data.hasOwnProperty('anchorXOffsetMetadata')) {
        obj['anchorXOffsetMetadata'] = PropertyMetadata.constructFromObject(data['anchorXOffsetMetadata']);
      }
      if (data.hasOwnProperty('anchorYOffset')) {
        obj['anchorYOffset'] = ApiClient.convertToType(data['anchorYOffset'], 'String');
      }
      if (data.hasOwnProperty('anchorYOffsetMetadata')) {
        obj['anchorYOffsetMetadata'] = PropertyMetadata.constructFromObject(data['anchorYOffsetMetadata']);
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('captionMetadata')) {
        obj['captionMetadata'] = PropertyMetadata.constructFromObject(data['captionMetadata']);
      }
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
      if (data.hasOwnProperty('customTabId')) {
        obj['customTabId'] = ApiClient.convertToType(data['customTabId'], 'String');
      }
      if (data.hasOwnProperty('customTabIdMetadata')) {
        obj['customTabIdMetadata'] = PropertyMetadata.constructFromObject(data['customTabIdMetadata']);
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('documentIdMetadata')) {
        obj['documentIdMetadata'] = PropertyMetadata.constructFromObject(data['documentIdMetadata']);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('formOrder')) {
        obj['formOrder'] = ApiClient.convertToType(data['formOrder'], 'String');
      }
      if (data.hasOwnProperty('formOrderMetadata')) {
        obj['formOrderMetadata'] = PropertyMetadata.constructFromObject(data['formOrderMetadata']);
      }
      if (data.hasOwnProperty('formPageLabel')) {
        obj['formPageLabel'] = ApiClient.convertToType(data['formPageLabel'], 'String');
      }
      if (data.hasOwnProperty('formPageLabelMetadata')) {
        obj['formPageLabelMetadata'] = PropertyMetadata.constructFromObject(data['formPageLabelMetadata']);
      }
      if (data.hasOwnProperty('formPageNumber')) {
        obj['formPageNumber'] = ApiClient.convertToType(data['formPageNumber'], 'String');
      }
      if (data.hasOwnProperty('formPageNumberMetadata')) {
        obj['formPageNumberMetadata'] = PropertyMetadata.constructFromObject(data['formPageNumberMetadata']);
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
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('heightMetadata')) {
        obj['heightMetadata'] = PropertyMetadata.constructFromObject(data['heightMetadata']);
      }
      if (data.hasOwnProperty('maximumAllowed')) {
        obj['maximumAllowed'] = ApiClient.convertToType(data['maximumAllowed'], 'String');
      }
      if (data.hasOwnProperty('maximumAllowedMetadata')) {
        obj['maximumAllowedMetadata'] = PropertyMetadata.constructFromObject(data['maximumAllowedMetadata']);
      }
      if (data.hasOwnProperty('mergeField')) {
        obj['mergeField'] = MergeField.constructFromObject(data['mergeField']);
      }
      if (data.hasOwnProperty('mergeFieldXml')) {
        obj['mergeFieldXml'] = ApiClient.convertToType(data['mergeFieldXml'], 'String');
      }
      if (data.hasOwnProperty('minimumRequired')) {
        obj['minimumRequired'] = ApiClient.convertToType(data['minimumRequired'], 'String');
      }
      if (data.hasOwnProperty('minimumRequiredMetadata')) {
        obj['minimumRequiredMetadata'] = PropertyMetadata.constructFromObject(data['minimumRequiredMetadata']);
      }
      if (data.hasOwnProperty('pageNumber')) {
        obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'String');
      }
      if (data.hasOwnProperty('pageNumberMetadata')) {
        obj['pageNumberMetadata'] = PropertyMetadata.constructFromObject(data['pageNumberMetadata']);
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
      if (data.hasOwnProperty('smartContractInformation')) {
        obj['smartContractInformation'] = SmartContractInformation.constructFromObject(data['smartContractInformation']);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusMetadata')) {
        obj['statusMetadata'] = PropertyMetadata.constructFromObject(data['statusMetadata']);
      }
      if (data.hasOwnProperty('tabGroupLabels')) {
        obj['tabGroupLabels'] = ApiClient.convertToType(data['tabGroupLabels'], ['String']);
      }
      if (data.hasOwnProperty('tabGroupLabelsMetadata')) {
        obj['tabGroupLabelsMetadata'] = PropertyMetadata.constructFromObject(data['tabGroupLabelsMetadata']);
      }
      if (data.hasOwnProperty('tabId')) {
        obj['tabId'] = ApiClient.convertToType(data['tabId'], 'String');
      }
      if (data.hasOwnProperty('tabIdMetadata')) {
        obj['tabIdMetadata'] = PropertyMetadata.constructFromObject(data['tabIdMetadata']);
      }
      if (data.hasOwnProperty('tabOrder')) {
        obj['tabOrder'] = ApiClient.convertToType(data['tabOrder'], 'String');
      }
      if (data.hasOwnProperty('tabOrderMetadata')) {
        obj['tabOrderMetadata'] = PropertyMetadata.constructFromObject(data['tabOrderMetadata']);
      }
      if (data.hasOwnProperty('tabScope')) {
        obj['tabScope'] = ApiClient.convertToType(data['tabScope'], 'String');
      }
      if (data.hasOwnProperty('tabScopeMetadata')) {
        obj['tabScopeMetadata'] = PropertyMetadata.constructFromObject(data['tabScopeMetadata']);
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
      if (data.hasOwnProperty('toolTipMetadata')) {
        obj['toolTipMetadata'] = PropertyMetadata.constructFromObject(data['toolTipMetadata']);
      }
      if (data.hasOwnProperty('validationMessage')) {
        obj['validationMessage'] = ApiClient.convertToType(data['validationMessage'], 'String');
      }
      if (data.hasOwnProperty('validationMessageMetadata')) {
        obj['validationMessageMetadata'] = PropertyMetadata.constructFromObject(data['validationMessageMetadata']);
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'String');
      }
      if (data.hasOwnProperty('widthMetadata')) {
        obj['widthMetadata'] = PropertyMetadata.constructFromObject(data['widthMetadata']);
      }
      if (data.hasOwnProperty('xPosition')) {
        obj['xPosition'] = ApiClient.convertToType(data['xPosition'], 'String');
      }
      if (data.hasOwnProperty('xPositionMetadata')) {
        obj['xPositionMetadata'] = PropertyMetadata.constructFromObject(data['xPositionMetadata']);
      }
      if (data.hasOwnProperty('yPosition')) {
        obj['yPosition'] = ApiClient.convertToType(data['yPosition'], 'String');
      }
      if (data.hasOwnProperty('yPositionMetadata')) {
        obj['yPositionMetadata'] = PropertyMetadata.constructFromObject(data['yPositionMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} anchorAllowWhiteSpaceInCharacters
   */
  exports.prototype['anchorAllowWhiteSpaceInCharacters'] = undefined;
  /**
   * Metadata that indicates whether the `anchorAllowWhiteSpaceInCharacters` property is editable.
   * @member {module:model/PropertyMetadata} anchorAllowWhiteSpaceInCharactersMetadata
   */
  exports.prototype['anchorAllowWhiteSpaceInCharactersMetadata'] = undefined;
  /**
   * When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
   * @member {String} anchorCaseSensitive
   */
  exports.prototype['anchorCaseSensitive'] = undefined;
  /**
   * Metadata that indicates whether the `anchorCaseSensitive` property is editable.
   * @member {module:model/PropertyMetadata} anchorCaseSensitiveMetadata
   */
  exports.prototype['anchorCaseSensitiveMetadata'] = undefined;
  /**
   * Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
   * @member {String} anchorHorizontalAlignment
   */
  exports.prototype['anchorHorizontalAlignment'] = undefined;
  /**
   * Metadata that indicates whether the `anchorHorizontalAlignment` property is editable.
   * @member {module:model/PropertyMetadata} anchorHorizontalAlignmentMetadata
   */
  exports.prototype['anchorHorizontalAlignmentMetadata'] = undefined;
  /**
   * When set to **true**, this tab is ignored if anchorString is not found in the document.
   * @member {String} anchorIgnoreIfNotPresent
   */
  exports.prototype['anchorIgnoreIfNotPresent'] = undefined;
  /**
   * Metadata that indicates whether the `anchorIgnoreIfNotPresent` property is editable.
   * @member {module:model/PropertyMetadata} anchorIgnoreIfNotPresentMetadata
   */
  exports.prototype['anchorIgnoreIfNotPresentMetadata'] = undefined;
  /**
   * When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
   * @member {String} anchorMatchWholeWord
   */
  exports.prototype['anchorMatchWholeWord'] = undefined;
  /**
   * Metadata that indicates whether the `anchorMatchWholeWord` property is editable.
   * @member {module:model/PropertyMetadata} anchorMatchWholeWordMetadata
   */
  exports.prototype['anchorMatchWholeWordMetadata'] = undefined;
  /**
   * Anchor text information for a radio button.
   * @member {String} anchorString
   */
  exports.prototype['anchorString'] = undefined;
  /**
   * Metadata that indicates whether the `anchorString` property is editable.
   * @member {module:model/PropertyMetadata} anchorStringMetadata
   */
  exports.prototype['anchorStringMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorTabProcessorVersion
   */
  exports.prototype['anchorTabProcessorVersion'] = undefined;
  /**
   * Reserved for DocuSign.
   * @member {module:model/PropertyMetadata} anchorTabProcessorVersionMetadata
   */
  exports.prototype['anchorTabProcessorVersionMetadata'] = undefined;
  /**
   * Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
   * @member {String} anchorUnits
   */
  exports.prototype['anchorUnits'] = undefined;
  /**
   * Metadata that indicates whether the `anchorUnits` property is editable.
   * @member {module:model/PropertyMetadata} anchorUnitsMetadata
   */
  exports.prototype['anchorUnitsMetadata'] = undefined;
  /**
   * Specifies the X axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorXOffset
   */
  exports.prototype['anchorXOffset'] = undefined;
  /**
   * Metadata that indicates whether the `anchorXOffset` property is editable.
   * @member {module:model/PropertyMetadata} anchorXOffsetMetadata
   */
  exports.prototype['anchorXOffsetMetadata'] = undefined;
  /**
   * Specifies the Y axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorYOffset
   */
  exports.prototype['anchorYOffset'] = undefined;
  /**
   * Metadata that indicates whether the `anchorYOffset` property is editable.
   * @member {module:model/PropertyMetadata} anchorYOffsetMetadata
   */
  exports.prototype['anchorYOffsetMetadata'] = undefined;
  /**
   * 
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} captionMetadata
   */
  exports.prototype['captionMetadata'] = undefined;
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
   * The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
   * @member {String} customTabId
   */
  exports.prototype['customTabId'] = undefined;
  /**
   * Metadata that indicates whether the `customTabId` property is editable.
   * @member {module:model/PropertyMetadata} customTabIdMetadata
   */
  exports.prototype['customTabIdMetadata'] = undefined;
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
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} formOrder
   */
  exports.prototype['formOrder'] = undefined;
  /**
   * Metadata that indicates whether the `formOrder` property is editable.
   * @member {module:model/PropertyMetadata} formOrderMetadata
   */
  exports.prototype['formOrderMetadata'] = undefined;
  /**
   * 
   * @member {String} formPageLabel
   */
  exports.prototype['formPageLabel'] = undefined;
  /**
   * Metadata that indicates whether the `formPageLabel` property is editable.
   * @member {module:model/PropertyMetadata} formPageLabelMetadata
   */
  exports.prototype['formPageLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} formPageNumber
   */
  exports.prototype['formPageNumber'] = undefined;
  /**
   * Metadata that indicates whether the `fromPageNumber` property is editable.
   * @member {module:model/PropertyMetadata} formPageNumberMetadata
   */
  exports.prototype['formPageNumberMetadata'] = undefined;
  /**
   * 
   * @member {String} groupLabel
   */
  exports.prototype['groupLabel'] = undefined;
  /**
   * Metadata that indicates whether the `groupLabel` property is editable.
   * @member {module:model/PropertyMetadata} groupLabelMetadata
   */
  exports.prototype['groupLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} groupRule
   */
  exports.prototype['groupRule'] = undefined;
  /**
   * Metadata that indicates whether the `groupRule` property is editable.
   * @member {module:model/PropertyMetadata} groupRuleMetadata
   */
  exports.prototype['groupRuleMetadata'] = undefined;
  /**
   * Height of the tab in pixels.
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Metadata that indicates whether the `height` property is editable.
   * @member {module:model/PropertyMetadata} heightMetadata
   */
  exports.prototype['heightMetadata'] = undefined;
  /**
   * 
   * @member {String} maximumAllowed
   */
  exports.prototype['maximumAllowed'] = undefined;
  /**
   * Metadata that indicates whether the `maximumAllowed` property is editable.
   * @member {module:model/PropertyMetadata} maximumAllowedMetadata
   */
  exports.prototype['maximumAllowedMetadata'] = undefined;
  /**
   * Contains the information necessary to map the tab to a field in SalesForce.
   * @member {module:model/MergeField} mergeField
   */
  exports.prototype['mergeField'] = undefined;
  /**
   * 
   * @member {String} mergeFieldXml
   */
  exports.prototype['mergeFieldXml'] = undefined;
  /**
   * 
   * @member {String} minimumRequired
   */
  exports.prototype['minimumRequired'] = undefined;
  /**
   * Metadata that indicates whether the `minimumRequired` property is editable.
   * @member {module:model/PropertyMetadata} minimumRequiredMetadata
   */
  exports.prototype['minimumRequiredMetadata'] = undefined;
  /**
   * Specifies the page number on which the tab is located.
   * @member {String} pageNumber
   */
  exports.prototype['pageNumber'] = undefined;
  /**
   * Metadata that indicates whether the `pageNumber` property is editable.
   * @member {module:model/PropertyMetadata} pageNumberMetadata
   */
  exports.prototype['pageNumberMetadata'] = undefined;
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
   * Reserved for DocuSign.
   * @member {module:model/SmartContractInformation} smartContractInformation
   */
  exports.prototype['smartContractInformation'] = undefined;
  /**
   * 
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Metadata that indicates whether the `status` property is editable.
   * @member {module:model/PropertyMetadata} statusMetadata
   */
  exports.prototype['statusMetadata'] = undefined;
  /**
   * 
   * @member {Array.<String>} tabGroupLabels
   */
  exports.prototype['tabGroupLabels'] = undefined;
  /**
   * Metadata that indicates whether the `tabGroupLabels` property is editable.
   * @member {module:model/PropertyMetadata} tabGroupLabelsMetadata
   */
  exports.prototype['tabGroupLabelsMetadata'] = undefined;
  /**
   * The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].     
   * @member {String} tabId
   */
  exports.prototype['tabId'] = undefined;
  /**
   * Metadata that indicates whether the `tabId` property is editable.
   * @member {module:model/PropertyMetadata} tabIdMetadata
   */
  exports.prototype['tabIdMetadata'] = undefined;
  /**
   * 
   * @member {String} tabOrder
   */
  exports.prototype['tabOrder'] = undefined;
  /**
   * Metadata that indicates whether the `tabOrder` property is editable.
   * @member {module:model/PropertyMetadata} tabOrderMetadata
   */
  exports.prototype['tabOrderMetadata'] = undefined;
  /**
   * 
   * @member {String} tabScope
   */
  exports.prototype['tabScope'] = undefined;
  /**
   * Metadata that indicates whether the `tabScope` property is editable.
   * @member {module:model/PropertyMetadata} tabScopeMetadata
   */
  exports.prototype['tabScopeMetadata'] = undefined;
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
   * Metadata that indicates whether the `toolTip` property is editable.
   * @member {module:model/PropertyMetadata} toolTipMetadata
   */
  exports.prototype['toolTipMetadata'] = undefined;
  /**
   * The message displayed if the custom tab fails input validation (either custom of embedded).
   * @member {String} validationMessage
   */
  exports.prototype['validationMessage'] = undefined;
  /**
   * Metadata that indicates whether the `validationMessage` property is editable.
   * @member {module:model/PropertyMetadata} validationMessageMetadata
   */
  exports.prototype['validationMessageMetadata'] = undefined;
  /**
   * Width of the tab in pixels.
   * @member {String} width
   */
  exports.prototype['width'] = undefined;
  /**
   * Metadata that indicates whether the `width` property is editable.
   * @member {module:model/PropertyMetadata} widthMetadata
   */
  exports.prototype['widthMetadata'] = undefined;
  /**
   * This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {String} xPosition
   */
  exports.prototype['xPosition'] = undefined;
  /**
   * Metadata that indicates whether the `xPosition` property is editable.
   * @member {module:model/PropertyMetadata} xPositionMetadata
   */
  exports.prototype['xPositionMetadata'] = undefined;
  /**
   * This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {String} yPosition
   */
  exports.prototype['yPosition'] = undefined;
  /**
   * Metadata that indicates whether the `yPosition` property is editable.
   * @member {module:model/PropertyMetadata} yPositionMetadata
   */
  exports.prototype['yPositionMetadata'] = undefined;



  return exports;
}));


