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

  
  

  
  var Reminders = function Reminders() { 
    var self = this;
    
    /**
     * When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * datatype: String
     **/
    self.reminderEnabled = null;
    
    /**
     * An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.
     * datatype: String
     **/
    self.reminderDelay = null;
    
    /**
     * An interger that sets the interval, in days, between reminder emails.
     * datatype: String
     **/
    self.reminderFrequency = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.reminderEnabled) {
        self.reminderEnabled = data.reminderEnabled;
      }
      
      if (data.reminderDelay) {
        self.reminderDelay = data.reminderDelay;
      }
      
      if (data.reminderFrequency) {
        self.reminderFrequency = data.reminderFrequency;
      }
      
    }

    
    /**
     * get When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * @return {String}
     **/
    self.getReminderEnabled = function() {
      return self.reminderEnabled;
    }

    /**
     * set When set to **true**, the envelope expires (is no longer available for signing) in the set number of days. If false, the account default setting is used. If the account does not have an expiration setting, the DocuSign default value of 120 days is used.
     * @param {String} reminderEnabled
     **/
    self.setReminderEnabled = function (reminderEnabled) {
      self.reminderEnabled = reminderEnabled;
    }
    
    /**
     * get An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.
     * @return {String}
     **/
    self.getReminderDelay = function() {
      return self.reminderDelay;
    }

    /**
     * set An interger that sets the number of days after the recipient receives the envelope that reminder emails are sent to the recipient.
     * @param {String} reminderDelay
     **/
    self.setReminderDelay = function (reminderDelay) {
      self.reminderDelay = reminderDelay;
    }
    
    /**
     * get An interger that sets the interval, in days, between reminder emails.
     * @return {String}
     **/
    self.getReminderFrequency = function() {
      return self.reminderFrequency;
    }

    /**
     * set An interger that sets the interval, in days, between reminder emails.
     * @param {String} reminderFrequency
     **/
    self.setReminderFrequency = function (reminderFrequency) {
      self.reminderFrequency = reminderFrequency;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Reminders = Reminders;
  }

  return Reminders;
  
  
}));
