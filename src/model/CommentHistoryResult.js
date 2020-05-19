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
    define(['ApiClient', 'model/Comment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Comment'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CommentHistoryResult = factory(root.Docusign.ApiClient, root.Docusign.Comment);
  }
}(this, function(ApiClient, Comment) {
  'use strict';


  /**
   * The CommentHistoryResult model module.
   * @module model/CommentHistoryResult
   */

  /**
   * Constructs a new <code>CommentHistoryResult</code>.
   * @alias module:model/CommentHistoryResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CommentHistoryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentHistoryResult} obj Optional instance to populate.
   * @return {module:model/CommentHistoryResult} The populated <code>CommentHistoryResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [Comment]);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('endTimetoken')) {
        obj['endTimetoken'] = ApiClient.convertToType(data['endTimetoken'], 'String');
      }
      if (data.hasOwnProperty('startTimetoken')) {
        obj['startTimetoken'] = ApiClient.convertToType(data['startTimetoken'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/Comment>} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * 
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * 
   * @member {String} endTimetoken
   */
  exports.prototype['endTimetoken'] = undefined;
  /**
   * 
   * @member {String} startTimetoken
   */
  exports.prototype['startTimetoken'] = undefined;



  return exports;
}));


