(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './BulkEnvelopeStatus', './ErrorDetails', './ListCustomField', './LockInformation', './RecipientUpdateResponse', './Tabs', './TextCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./BulkEnvelopeStatus'), require('./ErrorDetails'), require('./ListCustomField'), require('./LockInformation'), require('./RecipientUpdateResponse'), require('./Tabs'), require('./TextCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.BulkEnvelopeStatus, root.Docusign.ErrorDetails, root.Docusign.ListCustomField, root.Docusign.LockInformation, root.Docusign.RecipientUpdateResponse, root.Docusign.Tabs, root.Docusign.TextCustomField);
  }
}(this, function(module, BulkEnvelopeStatus, ErrorDetails, ListCustomField, LockInformation, RecipientUpdateResponse, Tabs, TextCustomField) {
  'use strict';

  
  

  
  var TemplateUpdateSummary = function TemplateUpdateSummary() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.recipientUpdateResults = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.textCustomFieldUpdateResults = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.listCustomFieldUpdateResults = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.bulkEnvelopeStatus) {
        self.bulkEnvelopeStatus = new data.bulkEnvelopeStatus.constructor();
        self.bulkEnvelopeStatus.constructFromObject(data.bulkEnvelopeStatus);
      }
      
      if (data.recipientUpdateResults) {
        self.recipientUpdateResults = data.recipientUpdateResults;
      }
      
      if (data.tabUpdateResults) {
        self.tabUpdateResults = new data.tabUpdateResults.constructor();
        self.tabUpdateResults.constructFromObject(data.tabUpdateResults);
      }
      
      if (data.textCustomFieldUpdateResults) {
        self.textCustomFieldUpdateResults = data.textCustomFieldUpdateResults;
      }
      
      if (data.listCustomFieldUpdateResults) {
        self.listCustomFieldUpdateResults = data.listCustomFieldUpdateResults;
      }
      
      if (data.lockInformation) {
        self.lockInformation = new data.lockInformation.constructor();
        self.lockInformation.constructFromObject(data.lockInformation);
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get The envelope ID of the envelope status that failed to post.
     * @return {String}
     **/
    self.getEnvelopeId = function() {
      return self.envelopeId;
    }

    /**
     * set The envelope ID of the envelope status that failed to post.
     * @param {String} envelopeId
     **/
    self.setEnvelopeId = function (envelopeId) {
      self.envelopeId = envelopeId;
    }
    
    /**
     * @return {BulkEnvelopeStatus}
     **/
    self.getBulkEnvelopeStatus = function() {
      return self.bulkEnvelopeStatus;
    }

    /**
     * @param {BulkEnvelopeStatus} bulkEnvelopeStatus
     **/
    self.setBulkEnvelopeStatus = function (bulkEnvelopeStatus) {
      self.bulkEnvelopeStatus = bulkEnvelopeStatus;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getRecipientUpdateResults = function() {
      return self.recipientUpdateResults;
    }

    /**
     * set 
     * @param {Array} recipientUpdateResults
     **/
    self.setRecipientUpdateResults = function (recipientUpdateResults) {
      self.recipientUpdateResults = recipientUpdateResults;
    }
    
    /**
     * @return {Tabs}
     **/
    self.getTabUpdateResults = function() {
      return self.tabUpdateResults;
    }

    /**
     * @param {Tabs} tabUpdateResults
     **/
    self.setTabUpdateResults = function (tabUpdateResults) {
      self.tabUpdateResults = tabUpdateResults;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getTextCustomFieldUpdateResults = function() {
      return self.textCustomFieldUpdateResults;
    }

    /**
     * set 
     * @param {Array} textCustomFieldUpdateResults
     **/
    self.setTextCustomFieldUpdateResults = function (textCustomFieldUpdateResults) {
      self.textCustomFieldUpdateResults = textCustomFieldUpdateResults;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getListCustomFieldUpdateResults = function() {
      return self.listCustomFieldUpdateResults;
    }

    /**
     * set 
     * @param {Array} listCustomFieldUpdateResults
     **/
    self.setListCustomFieldUpdateResults = function (listCustomFieldUpdateResults) {
      self.listCustomFieldUpdateResults = listCustomFieldUpdateResults;
    }
    
    /**
     * @return {LockInformation}
     **/
    self.getLockInformation = function() {
      return self.lockInformation;
    }

    /**
     * @param {LockInformation} lockInformation
     **/
    self.setLockInformation = function (lockInformation) {
      self.lockInformation = lockInformation;
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
    module.TemplateUpdateSummary = TemplateUpdateSummary;
  }

  return TemplateUpdateSummary;
  
  
}));
