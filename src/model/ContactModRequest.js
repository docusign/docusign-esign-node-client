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
    root.Docusign.ContactModRequest = factory(root.Docusign.ApiClient, root.Docusign.Contact);
  }
}(this, function(ApiClient, Contact) {
  'use strict';


  /**
   * The ContactModRequest model module.
   * @module model/ContactModRequest
   */

  /**
   * Constructs a new <code>ContactModRequest</code>.
   * The request object containing the new information for the contacts.
   * @alias module:model/ContactModRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ContactModRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactModRequest} obj Optional instance to populate.
   * @return {module:model/ContactModRequest} The populated <code>ContactModRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactList')) {
        obj['contactList'] = ApiClient.convertToType(data['contactList'], [Contact]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Contact>} contactList
   */
  exports.prototype['contactList'] = undefined;



  return exports;
}));


