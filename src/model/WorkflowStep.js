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
    define(['ApiClient', 'model/DelayedRouting', 'model/RecipientRouting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DelayedRouting'), require('./RecipientRouting'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowStep = factory(root.Docusign.ApiClient, root.Docusign.DelayedRouting, root.Docusign.RecipientRouting);
  }
}(this, function(ApiClient, DelayedRouting, RecipientRouting) {
  'use strict';


  /**
   * The WorkflowStep model module.
   * @module model/WorkflowStep
   */

  /**
   * Constructs a new <code>WorkflowStep</code>.
   * Describes a single step in a workflow.
   * @alias module:model/WorkflowStep
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkflowStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowStep} obj Optional instance to populate.
   * @return {module:model/WorkflowStep} The populated <code>WorkflowStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('completedDate')) {
        obj['completedDate'] = ApiClient.convertToType(data['completedDate'], 'String');
      }
      if (data.hasOwnProperty('delayedRouting')) {
        obj['delayedRouting'] = DelayedRouting.constructFromObject(data['delayedRouting']);
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'String');
      }
      if (data.hasOwnProperty('recipientRouting')) {
        obj['recipientRouting'] = RecipientRouting.constructFromObject(data['recipientRouting']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('triggeredDate')) {
        obj['triggeredDate'] = ApiClient.convertToType(data['triggeredDate'], 'String');
      }
      if (data.hasOwnProperty('triggerOnItem')) {
        obj['triggerOnItem'] = ApiClient.convertToType(data['triggerOnItem'], 'String');
      }
      if (data.hasOwnProperty('workflowStepId')) {
        obj['workflowStepId'] = ApiClient.convertToType(data['workflowStepId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * 
   * @member {String} completedDate
   */
  exports.prototype['completedDate'] = undefined;
  /**
   * A complex element that specifies the delayed routing settings for the workflow step.
   * @member {module:model/DelayedRouting} delayedRouting
   */
  exports.prototype['delayedRouting'] = undefined;
  /**
   * 
   * @member {String} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * The rules for recipient routing.
   * @member {module:model/RecipientRouting} recipientRouting
   */
  exports.prototype['recipientRouting'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} triggeredDate
   */
  exports.prototype['triggeredDate'] = undefined;
  /**
   * 
   * @member {String} triggerOnItem
   */
  exports.prototype['triggerOnItem'] = undefined;
  /**
   * 
   * @member {String} workflowStepId
   */
  exports.prototype['workflowStepId'] = undefined;



  return exports;
}));


