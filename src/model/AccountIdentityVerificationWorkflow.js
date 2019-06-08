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
    define(['ApiClient', 'model/AccountIdentityVerificationStep', 'model/AccountSignatureProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentityVerificationStep'), require('./AccountSignatureProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountIdentityVerificationWorkflow = factory(root.Docusign.ApiClient, root.Docusign.AccountIdentityVerificationStep, root.Docusign.AccountSignatureProvider);
  }
}(this, function(ApiClient, AccountIdentityVerificationStep, AccountSignatureProvider) {
  'use strict';


  /**
   * The AccountIdentityVerificationWorkflow model module.
   * @module model/AccountIdentityVerificationWorkflow
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AccountIdentityVerificationWorkflow</code>.
   * @alias module:model/AccountIdentityVerificationWorkflow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountIdentityVerificationWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentityVerificationWorkflow} obj Optional instance to populate.
   * @return {module:model/AccountIdentityVerificationWorkflow} The populated <code>AccountIdentityVerificationWorkflow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultDescription')) {
        obj['defaultDescription'] = ApiClient.convertToType(data['defaultDescription'], 'String');
      }
      if (data.hasOwnProperty('defaultName')) {
        obj['defaultName'] = ApiClient.convertToType(data['defaultName'], 'String');
      }
      if (data.hasOwnProperty('signatureProvider')) {
        obj['signatureProvider'] = AccountSignatureProvider.constructFromObject(data['signatureProvider']);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [AccountIdentityVerificationStep]);
      }
      if (data.hasOwnProperty('workflowId')) {
        obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
      }
      if (data.hasOwnProperty('workflowResourceKey')) {
        obj['workflowResourceKey'] = ApiClient.convertToType(data['workflowResourceKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} defaultDescription
   */
  exports.prototype['defaultDescription'] = undefined;
  /**
   * 
   * @member {String} defaultName
   */
  exports.prototype['defaultName'] = undefined;
  /**
   * @member {module:model/AccountSignatureProvider} signatureProvider
   */
  exports.prototype['signatureProvider'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AccountIdentityVerificationStep>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * 
   * @member {String} workflowId
   */
  exports.prototype['workflowId'] = undefined;
  /**
   * 
   * @member {String} workflowResourceKey
   */
  exports.prototype['workflowResourceKey'] = undefined;



  return exports;
}));


