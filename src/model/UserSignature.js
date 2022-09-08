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
    root.Docusign.UserSignature = factory(root.Docusign.ApiClient, root.Docusign.DateStampProperties, root.Docusign.ErrorDetails);
  }
}(this, function(ApiClient, DateStampProperties, ErrorDetails) {
  'use strict';


  /**
   * The UserSignature model module.
   * @module model/UserSignature
   */

  /**
   * Constructs a new <code>UserSignature</code>.
   * @alias module:model/UserSignature
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserSignature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSignature} obj Optional instance to populate.
   * @return {module:model/UserSignature} The populated <code>UserSignature</code> instance.
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
      if (data.hasOwnProperty('initials150ImageId')) {
        obj['initials150ImageId'] = ApiClient.convertToType(data['initials150ImageId'], 'String');
      }
      if (data.hasOwnProperty('initialsImageUri')) {
        obj['initialsImageUri'] = ApiClient.convertToType(data['initialsImageUri'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('nrdsId')) {
        obj['nrdsId'] = ApiClient.convertToType(data['nrdsId'], 'String');
      }
      if (data.hasOwnProperty('nrdsLastName')) {
        obj['nrdsLastName'] = ApiClient.convertToType(data['nrdsLastName'], 'String');
      }
      if (data.hasOwnProperty('nrdsStatus')) {
        obj['nrdsStatus'] = ApiClient.convertToType(data['nrdsStatus'], 'String');
      }
      if (data.hasOwnProperty('phoneticName')) {
        obj['phoneticName'] = ApiClient.convertToType(data['phoneticName'], 'String');
      }
      if (data.hasOwnProperty('signature150ImageId')) {
        obj['signature150ImageId'] = ApiClient.convertToType(data['signature150ImageId'], 'String');
      }
      if (data.hasOwnProperty('signatureFont')) {
        obj['signatureFont'] = ApiClient.convertToType(data['signatureFont'], 'String');
      }
      if (data.hasOwnProperty('signatureId')) {
        obj['signatureId'] = ApiClient.convertToType(data['signatureId'], 'String');
      }
      if (data.hasOwnProperty('signatureImageUri')) {
        obj['signatureImageUri'] = ApiClient.convertToType(data['signatureImageUri'], 'String');
      }
      if (data.hasOwnProperty('signatureInitials')) {
        obj['signatureInitials'] = ApiClient.convertToType(data['signatureInitials'], 'String');
      }
      if (data.hasOwnProperty('signatureName')) {
        obj['signatureName'] = ApiClient.convertToType(data['signatureName'], 'String');
      }
      if (data.hasOwnProperty('signatureRights')) {
        obj['signatureRights'] = ApiClient.convertToType(data['signatureRights'], 'String');
      }
      if (data.hasOwnProperty('signatureType')) {
        obj['signatureType'] = ApiClient.convertToType(data['signatureType'], 'String');
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
      if (data.hasOwnProperty('stampType')) {
        obj['stampType'] = ApiClient.convertToType(data['stampType'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date and time the user adopted their signature.
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
   * 
   * @member {String} initials150ImageId
   */
  exports.prototype['initials150ImageId'] = undefined;
  /**
   * Contains the URI for an endpoint that you can use to retrieve the initials image.
   * @member {String} initialsImageUri
   */
  exports.prototype['initialsImageUri'] = undefined;
  /**
   * 
   * @member {String} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * The date and time the item was last modified.
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
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
   * @member {String} nrdsStatus
   */
  exports.prototype['nrdsStatus'] = undefined;
  /**
   * 
   * @member {String} phoneticName
   */
  exports.prototype['phoneticName'] = undefined;
  /**
   * 
   * @member {String} signature150ImageId
   */
  exports.prototype['signature150ImageId'] = undefined;
  /**
   * The font type for the signature, if the signature is not drawn. The supported font types are:  \"7_DocuSign\", \"1_DocuSign\", \"6_DocuSign\", \"8_DocuSign\", \"3_DocuSign\", \"Mistral\", \"4_DocuSign\", \"2_DocuSign\", \"5_DocuSign\", \"Rage Italic\" 
   * @member {String} signatureFont
   */
  exports.prototype['signatureFont'] = undefined;
  /**
   * Specifies the signature ID associated with the signature name. You can use the signature ID in the URI in place of the signature name, and the value stored in the `signatureName` property in the body is used. This allows the use of special characters (such as \"&\", \"<\", \">\") in a the signature name. Note that with each update to signatures, the returned signature ID might change, so the caller will need to trigger off the signature name to get the new signature ID.
   * @member {String} signatureId
   */
  exports.prototype['signatureId'] = undefined;
  /**
   * Contains the URI for an endpoint that you can use to retrieve the signature image.
   * @member {String} signatureImageUri
   */
  exports.prototype['signatureImageUri'] = undefined;
  /**
   *  The initials associated with the signature.
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
   * @member {String} signatureRights
   */
  exports.prototype['signatureRights'] = undefined;
  /**
   * 
   * @member {String} signatureType
   */
  exports.prototype['signatureType'] = undefined;
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
   * 
   * @member {String} stampType
   */
  exports.prototype['stampType'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


