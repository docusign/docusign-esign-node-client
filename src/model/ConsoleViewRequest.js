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

  
  

  
  var ConsoleViewRequest = function ConsoleViewRequest() { 
    var self = this;
    
    /**
     * The envelope ID of the envelope status that failed to post.
     * datatype: String
     **/
    self.envelopeId = null;
    
    /**
     * The URL to be redirected to after the console view session has ended.
     * datatype: String
     **/
    self.returnUrl = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeId) {
        self.envelopeId = data.envelopeId;
      }
      
      if (data.returnUrl) {
        self.returnUrl = data.returnUrl;
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
     * get The URL to be redirected to after the console view session has ended.
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set The URL to be redirected to after the console view session has ended.
     * @param {String} returnUrl
     **/
    self.setReturnUrl = function (returnUrl) {
      self.returnUrl = returnUrl;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ConsoleViewRequest = ConsoleViewRequest;
  }

  return ConsoleViewRequest;
  
  
}));
