/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/PaletteItemSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaletteItemSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PaletteSettings = factory(root.Docusign.ApiClient, root.Docusign.PaletteItemSettings);
  }
}(this, function(ApiClient, PaletteItemSettings) {
  'use strict';


  /**
   * The PaletteSettings model module.
   * @module model/PaletteSettings
   */

  /**
   * Constructs a new <code>PaletteSettings</code>.
   * @alias module:model/PaletteSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaletteSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaletteSettings} obj Optional instance to populate.
   * @return {module:model/PaletteSettings} The populated <code>PaletteSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('annotations')) {
        obj['annotations'] = PaletteItemSettings.constructFromObject(data['annotations']);
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = PaletteItemSettings.constructFromObject(data['custom']);
      }
      if (data.hasOwnProperty('merge')) {
        obj['merge'] = PaletteItemSettings.constructFromObject(data['merge']);
      }
      if (data.hasOwnProperty('notary')) {
        obj['notary'] = PaletteItemSettings.constructFromObject(data['notary']);
      }
      if (data.hasOwnProperty('seals')) {
        obj['seals'] = PaletteItemSettings.constructFromObject(data['seals']);
      }
      if (data.hasOwnProperty('smartContracts')) {
        obj['smartContracts'] = PaletteItemSettings.constructFromObject(data['smartContracts']);
      }
      if (data.hasOwnProperty('smartSections')) {
        obj['smartSections'] = PaletteItemSettings.constructFromObject(data['smartSections']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/PaletteItemSettings} annotations
   */
  exports.prototype['annotations'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} merge
   */
  exports.prototype['merge'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} notary
   */
  exports.prototype['notary'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} seals
   */
  exports.prototype['seals'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} smartContracts
   */
  exports.prototype['smartContracts'] = undefined;
  /**
   * 
   * @member {module:model/PaletteItemSettings} smartSections
   */
  exports.prototype['smartSections'] = undefined;



  return exports;
}));


