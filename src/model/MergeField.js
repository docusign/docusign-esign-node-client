(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined);
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign);
  }
}(this, function(module) {
  'use strict';

  
  

  /**
   * Contains information for transfering values between Salesforce data fields and DocuSign Tabs.
   **/
  var MergeField = function MergeField() { 
    var self = this;
    
    /**
     * If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
     * datatype: String
     **/
    self.configurationType = null;
    
    /**
     * Sets the object associated with the custom tab. Currently this is the Salesforce Object.
     * datatype: String
     **/
    self.path = null;
    
    /**
     * When wet to true, the information entered in the tab automatically updates the related Salesforce data when an envelope is completed.
     * datatype: String
     **/
    self.writeBack = null;
    
    /**
     * When set to **true**, the sender can modify the value of the custom tab during the sending process.
     * datatype: String
     **/
    self.allowSenderToEdit = null;
    
    /**
     * Specifies the row number in a Salesforce table that the merge field value corresponds to.
     * datatype: String
     **/
    self.row = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.configurationType) {
        self.configurationType = data.configurationType;
      }
      
      if (data.path) {
        self.path = data.path;
      }
      
      if (data.writeBack) {
        self.writeBack = data.writeBack;
      }
      
      if (data.allowSenderToEdit) {
        self.allowSenderToEdit = data.allowSenderToEdit;
      }
      
      if (data.row) {
        self.row = data.row;
      }
      
    }

    
    /**
     * get If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
     * @return {String}
     **/
    self.getConfigurationType = function() {
      return self.configurationType;
    }

    /**
     * set If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
     * @param {String} configurationType
     **/
    self.setConfigurationType = function (configurationType) {
      self.configurationType = configurationType;
    }
    
    /**
     * get Sets the object associated with the custom tab. Currently this is the Salesforce Object.
     * @return {String}
     **/
    self.getPath = function() {
      return self.path;
    }

    /**
     * set Sets the object associated with the custom tab. Currently this is the Salesforce Object.
     * @param {String} path
     **/
    self.setPath = function (path) {
      self.path = path;
    }
    
    /**
     * get When wet to true, the information entered in the tab automatically updates the related Salesforce data when an envelope is completed.
     * @return {String}
     **/
    self.getWriteBack = function() {
      return self.writeBack;
    }

    /**
     * set When wet to true, the information entered in the tab automatically updates the related Salesforce data when an envelope is completed.
     * @param {String} writeBack
     **/
    self.setWriteBack = function (writeBack) {
      self.writeBack = writeBack;
    }
    
    /**
     * get When set to **true**, the sender can modify the value of the custom tab during the sending process.
     * @return {String}
     **/
    self.getAllowSenderToEdit = function() {
      return self.allowSenderToEdit;
    }

    /**
     * set When set to **true**, the sender can modify the value of the custom tab during the sending process.
     * @param {String} allowSenderToEdit
     **/
    self.setAllowSenderToEdit = function (allowSenderToEdit) {
      self.allowSenderToEdit = allowSenderToEdit;
    }
    
    /**
     * get Specifies the row number in a Salesforce table that the merge field value corresponds to.
     * @return {String}
     **/
    self.getRow = function() {
      return self.row;
    }

    /**
     * set Specifies the row number in a Salesforce table that the merge field value corresponds to.
     * @param {String} row
     **/
    self.setRow = function (row) {
      self.row = row;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.MergeField = MergeField;
  }

  return MergeField;
  
  
}));
