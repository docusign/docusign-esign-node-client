(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Radio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Radio'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Radio);
  }
}(this, function(module, Radio) {
  'use strict';

  
  

  
  var RadioGroup = function RadioGroup() { 
    var self = this;
    
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
     * The name of the group.
     * datatype: String
     **/
    self.groupName = null;
    
    /**
     * Specifies the locations and status for radio buttons that are grouped together.
     * datatype: Array
     **/
    self.radios = [];
    
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
     * When set to **true** and shared is true, information must be entered in this field to complete the envelope.
     * datatype: String
     **/
    self.requireAll = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.conditionalParentLabel) {
        self.conditionalParentLabel = data.conditionalParentLabel;
      }
      
      if (data.conditionalParentValue) {
        self.conditionalParentValue = data.conditionalParentValue;
      }
      
      if (data.groupName) {
        self.groupName = data.groupName;
      }
      
      if (data.radios) {
        self.radios = data.radios;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.requireInitialOnSharedChange) {
        self.requireInitialOnSharedChange = data.requireInitialOnSharedChange;
      }
      
      if (data.requireAll) {
        self.requireAll = data.requireAll;
      }
      
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
     * get The name of the group.
     * @return {String}
     **/
    self.getGroupName = function() {
      return self.groupName;
    }

    /**
     * set The name of the group.
     * @param {String} groupName
     **/
    self.setGroupName = function (groupName) {
      self.groupName = groupName;
    }
    
    /**
     * get Specifies the locations and status for radio buttons that are grouped together.
     * @return {Array}
     **/
    self.getRadios = function() {
      return self.radios;
    }

    /**
     * set Specifies the locations and status for radio buttons that are grouped together.
     * @param {Array} radios
     **/
    self.setRadios = function (radios) {
      self.radios = radios;
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RadioGroup = RadioGroup;
  }

  return RadioGroup;
  
  
}));
