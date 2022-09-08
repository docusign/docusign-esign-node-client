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
    define(['ApiClient', 'model/Signer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Signer'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkRecipientsUpdateResponse = factory(root.Docusign.ApiClient, root.Docusign.Signer);
  }
}(this, function(ApiClient, Signer) {
  'use strict';


  /**
   * The BulkRecipientsUpdateResponse model module.
   * @module model/BulkRecipientsUpdateResponse
   */

  /**
   * Constructs a new <code>BulkRecipientsUpdateResponse</code>.
   * @alias module:model/BulkRecipientsUpdateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BulkRecipientsUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkRecipientsUpdateResponse} obj Optional instance to populate.
   * @return {module:model/BulkRecipientsUpdateResponse} The populated <code>BulkRecipientsUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('signer')) {
        obj['signer'] = Signer.constructFromObject(data['signer']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/Signer} signer
   */
  exports.prototype['signer'] = undefined;



  return exports;
}));


