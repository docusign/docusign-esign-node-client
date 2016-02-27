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

  
  

  
  var ListItem = function ListItem() { 
    var self = this;
    
    /**
     * Specifies the text that is shown in the dropdown list.
     * datatype: String
     **/
    self.text = null;
    
    /**
     * Specifies the value that is used when the list item is selected.
     * datatype: String
     **/
    self.value = null;
    
    /**
     * When set to **true**, indicates that this item is the default selection shown to a signer. \n\nOnly one selection can be set as the default.
     * datatype: String
     **/
    self.selected = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.text) {
        self.text = data.text;
      }
      
      if (data.value) {
        self.value = data.value;
      }
      
      if (data.selected) {
        self.selected = data.selected;
      }
      
    }

    
    /**
     * get Specifies the text that is shown in the dropdown list.
     * @return {String}
     **/
    self.getText = function() {
      return self.text;
    }

    /**
     * set Specifies the text that is shown in the dropdown list.
     * @param {String} text
     **/
    self.setText = function (text) {
      self.text = text;
    }
    
    /**
     * get Specifies the value that is used when the list item is selected.
     * @return {String}
     **/
    self.getValue = function() {
      return self.value;
    }

    /**
     * set Specifies the value that is used when the list item is selected.
     * @param {String} value
     **/
    self.setValue = function (value) {
      self.value = value;
    }
    
    /**
     * get When set to **true**, indicates that this item is the default selection shown to a signer. \n\nOnly one selection can be set as the default.
     * @return {String}
     **/
    self.getSelected = function() {
      return self.selected;
    }

    /**
     * set When set to **true**, indicates that this item is the default selection shown to a signer. \n\nOnly one selection can be set as the default.
     * @param {String} selected
     **/
    self.setSelected = function (selected) {
      self.selected = selected;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.ListItem = ListItem;
  }

  return ListItem;
  
  
}));
