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

  
  

  
  var ReturnUrlRequest = function ReturnUrlRequest() { 
    var self = this;
    
    /**
     * Identifies the return point after sending the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the sending transaction. No envelopeId is returned in this case.)\n* error (there is an error when performing the send)\n* sessionEnd (the sending session ends before the user completes another action).
     * datatype: String
     **/
    self.returnUrl = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.returnUrl) {
        self.returnUrl = data.returnUrl;
      }
      
    }

    
    /**
     * get Identifies the return point after sending the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the sending transaction. No envelopeId is returned in this case.)\n* error (there is an error when performing the send)\n* sessionEnd (the sending session ends before the user completes another action).
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set Identifies the return point after sending the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the sending transaction. No envelopeId is returned in this case.)\n* error (there is an error when performing the send)\n* sessionEnd (the sending session ends before the user completes another action).
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
    module.ReturnUrlRequest = ReturnUrlRequest;
  }

  return ReturnUrlRequest;
  
  
}));
