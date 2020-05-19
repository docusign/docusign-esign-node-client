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
    define(['ApiClient', 'model/CommentPublish'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentPublish'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CommentsPublish = factory(root.Docusign.ApiClient, root.Docusign.CommentPublish);
  }
}(this, function(ApiClient, CommentPublish) {
  'use strict';


  /**
   * The CommentsPublish model module.
   * @module model/CommentsPublish
   */

  /**
   * Constructs a new <code>CommentsPublish</code>.
   * @alias module:model/CommentsPublish
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CommentsPublish</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentsPublish} obj Optional instance to populate.
   * @return {module:model/CommentsPublish} The populated <code>CommentsPublish</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commentsToPublish')) {
        obj['commentsToPublish'] = ApiClient.convertToType(data['commentsToPublish'], [CommentPublish]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/CommentPublish>} commentsToPublish
   */
  exports.prototype['commentsToPublish'] = undefined;



  return exports;
}));


