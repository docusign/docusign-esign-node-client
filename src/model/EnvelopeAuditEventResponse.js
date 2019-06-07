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
    define(['ApiClient', 'model/EnvelopeAuditEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeAuditEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeAuditEventResponse = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeAuditEvent);
  }
}(this, function(ApiClient, EnvelopeAuditEvent) {
  'use strict';


  /**
   * The EnvelopeAuditEventResponse model module.
   * @module model/EnvelopeAuditEventResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeAuditEventResponse</code>.
   * @alias module:model/EnvelopeAuditEventResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeAuditEventResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeAuditEventResponse} obj Optional instance to populate.
   * @return {module:model/EnvelopeAuditEventResponse} The populated <code>EnvelopeAuditEventResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auditEvents')) {
        obj['auditEvents'] = ApiClient.convertToType(data['auditEvents'], [EnvelopeAuditEvent]);
      }
    }
    return obj;
  }

  /**
   * Reserved: TBD
   * @member {Array.<module:model/EnvelopeAuditEvent>} auditEvents
   */
  exports.prototype['auditEvents'] = undefined;



  return exports;
}));


