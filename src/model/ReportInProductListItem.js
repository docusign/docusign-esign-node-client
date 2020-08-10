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
    root.Docusign.ReportInProductListItem = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReportInProductListItem model module.
   * @module model/ReportInProductListItem
   */

  /**
   * Constructs a new <code>ReportInProductListItem</code>.
   * @alias module:model/ReportInProductListItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductListItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductListItem} obj Optional instance to populate.
   * @return {module:model/ReportInProductListItem} The populated <code>ReportInProductListItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('getUri')) {
        obj['getUri'] = ApiClient.convertToType(data['getUri'], 'String');
      }
      if (data.hasOwnProperty('lastScheduledExecutionDate')) {
        obj['lastScheduledExecutionDate'] = ApiClient.convertToType(data['lastScheduledExecutionDate'], 'String');
      }
      if (data.hasOwnProperty('lastScheduledExecutionSuccessDate')) {
        obj['lastScheduledExecutionSuccessDate'] = ApiClient.convertToType(data['lastScheduledExecutionSuccessDate'], 'String');
      }
      if (data.hasOwnProperty('reportCustomizedId')) {
        obj['reportCustomizedId'] = ApiClient.convertToType(data['reportCustomizedId'], 'String');
      }
      if (data.hasOwnProperty('reportDescription')) {
        obj['reportDescription'] = ApiClient.convertToType(data['reportDescription'], 'String');
      }
      if (data.hasOwnProperty('reportId')) {
        obj['reportId'] = ApiClient.convertToType(data['reportId'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('reportType')) {
        obj['reportType'] = ApiClient.convertToType(data['reportType'], 'String');
      }
      if (data.hasOwnProperty('runUri')) {
        obj['runUri'] = ApiClient.convertToType(data['runUri'], 'String');
      }
      if (data.hasOwnProperty('saveUri')) {
        obj['saveUri'] = ApiClient.convertToType(data['saveUri'], 'String');
      }
      if (data.hasOwnProperty('scheduleCreateDate')) {
        obj['scheduleCreateDate'] = ApiClient.convertToType(data['scheduleCreateDate'], 'String');
      }
      if (data.hasOwnProperty('scheduleEndDate')) {
        obj['scheduleEndDate'] = ApiClient.convertToType(data['scheduleEndDate'], 'String');
      }
      if (data.hasOwnProperty('scheduleId')) {
        obj['scheduleId'] = ApiClient.convertToType(data['scheduleId'], 'String');
      }
      if (data.hasOwnProperty('scheduleRenewDurationDays')) {
        obj['scheduleRenewDurationDays'] = ApiClient.convertToType(data['scheduleRenewDurationDays'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} getUri
   */
  exports.prototype['getUri'] = undefined;
  /**
   * 
   * @member {String} lastScheduledExecutionDate
   */
  exports.prototype['lastScheduledExecutionDate'] = undefined;
  /**
   * 
   * @member {String} lastScheduledExecutionSuccessDate
   */
  exports.prototype['lastScheduledExecutionSuccessDate'] = undefined;
  /**
   * 
   * @member {String} reportCustomizedId
   */
  exports.prototype['reportCustomizedId'] = undefined;
  /**
   * 
   * @member {String} reportDescription
   */
  exports.prototype['reportDescription'] = undefined;
  /**
   * 
   * @member {String} reportId
   */
  exports.prototype['reportId'] = undefined;
  /**
   * 
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
  /**
   * 
   * @member {String} reportType
   */
  exports.prototype['reportType'] = undefined;
  /**
   * 
   * @member {String} runUri
   */
  exports.prototype['runUri'] = undefined;
  /**
   * 
   * @member {String} saveUri
   */
  exports.prototype['saveUri'] = undefined;
  /**
   * 
   * @member {String} scheduleCreateDate
   */
  exports.prototype['scheduleCreateDate'] = undefined;
  /**
   * 
   * @member {String} scheduleEndDate
   */
  exports.prototype['scheduleEndDate'] = undefined;
  /**
   * 
   * @member {String} scheduleId
   */
  exports.prototype['scheduleId'] = undefined;
  /**
   * 
   * @member {String} scheduleRenewDurationDays
   */
  exports.prototype['scheduleRenewDurationDays'] = undefined;



  return exports;
}));


