(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './MergeField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./MergeField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.MergeField);
  }
}(this, function(module, MergeField) {
  'use strict';

  
  

  
  var TabMetadata = function TabMetadata() { 
    var self = this;
    
    /**
     * The font to be used for the tab value. Supported Fonts: Arial, Arial, ArialNarrow, Calibri, CourierNew, Garamond, Georgia, Helvetica,   LucidaConsole, Tahoma, TimesNewRoman, Trebuchet, Verdana, MSGothic, MSMincho, Default.
     * datatype: String
     **/
    self.font = null;
    
    /**
     * When set to **true**, the information in the tab is bold.
     * datatype: String
     **/
    self.bold = null;
    
    /**
     * When set to **true**, the information in the tab is italic.
     * datatype: String
     **/
    self.italic = null;
    
    /**
     * When set to **true**, the information in the tab is underlined.
     * datatype: String
     **/
    self.underline = null;
    
    /**
     * The font color used for the information in the tab.\n\nPossible values are: Black, BrightBlue, BrightRed, DarkGreen, DarkRed, Gold, Green, NavyBlue, Purple, or White.
     * datatype: String
     **/
    self.fontColor = null;
    
    /**
     * The font size used for the information in the tab.\n\nPossible values are: Size7, Size8, Size9, Size10, Size11, Size12, Size14, Size16, Size18, Size20, Size22, Size24, Size26, Size28, Size36, Size48, or Size72.
     * datatype: String
     **/
    self.fontSize = null;
    
    /**
     * Height of the tab in pixels.
     * datatype: String
     **/
    self.height = null;
    
    /**
     * Width of the tab in pixels.
     * datatype: String
     **/
    self.width = null;
    
    /**
     * The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * datatype: String
     **/
    self.customTabId = null;
    
    /**
     * The original value of the tab.
     * datatype: String
     **/
    self.initialValue = null;
    
    /**
     * When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
     * datatype: String
     **/
    self.includedInEmail = null;
    
    /**
     * When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
     * datatype: String
     **/
    self.disableAutoSize = null;
    
    /**
     * When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.\n\nWhen an envelope is completed the information is available to the sender through the Form Data link in the DocuSign Console.\n\nThis setting applies only to text boxes and does not affect list boxes, radio buttons, or check boxes.
     * datatype: String
     **/
    self.concealValueOnDocument = null;
    
    /**
     * When set to **true**, the signer cannot change the data of the custom tab.
     * datatype: String
     **/
    self.locked = null;
    
    /**
     * When set to **true**, the signer is required to fill out this tab
     * datatype: String
     **/
    self.required = null;
    
    /**
     * When set to **true**, this custom tab is shared.
     * datatype: String
     **/
    self.shared = null;
    
    /**
     * If the tab is a list, this represents the values that are possible for the tab.
     * datatype: Array
     **/
    self.items = [];
    
    /**
     * The label string associated with the tab.
     * datatype: String
     **/
    self.tabLabel = null;
    
    /**
     * The maximum number of entry characters supported by the custom tab.
     * datatype: String
     **/
    self.maximumLength = null;
    
    /**
     * An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
     * datatype: String
     **/
    self.anchor = null;
    
    /**
     * Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * datatype: String
     **/
    self.anchorXOffset = null;
    
    /**
     * Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * datatype: String
     **/
    self.anchorYOffset = null;
    
    /**
     * Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * datatype: String
     **/
    self.anchorUnits = null;
    
    /**
     * When set to **true**, this tab is ignored if anchorString is not found in the document.
     * datatype: String
     **/
    self.anchorIgnoreIfNotPresent = null;
    
    /**
     * When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * datatype: String
     **/
    self.anchorMatchWholeWord = null;
    
    /**
     * When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * datatype: String
     **/
    self.anchorCaseSensitive = null;
    
    /**
     * Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * datatype: String
     **/
    self.anchorHorizontalAlignment = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * The type of this tab. Values are: Approve, CheckBox, Company, Date, DateSigned,	Decline, Email,	EmailAddress, EnvelopeId, FirstName, Formula, FullName,	InitialHere, InitialHereOptional, LastName, List, Note, Number,	Radio, SignerAttachment, SignHere, SignHereOptional, Ssn, Text, Title, Zip5, or Zip5Dash4.
     * datatype: String
     **/
    self.type = null;
    
    /**
     * The message displayed if the custom tab fails input validation (either custom of embedded).
     * datatype: String
     **/
    self.validationMessage = null;
    
    /**
     * A regular expressionn used to validate input for the tab.
     * datatype: String
     **/
    self.validationPattern = null;
    
    /**
     * The userId of the DocuSign user who last modified this object.
     * datatype: String
     **/
    self.lastModifiedByUserId = null;
    
    /**
     * The User Name of the DocuSign user who last modified this object.
     * datatype: String
     **/
    self.lastModifiedByDisplayName = null;
    
    /**
     * The UTC DateTime this object was last modified. This is in ISO8601 format.
     * datatype: String
     **/
    self.lastModified = null;
    
    /**
     * The userId of the DocuSign user who created this object.
     * datatype: String
     **/
    self.createdByUserId = null;
    
    /**
     * The user name of the DocuSign user who created this object.
     * datatype: String
     **/
    self.createdByDisplayName = null;
    
    /**
     * When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
     * datatype: String
     **/
    self.editable = null;
    
    /**
     * datatype: MergeField
     **/
    self.mergeField = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.font) {
        self.font = data.font;
      }
      
      if (data.bold) {
        self.bold = data.bold;
      }
      
      if (data.italic) {
        self.italic = data.italic;
      }
      
      if (data.underline) {
        self.underline = data.underline;
      }
      
      if (data.fontColor) {
        self.fontColor = data.fontColor;
      }
      
      if (data.fontSize) {
        self.fontSize = data.fontSize;
      }
      
      if (data.height) {
        self.height = data.height;
      }
      
      if (data.width) {
        self.width = data.width;
      }
      
      if (data.customTabId) {
        self.customTabId = data.customTabId;
      }
      
      if (data.initialValue) {
        self.initialValue = data.initialValue;
      }
      
      if (data.includedInEmail) {
        self.includedInEmail = data.includedInEmail;
      }
      
      if (data.disableAutoSize) {
        self.disableAutoSize = data.disableAutoSize;
      }
      
      if (data.concealValueOnDocument) {
        self.concealValueOnDocument = data.concealValueOnDocument;
      }
      
      if (data.locked) {
        self.locked = data.locked;
      }
      
      if (data.required) {
        self.required = data.required;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.items) {
        self.items = data.items;
      }
      
      if (data.tabLabel) {
        self.tabLabel = data.tabLabel;
      }
      
      if (data.maximumLength) {
        self.maximumLength = data.maximumLength;
      }
      
      if (data.anchor) {
        self.anchor = data.anchor;
      }
      
      if (data.anchorXOffset) {
        self.anchorXOffset = data.anchorXOffset;
      }
      
      if (data.anchorYOffset) {
        self.anchorYOffset = data.anchorYOffset;
      }
      
      if (data.anchorUnits) {
        self.anchorUnits = data.anchorUnits;
      }
      
      if (data.anchorIgnoreIfNotPresent) {
        self.anchorIgnoreIfNotPresent = data.anchorIgnoreIfNotPresent;
      }
      
      if (data.anchorMatchWholeWord) {
        self.anchorMatchWholeWord = data.anchorMatchWholeWord;
      }
      
      if (data.anchorCaseSensitive) {
        self.anchorCaseSensitive = data.anchorCaseSensitive;
      }
      
      if (data.anchorHorizontalAlignment) {
        self.anchorHorizontalAlignment = data.anchorHorizontalAlignment;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.type) {
        self.type = data.type;
      }
      
      if (data.validationMessage) {
        self.validationMessage = data.validationMessage;
      }
      
      if (data.validationPattern) {
        self.validationPattern = data.validationPattern;
      }
      
      if (data.lastModifiedByUserId) {
        self.lastModifiedByUserId = data.lastModifiedByUserId;
      }
      
      if (data.lastModifiedByDisplayName) {
        self.lastModifiedByDisplayName = data.lastModifiedByDisplayName;
      }
      
      if (data.lastModified) {
        self.lastModified = data.lastModified;
      }
      
      if (data.createdByUserId) {
        self.createdByUserId = data.createdByUserId;
      }
      
      if (data.createdByDisplayName) {
        self.createdByDisplayName = data.createdByDisplayName;
      }
      
      if (data.editable) {
        self.editable = data.editable;
      }
      
      if (data.mergeField) {
        self.mergeField = new data.mergeField.constructor();
        self.mergeField.constructFromObject(data.mergeField);
      }
      
    }

    
    /**
     * get The font to be used for the tab value. Supported Fonts: Arial, Arial, ArialNarrow, Calibri, CourierNew, Garamond, Georgia, Helvetica,   LucidaConsole, Tahoma, TimesNewRoman, Trebuchet, Verdana, MSGothic, MSMincho, Default.
     * @return {String}
     **/
    self.getFont = function() {
      return self.font;
    }

    /**
     * set The font to be used for the tab value. Supported Fonts: Arial, Arial, ArialNarrow, Calibri, CourierNew, Garamond, Georgia, Helvetica,   LucidaConsole, Tahoma, TimesNewRoman, Trebuchet, Verdana, MSGothic, MSMincho, Default.
     * @param {String} font
     **/
    self.setFont = function (font) {
      self.font = font;
    }
    
    /**
     * get When set to **true**, the information in the tab is bold.
     * @return {String}
     **/
    self.getBold = function() {
      return self.bold;
    }

    /**
     * set When set to **true**, the information in the tab is bold.
     * @param {String} bold
     **/
    self.setBold = function (bold) {
      self.bold = bold;
    }
    
    /**
     * get When set to **true**, the information in the tab is italic.
     * @return {String}
     **/
    self.getItalic = function() {
      return self.italic;
    }

    /**
     * set When set to **true**, the information in the tab is italic.
     * @param {String} italic
     **/
    self.setItalic = function (italic) {
      self.italic = italic;
    }
    
    /**
     * get When set to **true**, the information in the tab is underlined.
     * @return {String}
     **/
    self.getUnderline = function() {
      return self.underline;
    }

    /**
     * set When set to **true**, the information in the tab is underlined.
     * @param {String} underline
     **/
    self.setUnderline = function (underline) {
      self.underline = underline;
    }
    
    /**
     * get The font color used for the information in the tab.\n\nPossible values are: Black, BrightBlue, BrightRed, DarkGreen, DarkRed, Gold, Green, NavyBlue, Purple, or White.
     * @return {String}
     **/
    self.getFontColor = function() {
      return self.fontColor;
    }

    /**
     * set The font color used for the information in the tab.\n\nPossible values are: Black, BrightBlue, BrightRed, DarkGreen, DarkRed, Gold, Green, NavyBlue, Purple, or White.
     * @param {String} fontColor
     **/
    self.setFontColor = function (fontColor) {
      self.fontColor = fontColor;
    }
    
    /**
     * get The font size used for the information in the tab.\n\nPossible values are: Size7, Size8, Size9, Size10, Size11, Size12, Size14, Size16, Size18, Size20, Size22, Size24, Size26, Size28, Size36, Size48, or Size72.
     * @return {String}
     **/
    self.getFontSize = function() {
      return self.fontSize;
    }

    /**
     * set The font size used for the information in the tab.\n\nPossible values are: Size7, Size8, Size9, Size10, Size11, Size12, Size14, Size16, Size18, Size20, Size22, Size24, Size26, Size28, Size36, Size48, or Size72.
     * @param {String} fontSize
     **/
    self.setFontSize = function (fontSize) {
      self.fontSize = fontSize;
    }
    
    /**
     * get Height of the tab in pixels.
     * @return {String}
     **/
    self.getHeight = function() {
      return self.height;
    }

    /**
     * set Height of the tab in pixels.
     * @param {String} height
     **/
    self.setHeight = function (height) {
      self.height = height;
    }
    
    /**
     * get Width of the tab in pixels.
     * @return {String}
     **/
    self.getWidth = function() {
      return self.width;
    }

    /**
     * set Width of the tab in pixels.
     * @param {String} width
     **/
    self.setWidth = function (width) {
      self.width = width;
    }
    
    /**
     * get The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * @return {String}
     **/
    self.getCustomTabId = function() {
      return self.customTabId;
    }

    /**
     * set The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * @param {String} customTabId
     **/
    self.setCustomTabId = function (customTabId) {
      self.customTabId = customTabId;
    }
    
    /**
     * get The original value of the tab.
     * @return {String}
     **/
    self.getInitialValue = function() {
      return self.initialValue;
    }

    /**
     * set The original value of the tab.
     * @param {String} initialValue
     **/
    self.setInitialValue = function (initialValue) {
      self.initialValue = initialValue;
    }
    
    /**
     * get When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
     * @return {String}
     **/
    self.getIncludedInEmail = function() {
      return self.includedInEmail;
    }

    /**
     * set When set to **true**, the tab is included in e-mails related to the envelope on which it exists. This applies to only specific tabs.
     * @param {String} includedInEmail
     **/
    self.setIncludedInEmail = function (includedInEmail) {
      self.includedInEmail = includedInEmail;
    }
    
    /**
     * get When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
     * @return {String}
     **/
    self.getDisableAutoSize = function() {
      return self.disableAutoSize;
    }

    /**
     * set When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
     * @param {String} disableAutoSize
     **/
    self.setDisableAutoSize = function (disableAutoSize) {
      self.disableAutoSize = disableAutoSize;
    }
    
    /**
     * get When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.\n\nWhen an envelope is completed the information is available to the sender through the Form Data link in the DocuSign Console.\n\nThis setting applies only to text boxes and does not affect list boxes, radio buttons, or check boxes.
     * @return {String}
     **/
    self.getConcealValueOnDocument = function() {
      return self.concealValueOnDocument;
    }

    /**
     * set When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.\n\nWhen an envelope is completed the information is available to the sender through the Form Data link in the DocuSign Console.\n\nThis setting applies only to text boxes and does not affect list boxes, radio buttons, or check boxes.
     * @param {String} concealValueOnDocument
     **/
    self.setConcealValueOnDocument = function (concealValueOnDocument) {
      self.concealValueOnDocument = concealValueOnDocument;
    }
    
    /**
     * get When set to **true**, the signer cannot change the data of the custom tab.
     * @return {String}
     **/
    self.getLocked = function() {
      return self.locked;
    }

    /**
     * set When set to **true**, the signer cannot change the data of the custom tab.
     * @param {String} locked
     **/
    self.setLocked = function (locked) {
      self.locked = locked;
    }
    
    /**
     * get When set to **true**, the signer is required to fill out this tab
     * @return {String}
     **/
    self.getRequired = function() {
      return self.required;
    }

    /**
     * set When set to **true**, the signer is required to fill out this tab
     * @param {String} required
     **/
    self.setRequired = function (required) {
      self.required = required;
    }
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
    }
    
    /**
     * get If the tab is a list, this represents the values that are possible for the tab.
     * @return {Array}
     **/
    self.getItems = function() {
      return self.items;
    }

    /**
     * set If the tab is a list, this represents the values that are possible for the tab.
     * @param {Array} items
     **/
    self.setItems = function (items) {
      self.items = items;
    }
    
    /**
     * get The label string associated with the tab.
     * @return {String}
     **/
    self.getTabLabel = function() {
      return self.tabLabel;
    }

    /**
     * set The label string associated with the tab.
     * @param {String} tabLabel
     **/
    self.setTabLabel = function (tabLabel) {
      self.tabLabel = tabLabel;
    }
    
    /**
     * get The maximum number of entry characters supported by the custom tab.
     * @return {String}
     **/
    self.getMaximumLength = function() {
      return self.maximumLength;
    }

    /**
     * set The maximum number of entry characters supported by the custom tab.
     * @param {String} maximumLength
     **/
    self.setMaximumLength = function (maximumLength) {
      self.maximumLength = maximumLength;
    }
    
    /**
     * get An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
     * @return {String}
     **/
    self.getAnchor = function() {
      return self.anchor;
    }

    /**
     * set An optional string that is used to auto-match tabs to strings located in the documents of an envelope.
     * @param {String} anchor
     **/
    self.setAnchor = function (anchor) {
      self.anchor = anchor;
    }
    
    /**
     * get Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorXOffset = function() {
      return self.anchorXOffset;
    }

    /**
     * set Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorXOffset
     **/
    self.setAnchorXOffset = function (anchorXOffset) {
      self.anchorXOffset = anchorXOffset;
    }
    
    /**
     * get Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorYOffset = function() {
      return self.anchorYOffset;
    }

    /**
     * set Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorYOffset
     **/
    self.setAnchorYOffset = function (anchorYOffset) {
      self.anchorYOffset = anchorYOffset;
    }
    
    /**
     * get Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @return {String}
     **/
    self.getAnchorUnits = function() {
      return self.anchorUnits;
    }

    /**
     * set Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @param {String} anchorUnits
     **/
    self.setAnchorUnits = function (anchorUnits) {
      self.anchorUnits = anchorUnits;
    }
    
    /**
     * get When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @return {String}
     **/
    self.getAnchorIgnoreIfNotPresent = function() {
      return self.anchorIgnoreIfNotPresent;
    }

    /**
     * set When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @param {String} anchorIgnoreIfNotPresent
     **/
    self.setAnchorIgnoreIfNotPresent = function (anchorIgnoreIfNotPresent) {
      self.anchorIgnoreIfNotPresent = anchorIgnoreIfNotPresent;
    }
    
    /**
     * get When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @return {String}
     **/
    self.getAnchorMatchWholeWord = function() {
      return self.anchorMatchWholeWord;
    }

    /**
     * set When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @param {String} anchorMatchWholeWord
     **/
    self.setAnchorMatchWholeWord = function (anchorMatchWholeWord) {
      self.anchorMatchWholeWord = anchorMatchWholeWord;
    }
    
    /**
     * get When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @return {String}
     **/
    self.getAnchorCaseSensitive = function() {
      return self.anchorCaseSensitive;
    }

    /**
     * set When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @param {String} anchorCaseSensitive
     **/
    self.setAnchorCaseSensitive = function (anchorCaseSensitive) {
      self.anchorCaseSensitive = anchorCaseSensitive;
    }
    
    /**
     * get Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @return {String}
     **/
    self.getAnchorHorizontalAlignment = function() {
      return self.anchorHorizontalAlignment;
    }

    /**
     * set Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @param {String} anchorHorizontalAlignment
     **/
    self.setAnchorHorizontalAlignment = function (anchorHorizontalAlignment) {
      self.anchorHorizontalAlignment = anchorHorizontalAlignment;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get The type of this tab. Values are: Approve, CheckBox, Company, Date, DateSigned,	Decline, Email,	EmailAddress, EnvelopeId, FirstName, Formula, FullName,	InitialHere, InitialHereOptional, LastName, List, Note, Number,	Radio, SignerAttachment, SignHere, SignHereOptional, Ssn, Text, Title, Zip5, or Zip5Dash4.
     * @return {String}
     **/
    self.getType = function() {
      return self.type;
    }

    /**
     * set The type of this tab. Values are: Approve, CheckBox, Company, Date, DateSigned,	Decline, Email,	EmailAddress, EnvelopeId, FirstName, Formula, FullName,	InitialHere, InitialHereOptional, LastName, List, Note, Number,	Radio, SignerAttachment, SignHere, SignHereOptional, Ssn, Text, Title, Zip5, or Zip5Dash4.
     * @param {String} type
     **/
    self.setType = function (type) {
      self.type = type;
    }
    
    /**
     * get The message displayed if the custom tab fails input validation (either custom of embedded).
     * @return {String}
     **/
    self.getValidationMessage = function() {
      return self.validationMessage;
    }

    /**
     * set The message displayed if the custom tab fails input validation (either custom of embedded).
     * @param {String} validationMessage
     **/
    self.setValidationMessage = function (validationMessage) {
      self.validationMessage = validationMessage;
    }
    
    /**
     * get A regular expressionn used to validate input for the tab.
     * @return {String}
     **/
    self.getValidationPattern = function() {
      return self.validationPattern;
    }

    /**
     * set A regular expressionn used to validate input for the tab.
     * @param {String} validationPattern
     **/
    self.setValidationPattern = function (validationPattern) {
      self.validationPattern = validationPattern;
    }
    
    /**
     * get The userId of the DocuSign user who last modified this object.
     * @return {String}
     **/
    self.getLastModifiedByUserId = function() {
      return self.lastModifiedByUserId;
    }

    /**
     * set The userId of the DocuSign user who last modified this object.
     * @param {String} lastModifiedByUserId
     **/
    self.setLastModifiedByUserId = function (lastModifiedByUserId) {
      self.lastModifiedByUserId = lastModifiedByUserId;
    }
    
    /**
     * get The User Name of the DocuSign user who last modified this object.
     * @return {String}
     **/
    self.getLastModifiedByDisplayName = function() {
      return self.lastModifiedByDisplayName;
    }

    /**
     * set The User Name of the DocuSign user who last modified this object.
     * @param {String} lastModifiedByDisplayName
     **/
    self.setLastModifiedByDisplayName = function (lastModifiedByDisplayName) {
      self.lastModifiedByDisplayName = lastModifiedByDisplayName;
    }
    
    /**
     * get The UTC DateTime this object was last modified. This is in ISO8601 format.
     * @return {String}
     **/
    self.getLastModified = function() {
      return self.lastModified;
    }

    /**
     * set The UTC DateTime this object was last modified. This is in ISO8601 format.
     * @param {String} lastModified
     **/
    self.setLastModified = function (lastModified) {
      self.lastModified = lastModified;
    }
    
    /**
     * get The userId of the DocuSign user who created this object.
     * @return {String}
     **/
    self.getCreatedByUserId = function() {
      return self.createdByUserId;
    }

    /**
     * set The userId of the DocuSign user who created this object.
     * @param {String} createdByUserId
     **/
    self.setCreatedByUserId = function (createdByUserId) {
      self.createdByUserId = createdByUserId;
    }
    
    /**
     * get The user name of the DocuSign user who created this object.
     * @return {String}
     **/
    self.getCreatedByDisplayName = function() {
      return self.createdByDisplayName;
    }

    /**
     * set The user name of the DocuSign user who created this object.
     * @param {String} createdByDisplayName
     **/
    self.setCreatedByDisplayName = function (createdByDisplayName) {
      self.createdByDisplayName = createdByDisplayName;
    }
    
    /**
     * get When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
     * @return {String}
     **/
    self.getEditable = function() {
      return self.editable;
    }

    /**
     * set When set to **true**, the custom tab is editable. Otherwise the custom tab cannot be modified.
     * @param {String} editable
     **/
    self.setEditable = function (editable) {
      self.editable = editable;
    }
    
    /**
     * @return {MergeField}
     **/
    self.getMergeField = function() {
      return self.mergeField;
    }

    /**
     * @param {MergeField} mergeField
     **/
    self.setMergeField = function (mergeField) {
      self.mergeField = mergeField;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TabMetadata = TabMetadata;
  }

  return TabMetadata;
  
  
}));
