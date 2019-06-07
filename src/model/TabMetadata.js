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
    define(['ApiClient', 'model/MergeField', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MergeField'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TabMetadata = factory(root.Docusign.ApiClient, root.Docusign.MergeField, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, MergeField, PropertyMetadata) {
  'use strict';


  /**
   * The TabMetadata model module.
   * @module model/TabMetadata
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TabMetadata</code>.
   * @alias module:model/TabMetadata
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TabMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TabMetadata} obj Optional instance to populate.
   * @return {module:model/TabMetadata} The populated <code>TabMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('anchor')) {
        obj['anchor'] = ApiClient.convertToType(data['anchor'], 'String');
      }
      if (data.hasOwnProperty('anchorCaseSensitive')) {
        obj['anchorCaseSensitive'] = ApiClient.convertToType(data['anchorCaseSensitive'], 'String');
      }
      if (data.hasOwnProperty('anchorHorizontalAlignment')) {
        obj['anchorHorizontalAlignment'] = ApiClient.convertToType(data['anchorHorizontalAlignment'], 'String');
      }
      if (data.hasOwnProperty('anchorIgnoreIfNotPresent')) {
        obj['anchorIgnoreIfNotPresent'] = ApiClient.convertToType(data['anchorIgnoreIfNotPresent'], 'String');
      }
      if (data.hasOwnProperty('anchorMatchWholeWord')) {
        obj['anchorMatchWholeWord'] = ApiClient.convertToType(data['anchorMatchWholeWord'], 'String');
      }
      if (data.hasOwnProperty('anchorUnits')) {
        obj['anchorUnits'] = ApiClient.convertToType(data['anchorUnits'], 'String');
      }
      if (data.hasOwnProperty('anchorXOffset')) {
        obj['anchorXOffset'] = ApiClient.convertToType(data['anchorXOffset'], 'String');
      }
      if (data.hasOwnProperty('anchorYOffset')) {
        obj['anchorYOffset'] = ApiClient.convertToType(data['anchorYOffset'], 'String');
      }
      if (data.hasOwnProperty('bold')) {
        obj['bold'] = ApiClient.convertToType(data['bold'], 'String');
      }
      if (data.hasOwnProperty('concealValueOnDocument')) {
        obj['concealValueOnDocument'] = ApiClient.convertToType(data['concealValueOnDocument'], 'String');
      }
      if (data.hasOwnProperty('createdByDisplayName')) {
        obj['createdByDisplayName'] = ApiClient.convertToType(data['createdByDisplayName'], 'String');
      }
      if (data.hasOwnProperty('createdByUserId')) {
        obj['createdByUserId'] = ApiClient.convertToType(data['createdByUserId'], 'String');
      }
      if (data.hasOwnProperty('customTabId')) {
        obj['customTabId'] = ApiClient.convertToType(data['customTabId'], 'String');
      }
      if (data.hasOwnProperty('disableAutoSize')) {
        obj['disableAutoSize'] = ApiClient.convertToType(data['disableAutoSize'], 'String');
      }
      if (data.hasOwnProperty('editable')) {
        obj['editable'] = ApiClient.convertToType(data['editable'], 'String');
      }
      if (data.hasOwnProperty('font')) {
        obj['font'] = ApiClient.convertToType(data['font'], 'String');
      }
      if (data.hasOwnProperty('fontColor')) {
        obj['fontColor'] = ApiClient.convertToType(data['fontColor'], 'String');
      }
      if (data.hasOwnProperty('fontSize')) {
        obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('includedInEmail')) {
        obj['includedInEmail'] = ApiClient.convertToType(data['includedInEmail'], 'String');
      }
      if (data.hasOwnProperty('initialValue')) {
        obj['initialValue'] = ApiClient.convertToType(data['initialValue'], 'String');
      }
      if (data.hasOwnProperty('italic')) {
        obj['italic'] = ApiClient.convertToType(data['italic'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], ['String']);
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedByDisplayName')) {
        obj['lastModifiedByDisplayName'] = ApiClient.convertToType(data['lastModifiedByDisplayName'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedByUserId')) {
        obj['lastModifiedByUserId'] = ApiClient.convertToType(data['lastModifiedByUserId'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'String');
      }
      if (data.hasOwnProperty('maximumLength')) {
        obj['maximumLength'] = ApiClient.convertToType(data['maximumLength'], 'String');
      }
      if (data.hasOwnProperty('mergeField')) {
        obj['mergeField'] = MergeField.constructFromObject(data['mergeField']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('paymentItemCode')) {
        obj['paymentItemCode'] = ApiClient.convertToType(data['paymentItemCode'], 'String');
      }
      if (data.hasOwnProperty('paymentItemDescription')) {
        obj['paymentItemDescription'] = ApiClient.convertToType(data['paymentItemDescription'], 'String');
      }
      if (data.hasOwnProperty('paymentItemName')) {
        obj['paymentItemName'] = ApiClient.convertToType(data['paymentItemName'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'String');
      }
      if (data.hasOwnProperty('scaleValue')) {
        obj['scaleValue'] = ApiClient.convertToType(data['scaleValue'], 'String');
      }
      if (data.hasOwnProperty('selected')) {
        obj['selected'] = ApiClient.convertToType(data['selected'], 'String');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('stampType')) {
        obj['stampType'] = ApiClient.convertToType(data['stampType'], 'String');
      }
      if (data.hasOwnProperty('stampTypeMetadata')) {
        obj['stampTypeMetadata'] = PropertyMetadata.constructFromObject(data['stampTypeMetadata']);
      }
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('underline')) {
        obj['underline'] = ApiClient.convertToType(data['underline'], 'String');
      }
      if (data.hasOwnProperty('validationMessage')) {
        obj['validationMessage'] = ApiClient.convertToType(data['validationMessage'], 'String');
      }
      if (data.hasOwnProperty('validationPattern')) {
        obj['validationPattern'] = ApiClient.convertToType(data['validationPattern'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'String');
      }
    }
    return obj;
  }

  /**
   * An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
   * @member {String} anchor
   */
  exports.prototype['anchor'] = undefined;
  /**
   * When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
   * @member {String} anchorCaseSensitive
   */
  exports.prototype['anchorCaseSensitive'] = undefined;
  /**
   * Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
   * @member {String} anchorHorizontalAlignment
   */
  exports.prototype['anchorHorizontalAlignment'] = undefined;
  /**
   * When set to **true**, this tab is ignored if anchorString is not found in the document.
   * @member {String} anchorIgnoreIfNotPresent
   */
  exports.prototype['anchorIgnoreIfNotPresent'] = undefined;
  /**
   * When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
   * @member {String} anchorMatchWholeWord
   */
  exports.prototype['anchorMatchWholeWord'] = undefined;
  /**
   * Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
   * @member {String} anchorUnits
   */
  exports.prototype['anchorUnits'] = undefined;
  /**
   * Specifies the X axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorXOffset
   */
  exports.prototype['anchorXOffset'] = undefined;
  /**
   * Specifies the Y axis location of the tab, in anchorUnits, relative to the anchorString.
   * @member {String} anchorYOffset
   */
  exports.prototype['anchorYOffset'] = undefined;
  /**
   * When set to **true**, the information in the tab is bold.
   * @member {String} bold
   */
  exports.prototype['bold'] = undefined;
  /**
   * When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.  When an envelope is completed the information is available to the sender through the Form Data link in the DocuSign Console.  This setting applies only to text boxes and does not affect list boxes, radio buttons, or check boxes.
   * @member {String} concealValueOnDocument
   */
  exports.prototype['concealValueOnDocument'] = undefined;
  /**
   * The user name of the DocuSign user who created this object.
   * @member {String} createdByDisplayName
   */
  exports.prototype['createdByDisplayName'] = undefined;
  /**
   * The userId of the DocuSign user who created this object.
   * @member {String} createdByUserId
   */
  exports.prototype['createdByUserId'] = undefined;
  /**
   * The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
   * @member {String} customTabId
   */
  exports.prototype['customTabId'] = undefined;
  /**
   * When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
   * @member {String} disableAutoSize
   */
  exports.prototype['disableAutoSize'] = undefined;
  /**
   * When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
   * @member {String} editable
   */
  exports.prototype['editable'] = undefined;
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
   * The font size used for the information in the tab.  Possible values are: Size7, Size8, Size9, Size10, Size11, Size12, Size14, Size16, Size18, Size20, Size22, Size24, Size26, Size28, Size36, Size48, or Size72.
   * @member {String} fontSize
   */
  exports.prototype['fontSize'] = undefined;
  /**
   * Height of the tab in pixels.
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
   * @member {String} includedInEmail
   */
  exports.prototype['includedInEmail'] = undefined;
  /**
   * The original value of the tab.
   * @member {String} initialValue
   */
  exports.prototype['initialValue'] = undefined;
  /**
   * When set to **true**, the information in the tab is italic.
   * @member {String} italic
   */
  exports.prototype['italic'] = undefined;
  /**
   * If the tab is a list, this represents the values that are possible for the tab.
   * @member {Array.<String>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * The UTC DateTime this object was last modified. This is in ISO8601 format.
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * The User Name of the DocuSign user who last modified this object.
   * @member {String} lastModifiedByDisplayName
   */
  exports.prototype['lastModifiedByDisplayName'] = undefined;
  /**
   * The userId of the DocuSign user who last modified this object.
   * @member {String} lastModifiedByUserId
   */
  exports.prototype['lastModifiedByUserId'] = undefined;
  /**
   * When set to **true**, the signer cannot change the data of the custom tab.
   * @member {String} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The maximum number of entry characters supported by the custom tab.
   * @member {String} maximumLength
   */
  exports.prototype['maximumLength'] = undefined;
  /**
   * @member {module:model/MergeField} mergeField
   */
  exports.prototype['mergeField'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} paymentItemCode
   */
  exports.prototype['paymentItemCode'] = undefined;
  /**
   * 
   * @member {String} paymentItemDescription
   */
  exports.prototype['paymentItemDescription'] = undefined;
  /**
   * 
   * @member {String} paymentItemName
   */
  exports.prototype['paymentItemName'] = undefined;
  /**
   * When set to **true**, the signer is required to fill out this tab
   * @member {String} required
   */
  exports.prototype['required'] = undefined;
  /**
   * 
   * @member {String} scaleValue
   */
  exports.prototype['scaleValue'] = undefined;
  /**
   * 
   * @member {String} selected
   */
  exports.prototype['selected'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * 
   * @member {String} stampType
   */
  exports.prototype['stampType'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} stampTypeMetadata
   */
  exports.prototype['stampTypeMetadata'] = undefined;
  /**
   * The label string associated with the tab.
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;
  /**
   * The type of this tab. Values are: Approve, CheckBox, Company, Date, DateSigned, Decline, Email, EmailAddress, EnvelopeId, FirstName, Formula, FullName, InitialHere, InitialHereOptional, LastName, List, Note, Number, Radio, SignerAttachment, SignHere, SignHereOptional, Ssn, Text, Title, Zip5, or Zip5Dash4.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * When set to **true**, the information in the tab is underlined.
   * @member {String} underline
   */
  exports.prototype['underline'] = undefined;
  /**
   * The message displayed if the custom tab fails input validation (either custom of embedded).
   * @member {String} validationMessage
   */
  exports.prototype['validationMessage'] = undefined;
  /**
   * A regular expression used to validate input for the tab.
   * @member {String} validationPattern
   */
  exports.prototype['validationPattern'] = undefined;
  /**
   * Width of the tab in pixels.
   * @member {String} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


