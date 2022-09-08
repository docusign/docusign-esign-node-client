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
    define(['ApiClient', 'model/Folder', 'model/Group', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Folder'), require('./Group'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeTransferRuleRequest = factory(root.Docusign.ApiClient, root.Docusign.Folder, root.Docusign.Group, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, Folder, Group, UserInformation) {
  'use strict';


  /**
   * The EnvelopeTransferRuleRequest model module.
   * @module model/EnvelopeTransferRuleRequest
   */

  /**
   * Constructs a new <code>EnvelopeTransferRuleRequest</code>.
   * This object contains details about the envelope transfer rule that you want to create.
   * @alias module:model/EnvelopeTransferRuleRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeTransferRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeTransferRuleRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopeTransferRuleRequest} The populated <code>EnvelopeTransferRuleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('carbonCopyOriginalOwner')) {
        obj['carbonCopyOriginalOwner'] = ApiClient.convertToType(data['carbonCopyOriginalOwner'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
      }
      if (data.hasOwnProperty('envelopeTransferRuleId')) {
        obj['envelopeTransferRuleId'] = ApiClient.convertToType(data['envelopeTransferRuleId'], 'String');
      }
      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
      if (data.hasOwnProperty('fromGroups')) {
        obj['fromGroups'] = ApiClient.convertToType(data['fromGroups'], [Group]);
      }
      if (data.hasOwnProperty('fromUsers')) {
        obj['fromUsers'] = ApiClient.convertToType(data['fromUsers'], [UserInformation]);
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'String');
      }
      if (data.hasOwnProperty('modifiedUser')) {
        obj['modifiedUser'] = UserInformation.constructFromObject(data['modifiedUser']);
      }
      if (data.hasOwnProperty('toFolder')) {
        obj['toFolder'] = Folder.constructFromObject(data['toFolder']);
      }
      if (data.hasOwnProperty('toUser')) {
        obj['toUser'] = UserInformation.constructFromObject(data['toUser']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} carbonCopyOriginalOwner
   */
  exports.prototype['carbonCopyOriginalOwner'] = undefined;
  /**
   * 
   * @member {String} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * 
   * @member {String} envelopeTransferRuleId
   */
  exports.prototype['envelopeTransferRuleId'] = undefined;
  /**
   * 
   * @member {String} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Group>} fromGroups
   */
  exports.prototype['fromGroups'] = undefined;
  /**
   * 
   * @member {Array.<module:model/UserInformation>} fromUsers
   */
  exports.prototype['fromUsers'] = undefined;
  /**
   * 
   * @member {String} modifiedDate
   */
  exports.prototype['modifiedDate'] = undefined;
  /**
   * Information about the user who last modified the envelope transfer rule.
   * @member {module:model/UserInformation} modifiedUser
   */
  exports.prototype['modifiedUser'] = undefined;
  /**
   * Information about the destination folder to which the envelope is transferred.
   * @member {module:model/Folder} toFolder
   */
  exports.prototype['toFolder'] = undefined;
  /**
   * Information about the user to which the envelope is transferred.
   * @member {module:model/UserInformation} toUser
   */
  exports.prototype['toUser'] = undefined;



  return exports;
}));


