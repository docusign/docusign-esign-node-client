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
     * get The url used after correct/send view session has ended. DocuSign redirects to the url and includes an event parameter that can be used by your app. The event parameters returned are: \n\n* send (user corrected and sent the envelope)\n* save (user saved the envelope)\n* cancel (user canceled the transaction.)\n* error (there was an error when performing the correct or send)\n* sessionEnd (the session ended before the user completed a different action)\n\n###### Note: Include https:// in the URL or the redirect might not succeed on some browsers.
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set The url used after correct/send view session has ended. DocuSign redirects to the url and includes an event parameter that can be used by your app. The event parameters returned are: \n\n* send (user corrected and sent the envelope)\n* save (user saved the envelope)\n* cancel (user canceled the transaction.)\n* error (there was an error when performing the correct or send)\n* sessionEnd (the session ended before the user completed a different action)\n\n###### Note: Include https:// in the URL or the redirect might not succeed on some browsers.
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
