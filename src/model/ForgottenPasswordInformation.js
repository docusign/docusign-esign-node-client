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
    root.Docusign.ForgottenPasswordInformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ForgottenPasswordInformation model module.
   * @module model/ForgottenPasswordInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ForgottenPasswordInformation</code>.
   * A complex element that has up to four Question/Answer pairs for forgotten password information.
   * @alias module:model/ForgottenPasswordInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ForgottenPasswordInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForgottenPasswordInformation} obj Optional instance to populate.
   * @return {module:model/ForgottenPasswordInformation} The populated <code>ForgottenPasswordInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('forgottenPasswordAnswer1')) {
        obj['forgottenPasswordAnswer1'] = ApiClient.convertToType(data['forgottenPasswordAnswer1'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordAnswer2')) {
        obj['forgottenPasswordAnswer2'] = ApiClient.convertToType(data['forgottenPasswordAnswer2'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordAnswer3')) {
        obj['forgottenPasswordAnswer3'] = ApiClient.convertToType(data['forgottenPasswordAnswer3'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordAnswer4')) {
        obj['forgottenPasswordAnswer4'] = ApiClient.convertToType(data['forgottenPasswordAnswer4'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordQuestion1')) {
        obj['forgottenPasswordQuestion1'] = ApiClient.convertToType(data['forgottenPasswordQuestion1'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordQuestion2')) {
        obj['forgottenPasswordQuestion2'] = ApiClient.convertToType(data['forgottenPasswordQuestion2'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordQuestion3')) {
        obj['forgottenPasswordQuestion3'] = ApiClient.convertToType(data['forgottenPasswordQuestion3'], 'String');
      }
      if (data.hasOwnProperty('forgottenPasswordQuestion4')) {
        obj['forgottenPasswordQuestion4'] = ApiClient.convertToType(data['forgottenPasswordQuestion4'], 'String');
      }
    }
    return obj;
  }

  /**
   * The answer to the first forgotten password challenge question.
   * @member {String} forgottenPasswordAnswer1
   */
  exports.prototype['forgottenPasswordAnswer1'] = undefined;
  /**
   * The answer to the second forgotten password challenge question.
   * @member {String} forgottenPasswordAnswer2
   */
  exports.prototype['forgottenPasswordAnswer2'] = undefined;
  /**
   * The answer to the third forgotten password challenge question.
   * @member {String} forgottenPasswordAnswer3
   */
  exports.prototype['forgottenPasswordAnswer3'] = undefined;
  /**
   * The answer to the fourth forgotten password challenge question.
   * @member {String} forgottenPasswordAnswer4
   */
  exports.prototype['forgottenPasswordAnswer4'] = undefined;
  /**
   * The first challenge question presented to a user who has forgotten their password.
   * @member {String} forgottenPasswordQuestion1
   */
  exports.prototype['forgottenPasswordQuestion1'] = undefined;
  /**
   * The second challenge question presented to a user who has forgotten their password.
   * @member {String} forgottenPasswordQuestion2
   */
  exports.prototype['forgottenPasswordQuestion2'] = undefined;
  /**
   * The third challenge question presented to a user who has forgotten their password.
   * @member {String} forgottenPasswordQuestion3
   */
  exports.prototype['forgottenPasswordQuestion3'] = undefined;
  /**
   * The fourth challenge question presented to a user who has forgotten their password.
   * @member {String} forgottenPasswordQuestion4
   */
  exports.prototype['forgottenPasswordQuestion4'] = undefined;



  return exports;
}));


