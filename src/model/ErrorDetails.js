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

  
  

  
  var ErrorDetails = function ErrorDetails() { 
    var self = this;
    
    /**
     * An error code associated with the error.
     * datatype: String
     **/
    self.errorCode = null;
    
    /**
     * A short error message.
     * datatype: String
     **/
    self.message = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.errorCode) {
        self.errorCode = data.errorCode;
      }
      
      if (data.message) {
        self.message = data.message;
      }
      
    }

    
    /**
     * get An error code associated with the error.
     * @return {String}
     **/
    self.getErrorCode = function() {
      return self.errorCode;
    }

    /**
     * set An error code associated with the error.
     * @param {String} errorCode
     **/
    self.setErrorCode = function (errorCode) {
      self.errorCode = errorCode;
    }
    
    /**
     * get A short error message.
     * @return {String}
     **/
    self.getMessage = function() {
      return self.message;
    }

    /**
     * set A short error message.
     * @param {String} message
     **/
    self.setMessage = function (message) {
      self.message = message;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ErrorDetails = ErrorDetails;
  }

  return ErrorDetails;
  
  
}));
