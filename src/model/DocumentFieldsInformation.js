(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.NameValue);
  }
}(this, function(module, NameValue) {
  'use strict';

  
  

  
  var DocumentFieldsInformation = function DocumentFieldsInformation() { 
    var self = this;
    
    /**
     * The array of name/value custom data strings to be added to a document. Custom document field information is returned in the status, but otherwise is not used by DocuSign. The array contains the elements: \n\n* name – A string that can be a maximum of 50 characters. \n* value – A string that can be a maximum of 200 characters.\n\n*IMPORTANT*: If you are using xml, the name/value pair is contained in a nameValue element.
     * datatype: Array
     **/
    self.documentFields = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentFields) {
        self.documentFields = data.documentFields;
      }
      
    }

    
    /**
     * get The array of name/value custom data strings to be added to a document. Custom document field information is returned in the status, but otherwise is not used by DocuSign. The array contains the elements: \n\n* name – A string that can be a maximum of 50 characters. \n* value – A string that can be a maximum of 200 characters.\n\n*IMPORTANT*: If you are using xml, the name/value pair is contained in a nameValue element.
     * @return {Array}
     **/
    self.getDocumentFields = function() {
      return self.documentFields;
    }

    /**
     * set The array of name/value custom data strings to be added to a document. Custom document field information is returned in the status, but otherwise is not used by DocuSign. The array contains the elements: \n\n* name – A string that can be a maximum of 50 characters. \n* value – A string that can be a maximum of 200 characters.\n\n*IMPORTANT*: If you are using xml, the name/value pair is contained in a nameValue element.
     * @param {Array} documentFields
     **/
    self.setDocumentFields = function (documentFields) {
      self.documentFields = documentFields;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.DocumentFieldsInformation = DocumentFieldsInformation;
  }

  return DocumentFieldsInformation;
  
  
}));
