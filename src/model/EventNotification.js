(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './EnvelopeEvent', './RecipientEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./EnvelopeEvent'), require('./RecipientEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.EnvelopeEvent, root.Docusign.RecipientEvent);
  }
}(this, function(module, EnvelopeEvent, RecipientEvent) {
  'use strict';

  
  

  
  var EventNotification = function EventNotification() { 
    var self = this;
    
    /**
     * Specifies the endpoint to which envelope updates are sent. Udpates are sent as XML unless `useSoapInterface` property is set to **true**.
     * datatype: String
     **/
    self.url = null;
    
    /**
     * When set to **true**, logging is turned on for envelope events on the Web Console Connect page.
     * datatype: String
     **/
    self.loggingEnabled = null;
    
    /**
     * When set to **true**, the DocuSign Connect service checks that the message was received and retries on failures.
     * datatype: String
     **/
    self.requireAcknowledgment = null;
    
    /**
     * A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property. \n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * datatype: Array
     **/
    self.envelopeEvents = [];
    
    /**
     * A list of recipient event statuses that will trigger Connect to send updates to   the endpoint specified in the url property.\n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * datatype: Array
     **/
    self.recipientEvents = [];
    
    /**
     * When set to **true**, this tells the Connect service that the user's endpoint has implemented a SOAP interface.
     * datatype: String
     **/
    self.useSoapInterface = null;
    
    /**
     * This lists the namespace in the SOAP listener provided.
     * datatype: String
     **/
    self.soapNameSpace = null;
    
    /**
     * When set to **true**, this tells the Connect service to send the DocuSign signedby certificate as part of the outgoing SOAP xml. This appears in the XML as wsse:BinarySecurityToken.
     * datatype: String
     **/
    self.includeCertificateWithSoap = null;
    
    /**
     * When set to **true**, messages are signed with an X509 certificate. This provides support for 2-way SSL in the envelope.
     * datatype: String
     **/
    self.signMessageWithX509Cert = null;
    
    /**
     * When set to **true**, the PDF documents are included in the message along with the updated XML.
     * datatype: String
     **/
    self.includeDocuments = null;
    
    /**
     * When set to **true**, this tells the Connect Service to include the void reason, as entered by the person that voided the envelope, in the message.
     * datatype: String
     **/
    self.includeEnvelopeVoidReason = null;
    
    /**
     * When set to **true**, the envelope time zone information is included in the message.
     * datatype: String
     **/
    self.includeTimeZone = null;
    
    /**
     * When set to **true**, the sender account ID is included as a envelope custom field in the data.
     * datatype: String
     **/
    self.includeSenderAccountAsCustomField = null;
    
    /**
     * When set to **true**, the Document Fields associated with envelope documents are included in the data. Document Fields are optional custom name-value pairs added to documents using the API.
     * datatype: String
     **/
    self.includeDocumentFields = null;
    
    /**
     * When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes.
     * datatype: String
     **/
    self.includeCertificateOfCompletion = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.url) {
        self.url = data.url;
      }
      
      if (data.loggingEnabled) {
        self.loggingEnabled = data.loggingEnabled;
      }
      
      if (data.requireAcknowledgment) {
        self.requireAcknowledgment = data.requireAcknowledgment;
      }
      
      if (data.envelopeEvents) {
        self.envelopeEvents = data.envelopeEvents;
      }
      
      if (data.recipientEvents) {
        self.recipientEvents = data.recipientEvents;
      }
      
      if (data.useSoapInterface) {
        self.useSoapInterface = data.useSoapInterface;
      }
      
      if (data.soapNameSpace) {
        self.soapNameSpace = data.soapNameSpace;
      }
      
      if (data.includeCertificateWithSoap) {
        self.includeCertificateWithSoap = data.includeCertificateWithSoap;
      }
      
      if (data.signMessageWithX509Cert) {
        self.signMessageWithX509Cert = data.signMessageWithX509Cert;
      }
      
      if (data.includeDocuments) {
        self.includeDocuments = data.includeDocuments;
      }
      
      if (data.includeEnvelopeVoidReason) {
        self.includeEnvelopeVoidReason = data.includeEnvelopeVoidReason;
      }
      
      if (data.includeTimeZone) {
        self.includeTimeZone = data.includeTimeZone;
      }
      
      if (data.includeSenderAccountAsCustomField) {
        self.includeSenderAccountAsCustomField = data.includeSenderAccountAsCustomField;
      }
      
      if (data.includeDocumentFields) {
        self.includeDocumentFields = data.includeDocumentFields;
      }
      
      if (data.includeCertificateOfCompletion) {
        self.includeCertificateOfCompletion = data.includeCertificateOfCompletion;
      }
      
    }

    
    /**
     * get Specifies the endpoint to which envelope updates are sent. Udpates are sent as XML unless `useSoapInterface` property is set to **true**.
     * @return {String}
     **/
    self.getUrl = function() {
      return self.url;
    }

    /**
     * set Specifies the endpoint to which envelope updates are sent. Udpates are sent as XML unless `useSoapInterface` property is set to **true**.
     * @param {String} url
     **/
    self.setUrl = function (url) {
      self.url = url;
    }
    
    /**
     * get When set to **true**, logging is turned on for envelope events on the Web Console Connect page.
     * @return {String}
     **/
    self.getLoggingEnabled = function() {
      return self.loggingEnabled;
    }

    /**
     * set When set to **true**, logging is turned on for envelope events on the Web Console Connect page.
     * @param {String} loggingEnabled
     **/
    self.setLoggingEnabled = function (loggingEnabled) {
      self.loggingEnabled = loggingEnabled;
    }
    
    /**
     * get When set to **true**, the DocuSign Connect service checks that the message was received and retries on failures.
     * @return {String}
     **/
    self.getRequireAcknowledgment = function() {
      return self.requireAcknowledgment;
    }

    /**
     * set When set to **true**, the DocuSign Connect service checks that the message was received and retries on failures.
     * @param {String} requireAcknowledgment
     **/
    self.setRequireAcknowledgment = function (requireAcknowledgment) {
      self.requireAcknowledgment = requireAcknowledgment;
    }
    
    /**
     * get A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property. \n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * @return {Array}
     **/
    self.getEnvelopeEvents = function() {
      return self.envelopeEvents;
    }

    /**
     * set A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property. \n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * @param {Array} envelopeEvents
     **/
    self.setEnvelopeEvents = function (envelopeEvents) {
      self.envelopeEvents = envelopeEvents;
    }
    
    /**
     * get A list of recipient event statuses that will trigger Connect to send updates to   the endpoint specified in the url property.\n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * @return {Array}
     **/
    self.getRecipientEvents = function() {
      return self.recipientEvents;
    }

    /**
     * set A list of recipient event statuses that will trigger Connect to send updates to   the endpoint specified in the url property.\n\nTo receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
     * @param {Array} recipientEvents
     **/
    self.setRecipientEvents = function (recipientEvents) {
      self.recipientEvents = recipientEvents;
    }
    
    /**
     * get When set to **true**, this tells the Connect service that the user's endpoint has implemented a SOAP interface.
     * @return {String}
     **/
    self.getUseSoapInterface = function() {
      return self.useSoapInterface;
    }

    /**
     * set When set to **true**, this tells the Connect service that the user's endpoint has implemented a SOAP interface.
     * @param {String} useSoapInterface
     **/
    self.setUseSoapInterface = function (useSoapInterface) {
      self.useSoapInterface = useSoapInterface;
    }
    
    /**
     * get This lists the namespace in the SOAP listener provided.
     * @return {String}
     **/
    self.getSoapNameSpace = function() {
      return self.soapNameSpace;
    }

    /**
     * set This lists the namespace in the SOAP listener provided.
     * @param {String} soapNameSpace
     **/
    self.setSoapNameSpace = function (soapNameSpace) {
      self.soapNameSpace = soapNameSpace;
    }
    
    /**
     * get When set to **true**, this tells the Connect service to send the DocuSign signedby certificate as part of the outgoing SOAP xml. This appears in the XML as wsse:BinarySecurityToken.
     * @return {String}
     **/
    self.getIncludeCertificateWithSoap = function() {
      return self.includeCertificateWithSoap;
    }

    /**
     * set When set to **true**, this tells the Connect service to send the DocuSign signedby certificate as part of the outgoing SOAP xml. This appears in the XML as wsse:BinarySecurityToken.
     * @param {String} includeCertificateWithSoap
     **/
    self.setIncludeCertificateWithSoap = function (includeCertificateWithSoap) {
      self.includeCertificateWithSoap = includeCertificateWithSoap;
    }
    
    /**
     * get When set to **true**, messages are signed with an X509 certificate. This provides support for 2-way SSL in the envelope.
     * @return {String}
     **/
    self.getSignMessageWithX509Cert = function() {
      return self.signMessageWithX509Cert;
    }

    /**
     * set When set to **true**, messages are signed with an X509 certificate. This provides support for 2-way SSL in the envelope.
     * @param {String} signMessageWithX509Cert
     **/
    self.setSignMessageWithX509Cert = function (signMessageWithX509Cert) {
      self.signMessageWithX509Cert = signMessageWithX509Cert;
    }
    
    /**
     * get When set to **true**, the PDF documents are included in the message along with the updated XML.
     * @return {String}
     **/
    self.getIncludeDocuments = function() {
      return self.includeDocuments;
    }

    /**
     * set When set to **true**, the PDF documents are included in the message along with the updated XML.
     * @param {String} includeDocuments
     **/
    self.setIncludeDocuments = function (includeDocuments) {
      self.includeDocuments = includeDocuments;
    }
    
    /**
     * get When set to **true**, this tells the Connect Service to include the void reason, as entered by the person that voided the envelope, in the message.
     * @return {String}
     **/
    self.getIncludeEnvelopeVoidReason = function() {
      return self.includeEnvelopeVoidReason;
    }

    /**
     * set When set to **true**, this tells the Connect Service to include the void reason, as entered by the person that voided the envelope, in the message.
     * @param {String} includeEnvelopeVoidReason
     **/
    self.setIncludeEnvelopeVoidReason = function (includeEnvelopeVoidReason) {
      self.includeEnvelopeVoidReason = includeEnvelopeVoidReason;
    }
    
    /**
     * get When set to **true**, the envelope time zone information is included in the message.
     * @return {String}
     **/
    self.getIncludeTimeZone = function() {
      return self.includeTimeZone;
    }

    /**
     * set When set to **true**, the envelope time zone information is included in the message.
     * @param {String} includeTimeZone
     **/
    self.setIncludeTimeZone = function (includeTimeZone) {
      self.includeTimeZone = includeTimeZone;
    }
    
    /**
     * get When set to **true**, the sender account ID is included as a envelope custom field in the data.
     * @return {String}
     **/
    self.getIncludeSenderAccountAsCustomField = function() {
      return self.includeSenderAccountAsCustomField;
    }

    /**
     * set When set to **true**, the sender account ID is included as a envelope custom field in the data.
     * @param {String} includeSenderAccountAsCustomField
     **/
    self.setIncludeSenderAccountAsCustomField = function (includeSenderAccountAsCustomField) {
      self.includeSenderAccountAsCustomField = includeSenderAccountAsCustomField;
    }
    
    /**
     * get When set to **true**, the Document Fields associated with envelope documents are included in the data. Document Fields are optional custom name-value pairs added to documents using the API.
     * @return {String}
     **/
    self.getIncludeDocumentFields = function() {
      return self.includeDocumentFields;
    }

    /**
     * set When set to **true**, the Document Fields associated with envelope documents are included in the data. Document Fields are optional custom name-value pairs added to documents using the API.
     * @param {String} includeDocumentFields
     **/
    self.setIncludeDocumentFields = function (includeDocumentFields) {
      self.includeDocumentFields = includeDocumentFields;
    }
    
    /**
     * get When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes.
     * @return {String}
     **/
    self.getIncludeCertificateOfCompletion = function() {
      return self.includeCertificateOfCompletion;
    }

    /**
     * set When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes.
     * @param {String} includeCertificateOfCompletion
     **/
    self.setIncludeCertificateOfCompletion = function (includeCertificateOfCompletion) {
      self.includeCertificateOfCompletion = includeCertificateOfCompletion;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EventNotification = EventNotification;
  }

  return EventNotification;
  
  
}));
