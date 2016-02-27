(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './RecipientUpdateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./RecipientUpdateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.RecipientUpdateResponse);
  }
}(this, function(module, RecipientUpdateResponse) {
  'use strict';

  
  

  
  var RecipientsUpdateSummary = function RecipientsUpdateSummary() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.recipientUpdateResults = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.recipientUpdateResults) {
        self.recipientUpdateResults = data.recipientUpdateResults;
      }
      
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientsUpdateSummary = RecipientsUpdateSummary;
  }

  return RecipientsUpdateSummary;
  
  
}));
