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
    root.Docusign.ExternalFile = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ExternalFile model module.
   * @module model/ExternalFile
   */

  /**
   * Constructs a new <code>ExternalFile</code>.
   * This object contains information about a file or folder in cloud storage.
   * @alias module:model/ExternalFile
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExternalFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalFile} obj Optional instance to populate.
   * @return {module:model/ExternalFile} The populated <code>ExternalFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('hasCompositeTemplate')) {
        obj['hasCompositeTemplate'] = ApiClient.convertToType(data['hasCompositeTemplate'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('img')) {
        obj['img'] = ApiClient.convertToType(data['img'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('supported')) {
        obj['supported'] = ApiClient.convertToType(data['supported'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * 
   * @member {String} hasCompositeTemplate
   */
  exports.prototype['hasCompositeTemplate'] = undefined;
  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {String} img
   */
  exports.prototype['img'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * Reserved: TBD
   * @member {String} size
   */
  exports.prototype['size'] = undefined;
  /**
   * 
   * @member {String} supported
   */
  exports.prototype['supported'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


