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
    define(['ApiClient', 'model/CustomFields', 'model/Document', 'model/Envelope', 'model/Recipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFields'), require('./Document'), require('./Envelope'), require('./Recipients'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.InlineTemplate = factory(root.Docusign.ApiClient, root.Docusign.CustomFields, root.Docusign.Document, root.Docusign.Envelope, root.Docusign.Recipients);
  }
}(this, function(ApiClient, CustomFields, Document, Envelope, Recipients) {
  'use strict';


  /**
   * The InlineTemplate model module.
   * @module model/InlineTemplate
   */

  /**
   * Constructs a new <code>InlineTemplate</code>.
   * @alias module:model/InlineTemplate
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineTemplate} obj Optional instance to populate.
   * @return {module:model/InlineTemplate} The populated <code>InlineTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = CustomFields.constructFromObject(data['customFields']);
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
      if (data.hasOwnProperty('envelope')) {
        obj['envelope'] = Envelope.constructFromObject(data['envelope']);
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = Recipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
      }
    }
    return obj;
  }

  /**
   * An optional array of strings that enables the sender to provide custom data about the recipient. This information is returned in the envelope status but otherwise not used by DocuSign. Each `customField` string can be a maximum of 100 characters.
   * @member {module:model/CustomFields} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * Complex element contains the details on the documents in the envelope.
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * A container used to send documents to recipients. The envelope carries information about the sender and timestamps to indicate the progress of the delivery procedure. It can contain collections of Documents, Tabs and Recipients.
   * @member {module:model/Envelope} envelope
   */
  exports.prototype['envelope'] = undefined;
  /**
   * An array of recipient objects that provides details about the recipients of the envelope.
   * @member {module:model/Recipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Specifies the order in which templates are overlaid.
   * @member {String} sequence
   */
  exports.prototype['sequence'] = undefined;



  return exports;
}));


