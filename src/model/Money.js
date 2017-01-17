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

  
  

  
  var Money = function Money() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.amountInBaseUnit) {
        self.amountInBaseUnit = data.amountInBaseUnit;
      }
      
      if (data.currency) {
        self.currency = data.currency;
      }
      
      if (data.displayAmount) {
        self.displayAmount = data.displayAmount;
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getAmountInBaseUnit = function() {
      return self.amountInBaseUnit;
    }

    /**
     * set 
     * @param {String} amountInBaseUnit
     **/
    self.setAmountInBaseUnit = function (amountInBaseUnit) {
      self.amountInBaseUnit = amountInBaseUnit;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCurrency = function() {
      return self.currency;
    }

    /**
     * set 
     * @param {String} currency
     **/
    self.setCurrency = function (currency) {
      self.currency = currency;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDisplayAmount = function() {
      return self.displayAmount;
    }

    /**
     * set 
     * @param {String} displayAmount
     **/
    self.setDisplayAmount = function (displayAmount) {
      self.displayAmount = displayAmount;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Money = Money;
  }

  return Money;
  
  
}));
