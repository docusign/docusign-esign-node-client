(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ServiceVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ServiceVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ServiceVersion);
  }
}(this, function(module, ServiceVersion) {
  'use strict';

  
  

  
  var ServiceInformation = function ServiceInformation() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.serviceVersions = [];
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.buildVersion = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.buildBranch = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.buildSHA = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.buildBranchDeployedDateTime = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.linkedSites = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.serviceVersions) {
        self.serviceVersions = data.serviceVersions;
      }
      
      if (data.buildVersion) {
        self.buildVersion = data.buildVersion;
      }
      
      if (data.buildBranch) {
        self.buildBranch = data.buildBranch;
      }
      
      if (data.buildSHA) {
        self.buildSHA = data.buildSHA;
      }
      
      if (data.buildBranchDeployedDateTime) {
        self.buildBranchDeployedDateTime = data.buildBranchDeployedDateTime;
      }
      
      if (data.linkedSites) {
        self.linkedSites = data.linkedSites;
      }
      
    }

    
    /**
     * get 
     * @return {Array}
     **/
    self.getServiceVersions = function() {
      return self.serviceVersions;
    }

    /**
     * set 
     * @param {Array} serviceVersions
     **/
    self.setServiceVersions = function (serviceVersions) {
      self.serviceVersions = serviceVersions;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBuildVersion = function() {
      return self.buildVersion;
    }

    /**
     * set Reserved: TBD
     * @param {String} buildVersion
     **/
    self.setBuildVersion = function (buildVersion) {
      self.buildVersion = buildVersion;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBuildBranch = function() {
      return self.buildBranch;
    }

    /**
     * set Reserved: TBD
     * @param {String} buildBranch
     **/
    self.setBuildBranch = function (buildBranch) {
      self.buildBranch = buildBranch;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBuildSHA = function() {
      return self.buildSHA;
    }

    /**
     * set Reserved: TBD
     * @param {String} buildSHA
     **/
    self.setBuildSHA = function (buildSHA) {
      self.buildSHA = buildSHA;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getBuildBranchDeployedDateTime = function() {
      return self.buildBranchDeployedDateTime;
    }

    /**
     * set Reserved: TBD
     * @param {String} buildBranchDeployedDateTime
     **/
    self.setBuildBranchDeployedDateTime = function (buildBranchDeployedDateTime) {
      self.buildBranchDeployedDateTime = buildBranchDeployedDateTime;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getLinkedSites = function() {
      return self.linkedSites;
    }

    /**
     * set 
     * @param {Array} linkedSites
     **/
    self.setLinkedSites = function (linkedSites) {
      self.linkedSites = linkedSites;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ServiceInformation = ServiceInformation;
  }

  return ServiceInformation;
  
  
}));
