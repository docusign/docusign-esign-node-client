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

  
  

  
  var ForgottenPasswordInformation = function ForgottenPasswordInformation() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.forgottenPasswordQuestion1) {
        self.forgottenPasswordQuestion1 = data.forgottenPasswordQuestion1;
      }
      
      if (data.forgottenPasswordAnswer1) {
        self.forgottenPasswordAnswer1 = data.forgottenPasswordAnswer1;
      }
      
      if (data.forgottenPasswordQuestion2) {
        self.forgottenPasswordQuestion2 = data.forgottenPasswordQuestion2;
      }
      
      if (data.forgottenPasswordAnswer2) {
        self.forgottenPasswordAnswer2 = data.forgottenPasswordAnswer2;
      }
      
      if (data.forgottenPasswordQuestion3) {
        self.forgottenPasswordQuestion3 = data.forgottenPasswordQuestion3;
      }
      
      if (data.forgottenPasswordAnswer3) {
        self.forgottenPasswordAnswer3 = data.forgottenPasswordAnswer3;
      }
      
      if (data.forgottenPasswordQuestion4) {
        self.forgottenPasswordQuestion4 = data.forgottenPasswordQuestion4;
      }
      
      if (data.forgottenPasswordAnswer4) {
        self.forgottenPasswordAnswer4 = data.forgottenPasswordAnswer4;
      }
      
    }

    
    /**
     * get The first challenge question presented to a user who has forgotten their password.
     * @return {String}
     **/
    self.getForgottenPasswordQuestion1 = function() {
      return self.forgottenPasswordQuestion1;
    }

    /**
     * set The first challenge question presented to a user who has forgotten their password.
     * @param {String} forgottenPasswordQuestion1
     **/
    self.setForgottenPasswordQuestion1 = function (forgottenPasswordQuestion1) {
      self.forgottenPasswordQuestion1 = forgottenPasswordQuestion1;
    }
    
    /**
     * get The answer to the first forgotten password challenge question.
     * @return {String}
     **/
    self.getForgottenPasswordAnswer1 = function() {
      return self.forgottenPasswordAnswer1;
    }

    /**
     * set The answer to the first forgotten password challenge question.
     * @param {String} forgottenPasswordAnswer1
     **/
    self.setForgottenPasswordAnswer1 = function (forgottenPasswordAnswer1) {
      self.forgottenPasswordAnswer1 = forgottenPasswordAnswer1;
    }
    
    /**
     * get The second challenge question presented to a user who has forgotten their password.
     * @return {String}
     **/
    self.getForgottenPasswordQuestion2 = function() {
      return self.forgottenPasswordQuestion2;
    }

    /**
     * set The second challenge question presented to a user who has forgotten their password.
     * @param {String} forgottenPasswordQuestion2
     **/
    self.setForgottenPasswordQuestion2 = function (forgottenPasswordQuestion2) {
      self.forgottenPasswordQuestion2 = forgottenPasswordQuestion2;
    }
    
    /**
     * get The answer to the second forgotten password challenge question.
     * @return {String}
     **/
    self.getForgottenPasswordAnswer2 = function() {
      return self.forgottenPasswordAnswer2;
    }

    /**
     * set The answer to the second forgotten password challenge question.
     * @param {String} forgottenPasswordAnswer2
     **/
    self.setForgottenPasswordAnswer2 = function (forgottenPasswordAnswer2) {
      self.forgottenPasswordAnswer2 = forgottenPasswordAnswer2;
    }
    
    /**
     * get The third challenge question presented to a user who has forgotten their password.
     * @return {String}
     **/
    self.getForgottenPasswordQuestion3 = function() {
      return self.forgottenPasswordQuestion3;
    }

    /**
     * set The third challenge question presented to a user who has forgotten their password.
     * @param {String} forgottenPasswordQuestion3
     **/
    self.setForgottenPasswordQuestion3 = function (forgottenPasswordQuestion3) {
      self.forgottenPasswordQuestion3 = forgottenPasswordQuestion3;
    }
    
    /**
     * get The answer to the third forgotten password challenge question.
     * @return {String}
     **/
    self.getForgottenPasswordAnswer3 = function() {
      return self.forgottenPasswordAnswer3;
    }

    /**
     * set The answer to the third forgotten password challenge question.
     * @param {String} forgottenPasswordAnswer3
     **/
    self.setForgottenPasswordAnswer3 = function (forgottenPasswordAnswer3) {
      self.forgottenPasswordAnswer3 = forgottenPasswordAnswer3;
    }
    
    /**
     * get The fourth challenge question presented to a user who has forgotten their password.
     * @return {String}
     **/
    self.getForgottenPasswordQuestion4 = function() {
      return self.forgottenPasswordQuestion4;
    }

    /**
     * set The fourth challenge question presented to a user who has forgotten their password.
     * @param {String} forgottenPasswordQuestion4
     **/
    self.setForgottenPasswordQuestion4 = function (forgottenPasswordQuestion4) {
      self.forgottenPasswordQuestion4 = forgottenPasswordQuestion4;
    }
    
    /**
     * get The answer to the fourth forgotten password challenge question.
     * @return {String}
     **/
    self.getForgottenPasswordAnswer4 = function() {
      return self.forgottenPasswordAnswer4;
    }

    /**
     * set The answer to the fourth forgotten password challenge question.
     * @param {String} forgottenPasswordAnswer4
     **/
    self.setForgottenPasswordAnswer4 = function (forgottenPasswordAnswer4) {
      self.forgottenPasswordAnswer4 = forgottenPasswordAnswer4;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ForgottenPasswordInformation = ForgottenPasswordInformation;
  }

  return ForgottenPasswordInformation;
  
  
}));
