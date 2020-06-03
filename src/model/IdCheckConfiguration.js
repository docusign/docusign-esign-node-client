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
    define(['ApiClient', 'model/IdCheckSecurityStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdCheckSecurityStep'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.IdCheckConfiguration = factory(root.Docusign.ApiClient, root.Docusign.IdCheckSecurityStep);
  }
}(this, function(ApiClient, IdCheckSecurityStep) {
  'use strict';


  /**
   * The IdCheckConfiguration model module.
   * @module model/IdCheckConfiguration
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>IdCheckConfiguration</code>.
   * @alias module:model/IdCheckConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IdCheckConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdCheckConfiguration} obj Optional instance to populate.
   * @return {module:model/IdCheckConfiguration} The populated <code>IdCheckConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authSteps')) {
        obj['authSteps'] = ApiClient.convertToType(data['authSteps'], [IdCheckSecurityStep]);
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/IdCheckSecurityStep>} authSteps
   */
  exports.prototype['authSteps'] = undefined;
  /**
   * 
   * @member {String} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


