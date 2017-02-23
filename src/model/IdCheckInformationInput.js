/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressInformationInput', 'model/DobInformationInput', 'model/Ssn4InformationInput', 'model/Ssn9InformationInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformationInput'), require('./DobInformationInput'), require('./Ssn4InformationInput'), require('./Ssn9InformationInput'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.IdCheckInformationInput = factory(root.Docusign.ApiClient, root.Docusign.AddressInformationInput, root.Docusign.DobInformationInput, root.Docusign.Ssn4InformationInput, root.Docusign.Ssn9InformationInput);
  }
}(this, function(ApiClient, AddressInformationInput, DobInformationInput, Ssn4InformationInput, Ssn9InformationInput) {
  'use strict';


  /**
   * The IdCheckInformationInput model module.
   * @module model/IdCheckInformationInput
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>IdCheckInformationInput</code>.
   * @alias module:model/IdCheckInformationInput
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IdCheckInformationInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdCheckInformationInput} obj Optional instance to populate.
   * @return {module:model/IdCheckInformationInput} The populated <code>IdCheckInformationInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressInformationInput')) {
        obj['addressInformationInput'] = AddressInformationInput.constructFromObject(data['addressInformationInput']);
      }
      if (data.hasOwnProperty('dobInformationInput')) {
        obj['dobInformationInput'] = DobInformationInput.constructFromObject(data['dobInformationInput']);
      }
      if (data.hasOwnProperty('ssn4InformationInput')) {
        obj['ssn4InformationInput'] = Ssn4InformationInput.constructFromObject(data['ssn4InformationInput']);
      }
      if (data.hasOwnProperty('ssn9InformationInput')) {
        obj['ssn9InformationInput'] = Ssn9InformationInput.constructFromObject(data['ssn9InformationInput']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AddressInformationInput} addressInformationInput
   */
  exports.prototype['addressInformationInput'] = undefined;
  /**
   * @member {module:model/DobInformationInput} dobInformationInput
   */
  exports.prototype['dobInformationInput'] = undefined;
  /**
   * @member {module:model/Ssn4InformationInput} ssn4InformationInput
   */
  exports.prototype['ssn4InformationInput'] = undefined;
  /**
   * @member {module:model/Ssn9InformationInput} ssn9InformationInput
   */
  exports.prototype['ssn9InformationInput'] = undefined;



  return exports;
}));


