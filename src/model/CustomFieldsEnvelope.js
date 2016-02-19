(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ListCustomField', './TextCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ListCustomField'), require('./TextCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ListCustomField, root.Docusign.TextCustomField);
  }
}(this, function(module, ListCustomField, TextCustomField) {
  'use strict';

  
  

  
  var CustomFieldsEnvelope = function CustomFieldsEnvelope() { 
    var self = this;
    
    /**
     * An array of text custom fields.
     * datatype: Array
     **/
    self.textCustomFields = [];
    
    /**
     * An array of list custom fields.
     * datatype: Array
     **/
    self.listCustomFields = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.textCustomFields) {
        self.textCustomFields = data.textCustomFields;
      }
      
      if (data.listCustomFields) {
        self.listCustomFields = data.listCustomFields;
      }
      
    }

    
    /**
     * get An array of text custom fields.
     * @return {Array}
     **/
    self.getTextCustomFields = function() {
      return self.textCustomFields;
    }

    /**
     * set An array of text custom fields.
     * @param {Array} textCustomFields
     **/
    self.setTextCustomFields = function (textCustomFields) {
      self.textCustomFields = textCustomFields;
    }
    
    /**
     * get An array of list custom fields.
     * @return {Array}
     **/
    self.getListCustomFields = function() {
      return self.listCustomFields;
    }

    /**
     * set An array of list custom fields.
     * @param {Array} listCustomFields
     **/
    self.setListCustomFields = function (listCustomFields) {
      self.listCustomFields = listCustomFields;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.CustomFieldsEnvelope = CustomFieldsEnvelope;
  }

  return CustomFieldsEnvelope;
  
  
}));
