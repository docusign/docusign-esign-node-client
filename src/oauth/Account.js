(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organization'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    //root.Docusign.UserInfo = factory(root.Docusign.ApiClient, root.Docusign.ErrorDetails);
  }
}(this, function() {
  'use strict';


  /**
   * The Account model module.
   * @module oauth/Account
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/UserInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  exports.constructFromObject = function (data, obj){
    var ApiClient = require('../ApiClient');
    var Organization = require('./Organization');

    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('account_id')) {
        obj['accountId'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('is_default')) {
        obj['isDefault'] = ApiClient.convertToType(data['is_default'], 'String');
      }
      if (data.hasOwnProperty('account_name')) {
        obj['accountName'] = ApiClient.convertToType(data['account_name'], 'String');
      }
      if (data.hasOwnProperty('base_uri')) {
        obj['baseUri'] = ApiClient.convertToType(data['base_uri'], 'String');
      }
      if(data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], Organization)
      }
    }
    return obj;
  }

  /**
   *
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   *
   * @member {String} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {String} baseUri
   */
  exports.prototype['baseUri'] = undefined;
  /**
   * @member {Organization} organization
   */
  exports.prototype['organization'] = undefined;


  return exports;
}));
