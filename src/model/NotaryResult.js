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
    define(['ApiClient', 'model/Jurisdiction', 'model/Notary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Jurisdiction'), require('./Notary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryResult = factory(root.Docusign.ApiClient, root.Docusign.Jurisdiction, root.Docusign.Notary);
  }
}(this, function(ApiClient, Jurisdiction, Notary) {
  'use strict';


  /**
   * The NotaryResult model module.
   * @module model/NotaryResult
   */

  /**
   * Constructs a new <code>NotaryResult</code>.
   * Describes a single notary jurisdiction.
   * @alias module:model/NotaryResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotaryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotaryResult} obj Optional instance to populate.
   * @return {module:model/NotaryResult} The populated <code>NotaryResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('jurisdictions')) {
        obj['jurisdictions'] = ApiClient.convertToType(data['jurisdictions'], [Jurisdiction]);
      }
      if (data.hasOwnProperty('notary')) {
        obj['notary'] = Notary.constructFromObject(data['notary']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Jurisdiction>} jurisdictions
   */
  exports.prototype['jurisdictions'] = undefined;
  /**
   * 
   * @member {module:model/Notary} notary
   */
  exports.prototype['notary'] = undefined;



  return exports;
}));


