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

  
  

  
  var Filter = function Filter() { 
    var self = this;
    
    /**
     * Access token information.
     * datatype: String
     **/
    self.actionRequired = null;
    
    /**
     * 
     * datatype: String
     **/
    self.expires = null;
    
    /**
     * 
     * datatype: String
     **/
    self.isTemplate = null;
    
    /**
     * Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * datatype: String
     **/
    self.status = null;
    
    /**
     * 
     * datatype: String
     **/
    self.fromDateTime = null;
    
    /**
     * Must be set to \"bearer\".
     * datatype: String
     **/
    self.toDateTime = null;
    
    /**
     * 
     * datatype: String
     **/
    self.searchTarget = null;
    
    /**
     * 
     * datatype: String
     **/
    self.searchText = null;
    
    /**
     * 
     * datatype: String
     **/
    self.folderIds = null;
    
    /**
     * 
     * datatype: String
     **/
    self.orderBy = null;
    
    /**
     * 
     * datatype: String
     **/
    self.order = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.actionRequired) {
        self.actionRequired = data.actionRequired;
      }
      
      if (data.expires) {
        self.expires = data.expires;
      }
      
      if (data.isTemplate) {
        self.isTemplate = data.isTemplate;
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
      if (data.fromDateTime) {
        self.fromDateTime = data.fromDateTime;
      }
      
      if (data.toDateTime) {
        self.toDateTime = data.toDateTime;
      }
      
      if (data.searchTarget) {
        self.searchTarget = data.searchTarget;
      }
      
      if (data.searchText) {
        self.searchText = data.searchText;
      }
      
      if (data.folderIds) {
        self.folderIds = data.folderIds;
      }
      
      if (data.orderBy) {
        self.orderBy = data.orderBy;
      }
      
      if (data.order) {
        self.order = data.order;
      }
      
    }

    
    /**
     * get Access token information.
     * @return {String}
     **/
    self.getActionRequired = function() {
      return self.actionRequired;
    }

    /**
     * set Access token information.
     * @param {String} actionRequired
     **/
    self.setActionRequired = function (actionRequired) {
      self.actionRequired = actionRequired;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getExpires = function() {
      return self.expires;
    }

    /**
     * set 
     * @param {String} expires
     **/
    self.setExpires = function (expires) {
      self.expires = expires;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getIsTemplate = function() {
      return self.isTemplate;
    }

    /**
     * set 
     * @param {String} isTemplate
     **/
    self.setIsTemplate = function (isTemplate) {
      self.isTemplate = isTemplate;
    }
    
    /**
     * get Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @return {String}
     **/
    self.getStatus = function() {
      return self.status;
    }

    /**
     * set Indicates the envelope status. Valid values are:\n\n* sent - The envelope is sent to the recipients. \n* created - The envelope is saved as a draft and can be modified and sent later.
     * @param {String} status
     **/
    self.setStatus = function (status) {
      self.status = status;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFromDateTime = function() {
      return self.fromDateTime;
    }

    /**
     * set 
     * @param {String} fromDateTime
     **/
    self.setFromDateTime = function (fromDateTime) {
      self.fromDateTime = fromDateTime;
    }
    
    /**
     * get Must be set to \"bearer\".
     * @return {String}
     **/
    self.getToDateTime = function() {
      return self.toDateTime;
    }

    /**
     * set Must be set to \"bearer\".
     * @param {String} toDateTime
     **/
    self.setToDateTime = function (toDateTime) {
      self.toDateTime = toDateTime;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSearchTarget = function() {
      return self.searchTarget;
    }

    /**
     * set 
     * @param {String} searchTarget
     **/
    self.setSearchTarget = function (searchTarget) {
      self.searchTarget = searchTarget;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSearchText = function() {
      return self.searchText;
    }

    /**
     * set 
     * @param {String} searchText
     **/
    self.setSearchText = function (searchText) {
      self.searchText = searchText;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFolderIds = function() {
      return self.folderIds;
    }

    /**
     * set 
     * @param {String} folderIds
     **/
    self.setFolderIds = function (folderIds) {
      self.folderIds = folderIds;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOrderBy = function() {
      return self.orderBy;
    }

    /**
     * set 
     * @param {String} orderBy
     **/
    self.setOrderBy = function (orderBy) {
      self.orderBy = orderBy;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOrder = function() {
      return self.order;
    }

    /**
     * set 
     * @param {String} order
     **/
    self.setOrder = function (order) {
      self.order = order;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Filter = Filter;
  }

  return Filter;
  
  
}));
