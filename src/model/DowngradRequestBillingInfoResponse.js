/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DowngradePlanUpdateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DowngradePlanUpdateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DowngradRequestBillingInfoResponse = factory(root.Docusign.ApiClient, root.Docusign.DowngradePlanUpdateResponse);
  }
}(this, function(ApiClient, DowngradePlanUpdateResponse) {
  'use strict';


  /**
   * The DowngradRequestBillingInfoResponse model module.
   * @module model/DowngradRequestBillingInfoResponse
   */

  /**
   * Constructs a new <code>DowngradRequestBillingInfoResponse</code>.
   * @alias module:model/DowngradRequestBillingInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DowngradRequestBillingInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DowngradRequestBillingInfoResponse} obj Optional instance to populate.
   * @return {module:model/DowngradRequestBillingInfoResponse} The populated <code>DowngradRequestBillingInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downgradePlanInformation')) {
        obj['downgradePlanInformation'] = DowngradePlanUpdateResponse.constructFromObject(data['downgradePlanInformation']);
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/DowngradePlanUpdateResponse} downgradePlanInformation
   */
  exports.prototype['downgradePlanInformation'] = undefined;
  /**
   * 
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;



  return exports;
}));


