(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './BulkEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./BulkEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.BulkEnvelope);
  }
}(this, function(module, BulkEnvelope) {
  'use strict';

  
  

  
  var BulkEnvelopeStatus = function BulkEnvelopeStatus() { 
    var self = this;
    
    /**
     * The number of items returned in this response.
     * datatype: String
     **/
    self.batchSize = null;
    
    /**
     * Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches.
     * datatype: String
     **/
    self.batchId = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.bulkEnvelopesBatchUri = null;
    
    /**
     * The number of entries with a status of failed.
     * datatype: String
     **/
    self.failed = null;
    
    /**
     * The number of entries with a status of queued.
     * datatype: String
     **/
    self.queued = null;
    
    /**
     * The number of entries with a status of sent.
     * datatype: String
     **/
    self.sent = null;
    
    /**
     * 
     * datatype: String
     **/
    self.submittedDate = null;
    
    /**
     * The number of results returned in this response.
     * datatype: String
     **/
    self.resultSetSize = null;
    
    /**
     * Starting position of the current result set.
     * datatype: String
     **/
    self.startPosition = null;
    
    /**
     * The last position in the result set.
     * datatype: String
     **/
    self.endPosition = null;
    
    /**
     * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * datatype: String
     **/
    self.totalSetSize = null;
    
    /**
     * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * datatype: String
     **/
    self.nextUri = null;
    
    /**
     * The postal code for the billing address.
     * datatype: String
     **/
    self.previousUri = null;
    
    /**
     * Reserved: TBD
     * datatype: Array
     **/
    self.bulkEnvelopes = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.batchSize) {
        self.batchSize = data.batchSize;
      }
      
      if (data.batchId) {
        self.batchId = data.batchId;
      }
      
      if (data.bulkEnvelopesBatchUri) {
        self.bulkEnvelopesBatchUri = data.bulkEnvelopesBatchUri;
      }
      
      if (data.failed) {
        self.failed = data.failed;
      }
      
      if (data.queued) {
        self.queued = data.queued;
      }
      
      if (data.sent) {
        self.sent = data.sent;
      }
      
      if (data.submittedDate) {
        self.submittedDate = data.submittedDate;
      }
      
      if (data.resultSetSize) {
        self.resultSetSize = data.resultSetSize;
      }
      
      if (data.startPosition) {
        self.startPosition = data.startPosition;
      }
      
      if (data.endPosition) {
        self.endPosition = data.endPosition;
      }
      
      if (data.totalSetSize) {
        self.totalSetSize = data.totalSetSize;
      }
      
      if (data.nextUri) {
        self.nextUri = data.nextUri;
      }
      
      if (data.previousUri) {
        self.previousUri = data.previousUri;
      }
      
      if (data.bulkEnvelopes) {
        self.bulkEnvelopes = data.bulkEnvelopes;
      }
      
    }

    
    /**
     * get The number of items returned in this response.
     * @return {String}
     **/
    self.getBatchSize = function() {
      return self.batchSize;
    }

    /**
     * set The number of items returned in this response.
     * @param {String} batchSize
     **/
    self.setBatchSize = function (batchSize) {
      self.batchSize = batchSize;
    }
    
    /**
     * get Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches.
     * @return {String}
     **/
    self.getBatchId = function() {
      return self.batchId;
    }

    /**
     * set Specifies an identifier which can be used to retrieve a more detailed status of individual bulk recipient batches.
     * @param {String} batchId
     **/
    self.setBatchId = function (batchId) {
      self.batchId = batchId;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBulkEnvelopesBatchUri = function() {
      return self.bulkEnvelopesBatchUri;
    }

    /**
     * set Reserved: TBD
     * @param {String} bulkEnvelopesBatchUri
     **/
    self.setBulkEnvelopesBatchUri = function (bulkEnvelopesBatchUri) {
      self.bulkEnvelopesBatchUri = bulkEnvelopesBatchUri;
    }
    
    /**
     * get The number of entries with a status of failed.
     * @return {String}
     **/
    self.getFailed = function() {
      return self.failed;
    }

    /**
     * set The number of entries with a status of failed.
     * @param {String} failed
     **/
    self.setFailed = function (failed) {
      self.failed = failed;
    }
    
    /**
     * get The number of entries with a status of queued.
     * @return {String}
     **/
    self.getQueued = function() {
      return self.queued;
    }

    /**
     * set The number of entries with a status of queued.
     * @param {String} queued
     **/
    self.setQueued = function (queued) {
      self.queued = queued;
    }
    
    /**
     * get The number of entries with a status of sent.
     * @return {String}
     **/
    self.getSent = function() {
      return self.sent;
    }

    /**
     * set The number of entries with a status of sent.
     * @param {String} sent
     **/
    self.setSent = function (sent) {
      self.sent = sent;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSubmittedDate = function() {
      return self.submittedDate;
    }

    /**
     * set 
     * @param {String} submittedDate
     **/
    self.setSubmittedDate = function (submittedDate) {
      self.submittedDate = submittedDate;
    }
    
    /**
     * get The number of results returned in this response.
     * @return {String}
     **/
    self.getResultSetSize = function() {
      return self.resultSetSize;
    }

    /**
     * set The number of results returned in this response.
     * @param {String} resultSetSize
     **/
    self.setResultSetSize = function (resultSetSize) {
      self.resultSetSize = resultSetSize;
    }
    
    /**
     * get Starting position of the current result set.
     * @return {String}
     **/
    self.getStartPosition = function() {
      return self.startPosition;
    }

    /**
     * set Starting position of the current result set.
     * @param {String} startPosition
     **/
    self.setStartPosition = function (startPosition) {
      self.startPosition = startPosition;
    }
    
    /**
     * get The last position in the result set.
     * @return {String}
     **/
    self.getEndPosition = function() {
      return self.endPosition;
    }

    /**
     * set The last position in the result set.
     * @param {String} endPosition
     **/
    self.setEndPosition = function (endPosition) {
      self.endPosition = endPosition;
    }
    
    /**
     * get The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * @return {String}
     **/
    self.getTotalSetSize = function() {
      return self.totalSetSize;
    }

    /**
     * set The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
     * @param {String} totalSetSize
     **/
    self.setTotalSetSize = function (totalSetSize) {
      self.totalSetSize = totalSetSize;
    }
    
    /**
     * get The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * @return {String}
     **/
    self.getNextUri = function() {
      return self.nextUri;
    }

    /**
     * set The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null.
     * @param {String} nextUri
     **/
    self.setNextUri = function (nextUri) {
      self.nextUri = nextUri;
    }
    
    /**
     * get The postal code for the billing address.
     * @return {String}
     **/
    self.getPreviousUri = function() {
      return self.previousUri;
    }

    /**
     * set The postal code for the billing address.
     * @param {String} previousUri
     **/
    self.setPreviousUri = function (previousUri) {
      self.previousUri = previousUri;
    }
    
    /**
     * get Reserved: TBD
     * @return {Array}
     **/
    self.getBulkEnvelopes = function() {
      return self.bulkEnvelopes;
    }

    /**
     * set Reserved: TBD
     * @param {Array} bulkEnvelopes
     **/
    self.setBulkEnvelopes = function (bulkEnvelopes) {
      self.bulkEnvelopes = bulkEnvelopes;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.BulkEnvelopeStatus = BulkEnvelopeStatus;
  }

  return BulkEnvelopeStatus;
  
  
}));
