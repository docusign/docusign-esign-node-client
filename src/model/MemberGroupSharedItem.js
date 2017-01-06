(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.Group);
  }
}(this, function(module, ErrorDetails, Group) {
  'use strict';

  
  

  
  var MemberGroupSharedItem = function MemberGroupSharedItem() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.group) {
        self.group = new data.group.constructor();
        self.group.constructFromObject(data.group);
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
    }

    
    /**
     * @return {Group}
     **/
    self.getGroup = function() {
      return self.group;
    }

    /**
     * @param {Group} group
     **/
    self.setGroup = function (group) {
      self.group = group;
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
    
    /**
     * get When set to **true**, this custom tab is shared.
     * @return {String}
     **/
    self.getShared = function() {
      return self.shared;
    }

    /**
     * set When set to **true**, this custom tab is shared.
     * @param {String} shared
     **/
    self.setShared = function (shared) {
      self.shared = shared;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.MemberGroupSharedItem = MemberGroupSharedItem;
  }

  return MemberGroupSharedItem;
  
  
}));
