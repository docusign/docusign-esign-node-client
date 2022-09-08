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
    define(['ApiClient', 'model/Checkbox', 'model/Email', 'model/ModelDate', 'model/ModelNumber', 'model/RadioGroup', 'model/SenderCompany', 'model/SenderName', 'model/Ssn', 'model/TabGroup', 'model/Text', 'model/Zip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Checkbox'), require('./Email'), require('./ModelDate'), require('./ModelNumber'), require('./RadioGroup'), require('./SenderCompany'), require('./SenderName'), require('./Ssn'), require('./TabGroup'), require('./Text'), require('./Zip'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PrefillTabs = factory(root.Docusign.ApiClient, root.Docusign.Checkbox, root.Docusign.Email, root.Docusign.ModelDate, root.Docusign.ModelNumber, root.Docusign.RadioGroup, root.Docusign.SenderCompany, root.Docusign.SenderName, root.Docusign.Ssn, root.Docusign.TabGroup, root.Docusign.Text, root.Docusign.Zip);
  }
}(this, function(ApiClient, Checkbox, Email, ModelDate, ModelNumber, RadioGroup, SenderCompany, SenderName, Ssn, TabGroup, Text, Zip) {
  'use strict';


  /**
   * The PrefillTabs model module.
   * @module model/PrefillTabs
   */

  /**
   * Constructs a new <code>PrefillTabs</code>.
   * Prefill tabs are tabs that the sender can fill in before the envelope is sent. They are sometimes called sender tags or pre-fill fields.  Only the following tab types can be prefill tabs:  - text - check boxes - radio buttons    [Pre-Fill Your Own Document Fields][app] describes how prefill tabs work in the web application.   [Customize your envelopes with pre-fill fields][catblog] shows how to use prefill tabs in your application using the eSignature SDKs.  [app]:      https://support.docusign.com/en/guides/ndse-user-guide-prefill-fields [catblog]:  https://www.docusign.com/blog/developers/common-api-tasks-customize-your-envelopes-pre-fill-fields
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
      if (data.hasOwnProperty('dateTabs')) {
        obj['dateTabs'] = ApiClient.convertToType(data['dateTabs'], [ModelDate]);
      }
      if (data.hasOwnProperty('emailTabs')) {
        obj['emailTabs'] = ApiClient.convertToType(data['emailTabs'], [Email]);
      }
      if (data.hasOwnProperty('numberTabs')) {
        obj['numberTabs'] = ApiClient.convertToType(data['numberTabs'], [ModelNumber]);
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
      if (data.hasOwnProperty('ssnTabs')) {
        obj['ssnTabs'] = ApiClient.convertToType(data['ssnTabs'], [Ssn]);
      }
      if (data.hasOwnProperty('tabGroups')) {
        obj['tabGroups'] = ApiClient.convertToType(data['tabGroups'], [TabGroup]);
      }
      if (data.hasOwnProperty('textTabs')) {
        obj['textTabs'] = ApiClient.convertToType(data['textTabs'], [Text]);
      }
      if (data.hasOwnProperty('zipTabs')) {
        obj['zipTabs'] = ApiClient.convertToType(data['zipTabs'], [Zip]);
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
   * Specifies a tab on the document where you want the recipient to enter a date. Date tabs are single-line fields that allow date information to be entered in any format. The tooltip for this tab recommends entering the date as MM/DD/YYYY, but this is not enforced. The format entered by the signer is retained.   If you need a particular date format enforced, DocuSign recommends using a Text tab with a Validation Pattern and Validation Message to enforce the format.
   * @member {Array.<module:model/ModelDate>} dateTabs
   */
  exports.prototype['dateTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient to enter an email. Email tags are single-line fields that accept any characters. The system checks that a valid email format (i.e. xxx@yyy.zzz) is entered in the tag. It uses the same parameters as a Text tab, with the validation message and pattern set for email information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Email>} emailTabs
   */
  exports.prototype['emailTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient to enter a number. It uses the same parameters as a Text tab, with the validation message and pattern set for number information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response. 
   * @member {Array.<module:model/ModelNumber>} numberTabs
   */
  exports.prototype['numberTabs'] = undefined;
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
   * Specifies a tag on the document where you want the recipient to enter a Social Security Number (SSN). A SSN can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for SSN information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Ssn>} ssnTabs
   */
  exports.prototype['ssnTabs'] = undefined;
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
  /**
   * Specifies a tag on the document where you want the recipient to enter a ZIP code. The ZIP code can be a five numbers or the ZIP+4 format with nine numbers. The zip code can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for ZIP code information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Zip>} zipTabs
   */
  exports.prototype['zipTabs'] = undefined;



  return exports;
}));


