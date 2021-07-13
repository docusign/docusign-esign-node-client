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
    define(['ApiClient', 'model/Checkbox', 'model/RadioGroup', 'model/SenderCompany', 'model/SenderName', 'model/TabGroup', 'model/Text'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Checkbox'), require('./RadioGroup'), require('./SenderCompany'), require('./SenderName'), require('./TabGroup'), require('./Text'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PrefillTabs = factory(root.Docusign.ApiClient, root.Docusign.Checkbox, root.Docusign.RadioGroup, root.Docusign.SenderCompany, root.Docusign.SenderName, root.Docusign.TabGroup, root.Docusign.Text);
  }
}(this, function(ApiClient, Checkbox, RadioGroup, SenderCompany, SenderName, TabGroup, Text) {
  'use strict';


  /**
   * The PrefillTabs model module.
   * @module model/PrefillTabs
   */

  /**
   * Constructs a new <code>PrefillTabs</code>.
   * @alias module:model/PrefillTabs
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PrefillTabs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrefillTabs} obj Optional instance to populate.
   * @return {module:model/PrefillTabs} The populated <code>PrefillTabs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('checkboxTabs')) {
        obj['checkboxTabs'] = ApiClient.convertToType(data['checkboxTabs'], [Checkbox]);
      }
      if (data.hasOwnProperty('radioGroupTabs')) {
        obj['radioGroupTabs'] = ApiClient.convertToType(data['radioGroupTabs'], [RadioGroup]);
      }
      if (data.hasOwnProperty('senderCompanyTabs')) {
        obj['senderCompanyTabs'] = ApiClient.convertToType(data['senderCompanyTabs'], [SenderCompany]);
      }
      if (data.hasOwnProperty('senderNameTabs')) {
        obj['senderNameTabs'] = ApiClient.convertToType(data['senderNameTabs'], [SenderName]);
      }
      if (data.hasOwnProperty('tabGroups')) {
        obj['tabGroups'] = ApiClient.convertToType(data['tabGroups'], [TabGroup]);
      }
      if (data.hasOwnProperty('textTabs')) {
        obj['textTabs'] = ApiClient.convertToType(data['textTabs'], [Text]);
      }
    }
    return obj;
  }

  /**
   * Specifies a tag on the document in a location where the recipient can select an option.
   * @member {Array.<module:model/Checkbox>} checkboxTabs
   */
  exports.prototype['checkboxTabs'] = undefined;
  /**
   * Specifies a tag on the document in a location where the recipient can select one option from a group of options using a radio button. The radio buttons do not have to be on the same page in a document.
   * @member {Array.<module:model/RadioGroup>} radioGroupTabs
   */
  exports.prototype['radioGroupTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SenderCompany>} senderCompanyTabs
   */
  exports.prototype['senderCompanyTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SenderName>} senderNameTabs
   */
  exports.prototype['senderNameTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/TabGroup>} tabGroups
   */
  exports.prototype['tabGroups'] = undefined;
  /**
   * Specifies a that that is an adaptable field that allows the recipient to enter different text information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Text>} textTabs
   */
  exports.prototype['textTabs'] = undefined;



  return exports;
}));


