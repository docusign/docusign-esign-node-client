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
    define(['ApiClient', 'model/ErrorDetails', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.LockInformation = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, ErrorDetails, UserInfo) {
  'use strict';


  /**
   * The LockInformation model module.
   * @module model/LockInformation
   */

  /**
   * Constructs a new <code>LockInformation</code>.
   * @alias module:model/LockInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LockInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LockInformation} obj Optional instance to populate.
   * @return {module:model/LockInformation} The populated <code>LockInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('lockDurationInSeconds')) {
        obj['lockDurationInSeconds'] = ApiClient.convertToType(data['lockDurationInSeconds'], 'String');
      }
      if (data.hasOwnProperty('lockedByApp')) {
        obj['lockedByApp'] = ApiClient.convertToType(data['lockedByApp'], 'String');
      }
      if (data.hasOwnProperty('lockedByUser')) {
        obj['lockedByUser'] = UserInfo.constructFromObject(data['lockedByUser']);
      }
      if (data.hasOwnProperty('lockedUntilDateTime')) {
        obj['lockedUntilDateTime'] = ApiClient.convertToType(data['lockedUntilDateTime'], 'String');
      }
      if (data.hasOwnProperty('lockToken')) {
        obj['lockToken'] = ApiClient.convertToType(data['lockToken'], 'String');
      }
      if (data.hasOwnProperty('lockType')) {
        obj['lockType'] = ApiClient.convertToType(data['lockType'], 'String');
      }
      if (data.hasOwnProperty('useScratchPad')) {
        obj['useScratchPad'] = ApiClient.convertToType(data['useScratchPad'], 'String');
      }
    }
    return obj;
  }

  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Sets the time, in seconds, until the lock expires when there is no activity on the envelope.  If no value is entered, then the default value of 300 seconds is used. The maximum value is 1,800 seconds.  The lock duration can be extended. 
   * @member {String} lockDurationInSeconds
   */
  exports.prototype['lockDurationInSeconds'] = undefined;
  /**
   * Specifies the friendly name of  the application that is locking the envelope.
   * @member {String} lockedByApp
   */
  exports.prototype['lockedByApp'] = undefined;
  /**
   * A complex type containing information about the user that has the envelope or template locked.
   * @member {module:model/UserInfo} lockedByUser
   */
  exports.prototype['lockedByUser'] = undefined;
  /**
   * The datetime until the envelope lock expires.
   * @member {String} lockedUntilDateTime
   */
  exports.prototype['lockedUntilDateTime'] = undefined;
  /**
   * A unique identifier provided to the owner of the envelope lock.   Used to prove ownership of the lock.
   * @member {String} lockToken
   */
  exports.prototype['lockToken'] = undefined;
  /**
   * The type of envelope lock.  Currently \"edit\" is the only supported type.
   * @member {String} lockType
   */
  exports.prototype['lockType'] = undefined;
  /**
   * Reserved for future use.  Indicates whether a scratchpad is used for editing information.  
   * @member {String} useScratchPad
   */
  exports.prototype['useScratchPad'] = undefined;



  return exports;
}));


