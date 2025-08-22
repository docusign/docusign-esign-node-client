/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
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
    define(['ApiClient', 'model/EnvelopeViewDocumentSettings', 'model/EnvelopeViewEnvelopeCustomFieldSettings', 'model/EnvelopeViewTaggerSettings', 'model/TemplateViewRecipientSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeViewDocumentSettings'), require('./EnvelopeViewEnvelopeCustomFieldSettings'), require('./EnvelopeViewTaggerSettings'), require('./TemplateViewRecipientSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateViewSettings = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeViewDocumentSettings, root.Docusign.EnvelopeViewEnvelopeCustomFieldSettings, root.Docusign.EnvelopeViewTaggerSettings, root.Docusign.TemplateViewRecipientSettings);
  }
}(this, function(ApiClient, EnvelopeViewDocumentSettings, EnvelopeViewEnvelopeCustomFieldSettings, EnvelopeViewTaggerSettings, TemplateViewRecipientSettings) {
  'use strict';


  /**
   * The TemplateViewSettings model module.
   * @module model/TemplateViewSettings
   */

  /**
   * Constructs a new <code>TemplateViewSettings</code>.
   * @alias module:model/TemplateViewSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateViewSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateViewSettings} obj Optional instance to populate.
   * @return {module:model/TemplateViewSettings} The populated <code>TemplateViewSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backButtonAction')) {
        obj['backButtonAction'] = ApiClient.convertToType(data['backButtonAction'], 'String');
      }
      if (data.hasOwnProperty('documentSettings')) {
        obj['documentSettings'] = EnvelopeViewDocumentSettings.constructFromObject(data['documentSettings']);
      }
      if (data.hasOwnProperty('envelopeCustomFieldSettings')) {
        obj['envelopeCustomFieldSettings'] = EnvelopeViewEnvelopeCustomFieldSettings.constructFromObject(data['envelopeCustomFieldSettings']);
      }
      if (data.hasOwnProperty('lockToken')) {
        obj['lockToken'] = ApiClient.convertToType(data['lockToken'], 'String');
      }
      if (data.hasOwnProperty('recipientSettings')) {
        obj['recipientSettings'] = TemplateViewRecipientSettings.constructFromObject(data['recipientSettings']);
      }
      if (data.hasOwnProperty('showAdvancedOptions')) {
        obj['showAdvancedOptions'] = ApiClient.convertToType(data['showAdvancedOptions'], 'String');
      }
      if (data.hasOwnProperty('showBackButton')) {
        obj['showBackButton'] = ApiClient.convertToType(data['showBackButton'], 'String');
      }
      if (data.hasOwnProperty('showDiscardAction')) {
        obj['showDiscardAction'] = ApiClient.convertToType(data['showDiscardAction'], 'String');
      }
      if (data.hasOwnProperty('showHeaderActions')) {
        obj['showHeaderActions'] = ApiClient.convertToType(data['showHeaderActions'], 'String');
      }
      if (data.hasOwnProperty('startingScreen')) {
        obj['startingScreen'] = ApiClient.convertToType(data['startingScreen'], 'String');
      }
      if (data.hasOwnProperty('taggerSettings')) {
        obj['taggerSettings'] = EnvelopeViewTaggerSettings.constructFromObject(data['taggerSettings']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} backButtonAction
   */
  exports.prototype['backButtonAction'] = undefined;
  /**
   * 
   * @member {module:model/EnvelopeViewDocumentSettings} documentSettings
   */
  exports.prototype['documentSettings'] = undefined;
  /**
   * 
   * @member {module:model/EnvelopeViewEnvelopeCustomFieldSettings} envelopeCustomFieldSettings
   */
  exports.prototype['envelopeCustomFieldSettings'] = undefined;
  /**
   * 
   * @member {String} lockToken
   */
  exports.prototype['lockToken'] = undefined;
  /**
   * 
   * @member {module:model/TemplateViewRecipientSettings} recipientSettings
   */
  exports.prototype['recipientSettings'] = undefined;
  /**
   * 
   * @member {String} showAdvancedOptions
   */
  exports.prototype['showAdvancedOptions'] = undefined;
  /**
   * 
   * @member {String} showBackButton
   */
  exports.prototype['showBackButton'] = undefined;
  /**
   * 
   * @member {String} showDiscardAction
   */
  exports.prototype['showDiscardAction'] = undefined;
  /**
   * 
   * @member {String} showHeaderActions
   */
  exports.prototype['showHeaderActions'] = undefined;
  /**
   * 
   * @member {String} startingScreen
   */
  exports.prototype['startingScreen'] = undefined;
  /**
   * 
   * @member {module:model/EnvelopeViewTaggerSettings} taggerSettings
   */
  exports.prototype['taggerSettings'] = undefined;



  return exports;
}));


