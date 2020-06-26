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
    root.Docusign.CommentPublish = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The CommentPublish model module.
   * @module model/CommentPublish
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CommentPublish</code>.
   * @alias module:model/CommentPublish
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CommentPublish</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentPublish} obj Optional instance to populate.
   * @return {module:model/CommentPublish} The populated <code>CommentPublish</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('mentions')) {
        obj['mentions'] = ApiClient.convertToType(data['mentions'], ['String']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('threadAnchorKeys')) {
        obj['threadAnchorKeys'] = ApiClient.convertToType(data['threadAnchorKeys'], {'String': 'String'});
      }
      if (data.hasOwnProperty('threadId')) {
        obj['threadId'] = ApiClient.convertToType(data['threadId'], 'String');
      }
      if (data.hasOwnProperty('visibleTo')) {
        obj['visibleTo'] = ApiClient.convertToType(data['visibleTo'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Array.<String>} mentions
   */
  exports.prototype['mentions'] = undefined;
  /**
   * 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * 
   * @member {Object.<String, String>} threadAnchorKeys
   */
  exports.prototype['threadAnchorKeys'] = undefined;
  /**
   * 
   * @member {String} threadId
   */
  exports.prototype['threadId'] = undefined;
  /**
   * 
   * @member {Array.<String>} visibleTo
   */
  exports.prototype['visibleTo'] = undefined;



  return exports;
}));


