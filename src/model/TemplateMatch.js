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

  
  

  
  var TemplateMatch = function TemplateMatch() { 
    var self = this;
    
    /**
     * 
     * datatype: String
     **/
    self.matchPercentage = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentStartPage = null;
    
    /**
     * 
     * datatype: String
     **/
    self.documentEndPage = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.matchPercentage) {
        self.matchPercentage = data.matchPercentage;
      }
      
      if (data.documentStartPage) {
        self.documentStartPage = data.documentStartPage;
      }
      
      if (data.documentEndPage) {
        self.documentEndPage = data.documentEndPage;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getMatchPercentage = function() {
      return self.matchPercentage;
    }

    /**
     * set 
     * @param {String} matchPercentage
     **/
    self.setMatchPercentage = function (matchPercentage) {
      self.matchPercentage = matchPercentage;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDocumentStartPage = function() {
      return self.documentStartPage;
    }

    /**
     * set 
     * @param {String} documentStartPage
     **/
    self.setDocumentStartPage = function (documentStartPage) {
      self.documentStartPage = documentStartPage;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDocumentEndPage = function() {
      return self.documentEndPage;
    }

    /**
     * set 
     * @param {String} documentEndPage
     **/
    self.setDocumentEndPage = function (documentEndPage) {
      self.documentEndPage = documentEndPage;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateMatch = TemplateMatch;
  }

  return TemplateMatch;
  
  
}));
