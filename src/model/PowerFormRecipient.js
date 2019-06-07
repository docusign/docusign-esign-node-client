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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerFormRecipient = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PowerFormRecipient model module.
   * @module model/PowerFormRecipient
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PowerFormRecipient</code>.
   * @alias module:model/PowerFormRecipient
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PowerFormRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PowerFormRecipient} obj Optional instance to populate.
   * @return {module:model/PowerFormRecipient} The populated <code>PowerFormRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('accessCodeLocked')) {
        obj['accessCodeLocked'] = ApiClient.convertToType(data['accessCodeLocked'], 'String');
      }
      if (data.hasOwnProperty('accessCodeRequired')) {
        obj['accessCodeRequired'] = ApiClient.convertToType(data['accessCodeRequired'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailLocked')) {
        obj['emailLocked'] = ApiClient.convertToType(data['emailLocked'], 'String');
      }
      if (data.hasOwnProperty('idCheckConfigurationName')) {
        obj['idCheckConfigurationName'] = ApiClient.convertToType(data['idCheckConfigurationName'], 'String');
      }
      if (data.hasOwnProperty('idCheckRequired')) {
        obj['idCheckRequired'] = ApiClient.convertToType(data['idCheckRequired'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recipientType')) {
        obj['recipientType'] = ApiClient.convertToType(data['recipientType'], 'String');
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('templateRequiresIdLookup')) {
        obj['templateRequiresIdLookup'] = ApiClient.convertToType(data['templateRequiresIdLookup'], 'String');
      }
      if (data.hasOwnProperty('userNameLocked')) {
        obj['userNameLocked'] = ApiClient.convertToType(data['userNameLocked'], 'String');
      }
    }
    return obj;
  }

  /**
   * If a value is provided, the recipient must enter the value as the access code to view and sign the envelope.   Maximum Length: 50 characters and it must conform to the account's access code format setting.  If blank, but the signer `accessCode` property is set in the envelope, then that value is used.  If blank and the signer `accessCode` property is not set, then the access code is not required.
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * 
   * @member {String} accessCodeLocked
   */
  exports.prototype['accessCodeLocked'] = undefined;
  /**
   * 
   * @member {String} accessCodeRequired
   */
  exports.prototype['accessCodeRequired'] = undefined;
  /**
   * 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * 
   * @member {String} emailLocked
   */
  exports.prototype['emailLocked'] = undefined;
  /**
   * Specifies authentication check by name. The names used here must be the same as the authentication type names used by the account (these name can also be found in the web console sending interface in the Identify list for a recipient,) This overrides any default authentication setting.  *Example*: Your account has ID Check and SMS Authentication available and in the web console Identify list these appear as 'ID Check $' and 'SMS Auth $'. To use ID check in an envelope, the idCheckConfigurationName should be 'ID Check '. If you wanted to use SMS, it would be 'SMS Auth $' and you would need to add you would need to add phone number information to the `smsAuthentication` node.
   * @member {String} idCheckConfigurationName
   */
  exports.prototype['idCheckConfigurationName'] = undefined;
  /**
   * 
   * @member {String} idCheckRequired
   */
  exports.prototype['idCheckRequired'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} recipientType
   */
  exports.prototype['recipientType'] = undefined;
  /**
   * Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * Specifies the routing order of the recipient in the envelope. 
   * @member {String} routingOrder
   */
  exports.prototype['routingOrder'] = undefined;
  /**
   * 
   * @member {String} templateRequiresIdLookup
   */
  exports.prototype['templateRequiresIdLookup'] = undefined;
  /**
   * 
   * @member {String} userNameLocked
   */
  exports.prototype['userNameLocked'] = undefined;



  return exports;
}));


