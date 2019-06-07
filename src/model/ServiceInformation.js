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
    define(['ApiClient', 'model/ServiceVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServiceVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ServiceInformation = factory(root.Docusign.ApiClient, root.Docusign.ServiceVersion);
  }
}(this, function(ApiClient, ServiceVersion) {
  'use strict';


  /**
   * The ServiceInformation model module.
   * @module model/ServiceInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ServiceInformation</code>.
   * @alias module:model/ServiceInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ServiceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceInformation} obj Optional instance to populate.
   * @return {module:model/ServiceInformation} The populated <code>ServiceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('buildBranch')) {
        obj['buildBranch'] = ApiClient.convertToType(data['buildBranch'], 'String');
      }
      if (data.hasOwnProperty('buildBranchDeployedDateTime')) {
        obj['buildBranchDeployedDateTime'] = ApiClient.convertToType(data['buildBranchDeployedDateTime'], 'String');
      }
      if (data.hasOwnProperty('buildSHA')) {
        obj['buildSHA'] = ApiClient.convertToType(data['buildSHA'], 'String');
      }
      if (data.hasOwnProperty('buildVersion')) {
        obj['buildVersion'] = ApiClient.convertToType(data['buildVersion'], 'String');
      }
      if (data.hasOwnProperty('linkedSites')) {
        obj['linkedSites'] = ApiClient.convertToType(data['linkedSites'], ['String']);
      }
      if (data.hasOwnProperty('serviceVersions')) {
        obj['serviceVersions'] = ApiClient.convertToType(data['serviceVersions'], [ServiceVersion]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {String} buildBranch
   */
  exports.prototype['buildBranch'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} buildBranchDeployedDateTime
   */
  exports.prototype['buildBranchDeployedDateTime'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} buildSHA
   */
  exports.prototype['buildSHA'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} buildVersion
   */
  exports.prototype['buildVersion'] = undefined;
  /**
   * 
   * @member {Array.<String>} linkedSites
   */
  exports.prototype['linkedSites'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ServiceVersion>} serviceVersions
   */
  exports.prototype['serviceVersions'] = undefined;



  return exports;
}));


