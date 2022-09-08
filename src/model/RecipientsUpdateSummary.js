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
    define(['ApiClient', 'model/RecipientUpdateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipientUpdateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientsUpdateSummary = factory(root.Docusign.ApiClient, root.Docusign.RecipientUpdateResponse);
  }
}(this, function(ApiClient, RecipientUpdateResponse) {
  'use strict';


  /**
   * The RecipientsUpdateSummary model module.
   * @module model/RecipientsUpdateSummary
   */

  /**
   * Constructs a new <code>RecipientsUpdateSummary</code>.
   * This is the response that the API returns after you update recipients.
   * @alias module:model/RecipientsUpdateSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientsUpdateSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientsUpdateSummary} obj Optional instance to populate.
   * @return {module:model/RecipientsUpdateSummary} The populated <code>RecipientsUpdateSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recipientUpdateResults')) {
        obj['recipientUpdateResults'] = ApiClient.convertToType(data['recipientUpdateResults'], [RecipientUpdateResponse]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/RecipientUpdateResponse>} recipientUpdateResults
   */
  exports.prototype['recipientUpdateResults'] = undefined;



  return exports;
}));


