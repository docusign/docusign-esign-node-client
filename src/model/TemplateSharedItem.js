(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails', './MemberGroupSharedItem', './UserInfo', './UserSharedItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'), require('./MemberGroupSharedItem'), require('./UserInfo'), require('./UserSharedItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails, root.Docusign.MemberGroupSharedItem, root.Docusign.UserInfo, root.Docusign.UserSharedItem);
  }
}(this, function(module, ErrorDetails, MemberGroupSharedItem, UserInfo, UserSharedItem) {
  'use strict';

  
  

  
  var TemplateSharedItem = function TemplateSharedItem() { 
    var self = this;
    
    /**
     * 
     * datatype: Array
     **/
    self.sharedUsers = [];
    
    /**
     * 
     * datatype: Array
     **/
    self.sharedGroups = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.templateId) {
        self.templateId = data.templateId;
      }
      
      if (data.templateName) {
        self.templateName = data.templateName;
      }
      
      if (data.owner) {
        self.owner = new data.owner.constructor();
        self.owner.constructFromObject(data.owner);
      }
      
      if (data.sharedUsers) {
        self.sharedUsers = data.sharedUsers;
      }
      
      if (data.sharedGroups) {
        self.sharedGroups = data.sharedGroups;
      }
      
      if (data.shared) {
        self.shared = data.shared;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new data.errorDetails.constructor();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @return {String}
     **/
    self.getTemplateId = function() {
      return self.templateId;
    }

    /**
     * set The unique identifier of the template. If this is not provided, DocuSign will generate a value.
     * @param {String} templateId
     **/
    self.setTemplateId = function (templateId) {
      self.templateId = templateId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTemplateName = function() {
      return self.templateName;
    }

    /**
     * set 
     * @param {String} templateName
     **/
    self.setTemplateName = function (templateName) {
      self.templateName = templateName;
    }
    
    /**
     * @return {UserInfo}
     **/
    self.getOwner = function() {
      return self.owner;
    }

    /**
     * @param {UserInfo} owner
     **/
    self.setOwner = function (owner) {
      self.owner = owner;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getSharedUsers = function() {
      return self.sharedUsers;
    }

    /**
     * set 
     * @param {Array} sharedUsers
     **/
    self.setSharedUsers = function (sharedUsers) {
      self.sharedUsers = sharedUsers;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getSharedGroups = function() {
      return self.sharedGroups;
    }

    /**
     * set 
     * @param {Array} sharedGroups
     **/
    self.setSharedGroups = function (sharedGroups) {
      self.sharedGroups = sharedGroups;
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
    module.TemplateSharedItem = TemplateSharedItem;
  }

  return TemplateSharedItem;
  
  
}));
