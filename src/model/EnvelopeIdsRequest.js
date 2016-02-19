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

  
  

  
  var EnvelopeIdsRequest = function EnvelopeIdsRequest() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.envelopeIds = [];
    
    /**
     * A list of transaction Id's used to determining the status of envelopes sent asynchronously. See **transactionId** property on envelopes.
     * datatype: Array
     **/
    self.transactionIds = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.envelopeIds) {
        self.envelopeIds = data.envelopeIds;
      }
      
      if (data.transactionIds) {
        self.transactionIds = data.transactionIds;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getEnvelopeIds = function() {
      return self.envelopeIds;
    }

    /**
     * set 
     * @param {Array} envelopeIds
     **/
    self.setEnvelopeIds = function (envelopeIds) {
      self.envelopeIds = envelopeIds;
    }
    
    /**
     * get A list of transaction Id's used to determining the status of envelopes sent asynchronously. See **transactionId** property on envelopes.
     * @return {Array}
     **/
    self.getTransactionIds = function() {
      return self.transactionIds;
    }

    /**
     * set A list of transaction Id's used to determining the status of envelopes sent asynchronously. See **transactionId** property on envelopes.
     * @param {Array} transactionIds
     **/
    self.setTransactionIds = function (transactionIds) {
      self.transactionIds = transactionIds;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.EnvelopeIdsRequest = EnvelopeIdsRequest;
  }

  return EnvelopeIdsRequest;
  
  
}));
