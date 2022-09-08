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
    define(['ApiClient', 'model/ContactPhoneNumber', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactPhoneNumber'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Contact = factory(root.Docusign.ApiClient, root.Docusign.ContactPhoneNumber, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ContactPhoneNumber, ErrorDetails) {
  'use strict';


  /**
   * The Contact model module.
   * @module model/Contact
   */

  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cloudProvider')) {
        obj['cloudProvider'] = ApiClient.convertToType(data['cloudProvider'], 'String');
      }
      if (data.hasOwnProperty('cloudProviderContainerId')) {
        obj['cloudProviderContainerId'] = ApiClient.convertToType(data['cloudProviderContainerId'], 'String');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
      if (data.hasOwnProperty('contactPhoneNumbers')) {
        obj['contactPhoneNumbers'] = ApiClient.convertToType(data['contactPhoneNumbers'], [ContactPhoneNumber]);
      }
      if (data.hasOwnProperty('contactUri')) {
        obj['contactUri'] = ApiClient.convertToType(data['contactUri'], 'String');
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('isOwner')) {
        obj['isOwner'] = ApiClient.convertToType(data['isOwner'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('roomContactType')) {
        obj['roomContactType'] = ApiClient.convertToType(data['roomContactType'], 'String');
      }
      if (data.hasOwnProperty('shared')) {
        obj['shared'] = ApiClient.convertToType(data['shared'], 'String');
      }
      if (data.hasOwnProperty('signingGroup')) {
        obj['signingGroup'] = ApiClient.convertToType(data['signingGroup'], 'String');
      }
      if (data.hasOwnProperty('signingGroupName')) {
        obj['signingGroupName'] = ApiClient.convertToType(data['signingGroupName'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} cloudProvider
   */
  exports.prototype['cloudProvider'] = undefined;
  /**
   * 
   * @member {String} cloudProviderContainerId
   */
  exports.prototype['cloudProviderContainerId'] = undefined;
  /**
   * 
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ContactPhoneNumber>} contactPhoneNumbers
   */
  exports.prototype['contactPhoneNumbers'] = undefined;
  /**
   * 
   * @member {String} contactUri
   */
  exports.prototype['contactUri'] = undefined;
  /**
   * 
   * @member {Array.<String>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Boolean} isOwner
   */
  exports.prototype['isOwner'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * 
   * @member {String} roomContactType
   */
  exports.prototype['roomContactType'] = undefined;
  /**
   * When set to **true**, this custom tab is shared.
   * @member {String} shared
   */
  exports.prototype['shared'] = undefined;
  /**
   * 
   * @member {String} signingGroup
   */
  exports.prototype['signingGroup'] = undefined;
  /**
   * The display name for the signing group.   Maximum Length: 100 characters. 
   * @member {String} signingGroupName
   */
  exports.prototype['signingGroupName'] = undefined;



  return exports;
}));


