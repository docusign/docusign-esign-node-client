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
    define(['ApiClient', 'model/ScheduledSending', 'model/WorkflowStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScheduledSending'), require('./WorkflowStep'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Workflow = factory(root.Docusign.ApiClient, root.Docusign.ScheduledSending, root.Docusign.WorkflowStep);
  }
}(this, function(ApiClient, ScheduledSending, WorkflowStep) {
  'use strict';


  /**
   * The Workflow model module.
   * @module model/Workflow
   */

  /**
   * Constructs a new <code>Workflow</code>.
   * Describes the workflow for an envelope.
   * @alias module:model/Workflow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Workflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Workflow} obj Optional instance to populate.
   * @return {module:model/Workflow} The populated <code>Workflow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentWorkflowStepId')) {
        obj['currentWorkflowStepId'] = ApiClient.convertToType(data['currentWorkflowStepId'], 'String');
      }
      if (data.hasOwnProperty('overwriteUpdateMode')) {
        obj['overwriteUpdateMode'] = ApiClient.convertToType(data['overwriteUpdateMode'], 'String');
      }
      if (data.hasOwnProperty('resumeDate')) {
        obj['resumeDate'] = ApiClient.convertToType(data['resumeDate'], 'String');
      }
      if (data.hasOwnProperty('scheduledSending')) {
        obj['scheduledSending'] = ScheduledSending.constructFromObject(data['scheduledSending']);
      }
      if (data.hasOwnProperty('workflowStatus')) {
        obj['workflowStatus'] = ApiClient.convertToType(data['workflowStatus'], 'String');
      }
      if (data.hasOwnProperty('workflowSteps')) {
        obj['workflowSteps'] = ApiClient.convertToType(data['workflowSteps'], [WorkflowStep]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} currentWorkflowStepId
   */
  exports.prototype['currentWorkflowStepId'] = undefined;
  /**
   * 
   * @member {String} overwriteUpdateMode
   */
  exports.prototype['overwriteUpdateMode'] = undefined;
  /**
   * 
   * @member {String} resumeDate
   */
  exports.prototype['resumeDate'] = undefined;
  /**
   * An object that describes the settings for scheduled sending.
   * @member {module:model/ScheduledSending} scheduledSending
   */
  exports.prototype['scheduledSending'] = undefined;
  /**
   * 
   * @member {String} workflowStatus
   */
  exports.prototype['workflowStatus'] = undefined;
  /**
   * 
   * @member {Array.<module:model/WorkflowStep>} workflowSteps
   */
  exports.prototype['workflowSteps'] = undefined;



  return exports;
}));


