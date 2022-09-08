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
    define(['ApiClient', 'model/Contact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contact'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ContactUpdateResponse = factory(root.Docusign.ApiClient, root.Docusign.Contact);
  }
}(this, function(ApiClient, Contact) {
  'use strict';


  /**
   * The ContactUpdateResponse model module.
   * @module model/ContactUpdateResponse
   */

  /**
   * Constructs a new <code>ContactUpdateResponse</code>.
   * This response objects shows the updated details for the contacts.
   * @alias module:model/ContactUpdateResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ContactUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactUpdateResponse} obj Optional instance to populate.
   * @return {module:model/ContactUpdateResponse} The populated <code>ContactUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Contact>} contacts
   */
  exports.prototype['contacts'] = undefined;



  return exports;
}));


