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
    define(['ApiClient', 'model/ReportInProductField', 'model/ReportInProductSentByDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportInProductField'), require('./ReportInProductSentByDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReportInProductGet = factory(root.Docusign.ApiClient, root.Docusign.ReportInProductField, root.Docusign.ReportInProductSentByDetails);
  }
}(this, function(ApiClient, ReportInProductField, ReportInProductSentByDetails) {
  'use strict';


  /**
   * The ReportInProductGet model module.
   * @module model/ReportInProductGet
   */

  /**
   * Constructs a new <code>ReportInProductGet</code>.
   * @alias module:model/ReportInProductGet
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductGet} obj Optional instance to populate.
   * @return {module:model/ReportInProductGet} The populated <code>ReportInProductGet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticationSuccessFilter')) {
        obj['authenticationSuccessFilter'] = ApiClient.convertToType(data['authenticationSuccessFilter'], 'String');
      }
      if (data.hasOwnProperty('customFieldFilter')) {
        obj['customFieldFilter'] = ApiClient.convertToType(data['customFieldFilter'], 'String');
      }
      if (data.hasOwnProperty('dateRangeCustomFromDate')) {
        obj['dateRangeCustomFromDate'] = ApiClient.convertToType(data['dateRangeCustomFromDate'], 'String');
      }
      if (data.hasOwnProperty('dateRangeCustomToDate')) {
        obj['dateRangeCustomToDate'] = ApiClient.convertToType(data['dateRangeCustomToDate'], 'String');
      }
      if (data.hasOwnProperty('dateRangeFilter')) {
        obj['dateRangeFilter'] = ApiClient.convertToType(data['dateRangeFilter'], 'String');
      }
      if (data.hasOwnProperty('displayOrder')) {
        obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'String');
      }
      if (data.hasOwnProperty('envelopeDateTypeFilter')) {
        obj['envelopeDateTypeFilter'] = ApiClient.convertToType(data['envelopeDateTypeFilter'], 'String');
      }
      if (data.hasOwnProperty('envelopeRecipientNameContainsFilter')) {
        obj['envelopeRecipientNameContainsFilter'] = ApiClient.convertToType(data['envelopeRecipientNameContainsFilter'], 'String');
      }
      if (data.hasOwnProperty('envelopeStatusFilter')) {
        obj['envelopeStatusFilter'] = ApiClient.convertToType(data['envelopeStatusFilter'], 'String');
      }
      if (data.hasOwnProperty('envelopeSubjectContainsFilter')) {
        obj['envelopeSubjectContainsFilter'] = ApiClient.convertToType(data['envelopeSubjectContainsFilter'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [ReportInProductField]);
      }
      if (data.hasOwnProperty('lastScheduledExecutionDate')) {
        obj['lastScheduledExecutionDate'] = ApiClient.convertToType(data['lastScheduledExecutionDate'], 'String');
      }
      if (data.hasOwnProperty('lastScheduledExecutionSuccessDate')) {
        obj['lastScheduledExecutionSuccessDate'] = ApiClient.convertToType(data['lastScheduledExecutionSuccessDate'], 'String');
      }
      if (data.hasOwnProperty('maxDownloadRows')) {
        obj['maxDownloadRows'] = ApiClient.convertToType(data['maxDownloadRows'], 'String');
      }
      if (data.hasOwnProperty('maxGridRows')) {
        obj['maxGridRows'] = ApiClient.convertToType(data['maxGridRows'], 'String');
      }
      if (data.hasOwnProperty('maxScheduledRows')) {
        obj['maxScheduledRows'] = ApiClient.convertToType(data['maxScheduledRows'], 'String');
      }
      if (data.hasOwnProperty('periodLengthFilter')) {
        obj['periodLengthFilter'] = ApiClient.convertToType(data['periodLengthFilter'], 'String');
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
      if (data.hasOwnProperty('scheduleId')) {
        obj['scheduleId'] = ApiClient.convertToType(data['scheduleId'], 'String');
      }
      if (data.hasOwnProperty('sentByDetails')) {
        obj['sentByDetails'] = ReportInProductSentByDetails.constructFromObject(data['sentByDetails']);
      }
      if (data.hasOwnProperty('sentByFilter')) {
        obj['sentByFilter'] = ApiClient.convertToType(data['sentByFilter'], 'String');
      }
      if (data.hasOwnProperty('sentByIds')) {
        obj['sentByIds'] = ApiClient.convertToType(data['sentByIds'], 'String');
      }
      if (data.hasOwnProperty('sortFieldDirection')) {
        obj['sortFieldDirection'] = ApiClient.convertToType(data['sortFieldDirection'], 'String');
      }
      if (data.hasOwnProperty('sortFieldName')) {
        obj['sortFieldName'] = ApiClient.convertToType(data['sortFieldName'], 'String');
      }
      if (data.hasOwnProperty('verificationStatusFilter')) {
        obj['verificationStatusFilter'] = ApiClient.convertToType(data['verificationStatusFilter'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} authenticationSuccessFilter
   */
  exports.prototype['authenticationSuccessFilter'] = undefined;
  /**
   * 
   * @member {String} customFieldFilter
   */
  exports.prototype['customFieldFilter'] = undefined;
  /**
   * 
   * @member {String} dateRangeCustomFromDate
   */
  exports.prototype['dateRangeCustomFromDate'] = undefined;
  /**
   * 
   * @member {String} dateRangeCustomToDate
   */
  exports.prototype['dateRangeCustomToDate'] = undefined;
  /**
   * 
   * @member {String} dateRangeFilter
   */
  exports.prototype['dateRangeFilter'] = undefined;
  /**
   * 
   * @member {String} displayOrder
   */
  exports.prototype['displayOrder'] = undefined;
  /**
   * 
   * @member {String} envelopeDateTypeFilter
   */
  exports.prototype['envelopeDateTypeFilter'] = undefined;
  /**
   * 
   * @member {String} envelopeRecipientNameContainsFilter
   */
  exports.prototype['envelopeRecipientNameContainsFilter'] = undefined;
  /**
   * 
   * @member {String} envelopeStatusFilter
   */
  exports.prototype['envelopeStatusFilter'] = undefined;
  /**
   * 
   * @member {String} envelopeSubjectContainsFilter
   */
  exports.prototype['envelopeSubjectContainsFilter'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ReportInProductField>} fields
   */
  exports.prototype['fields'] = undefined;
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
   * @member {String} maxDownloadRows
   */
  exports.prototype['maxDownloadRows'] = undefined;
  /**
   * 
   * @member {String} maxGridRows
   */
  exports.prototype['maxGridRows'] = undefined;
  /**
   * 
   * @member {String} maxScheduledRows
   */
  exports.prototype['maxScheduledRows'] = undefined;
  /**
   * 
   * @member {String} periodLengthFilter
   */
  exports.prototype['periodLengthFilter'] = undefined;
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
   * @member {String} scheduleId
   */
  exports.prototype['scheduleId'] = undefined;
  /**
   * @member {module:model/ReportInProductSentByDetails} sentByDetails
   */
  exports.prototype['sentByDetails'] = undefined;
  /**
   * 
   * @member {String} sentByFilter
   */
  exports.prototype['sentByFilter'] = undefined;
  /**
   * 
   * @member {String} sentByIds
   */
  exports.prototype['sentByIds'] = undefined;
  /**
   * 
   * @member {String} sortFieldDirection
   */
  exports.prototype['sortFieldDirection'] = undefined;
  /**
   * 
   * @member {String} sortFieldName
   */
  exports.prototype['sortFieldName'] = undefined;
  /**
   * 
   * @member {String} verificationStatusFilter
   */
  exports.prototype['verificationStatusFilter'] = undefined;



  return exports;
}));


