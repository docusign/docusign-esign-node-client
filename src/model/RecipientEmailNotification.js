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

  
  

  
  var RecipientEmailNotification = function RecipientEmailNotification() { 
    var self = this;
    
    /**
     * Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * datatype: String
     **/
    self.emailSubject = null;
    
    /**
     * Specifies the email body of the message sent to the recipient. \n\nMaximum length: 10000 characters.
     * datatype: String
     **/
    self.emailBody = null;
    
    /**
     * A simple type enumeration of the language used. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bahasa Indonesia (id), Bahasa Melayu (ms) Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro),Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).
     * datatype: String
     **/
    self.supportedLanguage = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.emailSubject) {
        self.emailSubject = data.emailSubject;
      }
      
      if (data.emailBody) {
        self.emailBody = data.emailBody;
      }
      
      if (data.supportedLanguage) {
        self.supportedLanguage = data.supportedLanguage;
      }
      
    }

    
    /**
     * get Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * @return {String}
     **/
    self.getEmailSubject = function() {
      return self.emailSubject;
    }

    /**
     * set Specifies the subject of the email that is sent to all recipients.\n\nSee [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
     * @param {String} emailSubject
     **/
    self.setEmailSubject = function (emailSubject) {
      self.emailSubject = emailSubject;
    }
    
    /**
     * get Specifies the email body of the message sent to the recipient. \n\nMaximum length: 10000 characters.
     * @return {String}
     **/
    self.getEmailBody = function() {
      return self.emailBody;
    }

    /**
     * set Specifies the email body of the message sent to the recipient. \n\nMaximum length: 10000 characters.
     * @param {String} emailBody
     **/
    self.setEmailBody = function (emailBody) {
      self.emailBody = emailBody;
    }
    
    /**
     * get A simple type enumeration of the language used. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bahasa Indonesia (id), Bahasa Melayu (ms) Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro),Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).
     * @return {String}
     **/
    self.getSupportedLanguage = function() {
      return self.supportedLanguage;
    }

    /**
     * set A simple type enumeration of the language used. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bahasa Indonesia (id), Bahasa Melayu (ms) Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro),Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).
     * @param {String} supportedLanguage
     **/
    self.setSupportedLanguage = function (supportedLanguage) {
      self.supportedLanguage = supportedLanguage;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientEmailNotification = RecipientEmailNotification;
  }

  return RecipientEmailNotification;
  
  
}));
