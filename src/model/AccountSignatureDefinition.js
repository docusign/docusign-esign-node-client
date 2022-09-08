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
    define(['ApiClient', 'model/DateStampProperties', 'model/SignatureGroupDef', 'model/SignatureUserDef'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateStampProperties'), require('./SignatureGroupDef'), require('./SignatureUserDef'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountSignatureDefinition = factory(root.Docusign.ApiClient, root.Docusign.DateStampProperties, root.Docusign.SignatureGroupDef, root.Docusign.SignatureUserDef);
  }
}(this, function(ApiClient, DateStampProperties, SignatureGroupDef, SignatureUserDef) {
  'use strict';


  /**
   * The AccountSignatureDefinition model module.
   * @module model/AccountSignatureDefinition
   */

  /**
   * Constructs a new <code>AccountSignatureDefinition</code>.
   * @alias module:model/AccountSignatureDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountSignatureDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignatureDefinition} obj Optional instance to populate.
   * @return {module:model/AccountSignatureDefinition} The populated <code>AccountSignatureDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dateStampProperties')) {
        obj['dateStampProperties'] = DateStampProperties.constructFromObject(data['dateStampProperties']);
      }
      if (data.hasOwnProperty('disallowUserResizeStamp')) {
        obj['disallowUserResizeStamp'] = ApiClient.convertToType(data['disallowUserResizeStamp'], 'String');
      }
      if (data.hasOwnProperty('externalID')) {
        obj['externalID'] = ApiClient.convertToType(data['externalID'], 'String');
      }
      if (data.hasOwnProperty('imageType')) {
        obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'String');
      }
      if (data.hasOwnProperty('nrdsId')) {
        obj['nrdsId'] = ApiClient.convertToType(data['nrdsId'], 'String');
      }
      if (data.hasOwnProperty('nrdsLastName')) {
        obj['nrdsLastName'] = ApiClient.convertToType(data['nrdsLastName'], 'String');
      }
      if (data.hasOwnProperty('phoneticName')) {
        obj['phoneticName'] = ApiClient.convertToType(data['phoneticName'], 'String');
      }
      if (data.hasOwnProperty('signatureFont')) {
        obj['signatureFont'] = ApiClient.convertToType(data['signatureFont'], 'String');
      }
      if (data.hasOwnProperty('signatureGroups')) {
        obj['signatureGroups'] = ApiClient.convertToType(data['signatureGroups'], [SignatureGroupDef]);
      }
      if (data.hasOwnProperty('signatureId')) {
        obj['signatureId'] = ApiClient.convertToType(data['signatureId'], 'String');
      }
      if (data.hasOwnProperty('signatureInitials')) {
        obj['signatureInitials'] = ApiClient.convertToType(data['signatureInitials'], 'String');
      }
      if (data.hasOwnProperty('signatureName')) {
        obj['signatureName'] = ApiClient.convertToType(data['signatureName'], 'String');
      }
      if (data.hasOwnProperty('signatureType')) {
        obj['signatureType'] = ApiClient.convertToType(data['signatureType'], 'String');
      }
      if (data.hasOwnProperty('signatureUsers')) {
        obj['signatureUsers'] = ApiClient.convertToType(data['signatureUsers'], [SignatureUserDef]);
      }
      if (data.hasOwnProperty('stampFormat')) {
        obj['stampFormat'] = ApiClient.convertToType(data['stampFormat'], 'String');
      }
      if (data.hasOwnProperty('stampSizeMM')) {
        obj['stampSizeMM'] = ApiClient.convertToType(data['stampSizeMM'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the area in which a date stamp is placed. This parameter uses pixel positioning to draw a rectangle at the center of the stamp area. The stamp is superimposed on top of this central area.  This property contains the following information about the central rectangle:  - `DateAreaX`: The X axis position of the top-left corner. - `DateAreaY`: The Y axis position of the top-left corner. - `DateAreaWidth`: The width of the rectangle. - `DateAreaHeight`: The height of the rectangle.
   * @member {module:model/DateStampProperties} dateStampProperties
   */
  exports.prototype['dateStampProperties'] = undefined;
  /**
   * 
   * @member {String} disallowUserResizeStamp
   */
  exports.prototype['disallowUserResizeStamp'] = undefined;
  /**
   * 
   * @member {String} externalID
   */
  exports.prototype['externalID'] = undefined;
  /**
   * 
   * @member {String} imageType
   */
  exports.prototype['imageType'] = undefined;
  /**
   * 
   * @member {String} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * 
   * @member {String} nrdsId
   */
  exports.prototype['nrdsId'] = undefined;
  /**
   * 
   * @member {String} nrdsLastName
   */
  exports.prototype['nrdsLastName'] = undefined;
  /**
   * 
   * @member {String} phoneticName
   */
  exports.prototype['phoneticName'] = undefined;
  /**
   * 
   * @member {String} signatureFont
   */
  exports.prototype['signatureFont'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureGroupDef>} signatureGroups
   */
  exports.prototype['signatureGroups'] = undefined;
  /**
   * Specifies the signature ID associated with the signature name. You can use the signature ID in the URI in place of the signature name, and the value stored in the `signatureName` property in the body is used. This allows the use of special characters (such as \"&\", \"<\", \">\") in a the signature name. Note that with each update to signatures, the returned signature ID might change, so the caller will need to trigger off the signature name to get the new signature ID.
   * @member {String} signatureId
   */
  exports.prototype['signatureId'] = undefined;
  /**
   * 
   * @member {String} signatureInitials
   */
  exports.prototype['signatureInitials'] = undefined;
  /**
   * Specifies the user signature name.
   * @member {String} signatureName
   */
  exports.prototype['signatureName'] = undefined;
  /**
   * 
   * @member {String} signatureType
   */
  exports.prototype['signatureType'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SignatureUserDef>} signatureUsers
   */
  exports.prototype['signatureUsers'] = undefined;
  /**
   * 
   * @member {String} stampFormat
   */
  exports.prototype['stampFormat'] = undefined;
  /**
   * 
   * @member {String} stampSizeMM
   */
  exports.prototype['stampSizeMM'] = undefined;



  return exports;
}));


