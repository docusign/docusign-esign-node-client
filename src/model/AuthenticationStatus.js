(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './EventResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./EventResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.EventResult);
  }
}(this, function(module, EventResult) {
  'use strict';

  
  

  /**
   * Contains information about the authentication status.
   **/
  var AuthenticationStatus = function AuthenticationStatus() { 
    var self = this;
    
    /**
     * datatype: EventResult
     **/
    self.accessCodeResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.phoneAuthResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.idLookupResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.idQuestionsResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.ageVerifyResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.sTANPinResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.ofacResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.liveIDResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.facebookResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.googleResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.linkedinResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.salesforceResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.twitterResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.openIDResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.anySocialIDResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.yahooResult = null;
    
    /**
     * datatype: EventResult
     **/
    self.smsAuthResult = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.accessCodeResult) {
        self.accessCodeResult = new data.accessCodeResult.constructor();
        self.accessCodeResult.constructFromObject(data.accessCodeResult);
      }
      
      if (data.phoneAuthResult) {
        self.phoneAuthResult = new data.phoneAuthResult.constructor();
        self.phoneAuthResult.constructFromObject(data.phoneAuthResult);
      }
      
      if (data.idLookupResult) {
        self.idLookupResult = new data.idLookupResult.constructor();
        self.idLookupResult.constructFromObject(data.idLookupResult);
      }
      
      if (data.idQuestionsResult) {
        self.idQuestionsResult = new data.idQuestionsResult.constructor();
        self.idQuestionsResult.constructFromObject(data.idQuestionsResult);
      }
      
      if (data.ageVerifyResult) {
        self.ageVerifyResult = new data.ageVerifyResult.constructor();
        self.ageVerifyResult.constructFromObject(data.ageVerifyResult);
      }
      
      if (data.sTANPinResult) {
        self.sTANPinResult = new data.sTANPinResult.constructor();
        self.sTANPinResult.constructFromObject(data.sTANPinResult);
      }
      
      if (data.ofacResult) {
        self.ofacResult = new data.ofacResult.constructor();
        self.ofacResult.constructFromObject(data.ofacResult);
      }
      
      if (data.liveIDResult) {
        self.liveIDResult = new data.liveIDResult.constructor();
        self.liveIDResult.constructFromObject(data.liveIDResult);
      }
      
      if (data.facebookResult) {
        self.facebookResult = new data.facebookResult.constructor();
        self.facebookResult.constructFromObject(data.facebookResult);
      }
      
      if (data.googleResult) {
        self.googleResult = new data.googleResult.constructor();
        self.googleResult.constructFromObject(data.googleResult);
      }
      
      if (data.linkedinResult) {
        self.linkedinResult = new data.linkedinResult.constructor();
        self.linkedinResult.constructFromObject(data.linkedinResult);
      }
      
      if (data.salesforceResult) {
        self.salesforceResult = new data.salesforceResult.constructor();
        self.salesforceResult.constructFromObject(data.salesforceResult);
      }
      
      if (data.twitterResult) {
        self.twitterResult = new data.twitterResult.constructor();
        self.twitterResult.constructFromObject(data.twitterResult);
      }
      
      if (data.openIDResult) {
        self.openIDResult = new data.openIDResult.constructor();
        self.openIDResult.constructFromObject(data.openIDResult);
      }
      
      if (data.anySocialIDResult) {
        self.anySocialIDResult = new data.anySocialIDResult.constructor();
        self.anySocialIDResult.constructFromObject(data.anySocialIDResult);
      }
      
      if (data.yahooResult) {
        self.yahooResult = new data.yahooResult.constructor();
        self.yahooResult.constructFromObject(data.yahooResult);
      }
      
      if (data.smsAuthResult) {
        self.smsAuthResult = new data.smsAuthResult.constructor();
        self.smsAuthResult.constructFromObject(data.smsAuthResult);
      }
      
    }

    
    /**
     * @return {EventResult}
     **/
    self.getAccessCodeResult = function() {
      return self.accessCodeResult;
    }

    /**
     * @param {EventResult} accessCodeResult
     **/
    self.setAccessCodeResult = function (accessCodeResult) {
      self.accessCodeResult = accessCodeResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getPhoneAuthResult = function() {
      return self.phoneAuthResult;
    }

    /**
     * @param {EventResult} phoneAuthResult
     **/
    self.setPhoneAuthResult = function (phoneAuthResult) {
      self.phoneAuthResult = phoneAuthResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getIdLookupResult = function() {
      return self.idLookupResult;
    }

    /**
     * @param {EventResult} idLookupResult
     **/
    self.setIdLookupResult = function (idLookupResult) {
      self.idLookupResult = idLookupResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getIdQuestionsResult = function() {
      return self.idQuestionsResult;
    }

    /**
     * @param {EventResult} idQuestionsResult
     **/
    self.setIdQuestionsResult = function (idQuestionsResult) {
      self.idQuestionsResult = idQuestionsResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getAgeVerifyResult = function() {
      return self.ageVerifyResult;
    }

    /**
     * @param {EventResult} ageVerifyResult
     **/
    self.setAgeVerifyResult = function (ageVerifyResult) {
      self.ageVerifyResult = ageVerifyResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getSTANPinResult = function() {
      return self.sTANPinResult;
    }

    /**
     * @param {EventResult} sTANPinResult
     **/
    self.setSTANPinResult = function (sTANPinResult) {
      self.sTANPinResult = sTANPinResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getOfacResult = function() {
      return self.ofacResult;
    }

    /**
     * @param {EventResult} ofacResult
     **/
    self.setOfacResult = function (ofacResult) {
      self.ofacResult = ofacResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getLiveIDResult = function() {
      return self.liveIDResult;
    }

    /**
     * @param {EventResult} liveIDResult
     **/
    self.setLiveIDResult = function (liveIDResult) {
      self.liveIDResult = liveIDResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getFacebookResult = function() {
      return self.facebookResult;
    }

    /**
     * @param {EventResult} facebookResult
     **/
    self.setFacebookResult = function (facebookResult) {
      self.facebookResult = facebookResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getGoogleResult = function() {
      return self.googleResult;
    }

    /**
     * @param {EventResult} googleResult
     **/
    self.setGoogleResult = function (googleResult) {
      self.googleResult = googleResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getLinkedinResult = function() {
      return self.linkedinResult;
    }

    /**
     * @param {EventResult} linkedinResult
     **/
    self.setLinkedinResult = function (linkedinResult) {
      self.linkedinResult = linkedinResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getSalesforceResult = function() {
      return self.salesforceResult;
    }

    /**
     * @param {EventResult} salesforceResult
     **/
    self.setSalesforceResult = function (salesforceResult) {
      self.salesforceResult = salesforceResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getTwitterResult = function() {
      return self.twitterResult;
    }

    /**
     * @param {EventResult} twitterResult
     **/
    self.setTwitterResult = function (twitterResult) {
      self.twitterResult = twitterResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getOpenIDResult = function() {
      return self.openIDResult;
    }

    /**
     * @param {EventResult} openIDResult
     **/
    self.setOpenIDResult = function (openIDResult) {
      self.openIDResult = openIDResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getAnySocialIDResult = function() {
      return self.anySocialIDResult;
    }

    /**
     * @param {EventResult} anySocialIDResult
     **/
    self.setAnySocialIDResult = function (anySocialIDResult) {
      self.anySocialIDResult = anySocialIDResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getYahooResult = function() {
      return self.yahooResult;
    }

    /**
     * @param {EventResult} yahooResult
     **/
    self.setYahooResult = function (yahooResult) {
      self.yahooResult = yahooResult;
    }
    
    /**
     * @return {EventResult}
     **/
    self.getSmsAuthResult = function() {
      return self.smsAuthResult;
    }

    /**
     * @param {EventResult} smsAuthResult
     **/
    self.setSmsAuthResult = function (smsAuthResult) {
      self.smsAuthResult = smsAuthResult;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.AuthenticationStatus = AuthenticationStatus;
  }

  return AuthenticationStatus;
  
  
}));
