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
    define(['ApiClient', 'model/BillingPlanPreview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingPlanPreview'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NewAccountSummary = factory(root.Docusign.ApiClient, root.Docusign.BillingPlanPreview);
  }
}(this, function(ApiClient, BillingPlanPreview) {
  'use strict';


  /**
   * The NewAccountSummary model module.
   * @module model/NewAccountSummary
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>NewAccountSummary</code>.
   * @alias module:model/NewAccountSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewAccountSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewAccountSummary} obj Optional instance to populate.
   * @return {module:model/NewAccountSummary} The populated <code>NewAccountSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountIdGuid')) {
        obj['accountIdGuid'] = ApiClient.convertToType(data['accountIdGuid'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('apiPassword')) {
        obj['apiPassword'] = ApiClient.convertToType(data['apiPassword'], 'String');
      }
      if (data.hasOwnProperty('baseUrl')) {
        obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
      }
      if (data.hasOwnProperty('billingPlanPreview')) {
        obj['billingPlanPreview'] = BillingPlanPreview.constructFromObject(data['billingPlanPreview']);
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The GUID associated with the account ID.
   * @member {String} accountIdGuid
   */
  exports.prototype['accountIdGuid'] = undefined;
  /**
   * The account name for the new account.
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * Contains a token that can be used for authentication in API calls instead of using the user name and password.
   * @member {String} apiPassword
   */
  exports.prototype['apiPassword'] = undefined;
  /**
   * The URL that should be used for successive calls to this account. It includes the protocal (https), the DocuSign server where the account is located, and the account number. Use this Url to make API calls against this account. Many of the API calls provide Uri's that are relative to this baseUrl.
   * @member {String} baseUrl
   */
  exports.prototype['baseUrl'] = undefined;
  /**
   * @member {module:model/BillingPlanPreview} billingPlanPreview
   */
  exports.prototype['billingPlanPreview'] = undefined;
  /**
   * Specifies the user ID of the new user.
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


