/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/EnvelopeViewSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeViewSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeViewRequest = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeViewSettings);
  }
}(this, function(ApiClient, EnvelopeViewSettings) {
  'use strict';


  /**
   * The EnvelopeViewRequest model module.
   * @module model/EnvelopeViewRequest
   */

  /**
   * Constructs a new <code>EnvelopeViewRequest</code>.
   * @alias module:model/EnvelopeViewRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeViewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeViewRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopeViewRequest} The populated <code>EnvelopeViewRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = EnvelopeViewSettings.constructFromObject(data['settings']);
      }
      if (data.hasOwnProperty('viewAccess')) {
        obj['viewAccess'] = ApiClient.convertToType(data['viewAccess'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * 
   * @member {module:model/EnvelopeViewSettings} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * 
   * @member {String} viewAccess
   */
  exports.prototype['viewAccess'] = undefined;



  return exports;
}));


