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
    define(['ApiClient', 'model/Seal', 'model/Sender', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Seal'), require('./Sender'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UserInfoResponse = factory(root.Docusign.ApiClient, root.Docusign.Seal, root.Docusign.Sender, root.Docusign.User);
  }
}(this, function(ApiClient, Seal, Sender, User) {
  'use strict';


  /**
   * The UserInfoResponse model module.
   * @module model/UserInfoResponse
   */

  /**
   * Constructs a new <code>UserInfoResponse</code>.
   * @alias module:model/UserInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfoResponse} obj Optional instance to populate.
   * @return {module:model/UserInfoResponse} The populated <code>UserInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
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


