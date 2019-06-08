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
    root.Docusign.CorrectViewRequest = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The CorrectViewRequest model module.
   * @module model/CorrectViewRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CorrectViewRequest</code>.
   * @alias module:model/CorrectViewRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CorrectViewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorrectViewRequest} obj Optional instance to populate.
   * @return {module:model/CorrectViewRequest} The populated <code>CorrectViewRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('suppressNavigation')) {
        obj['suppressNavigation'] = ApiClient.convertToType(data['suppressNavigation'], 'String');
      }
    }
    return obj;
  }

  /**
   * The url used after correct/send view session has ended. DocuSign redirects to the url and includes an event parameter that can be used by your app. The event parameters returned are:   * send (user corrected and sent the envelope) * save (user saved the envelope) * cancel (user canceled the transaction.) * error (there was an error when performing the correct or send) * sessionEnd (the session ended before the user completed a different action)  ###### Note: Include https:// in the URL or the redirect might not succeed on some browsers. 
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * Specifies whether the window is displayed with or without dressing.
   * @member {String} suppressNavigation
   */
  exports.prototype['suppressNavigation'] = undefined;



  return exports;
}));


