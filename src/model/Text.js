(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './MergeField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./MergeField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.MergeField);
  }
}(this, function(module, ErrorDetails, MergeField) {
  'use strict';

  
  

  
  var Text = function Text() { 
    var self = this;
    
    /**
     * Height of the tab in pixels.
     * datatype: Integer
     **/
    self.height = null;
    
    /**
     * When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number.
     * datatype: String
     **/
    self.isPaymentAmount = null;
    
    /**
     * The Formula string contains the TabLabel for the reference tabs used in the formula and calculation operators. Each TabLabel must be contained in brackets. \nMaximum Length: 2000 characters.\n\n*Example*: Three tabs (TabLabels: Line1, Line2, and Tax) need to be added together. The formula string would be: \n\n[Line1]+[Line2]+[Tax]
     * datatype: String
     **/
    self.formula = null;
    
    /**
     * A regular expressionn used to validate input for the tab.
     * datatype: String
     **/
    self.validationPattern = null;
    
    /**
     * The message displayed if the custom tab fails input validation (either custom of embedded).
     * datatype: String
     **/
    self.validationMessage = null;
    
    /**
     * When set to **true**, this custom tab is shared.
     * datatype: String
     **/
    self.shared = null;
    
    /**
     * Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
     * datatype: String
     **/
    self.requireInitialOnSharedChange = null;
    
    /**
     * When set to **true**, the sender must populate the tab before an envelope can be sent using the template. \n\nThis value tab can only be changed by modifying (PUT) the template. \n\nTabs with a `senderRequired` value of true cannot be deleted from an envelope.
     * datatype: String
     **/
    self.senderRequired = null;
    
    /**
     * When set to **true** and shared is true, information must be entered in this field to complete the envelope.
     * datatype: String
     **/
    self.requireAll = null;
    
    /**
     * Specifies the tool tip text for the tab.
     * datatype: String
     **/
    self.name = null;
    
    /**
     * Specifies the value of the tab.
     * datatype: String
     **/
    self.value = null;
    
    /**
     * The initial value of the tab when it was sent to the recipient.
     * datatype: String
     **/
    self.originalValue = null;
    
    /**
     * Width of the tab in pixels.
     * datatype: Integer
     **/
    self.width = null;
    
    /**
     * When set to **true**, the signer is required to fill out this tab
     * datatype: String
     **/
    self.required = null;
    
    /**
     * When set to **true**, the signer cannot change the data of the custom tab.
     * datatype: String
     **/
    self.locked = null;
    
    /**
     * When set to **true**, the field appears normally while the recipient is adding or modifying the information in the field, but the data is not visible (the characters are hidden by asterisks) to any other signer or the sender.\n\nWhen an envelope is completed the information is available to the sender through the Form Data link in the DocuSign Console.\n\nThis setting applies only to text boxes and does not affect list boxes, radio buttons, or check boxes.
     * datatype: String
     **/
    self.concealValueOnDocument = null;
    
    /**
     * When set to **true**, disables the auto sizing of single line text boxes in the signing screen when the signer enters data. If disabled users will only be able enter as much data as the text box can hold. By default this is false. This property only affects single line text boxes.
     * datatype: String
     **/
    self.disableAutoSize = null;
    
    /**
     * An optional value that describes the maximum length of the property when the property is a string.
     * datatype: Integer
     **/
    self.maxLength = null;
    
    /**
     * The label string associated with the tab.
     * datatype: String
     **/
    self.tabLabel = null;
    
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
     * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * datatype: String
     **/
    self.documentId = null;
    
    /**
     * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * datatype: String
     **/
    self.recipientId = null;
    
    /**
     * Specifies the page number on which the tab is located.
     * datatype: String
     **/
    self.pageNumber = null;
    
    /**
     * This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * datatype: String
     **/
    self.xPosition = null;
    
    /**
     * This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * datatype: String
     **/
    self.yPosition = null;
    
    /**
     * Anchor text information for a radio button.
     * datatype: String
     **/
    self.anchorString = null;
    
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
     * When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * datatype: String
     **/
    self.anchorCaseSensitive = null;
    
    /**
     * When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * datatype: String
     **/
    self.anchorMatchWholeWord = null;
    
    /**
     * Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * datatype: String
     **/
    self.anchorHorizontalAlignment = null;
    
    /**
     * The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * datatype: String
     **/
    self.tabId = null;
    
    /**
     * When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * datatype: String
     **/
    self.templateLocked = null;
    
    /**
     * When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * datatype: String
     **/
    self.templateRequired = null;
    
    /**
     * For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
     * datatype: String
     **/
    self.conditionalParentLabel = null;
    
    /**
     * For conditional fields, this is the value of the parent tab that controls the tab's visibility.\n\nIf the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active.
     * datatype: String
     **/
    self.conditionalParentValue = null;
    
    /**
     * The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties.
     * datatype: String
     **/
    self.customTabId = null;
    
    /**
     * datatype: MergeField
     **/
    self.mergeField = null;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.height) {
        self.height = data.height;
      }
      
      if (data.isPaymentAmount) {
        self.isPaymentAmount = data.isPaymentAmount;
      }
      
      if (data.formula) {
        self.formula = data.formula;
      }
      
      if (data.validationPattern) {
        self.validationPattern = data.validationPattern;
      }
      
      if (data.validationMessage) {
        self.validationMessage = data.validationMessage;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.requireInitialOnSharedChange) {
        self.requireInitialOnSharedChange = data.requireInitialOnSharedChange;
      }
      
      if (data.senderRequired) {
        self.senderRequired = data.senderRequired;
      }
      
      if (data.requireAll) {
        self.requireAll = data.requireAll;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.value) {
        self.value = data.value;
      }
      
      if (data.originalValue) {
        self.originalValue = data.originalValue;
      }
      
      if (data.width) {
        self.width = data.width;
      }
      
      if (data.required) {
        self.required = data.required;
      }
      
      if (data.locked) {
        self.locked = data.locked;
      }
      
      if (data.concealValueOnDocument) {
        self.concealValueOnDocument = data.concealValueOnDocument;
      }
      
      if (data.disableAutoSize) {
        self.disableAutoSize = data.disableAutoSize;
      }
      
      if (data.maxLength) {
        self.maxLength = data.maxLength;
      }
      
      if (data.tabLabel) {
        self.tabLabel = data.tabLabel;
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
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.pageNumber) {
        self.pageNumber = data.pageNumber;
      }
      
      if (data.xPosition) {
        self.xPosition = data.xPosition;
      }
      
      if (data.yPosition) {
        self.yPosition = data.yPosition;
      }
      
      if (data.anchorString) {
        self.anchorString = data.anchorString;
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
      
      if (data.anchorCaseSensitive) {
        self.anchorCaseSensitive = data.anchorCaseSensitive;
      }
      
      if (data.anchorMatchWholeWord) {
        self.anchorMatchWholeWord = data.anchorMatchWholeWord;
      }
      
      if (data.anchorHorizontalAlignment) {
        self.anchorHorizontalAlignment = data.anchorHorizontalAlignment;
      }
      
      if (data.tabId) {
        self.tabId = data.tabId;
      }
      
      if (data.templateLocked) {
        self.templateLocked = data.templateLocked;
      }
      
      if (data.templateRequired) {
        self.templateRequired = data.templateRequired;
      }
      
      if (data.conditionalParentLabel) {
        self.conditionalParentLabel = data.conditionalParentLabel;
      }
      
      if (data.conditionalParentValue) {
        self.conditionalParentValue = data.conditionalParentValue;
      }
      
      if (data.customTabId) {
        self.customTabId = data.customTabId;
      }
      
      if (data.mergeField) {
        self.mergeField = new data.mergeField.constructor();
        self.mergeField.constructFromObject(data.mergeField);
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get Height of the tab in pixels.
     * @return {Integer}
     **/
    self.getHeight = function() {
      return self.height;
    }

    /**
     * set Height of the tab in pixels.
     * @param {Integer} height
     **/
    self.setHeight = function (height) {
      self.height = height;
    }
    
    /**
     * get When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number.
     * @return {String}
     **/
    self.getIsPaymentAmount = function() {
      return self.isPaymentAmount;
    }

    /**
     * set When set to **true**, sets this as a payment tab. Can only be used with Text, Number, Formula, or List tabs. The value of the tab must be a number.
     * @param {String} isPaymentAmount
     **/
    self.setIsPaymentAmount = function (isPaymentAmount) {
      self.isPaymentAmount = isPaymentAmount;
    }
    
    /**
     * get The Formula string contains the TabLabel for the reference tabs used in the formula and calculation operators. Each TabLabel must be contained in brackets. \nMaximum Length: 2000 characters.\n\n*Example*: Three tabs (TabLabels: Line1, Line2, and Tax) need to be added together. The formula string would be: \n\n[Line1]+[Line2]+[Tax]
     * @return {String}
     **/
    self.getFormula = function() {
      return self.formula;
    }

    /**
     * set The Formula string contains the TabLabel for the reference tabs used in the formula and calculation operators. Each TabLabel must be contained in brackets. \nMaximum Length: 2000 characters.\n\n*Example*: Three tabs (TabLabels: Line1, Line2, and Tax) need to be added together. The formula string would be: \n\n[Line1]+[Line2]+[Tax]
     * @param {String} formula
     **/
    self.setFormula = function (formula) {
      self.formula = formula;
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
     * get Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
     * @return {String}
     **/
    self.getRequireInitialOnSharedChange = function() {
      return self.requireInitialOnSharedChange;
    }

    /**
     * set Optional element for field markup. When set to **true**, the signer is required to initial when they modify a shared field.
     * @param {String} requireInitialOnSharedChange
     **/
    self.setRequireInitialOnSharedChange = function (requireInitialOnSharedChange) {
      self.requireInitialOnSharedChange = requireInitialOnSharedChange;
    }
    
    /**
     * get When set to **true**, the sender must populate the tab before an envelope can be sent using the template. \n\nThis value tab can only be changed by modifying (PUT) the template. \n\nTabs with a `senderRequired` value of true cannot be deleted from an envelope.
     * @return {String}
     **/
    self.getSenderRequired = function() {
      return self.senderRequired;
    }

    /**
     * set When set to **true**, the sender must populate the tab before an envelope can be sent using the template. \n\nThis value tab can only be changed by modifying (PUT) the template. \n\nTabs with a `senderRequired` value of true cannot be deleted from an envelope.
     * @param {String} senderRequired
     **/
    self.setSenderRequired = function (senderRequired) {
      self.senderRequired = senderRequired;
    }
    
    /**
     * get When set to **true** and shared is true, information must be entered in this field to complete the envelope.
     * @return {String}
     **/
    self.getRequireAll = function() {
      return self.requireAll;
    }

    /**
     * set When set to **true** and shared is true, information must be entered in this field to complete the envelope.
     * @param {String} requireAll
     **/
    self.setRequireAll = function (requireAll) {
      self.requireAll = requireAll;
    }
    
    /**
     * get Specifies the tool tip text for the tab.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set Specifies the tool tip text for the tab.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get Specifies the value of the tab.
     * @return {String}
     **/
    self.getValue = function() {
      return self.value;
    }

    /**
     * set Specifies the value of the tab.
     * @param {String} value
     **/
    self.setValue = function (value) {
      self.value = value;
    }
    
    /**
     * get The initial value of the tab when it was sent to the recipient.
     * @return {String}
     **/
    self.getOriginalValue = function() {
      return self.originalValue;
    }

    /**
     * set The initial value of the tab when it was sent to the recipient.
     * @param {String} originalValue
     **/
    self.setOriginalValue = function (originalValue) {
      self.originalValue = originalValue;
    }
    
    /**
     * get Width of the tab in pixels.
     * @return {Integer}
     **/
    self.getWidth = function() {
      return self.width;
    }

    /**
     * set Width of the tab in pixels.
     * @param {Integer} width
     **/
    self.setWidth = function (width) {
      self.width = width;
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
     * get An optional value that describes the maximum length of the property when the property is a string.
     * @return {Integer}
     **/
    self.getMaxLength = function() {
      return self.maxLength;
    }

    /**
     * set An optional value that describes the maximum length of the property when the property is a string.
     * @param {Integer} maxLength
     **/
    self.setMaxLength = function (maxLength) {
      self.maxLength = maxLength;
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
     * get Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @return {String}
     **/
    self.getDocumentId = function() {
      return self.documentId;
    }

    /**
     * set Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @param {String} documentId
     **/
    self.setDocumentId = function (documentId) {
      self.documentId = documentId;
    }
    
    /**
     * get Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @return {String}
     **/
    self.getRecipientId = function() {
      return self.recipientId;
    }

    /**
     * set Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @param {String} recipientId
     **/
    self.setRecipientId = function (recipientId) {
      self.recipientId = recipientId;
    }
    
    /**
     * get Specifies the page number on which the tab is located.
     * @return {String}
     **/
    self.getPageNumber = function() {
      return self.pageNumber;
    }

    /**
     * set Specifies the page number on which the tab is located.
     * @param {String} pageNumber
     **/
    self.setPageNumber = function (pageNumber) {
      self.pageNumber = pageNumber;
    }
    
    /**
     * get This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getXPosition = function() {
      return self.xPosition;
    }

    /**
     * set This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} xPosition
     **/
    self.setXPosition = function (xPosition) {
      self.xPosition = xPosition;
    }
    
    /**
     * get This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getYPosition = function() {
      return self.yPosition;
    }

    /**
     * set This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} yPosition
     **/
    self.setYPosition = function (yPosition) {
      self.yPosition = yPosition;
    }
    
    /**
     * get Anchor text information for a radio button.
     * @return {String}
     **/
    self.getAnchorString = function() {
      return self.anchorString;
    }

    /**
     * set Anchor text information for a radio button.
     * @param {String} anchorString
     **/
    self.setAnchorString = function (anchorString) {
      self.anchorString = anchorString;
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
     * get The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @return {String}
     **/
    self.getTabId = function() {
      return self.tabId;
    }

    /**
     * set The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @param {String} tabId
     **/
    self.setTabId = function (tabId) {
      self.tabId = tabId;
    }
    
    /**
     * get When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateLocked = function() {
      return self.templateLocked;
    }

    /**
     * set When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.
     * @param {String} templateLocked
     **/
    self.setTemplateLocked = function (templateLocked) {
      self.templateLocked = templateLocked;
    }
    
    /**
     * get When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @return {String}
     **/
    self.getTemplateRequired = function() {
      return self.templateRequired;
    }

    /**
     * set When set to **true**, the sender may not remove the recipient. Used only when working with template recipients.
     * @param {String} templateRequired
     **/
    self.setTemplateRequired = function (templateRequired) {
      self.templateRequired = templateRequired;
    }
    
    /**
     * get For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
     * @return {String}
     **/
    self.getConditionalParentLabel = function() {
      return self.conditionalParentLabel;
    }

    /**
     * set For conditional fields this is the TabLabel of the parent tab that controls this tab's visibility.
     * @param {String} conditionalParentLabel
     **/
    self.setConditionalParentLabel = function (conditionalParentLabel) {
      self.conditionalParentLabel = conditionalParentLabel;
    }
    
    /**
     * get For conditional fields, this is the value of the parent tab that controls the tab's visibility.\n\nIf the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active.
     * @return {String}
     **/
    self.getConditionalParentValue = function() {
      return self.conditionalParentValue;
    }

    /**
     * set For conditional fields, this is the value of the parent tab that controls the tab's visibility.\n\nIf the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \"on\" as the value to show that the parent tab is active.
     * @param {String} conditionalParentValue
     **/
    self.setConditionalParentValue = function (conditionalParentValue) {
      self.conditionalParentValue = conditionalParentValue;
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
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Text = Text;
  }

  return Text;
  
  
}));
