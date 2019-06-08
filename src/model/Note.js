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
    define(['ApiClient', 'model/ErrorDetails', 'model/LocalePolicyTab', 'model/MergeField', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./LocalePolicyTab'), require('./MergeField'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Note = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.LocalePolicyTab, root.Docusign.MergeField, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, ErrorDetails, LocalePolicyTab, MergeField, PropertyMetadata) {
  'use strict';


  /**
   * The Note model module.
   * @module model/Note
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Note</code>.
   * @alias module:model/Note
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Note} obj Optional instance to populate.
   * @return {module:model/Note} The populated <code>Note</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('bold')) {
        obj['bold'] = ApiClient.convertToType(data['bold'], 'String');
      }
      if (data.hasOwnProperty('boldMetadata')) {
        obj['boldMetadata'] = PropertyMetadata.constructFromObject(data['boldMetadata']);
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
      if (data.hasOwnProperty('font')) {
        obj['font'] = ApiClient.convertToType(data['font'], 'String');
      }
      if (data.hasOwnProperty('fontColor')) {
        obj['fontColor'] = ApiClient.convertToType(data['fontColor'], 'String');
      }
      if (data.hasOwnProperty('fontColorMetadata')) {
        obj['fontColorMetadata'] = PropertyMetadata.constructFromObject(data['fontColorMetadata']);
      }
      if (data.hasOwnProperty('fontMetadata')) {
        obj['fontMetadata'] = PropertyMetadata.constructFromObject(data['fontMetadata']);
      }
      if (data.hasOwnProperty('fontSize')) {
        obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'String');
      }
      if (data.hasOwnProperty('fontSizeMetadata')) {
        obj['fontSizeMetadata'] = PropertyMetadata.constructFromObject(data['fontSizeMetadata']);
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
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('heightMetadata')) {
        obj['heightMetadata'] = PropertyMetadata.constructFromObject(data['heightMetadata']);
      }
      if (data.hasOwnProperty('italic')) {
        obj['italic'] = ApiClient.convertToType(data['italic'], 'String');
      }
      if (data.hasOwnProperty('italicMetadata')) {
        obj['italicMetadata'] = PropertyMetadata.constructFromObject(data['italicMetadata']);
      }
      if (data.hasOwnProperty('localePolicy')) {
        obj['localePolicy'] = LocalePolicyTab.constructFromObject(data['localePolicy']);
      }
      if (data.hasOwnProperty('mergeField')) {
        obj['mergeField'] = MergeField.constructFromObject(data['mergeField']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameMetadata')) {
        obj['nameMetadata'] = PropertyMetadata.constructFromObject(data['nameMetadata']);
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
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('sharedMetadata')) {
        obj['sharedMetadata'] = PropertyMetadata.constructFromObject(data['sharedMetadata']);
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
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
      if (data.hasOwnProperty('tabLabelMetadata')) {
        obj['tabLabelMetadata'] = PropertyMetadata.constructFromObject(data['tabLabelMetadata']);
      }
      if (data.hasOwnProperty('tabOrder')) {
        obj['tabOrder'] = ApiClient.convertToType(data['tabOrder'], 'String');
      }
      if (data.hasOwnProperty('tabOrderMetadata')) {
        obj['tabOrderMetadata'] = PropertyMetadata.constructFromObject(data['tabOrderMetadata']);
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
      if (data.hasOwnProperty('underline')) {
        obj['underline'] = ApiClient.convertToType(data['underline'], 'String');
      }
      if (data.hasOwnProperty('underlineMetadata')) {
        obj['underlineMetadata'] = PropertyMetadata.constructFromObject(data['underlineMetadata']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('valueMetadata')) {
        obj['valueMetadata'] = PropertyMetadata.constructFromObject(data['valueMetadata']);
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
   * When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
   * @member {String} anchorCaseSensitive
   */
  exports.prototype['anchorCaseSensitive'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorCaseSensitiveMetadata
   */
  exports.prototype['anchorCaseSensitiveMetadata'] = undefined;
  /**
   * Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
   * @member {String} anchorHorizontalAlignment
   */
  exports.prototype['anchorHorizontalAlignment'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorHorizontalAlignmentMetadata
   */
  exports.prototype['anchorHorizontalAlignmentMetadata'] = undefined;
  /**
   * When set to **true**, this tab is ignored if anchorString is not found in the document.
   * @member {String} anchorIgnoreIfNotPresent
   */
  exports.prototype['anchorIgnoreIfNotPresent'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorIgnoreIfNotPresentMetadata
   */
  exports.prototype['anchorIgnoreIfNotPresentMetadata'] = undefined;
  /**
   * When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
   * @member {String} anchorMatchWholeWord
   */
  exports.prototype['anchorMatchWholeWord'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorMatchWholeWordMetadata
   */
  exports.prototype['anchorMatchWholeWordMetadata'] = undefined;
  /**
   * Anchor text information for a radio button.
   * @member {String} anchorString
   */
  exports.prototype['anchorString'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorStringMetadata
   */
  exports.prototype['anchorStringMetadata'] = undefined;
  /**
   * 
   * @member {String} anchorTabProcessorVersion
   */
  exports.prototype['anchorTabProcessorVersion'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorTabProcessorVersionMetadata
   */
  exports.prototype['anchorTabProcessorVersionMetadata'] = undefined;
  /**
   * Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
   * @member {String} anchorUnits
   */
  exports.prototype['anchorUnits'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorUnitsMetadata
   */
  exports.prototype['anchorUnitsMetadata'] = undefined;
  /**
   * Specifies the X axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorXOffset
   */
  exports.prototype['anchorXOffset'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorXOffsetMetadata
   */
  exports.prototype['anchorXOffsetMetadata'] = undefined;
  /**
   * Specifies the Y axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorYOffset
   */
  exports.prototype['anchorYOffset'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} anchorYOffsetMetadata
   */
  exports.prototype['anchorYOffsetMetadata'] = undefined;
  /**
   * When set to **true**, the information in the tab is bold.
   * @member {String} bold
   */
  exports.prototype['bold'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} boldMetadata
   */
  exports.prototype['boldMetadata'] = undefined;
  /**
   * For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
   * @member {String} conditionalParentLabel
   */
  exports.prototype['conditionalParentLabel'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} conditionalParentLabelMetadata
   */
  exports.prototype['conditionalParentLabelMetadata'] = undefined;
  /**
   * For conditional fields, this is the value of the parent tab that controls the tab's visibility.  If the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active. 
   * @member {String} conditionalParentValue
   */
  exports.prototype['conditionalParentValue'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} conditionalParentValueMetadata
   */
  exports.prototype['conditionalParentValueMetadata'] = undefined;
  /**
   * The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
   * @member {String} customTabId
   */
  exports.prototype['customTabId'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} customTabIdMetadata
   */
  exports.prototype['customTabIdMetadata'] = undefined;
  /**
   * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} documentIdMetadata
   */
  exports.prototype['documentIdMetadata'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * The font to be used for the tab value. Supported Fonts: Arial, Arial, ArialNarrow, Calibri, CourierNew, Garamond, Georgia, Helvetica,   LucidaConsole, Tahoma, TimesNewRoman, Trebuchet, Verdana, MSGothic, MSMincho, Default.
   * @member {String} font
   */
  exports.prototype['font'] = undefined;
  /**
   * The font color used for the information in the tab.  Possible values are: Black, BrightBlue, BrightRed, DarkGreen, DarkRed, Gold, Green, NavyBlue, Purple, or White.
   * @member {String} fontColor
   */
  exports.prototype['fontColor'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} fontColorMetadata
   */
  exports.prototype['fontColorMetadata'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} fontMetadata
   */
  exports.prototype['fontMetadata'] = undefined;
  /**
   * The font size used for the information in the tab.  Possible values are: Size7, Size8, Size9, Size10, Size11, Size12, Size14, Size16, Size18, Size20, Size22, Size24, Size26, Size28, Size36, Size48, or Size72.
   * @member {String} fontSize
   */
  exports.prototype['fontSize'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} fontSizeMetadata
   */
  exports.prototype['fontSizeMetadata'] = undefined;
  /**
   * 
   * @member {String} formOrder
   */
  exports.prototype['formOrder'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} formOrderMetadata
   */
  exports.prototype['formOrderMetadata'] = undefined;
  /**
   * 
   * @member {String} formPageLabel
   */
  exports.prototype['formPageLabel'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} formPageLabelMetadata
   */
  exports.prototype['formPageLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} formPageNumber
   */
  exports.prototype['formPageNumber'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} formPageNumberMetadata
   */
  exports.prototype['formPageNumberMetadata'] = undefined;
  /**
   * Height of the tab in pixels.
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} heightMetadata
   */
  exports.prototype['heightMetadata'] = undefined;
  /**
   * When set to **true**, the information in the tab is italic.
   * @member {String} italic
   */
  exports.prototype['italic'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} italicMetadata
   */
  exports.prototype['italicMetadata'] = undefined;
  /**
   * @member {module:model/LocalePolicyTab} localePolicy
   */
  exports.prototype['localePolicy'] = undefined;
  /**
   * @member {module:model/MergeField} mergeField
   */
  exports.prototype['mergeField'] = undefined;
  /**
   * Specifies the tool tip text for the tab.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} nameMetadata
   */
  exports.prototype['nameMetadata'] = undefined;
  /**
   * Specifies the page number on which the tab is located.
   * @member {String} pageNumber
   */
  exports.prototype['pageNumber'] = undefined;
  /**
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
   * @member {module:model/PropertyMetadata} recipientIdGuidMetadata
   */
  exports.prototype['recipientIdGuidMetadata'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} recipientIdMetadata
   */
  exports.prototype['recipientIdMetadata'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} sharedMetadata
   */
  exports.prototype['sharedMetadata'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} statusMetadata
   */
  exports.prototype['statusMetadata'] = undefined;
  /**
   * 
   * @member {Array.<String>} tabGroupLabels
   */
  exports.prototype['tabGroupLabels'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} tabGroupLabelsMetadata
   */
  exports.prototype['tabGroupLabelsMetadata'] = undefined;
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
   * The label string associated with the tab.
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} tabLabelMetadata
   */
  exports.prototype['tabLabelMetadata'] = undefined;
  /**
   * 
   * @member {String} tabOrder
   */
  exports.prototype['tabOrder'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} tabOrderMetadata
   */
  exports.prototype['tabOrderMetadata'] = undefined;
  /**
   * 
   * @member {String} tabType
   */
  exports.prototype['tabType'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} tabTypeMetadata
   */
  exports.prototype['tabTypeMetadata'] = undefined;
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
   * 
   * @member {String} tooltip
   */
  exports.prototype['tooltip'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} toolTipMetadata
   */
  exports.prototype['toolTipMetadata'] = undefined;
  /**
   * When set to **true**, the information in the tab is underlined.
   * @member {String} underline
   */
  exports.prototype['underline'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} underlineMetadata
   */
  exports.prototype['underlineMetadata'] = undefined;
  /**
   * Specifies the value of the tab. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} valueMetadata
   */
  exports.prototype['valueMetadata'] = undefined;
  /**
   * Width of the tab in pixels.
   * @member {String} width
   */
  exports.prototype['width'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} widthMetadata
   */
  exports.prototype['widthMetadata'] = undefined;
  /**
   * This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {String} xPosition
   */
  exports.prototype['xPosition'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} xPositionMetadata
   */
  exports.prototype['xPositionMetadata'] = undefined;
  /**
   * This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
   * @member {String} yPosition
   */
  exports.prototype['yPosition'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} yPositionMetadata
   */
  exports.prototype['yPositionMetadata'] = undefined;



  return exports;
}));


