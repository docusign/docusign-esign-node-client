(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './Tabs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./Tabs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.Tabs);
  }
}(this, function(module, ErrorDetails, Tabs) {
  'use strict';

  
  

  
  var RecipientUpdateResponse = function RecipientUpdateResponse() { 
    var self = this;
    
    /**
     * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * datatype: String
     **/
    self.recipientId = null;
    
    /**
     * datatype: Tabs
     **/
    self.tabs = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.tabs) {
        self.tabs = new data.tabs.constructor();
        self.tabs.constructFromObject(data.tabs);
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
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
     * @return {Tabs}
     **/
    self.getTabs = function() {
      return self.tabs;
    }

    /**
     * @param {Tabs} tabs
     **/
    self.setTabs = function (tabs) {
      self.tabs = tabs;
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
    module.RecipientUpdateResponse = RecipientUpdateResponse;
  }

  return RecipientUpdateResponse;
  
  
}));
