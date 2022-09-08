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
    define(['ApiClient', 'model/DateStampProperties', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateStampProperties'), require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Stamp = factory(root.Docusign.ApiClient, root.Docusign.DateStampProperties, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, DateStampProperties, ErrorDetails) {
  'use strict';


  /**
   * The Stamp model module.
   * @module model/Stamp
   */

  /**
   * Constructs a new <code>Stamp</code>.
   * @alias module:model/Stamp
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Stamp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stamp} obj Optional instance to populate.
   * @return {module:model/Stamp} The populated <code>Stamp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adoptedDateTime')) {
        obj['adoptedDateTime'] = ApiClient.convertToType(data['adoptedDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('customField')) {
        obj['customField'] = ApiClient.convertToType(data['customField'], 'String');
      }
      if (data.hasOwnProperty('dateStampProperties')) {
        obj['dateStampProperties'] = DateStampProperties.constructFromObject(data['dateStampProperties']);
      }
      if (data.hasOwnProperty('disallowUserResizeStamp')) {
        obj['disallowUserResizeStamp'] = ApiClient.convertToType(data['disallowUserResizeStamp'], 'String');
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('externalID')) {
        obj['externalID'] = ApiClient.convertToType(data['externalID'], 'String');
      }
      if (data.hasOwnProperty('imageBase64')) {
        obj['imageBase64'] = ApiClient.convertToType(data['imageBase64'], 'String');
      }
      if (data.hasOwnProperty('imageType')) {
        obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('phoneticName')) {
        obj['phoneticName'] = ApiClient.convertToType(data['phoneticName'], 'String');
      }
      if (data.hasOwnProperty('signatureName')) {
        obj['signatureName'] = ApiClient.convertToType(data['signatureName'], 'String');
      }
      if (data.hasOwnProperty('stampFormat')) {
        obj['stampFormat'] = ApiClient.convertToType(data['stampFormat'], 'String');
      }
      if (data.hasOwnProperty('stampImageUri')) {
        obj['stampImageUri'] = ApiClient.convertToType(data['stampImageUri'], 'String');
      }
      if (data.hasOwnProperty('stampSizeMM')) {
        obj['stampSizeMM'] = ApiClient.convertToType(data['stampSizeMM'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} adoptedDateTime
   */
  exports.prototype['adoptedDateTime'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * 
   * @member {String} customField
   */
  exports.prototype['customField'] = undefined;
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
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {String} externalID
   */
  exports.prototype['externalID'] = undefined;
  /**
   * 
   * @member {String} imageBase64
   */
  exports.prototype['imageBase64'] = undefined;
  /**
   * 
   * @member {String} imageType
   */
  exports.prototype['imageType'] = undefined;
  /**
   * The date and time the item was last modified.
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
  /**
   * 
   * @member {String} phoneticName
   */
  exports.prototype['phoneticName'] = undefined;
  /**
   * Specifies the user signature name.
   * @member {String} signatureName
   */
  exports.prototype['signatureName'] = undefined;
  /**
   * 
   * @member {String} stampFormat
   */
  exports.prototype['stampFormat'] = undefined;
  /**
   * 
   * @member {String} stampImageUri
   */
  exports.prototype['stampImageUri'] = undefined;
  /**
   * 
   * @member {String} stampSizeMM
   */
  exports.prototype['stampSizeMM'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


