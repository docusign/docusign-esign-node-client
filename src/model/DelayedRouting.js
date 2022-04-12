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
    define(['ApiClient', 'model/EnvelopeDelayRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeDelayRule'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DelayedRouting = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeDelayRule);
  }
}(this, function(ApiClient, EnvelopeDelayRule) {
  'use strict';


  /**
   * The DelayedRouting model module.
   * @module model/DelayedRouting
   */

  /**
   * Constructs a new <code>DelayedRouting</code>.
   * @alias module:model/DelayedRouting
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DelayedRouting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DelayedRouting} obj Optional instance to populate.
   * @return {module:model/DelayedRouting} The populated <code>DelayedRouting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resumeDate')) {
        obj['resumeDate'] = ApiClient.convertToType(data['resumeDate'], 'String');
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [EnvelopeDelayRule]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} resumeDate
   */
  exports.prototype['resumeDate'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EnvelopeDelayRule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


