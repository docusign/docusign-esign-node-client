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
    define(['ApiClient', 'model/AccountMinimumPasswordLength', 'model/AccountPasswordExpirePasswordDays', 'model/AccountPasswordLockoutDurationMinutes', 'model/AccountPasswordLockoutDurationType', 'model/AccountPasswordMinimumPasswordAgeDays', 'model/AccountPasswordQuestionsRequired', 'model/AccountPasswordStrengthType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountMinimumPasswordLength'), require('./AccountPasswordExpirePasswordDays'), require('./AccountPasswordLockoutDurationMinutes'), require('./AccountPasswordLockoutDurationType'), require('./AccountPasswordMinimumPasswordAgeDays'), require('./AccountPasswordQuestionsRequired'), require('./AccountPasswordStrengthType'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountPasswordRules = factory(root.Docusign.ApiClient, root.Docusign.AccountMinimumPasswordLength, root.Docusign.AccountPasswordExpirePasswordDays, root.Docusign.AccountPasswordLockoutDurationMinutes, root.Docusign.AccountPasswordLockoutDurationType, root.Docusign.AccountPasswordMinimumPasswordAgeDays, root.Docusign.AccountPasswordQuestionsRequired, root.Docusign.AccountPasswordStrengthType);
  }
}(this, function(ApiClient, AccountMinimumPasswordLength, AccountPasswordExpirePasswordDays, AccountPasswordLockoutDurationMinutes, AccountPasswordLockoutDurationType, AccountPasswordMinimumPasswordAgeDays, AccountPasswordQuestionsRequired, AccountPasswordStrengthType) {
  'use strict';


  /**
   * The AccountPasswordRules model module.
   * @module model/AccountPasswordRules
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountPasswordRules</code>.
   * @alias module:model/AccountPasswordRules
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountPasswordRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPasswordRules} obj Optional instance to populate.
   * @return {module:model/AccountPasswordRules} The populated <code>AccountPasswordRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirePassword')) {
        obj['expirePassword'] = ApiClient.convertToType(data['expirePassword'], 'String');
      }
      if (data.hasOwnProperty('expirePasswordDays')) {
        obj['expirePasswordDays'] = ApiClient.convertToType(data['expirePasswordDays'], 'String');
      }
      if (data.hasOwnProperty('expirePasswordDaysMetadata')) {
        obj['expirePasswordDaysMetadata'] = AccountPasswordExpirePasswordDays.constructFromObject(data['expirePasswordDaysMetadata']);
      }
      if (data.hasOwnProperty('lockoutDurationMinutes')) {
        obj['lockoutDurationMinutes'] = ApiClient.convertToType(data['lockoutDurationMinutes'], 'String');
      }
      if (data.hasOwnProperty('lockoutDurationMinutesMetadata')) {
        obj['lockoutDurationMinutesMetadata'] = AccountPasswordLockoutDurationMinutes.constructFromObject(data['lockoutDurationMinutesMetadata']);
      }
      if (data.hasOwnProperty('lockoutDurationType')) {
        obj['lockoutDurationType'] = ApiClient.convertToType(data['lockoutDurationType'], 'String');
      }
      if (data.hasOwnProperty('lockoutDurationTypeMetadata')) {
        obj['lockoutDurationTypeMetadata'] = AccountPasswordLockoutDurationType.constructFromObject(data['lockoutDurationTypeMetadata']);
      }
      if (data.hasOwnProperty('minimumPasswordAgeDays')) {
        obj['minimumPasswordAgeDays'] = ApiClient.convertToType(data['minimumPasswordAgeDays'], 'String');
      }
      if (data.hasOwnProperty('minimumPasswordAgeDaysMetadata')) {
        obj['minimumPasswordAgeDaysMetadata'] = AccountPasswordMinimumPasswordAgeDays.constructFromObject(data['minimumPasswordAgeDaysMetadata']);
      }
      if (data.hasOwnProperty('minimumPasswordLength')) {
        obj['minimumPasswordLength'] = ApiClient.convertToType(data['minimumPasswordLength'], 'String');
      }
      if (data.hasOwnProperty('minimumPasswordLengthMetadata')) {
        obj['minimumPasswordLengthMetadata'] = AccountMinimumPasswordLength.constructFromObject(data['minimumPasswordLengthMetadata']);
      }
      if (data.hasOwnProperty('passwordIncludeDigit')) {
        obj['passwordIncludeDigit'] = ApiClient.convertToType(data['passwordIncludeDigit'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeDigitOrSpecialCharacter')) {
        obj['passwordIncludeDigitOrSpecialCharacter'] = ApiClient.convertToType(data['passwordIncludeDigitOrSpecialCharacter'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeLowerCase')) {
        obj['passwordIncludeLowerCase'] = ApiClient.convertToType(data['passwordIncludeLowerCase'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeSpecialCharacter')) {
        obj['passwordIncludeSpecialCharacter'] = ApiClient.convertToType(data['passwordIncludeSpecialCharacter'], 'String');
      }
      if (data.hasOwnProperty('passwordIncludeUpperCase')) {
        obj['passwordIncludeUpperCase'] = ApiClient.convertToType(data['passwordIncludeUpperCase'], 'String');
      }
      if (data.hasOwnProperty('passwordStrengthType')) {
        obj['passwordStrengthType'] = ApiClient.convertToType(data['passwordStrengthType'], 'String');
      }
      if (data.hasOwnProperty('passwordStrengthTypeMetadata')) {
        obj['passwordStrengthTypeMetadata'] = AccountPasswordStrengthType.constructFromObject(data['passwordStrengthTypeMetadata']);
      }
      if (data.hasOwnProperty('questionsRequired')) {
        obj['questionsRequired'] = ApiClient.convertToType(data['questionsRequired'], 'String');
      }
      if (data.hasOwnProperty('questionsRequiredMetadata')) {
        obj['questionsRequiredMetadata'] = AccountPasswordQuestionsRequired.constructFromObject(data['questionsRequiredMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} expirePassword
   */
  exports.prototype['expirePassword'] = undefined;
  /**
   * 
   * @member {String} expirePasswordDays
   */
  exports.prototype['expirePasswordDays'] = undefined;
  /**
   * @member {module:model/AccountPasswordExpirePasswordDays} expirePasswordDaysMetadata
   */
  exports.prototype['expirePasswordDaysMetadata'] = undefined;
  /**
   * 
   * @member {String} lockoutDurationMinutes
   */
  exports.prototype['lockoutDurationMinutes'] = undefined;
  /**
   * @member {module:model/AccountPasswordLockoutDurationMinutes} lockoutDurationMinutesMetadata
   */
  exports.prototype['lockoutDurationMinutesMetadata'] = undefined;
  /**
   * 
   * @member {String} lockoutDurationType
   */
  exports.prototype['lockoutDurationType'] = undefined;
  /**
   * @member {module:model/AccountPasswordLockoutDurationType} lockoutDurationTypeMetadata
   */
  exports.prototype['lockoutDurationTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} minimumPasswordAgeDays
   */
  exports.prototype['minimumPasswordAgeDays'] = undefined;
  /**
   * @member {module:model/AccountPasswordMinimumPasswordAgeDays} minimumPasswordAgeDaysMetadata
   */
  exports.prototype['minimumPasswordAgeDaysMetadata'] = undefined;
  /**
   * 
   * @member {String} minimumPasswordLength
   */
  exports.prototype['minimumPasswordLength'] = undefined;
  /**
   * @member {module:model/AccountMinimumPasswordLength} minimumPasswordLengthMetadata
   */
  exports.prototype['minimumPasswordLengthMetadata'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeDigit
   */
  exports.prototype['passwordIncludeDigit'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeDigitOrSpecialCharacter
   */
  exports.prototype['passwordIncludeDigitOrSpecialCharacter'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeLowerCase
   */
  exports.prototype['passwordIncludeLowerCase'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeSpecialCharacter
   */
  exports.prototype['passwordIncludeSpecialCharacter'] = undefined;
  /**
   * 
   * @member {String} passwordIncludeUpperCase
   */
  exports.prototype['passwordIncludeUpperCase'] = undefined;
  /**
   * 
   * @member {String} passwordStrengthType
   */
  exports.prototype['passwordStrengthType'] = undefined;
  /**
   * @member {module:model/AccountPasswordStrengthType} passwordStrengthTypeMetadata
   */
  exports.prototype['passwordStrengthTypeMetadata'] = undefined;
  /**
   * 
   * @member {String} questionsRequired
   */
  exports.prototype['questionsRequired'] = undefined;
  /**
   * @member {module:model/AccountPasswordQuestionsRequired} questionsRequiredMetadata
   */
  exports.prototype['questionsRequiredMetadata'] = undefined;



  return exports;
}));


