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

  
  

  
  var CorrectViewRequest = function CorrectViewRequest() { 
    var self = this;
    
    /**
     * Specifies whether the window is displayed with or without dressing.
     * datatype: String
     **/
    self.suppressNavigation = null;
    
    /**
     * Specifies the return point after correcting the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user corrects and sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the transaction.)\n* error (there is an error when performing the correct or send)\n* sessionEnd (the session ends before the user completes another action)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
     * datatype: String
     **/
    self.returnUrl = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.suppressNavigation) {
        self.suppressNavigation = data.suppressNavigation;
      }
      
      if (data.returnUrl) {
        self.returnUrl = data.returnUrl;
      }
      
    }

    
    /**
     * get Specifies whether the window is displayed with or without dressing.
     * @return {String}
     **/
    self.getSuppressNavigation = function() {
      return self.suppressNavigation;
    }

    /**
     * set Specifies whether the window is displayed with or without dressing.
     * @param {String} suppressNavigation
     **/
    self.setSuppressNavigation = function (suppressNavigation) {
      self.suppressNavigation = suppressNavigation;
    }
    
    /**
     * get Specifies the return point after correcting the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user corrects and sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the transaction.)\n* error (there is an error when performing the correct or send)\n* sessionEnd (the session ends before the user completes another action)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set Specifies the return point after correcting the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* send (user corrects and sends the envelope)\n* save (user saves the envelope)\n* cancel (user cancels the transaction.)\n* error (there is an error when performing the correct or send)\n* sessionEnd (the session ends before the user completes another action)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
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
    module.CorrectViewRequest = CorrectViewRequest;
  }

  return CorrectViewRequest;
  
  
}));
