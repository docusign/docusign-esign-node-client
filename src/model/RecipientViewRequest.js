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

  
  

  
  var RecipientViewRequest = function RecipientViewRequest() { 
    var self = this;
    
    /**
     * A sender created value that shows the recipient is embedded (captive). \n\nMaximum length: 100 characters.
     * datatype: String
     **/
    self.clientUserId = null;
    
    /**
     * Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. If user ID is used and a client user ID is provided, the value in the `userId` property must match a recipient ID (which can be retrieved with a GET recipients call) for the envelope. If a user ID is used and a clientUser ID is not provided, the user ID match the user ID of the authenticating user.
     * datatype: String
     **/
    self.userId = null;
    
    /**
     * Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient.
     * datatype: String
     **/
    self.userName = null;
    
    /**
     * Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
     * datatype: String
     **/
    self.email = null;
    
    /**
     * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * datatype: String
     **/
    self.recipientId = null;
    
    /**
     * The URL the recipient is directed to on certain events. DocuSign sends returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* cancel (recipient cancels signing)\n* decline (recipient declines signing)\n* exception (exception occurs)\n* fax_pending (recipient has fax pending)\n* check); session_timeout (session times out)\n* completes signing)\n* expires)\n* viewing_complete (recipient completes viewing the envelope)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
     * datatype: String
     **/
    self.returnUrl = null;
    
    /**
     * A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
     * datatype: String
     **/
    self.pingUrl = null;
    
    /**
     * Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
     * datatype: String
     **/
    self.pingFrequency = null;
    
    /**
     * A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion.
     * datatype: String
     **/
    self.authenticationMethod = null;
    
    /**
     * A unique identifier of the authentication event executed by the client application.
     * datatype: String
     **/
    self.assertionId = null;
    
    /**
     * A sender generated value that indicates the date/time that the signer was authenticated.
     * datatype: String
     **/
    self.authenticationInstant = null;
    
    /**
     * The domain in which the user authenticated.
     * datatype: String
     **/
    self.securityDomain = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.clientUserId) {
        self.clientUserId = data.clientUserId;
      }
      
      if (data.userId) {
        self.userId = data.userId;
      }
      
      if (data.userName) {
        self.userName = data.userName;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.recipientId) {
        self.recipientId = data.recipientId;
      }
      
      if (data.returnUrl) {
        self.returnUrl = data.returnUrl;
      }
      
      if (data.pingUrl) {
        self.pingUrl = data.pingUrl;
      }
      
      if (data.pingFrequency) {
        self.pingFrequency = data.pingFrequency;
      }
      
      if (data.authenticationMethod) {
        self.authenticationMethod = data.authenticationMethod;
      }
      
      if (data.assertionId) {
        self.assertionId = data.assertionId;
      }
      
      if (data.authenticationInstant) {
        self.authenticationInstant = data.authenticationInstant;
      }
      
      if (data.securityDomain) {
        self.securityDomain = data.securityDomain;
      }
      
    }

    
    /**
     * get A sender created value that shows the recipient is embedded (captive). \n\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getClientUserId = function() {
      return self.clientUserId;
    }

    /**
     * set A sender created value that shows the recipient is embedded (captive). \n\nMaximum length: 100 characters.
     * @param {String} clientUserId
     **/
    self.setClientUserId = function (clientUserId) {
      self.clientUserId = clientUserId;
    }
    
    /**
     * get Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. If user ID is used and a client user ID is provided, the value in the `userId` property must match a recipient ID (which can be retrieved with a GET recipients call) for the envelope. If a user ID is used and a clientUser ID is not provided, the user ID match the user ID of the authenticating user.
     * @return {String}
     **/
    self.getUserId = function() {
      return self.userId;
    }

    /**
     * set Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. If user ID is used and a client user ID is provided, the value in the `userId` property must match a recipient ID (which can be retrieved with a GET recipients call) for the envelope. If a user ID is used and a clientUser ID is not provided, the user ID match the user ID of the authenticating user.
     * @param {String} userId
     **/
    self.setUserId = function (userId) {
      self.userId = userId;
    }
    
    /**
     * get Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient.
     * @return {String}
     **/
    self.getUserName = function() {
      return self.userName;
    }

    /**
     * set Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient.
     * @param {String} userName
     **/
    self.setUserName = function (userName) {
      self.userName = userName;
    }
    
    /**
     * get Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient.
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    
    /**
     * get Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @return {String}
     **/
    self.getRecipientId = function() {
      return self.recipientId;
    }

    /**
     * set Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
     * @param {String} recipientId
     **/
    self.setRecipientId = function (recipientId) {
      self.recipientId = recipientId;
    }
    
    /**
     * get The URL the recipient is directed to on certain events. DocuSign sends returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* cancel (recipient cancels signing)\n* decline (recipient declines signing)\n* exception (exception occurs)\n* fax_pending (recipient has fax pending)\n* check); session_timeout (session times out)\n* completes signing)\n* expires)\n* viewing_complete (recipient completes viewing the envelope)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
     * @return {String}
     **/
    self.getReturnUrl = function() {
      return self.returnUrl;
    }

    /**
     * set The URL the recipient is directed to on certain events. DocuSign sends returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are: \n\n* cancel (recipient cancels signing)\n* decline (recipient declines signing)\n* exception (exception occurs)\n* fax_pending (recipient has fax pending)\n* check); session_timeout (session times out)\n* completes signing)\n* expires)\n* viewing_complete (recipient completes viewing the envelope)\n\n## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.
     * @param {String} returnUrl
     **/
    self.setReturnUrl = function (returnUrl) {
      self.returnUrl = returnUrl;
    }
    
    /**
     * get A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
     * @return {String}
     **/
    self.getPingUrl = function() {
      return self.pingUrl;
    }

    /**
     * set A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it's session timer when the request is received.
     * @param {String} pingUrl
     **/
    self.setPingUrl = function (pingUrl) {
      self.pingUrl = pingUrl;
    }
    
    /**
     * get Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
     * @return {String}
     **/
    self.getPingFrequency = function() {
      return self.pingFrequency;
    }

    /**
     * set Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds.
     * @param {String} pingFrequency
     **/
    self.setPingFrequency = function (pingFrequency) {
      self.pingFrequency = pingFrequency;
    }
    
    /**
     * get A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion.
     * @return {String}
     **/
    self.getAuthenticationMethod = function() {
      return self.authenticationMethod;
    }

    /**
     * set A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion.
     * @param {String} authenticationMethod
     **/
    self.setAuthenticationMethod = function (authenticationMethod) {
      self.authenticationMethod = authenticationMethod;
    }
    
    /**
     * get A unique identifier of the authentication event executed by the client application.
     * @return {String}
     **/
    self.getAssertionId = function() {
      return self.assertionId;
    }

    /**
     * set A unique identifier of the authentication event executed by the client application.
     * @param {String} assertionId
     **/
    self.setAssertionId = function (assertionId) {
      self.assertionId = assertionId;
    }
    
    /**
     * get A sender generated value that indicates the date/time that the signer was authenticated.
     * @return {String}
     **/
    self.getAuthenticationInstant = function() {
      return self.authenticationInstant;
    }

    /**
     * set A sender generated value that indicates the date/time that the signer was authenticated.
     * @param {String} authenticationInstant
     **/
    self.setAuthenticationInstant = function (authenticationInstant) {
      self.authenticationInstant = authenticationInstant;
    }
    
    /**
     * get The domain in which the user authenticated.
     * @return {String}
     **/
    self.getSecurityDomain = function() {
      return self.securityDomain;
    }

    /**
     * set The domain in which the user authenticated.
     * @param {String} securityDomain
     **/
    self.setSecurityDomain = function (securityDomain) {
      self.securityDomain = securityDomain;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.RecipientViewRequest = RecipientViewRequest;
  }

  return RecipientViewRequest;
  
  
}));
