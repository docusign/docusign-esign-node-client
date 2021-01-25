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
    define(['ApiClient', 'model/Seal', 'model/Sender', 'model/SignHashDocument', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Seal'), require('./Sender'), require('./SignHashDocument'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SignHashSessionInfoResponse = factory(root.Docusign.ApiClient, root.Docusign.Seal, root.Docusign.Sender, root.Docusign.SignHashDocument, root.Docusign.User);
  }
}(this, function(ApiClient, Seal, Sender, SignHashDocument, User) {
  'use strict';


  /**
   * The SignHashSessionInfoResponse model module.
   * @module model/SignHashSessionInfoResponse
   */

  /**
   * Constructs a new <code>SignHashSessionInfoResponse</code>.
   * @alias module:model/SignHashSessionInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignHashSessionInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignHashSessionInfoResponse} obj Optional instance to populate.
   * @return {module:model/SignHashSessionInfoResponse} The populated <code>SignHashSessionInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [SignHashDocument]);
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('redirectionUrl')) {
        obj['redirectionUrl'] = ApiClient.convertToType(data['redirectionUrl'], 'String');
      }
      if (data.hasOwnProperty('remainingSignatureRequests')) {
        obj['remainingSignatureRequests'] = ApiClient.convertToType(data['remainingSignatureRequests'], 'Number');
      }
      if (data.hasOwnProperty('seal')) {
        obj['seal'] = Seal.constructFromObject(data['seal']);
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = Sender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * Complex element contains the details on the documents in the envelope.
   * @member {Array.<module:model/SignHashDocument>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * 
   * @member {String} redirectionUrl
   */
  exports.prototype['redirectionUrl'] = undefined;
  /**
   * 
   * @member {Number} remainingSignatureRequests
   */
  exports.prototype['remainingSignatureRequests'] = undefined;
  /**
   * @member {module:model/Seal} seal
   */
  exports.prototype['seal'] = undefined;
  /**
   * @member {module:model/Sender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


