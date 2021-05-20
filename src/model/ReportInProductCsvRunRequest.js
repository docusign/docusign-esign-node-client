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
    define(['ApiClient', 'model/ReportInProductField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportInProductField'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ReportInProductCsvRunRequest = factory(root.Docusign.ApiClient, root.Docusign.ReportInProductField);
  }
}(this, function(ApiClient, ReportInProductField) {
  'use strict';


  /**
   * The ReportInProductCsvRunRequest model module.
   * @module model/ReportInProductCsvRunRequest
   */

  /**
   * Constructs a new <code>ReportInProductCsvRunRequest</code>.
   * @alias module:model/ReportInProductCsvRunRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductCsvRunRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductCsvRunRequest} obj Optional instance to populate.
   * @return {module:model/ReportInProductCsvRunRequest} The populated <code>ReportInProductCsvRunRequest</code> instance.
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
      if (data.hasOwnProperty('forDownload')) {
        obj['forDownload'] = ApiClient.convertToType(data['forDownload'], 'String');
      }
      if (data.hasOwnProperty('isDashboard')) {
        obj['isDashboard'] = ApiClient.convertToType(data['isDashboard'], 'String');
      }
      if (data.hasOwnProperty('newLine')) {
        obj['newLine'] = ApiClient.convertToType(data['newLine'], 'String');
      }
      if (data.hasOwnProperty('overrideTimezoneKey')) {
        obj['overrideTimezoneKey'] = ApiClient.convertToType(data['overrideTimezoneKey'], 'String');
      }
      if (data.hasOwnProperty('periodLengthFilter')) {
        obj['periodLengthFilter'] = ApiClient.convertToType(data['periodLengthFilter'], 'String');
      }
      if (data.hasOwnProperty('quote')) {
        obj['quote'] = ApiClient.convertToType(data['quote'], 'String');
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
      if (data.hasOwnProperty('reportInvocationType')) {
        obj['reportInvocationType'] = ApiClient.convertToType(data['reportInvocationType'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('sentByFilter')) {
        obj['sentByFilter'] = ApiClient.convertToType(data['sentByFilter'], 'String');
      }
      if (data.hasOwnProperty('sentByIds')) {
        obj['sentByIds'] = ApiClient.convertToType(data['sentByIds'], 'String');
      }
      if (data.hasOwnProperty('separator')) {
        obj['separator'] = ApiClient.convertToType(data['separator'], 'String');
      }
      if (data.hasOwnProperty('sortDirection')) {
        obj['sortDirection'] = ApiClient.convertToType(data['sortDirection'], 'String');
      }
      if (data.hasOwnProperty('sortField')) {
        obj['sortField'] = ApiClient.convertToType(data['sortField'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
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
   * @member {String} forDownload
   */
  exports.prototype['forDownload'] = undefined;
  /**
   * 
   * @member {String} isDashboard
   */
  exports.prototype['isDashboard'] = undefined;
  /**
   * 
   * @member {String} newLine
   */
  exports.prototype['newLine'] = undefined;
  /**
   * 
   * @member {String} overrideTimezoneKey
   */
  exports.prototype['overrideTimezoneKey'] = undefined;
  /**
   * 
   * @member {String} periodLengthFilter
   */
  exports.prototype['periodLengthFilter'] = undefined;
  /**
   * 
   * @member {String} quote
   */
  exports.prototype['quote'] = undefined;
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
   * @member {String} reportInvocationType
   */
  exports.prototype['reportInvocationType'] = undefined;
  /**
   * 
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
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
   * @member {String} separator
   */
  exports.prototype['separator'] = undefined;
  /**
   * 
   * @member {String} sortDirection
   */
  exports.prototype['sortDirection'] = undefined;
  /**
   * 
   * @member {String} sortField
   */
  exports.prototype['sortField'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * 
   * @member {String} verificationStatusFilter
   */
  exports.prototype['verificationStatusFilter'] = undefined;



  return exports;
}));


