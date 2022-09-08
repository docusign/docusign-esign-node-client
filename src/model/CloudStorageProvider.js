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
    define(['ApiClient', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CloudStorageProvider = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, ErrorDetails) {
  'use strict';


  /**
   * The CloudStorageProvider model module.
   * @module model/CloudStorageProvider
   */

  /**
   * Constructs a new <code>CloudStorageProvider</code>.
   * Contains details about a specific cloud storage provider.
   * @alias module:model/CloudStorageProvider
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CloudStorageProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudStorageProvider} obj Optional instance to populate.
   * @return {module:model/CloudStorageProvider} The populated <code>CloudStorageProvider</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticationUrl')) {
        obj['authenticationUrl'] = ApiClient.convertToType(data['authenticationUrl'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('redirectUrl')) {
        obj['redirectUrl'] = ApiClient.convertToType(data['redirectUrl'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('serviceId')) {
        obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The authentication URL used for the cloud storage provider. This information is only included in the response if the user has not passed authentication for the cloud storage provider. If the redirectUrl query string is provided, the returnUrl is appended to the authenticationUrl. 
   * @member {String} authenticationUrl
   */
  exports.prototype['authenticationUrl'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * The URL the user is redirected to after the cloud storage provider authenticates the user. Using this will append the redirectUrl to the authenticationUrl.  The redirectUrl is restricted to URLs in the docusign.com or docusign.net domains.
   * @member {String} redirectUrl
   */
  exports.prototype['redirectUrl'] = undefined;
  /**
   * The service name for the cloud storage provider.
   * @member {String} service
   */
  exports.prototype['service'] = undefined;
  /**
   * The DocuSign generated ID for the cloud storage provider
   * @member {String} serviceId
   */
  exports.prototype['serviceId'] = undefined;



  return exports;
}));


