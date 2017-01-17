(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Money);
  }
}(this, function(module, Money) {
  'use strict';

  
  

  
  var PaymentDetails = function PaymentDetails() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.total) {
        self.total = new data.total.constructor();
        self.total.constructFromObject(data.total);
      }
      
      if (data.status) {
        self.status = data.status;
      }
      
    }

    
    /**
     * @return {Money}
     **/
    self.getTotal = function() {
      return self.total;
    }

    /**
     * @param {Money} total
     **/
    self.setTotal = function (total) {
      self.total = total;
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
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.PaymentDetails = PaymentDetails;
  }

  return PaymentDetails;
  
  
}));
