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
    define(['ApiClient', 'model/AuthorizationUser', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthorizationUser'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopesShareResponse = factory(root.Docusign.ApiClient, root.Docusign.AuthorizationUser, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, AuthorizationUser, ErrorDetails) {
  'use strict';


  /**
   * The EnvelopesShareResponse model module.
   * @module model/EnvelopesShareResponse
   */

  /**
   * Constructs a new <code>EnvelopesShareResponse</code>.
   * @alias module:model/EnvelopesShareResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopesShareResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopesShareResponse} obj Optional instance to populate.
   * @return {module:model/EnvelopesShareResponse} The populated <code>EnvelopesShareResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentUser')) {
        obj['agentUser'] = AuthorizationUser.constructFromObject(data['agentUser']);
      }
      if (data.hasOwnProperty('createdTimestamp')) {
        obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('modifiedTimestamp')) {
        obj['modifiedTimestamp'] = ApiClient.convertToType(data['modifiedTimestamp'], 'String');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('senderInfo')) {
        obj['senderInfo'] = AuthorizationUser.constructFromObject(data['senderInfo']);
      }
      if (data.hasOwnProperty('shareId')) {
        obj['shareId'] = ApiClient.convertToType(data['shareId'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/AuthorizationUser} agentUser
   */
  exports.prototype['agentUser'] = undefined;
  /**
   * 
   * @member {String} createdTimestamp
   */
  exports.prototype['createdTimestamp'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * Array or errors.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} modifiedTimestamp
   */
  exports.prototype['modifiedTimestamp'] = undefined;
  /**
   * 
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * 
   * @member {module:model/AuthorizationUser} senderInfo
   */
  exports.prototype['senderInfo'] = undefined;
  /**
   * 
   * @member {String} shareId
   */
  exports.prototype['shareId'] = undefined;
  /**
   * 
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;



  return exports;
}));


