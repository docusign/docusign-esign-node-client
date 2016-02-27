(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Agent', './CarbonCopy', './CertifiedDelivery', './Editor', './ErrorDetails', './InPersonSigner', './Intermediary', './Signer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Agent'), require('./CarbonCopy'), require('./CertifiedDelivery'), require('./Editor'), require('./ErrorDetails'), require('./InPersonSigner'), require('./Intermediary'), require('./Signer'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Agent, root.Docusign.CarbonCopy, root.Docusign.CertifiedDelivery, root.Docusign.Editor, root.Docusign.ErrorDetails, root.Docusign.InPersonSigner, root.Docusign.Intermediary, root.Docusign.Signer);
  }
}(this, function(module, Agent, CarbonCopy, CertifiedDelivery, Editor, ErrorDetails, InPersonSigner, Intermediary, Signer) {
  'use strict';

  
  

  
  var Recipients = function Recipients() { 
    var self = this;
    
    /**
     * A complex type containing information about the Signer recipient.
     * datatype: Array
     **/
    self.signers = [];
    
    /**
     * A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
     * datatype: Array
     **/
    self.agents = [];
    
    /**
     * A complex type defining the management and access rights of a recipient assigned assigned as an editor on the document.
     * datatype: Array
     **/
    self.editors = [];
    
    /**
     * Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
     * datatype: Array
     **/
    self.intermediaries = [];
    
    /**
     * A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
     * datatype: Array
     **/
    self.carbonCopies = [];
    
    /**
     * A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
     * datatype: Array
     **/
    self.certifiedDeliveries = [];
    
    /**
     * Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
     * datatype: Array
     **/
    self.inPersonSigners = [];
    
    /**
     * 
     * datatype: String
     **/
    self.recipientCount = null;
    
    /**
     * 
     * datatype: String
     **/
    self.currentRoutingOrder = null;
    
    /**
     * datatype: ErrorDetails
     **/
    self.errorDetails = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signers) {
        self.signers = data.signers;
      }
      
      if (data.agents) {
        self.agents = data.agents;
      }
      
      if (data.editors) {
        self.editors = data.editors;
      }
      
      if (data.intermediaries) {
        self.intermediaries = data.intermediaries;
      }
      
      if (data.carbonCopies) {
        self.carbonCopies = data.carbonCopies;
      }
      
      if (data.certifiedDeliveries) {
        self.certifiedDeliveries = data.certifiedDeliveries;
      }
      
      if (data.inPersonSigners) {
        self.inPersonSigners = data.inPersonSigners;
      }
      
      if (data.recipientCount) {
        self.recipientCount = data.recipientCount;
      }
      
      if (data.currentRoutingOrder) {
        self.currentRoutingOrder = data.currentRoutingOrder;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get A complex type containing information about the Signer recipient.
     * @return {Array}
     **/
    self.getSigners = function() {
      return self.signers;
    }

    /**
     * set A complex type containing information about the Signer recipient.
     * @param {Array} signers
     **/
    self.setSigners = function (signers) {
      self.signers = signers;
    }
    
    /**
     * get A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
     * @return {Array}
     **/
    self.getAgents = function() {
      return self.agents;
    }

    /**
     * set A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
     * @param {Array} agents
     **/
    self.setAgents = function (agents) {
      self.agents = agents;
    }
    
    /**
     * get A complex type defining the management and access rights of a recipient assigned assigned as an editor on the document.
     * @return {Array}
     **/
    self.getEditors = function() {
      return self.editors;
    }

    /**
     * set A complex type defining the management and access rights of a recipient assigned assigned as an editor on the document.
     * @param {Array} editors
     **/
    self.setEditors = function (editors) {
      self.editors = editors;
    }
    
    /**
     * get Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
     * @return {Array}
     **/
    self.getIntermediaries = function() {
      return self.intermediaries;
    }

    /**
     * set Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
     * @param {Array} intermediaries
     **/
    self.setIntermediaries = function (intermediaries) {
      self.intermediaries = intermediaries;
    }
    
    /**
     * get A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
     * @return {Array}
     **/
    self.getCarbonCopies = function() {
      return self.carbonCopies;
    }

    /**
     * set A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
     * @param {Array} carbonCopies
     **/
    self.setCarbonCopies = function (carbonCopies) {
      self.carbonCopies = carbonCopies;
    }
    
    /**
     * get A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
     * @return {Array}
     **/
    self.getCertifiedDeliveries = function() {
      return self.certifiedDeliveries;
    }

    /**
     * set A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
     * @param {Array} certifiedDeliveries
     **/
    self.setCertifiedDeliveries = function (certifiedDeliveries) {
      self.certifiedDeliveries = certifiedDeliveries;
    }
    
    /**
     * get Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
     * @return {Array}
     **/
    self.getInPersonSigners = function() {
      return self.inPersonSigners;
    }

    /**
     * set Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
     * @param {Array} inPersonSigners
     **/
    self.setInPersonSigners = function (inPersonSigners) {
      self.inPersonSigners = inPersonSigners;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getRecipientCount = function() {
      return self.recipientCount;
    }

    /**
     * set 
     * @param {String} recipientCount
     **/
    self.setRecipientCount = function (recipientCount) {
      self.recipientCount = recipientCount;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCurrentRoutingOrder = function() {
      return self.currentRoutingOrder;
    }

    /**
     * set 
     * @param {String} currentRoutingOrder
     **/
    self.setCurrentRoutingOrder = function (currentRoutingOrder) {
      self.currentRoutingOrder = currentRoutingOrder;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Recipients = Recipients;
  }

  return Recipients;
  
  
}));
