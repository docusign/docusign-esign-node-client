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
    define(['ApiClient', 'model/AdminMessage', 'model/AskAnAdmin', 'model/SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdminMessage'), require('./AskAnAdmin'), require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountUISettings = factory(root.Docusign.ApiClient, root.Docusign.AdminMessage, root.Docusign.AskAnAdmin, root.Docusign.SettingsMetadata);
  }
}(this, function(ApiClient, AdminMessage, AskAnAdmin, SettingsMetadata) {
  'use strict';


  /**
   * The AccountUISettings model module.
   * @module model/AccountUISettings
   */

  /**
   * Constructs a new <code>AccountUISettings</code>.
   * An object that defines the options that are available to non-administrators in the UI.
   * @alias module:model/AccountUISettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountUISettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountUISettings} obj Optional instance to populate.
   * @return {module:model/AccountUISettings} The populated <code>AccountUISettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adminMessage')) {
        obj['adminMessage'] = AdminMessage.constructFromObject(data['adminMessage']);
      }
      if (data.hasOwnProperty('askAnAdmin')) {
        obj['askAnAdmin'] = AskAnAdmin.constructFromObject(data['askAnAdmin']);
      }
      if (data.hasOwnProperty('clickwrapSchemaVersion')) {
        obj['clickwrapSchemaVersion'] = ApiClient.convertToType(data['clickwrapSchemaVersion'], 'String');
      }
      if (data.hasOwnProperty('clickwrapSchemaVersionMetadata')) {
        obj['clickwrapSchemaVersionMetadata'] = SettingsMetadata.constructFromObject(data['clickwrapSchemaVersionMetadata']);
      }
      if (data.hasOwnProperty('enableAdminMessage')) {
        obj['enableAdminMessage'] = ApiClient.convertToType(data['enableAdminMessage'], 'String');
      }
      if (data.hasOwnProperty('enableAdminMessageMetadata')) {
        obj['enableAdminMessageMetadata'] = SettingsMetadata.constructFromObject(data['enableAdminMessageMetadata']);
      }
      if (data.hasOwnProperty('enableEasySignCanUseMultiTemplateApply')) {
        obj['enableEasySignCanUseMultiTemplateApply'] = ApiClient.convertToType(data['enableEasySignCanUseMultiTemplateApply'], 'String');
      }
      if (data.hasOwnProperty('enableEasySignCanUseMultiTemplateApplyMetadata')) {
        obj['enableEasySignCanUseMultiTemplateApplyMetadata'] = SettingsMetadata.constructFromObject(data['enableEasySignCanUseMultiTemplateApplyMetadata']);
      }
      if (data.hasOwnProperty('enableEasySignTemplateUpload')) {
        obj['enableEasySignTemplateUpload'] = ApiClient.convertToType(data['enableEasySignTemplateUpload'], 'String');
      }
      if (data.hasOwnProperty('enableEasySignTemplateUploadMetadata')) {
        obj['enableEasySignTemplateUploadMetadata'] = SettingsMetadata.constructFromObject(data['enableEasySignTemplateUploadMetadata']);
      }
      if (data.hasOwnProperty('enableEnvelopeCopyWithData')) {
        obj['enableEnvelopeCopyWithData'] = ApiClient.convertToType(data['enableEnvelopeCopyWithData'], 'String');
      }
      if (data.hasOwnProperty('enableEnvelopeCopyWithDataMetadata')) {
        obj['enableEnvelopeCopyWithDataMetadata'] = SettingsMetadata.constructFromObject(data['enableEnvelopeCopyWithDataMetadata']);
      }
      if (data.hasOwnProperty('enableLegacySendflowLink')) {
        obj['enableLegacySendflowLink'] = ApiClient.convertToType(data['enableLegacySendflowLink'], 'String');
      }
      if (data.hasOwnProperty('enableLegacySendflowLinkMetadata')) {
        obj['enableLegacySendflowLinkMetadata'] = SettingsMetadata.constructFromObject(data['enableLegacySendflowLinkMetadata']);
      }
      if (data.hasOwnProperty('hasExternalLinkedAccounts')) {
        obj['hasExternalLinkedAccounts'] = ApiClient.convertToType(data['hasExternalLinkedAccounts'], 'String');
      }
      if (data.hasOwnProperty('hasExternalLinkedAccountsMetadata')) {
        obj['hasExternalLinkedAccountsMetadata'] = SettingsMetadata.constructFromObject(data['hasExternalLinkedAccountsMetadata']);
      }
      if (data.hasOwnProperty('hideSendAnEnvelope')) {
        obj['hideSendAnEnvelope'] = ApiClient.convertToType(data['hideSendAnEnvelope'], 'String');
      }
      if (data.hasOwnProperty('hideSendAnEnvelopeMetadata')) {
        obj['hideSendAnEnvelopeMetadata'] = SettingsMetadata.constructFromObject(data['hideSendAnEnvelopeMetadata']);
      }
      if (data.hasOwnProperty('hideUseATemplate')) {
        obj['hideUseATemplate'] = ApiClient.convertToType(data['hideUseATemplate'], 'String');
      }
      if (data.hasOwnProperty('hideUseATemplateInPrepare')) {
        obj['hideUseATemplateInPrepare'] = ApiClient.convertToType(data['hideUseATemplateInPrepare'], 'String');
      }
      if (data.hasOwnProperty('hideUseATemplateInPrepareMetadata')) {
        obj['hideUseATemplateInPrepareMetadata'] = SettingsMetadata.constructFromObject(data['hideUseATemplateInPrepareMetadata']);
      }
      if (data.hasOwnProperty('hideUseATemplateMetadata')) {
        obj['hideUseATemplateMetadata'] = SettingsMetadata.constructFromObject(data['hideUseATemplateMetadata']);
      }
      if (data.hasOwnProperty('orderBasedRecipientIdGeneration')) {
        obj['orderBasedRecipientIdGeneration'] = ApiClient.convertToType(data['orderBasedRecipientIdGeneration'], 'String');
      }
      if (data.hasOwnProperty('orderBasedRecipientIdGenerationMetadata')) {
        obj['orderBasedRecipientIdGenerationMetadata'] = SettingsMetadata.constructFromObject(data['orderBasedRecipientIdGenerationMetadata']);
      }
      if (data.hasOwnProperty('removeEnvelopeForwarding')) {
        obj['removeEnvelopeForwarding'] = ApiClient.convertToType(data['removeEnvelopeForwarding'], 'String');
      }
      if (data.hasOwnProperty('removeEnvelopeForwardingMetadata')) {
        obj['removeEnvelopeForwardingMetadata'] = SettingsMetadata.constructFromObject(data['removeEnvelopeForwardingMetadata']);
      }
      if (data.hasOwnProperty('shouldRedactAccessCode')) {
        obj['shouldRedactAccessCode'] = ApiClient.convertToType(data['shouldRedactAccessCode'], 'String');
      }
      if (data.hasOwnProperty('shouldRedactAccessCodeMetadata')) {
        obj['shouldRedactAccessCodeMetadata'] = SettingsMetadata.constructFromObject(data['shouldRedactAccessCodeMetadata']);
      }
      if (data.hasOwnProperty('uploadNewImageToSignOrInitial')) {
        obj['uploadNewImageToSignOrInitial'] = ApiClient.convertToType(data['uploadNewImageToSignOrInitial'], 'String');
      }
      if (data.hasOwnProperty('uploadNewImageToSignOrInitialMetadata')) {
        obj['uploadNewImageToSignOrInitialMetadata'] = SettingsMetadata.constructFromObject(data['uploadNewImageToSignOrInitialMetadata']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {module:model/AdminMessage} adminMessage
   */
  exports.prototype['adminMessage'] = undefined;
  /**
   * 
   * @member {module:model/AskAnAdmin} askAnAdmin
   */
  exports.prototype['askAnAdmin'] = undefined;
  /**
   * 
   * @member {String} clickwrapSchemaVersion
   */
  exports.prototype['clickwrapSchemaVersion'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} clickwrapSchemaVersionMetadata
   */
  exports.prototype['clickwrapSchemaVersionMetadata'] = undefined;
  /**
   * 
   * @member {String} enableAdminMessage
   */
  exports.prototype['enableAdminMessage'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableAdminMessageMetadata
   */
  exports.prototype['enableAdminMessageMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEasySignCanUseMultiTemplateApply
   */
  exports.prototype['enableEasySignCanUseMultiTemplateApply'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableEasySignCanUseMultiTemplateApplyMetadata
   */
  exports.prototype['enableEasySignCanUseMultiTemplateApplyMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEasySignTemplateUpload
   */
  exports.prototype['enableEasySignTemplateUpload'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableEasySignTemplateUploadMetadata
   */
  exports.prototype['enableEasySignTemplateUploadMetadata'] = undefined;
  /**
   * 
   * @member {String} enableEnvelopeCopyWithData
   */
  exports.prototype['enableEnvelopeCopyWithData'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} enableEnvelopeCopyWithDataMetadata
   */
  exports.prototype['enableEnvelopeCopyWithDataMetadata'] = undefined;
  /**
   * 
   * @member {String} enableLegacySendflowLink
   */
  exports.prototype['enableLegacySendflowLink'] = undefined;
  /**
   * @member {module:model/SettingsMetadata} enableLegacySendflowLinkMetadata
   */
  exports.prototype['enableLegacySendflowLinkMetadata'] = undefined;
  /**
   * 
   * @member {String} hasExternalLinkedAccounts
   */
  exports.prototype['hasExternalLinkedAccounts'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} hasExternalLinkedAccountsMetadata
   */
  exports.prototype['hasExternalLinkedAccountsMetadata'] = undefined;
  /**
   * 
   * @member {String} hideSendAnEnvelope
   */
  exports.prototype['hideSendAnEnvelope'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} hideSendAnEnvelopeMetadata
   */
  exports.prototype['hideSendAnEnvelopeMetadata'] = undefined;
  /**
   * 
   * @member {String} hideUseATemplate
   */
  exports.prototype['hideUseATemplate'] = undefined;
  /**
   * 
   * @member {String} hideUseATemplateInPrepare
   */
  exports.prototype['hideUseATemplateInPrepare'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} hideUseATemplateInPrepareMetadata
   */
  exports.prototype['hideUseATemplateInPrepareMetadata'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} hideUseATemplateMetadata
   */
  exports.prototype['hideUseATemplateMetadata'] = undefined;
  /**
   * 
   * @member {String} orderBasedRecipientIdGeneration
   */
  exports.prototype['orderBasedRecipientIdGeneration'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} orderBasedRecipientIdGenerationMetadata
   */
  exports.prototype['orderBasedRecipientIdGenerationMetadata'] = undefined;
  /**
   * 
   * @member {String} removeEnvelopeForwarding
   */
  exports.prototype['removeEnvelopeForwarding'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} removeEnvelopeForwardingMetadata
   */
  exports.prototype['removeEnvelopeForwardingMetadata'] = undefined;
  /**
   * 
   * @member {String} shouldRedactAccessCode
   */
  exports.prototype['shouldRedactAccessCode'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} shouldRedactAccessCodeMetadata
   */
  exports.prototype['shouldRedactAccessCodeMetadata'] = undefined;
  /**
   * 
   * @member {String} uploadNewImageToSignOrInitial
   */
  exports.prototype['uploadNewImageToSignOrInitial'] = undefined;
  /**
   * 
   * @member {module:model/SettingsMetadata} uploadNewImageToSignOrInitialMetadata
   */
  exports.prototype['uploadNewImageToSignOrInitialMetadata'] = undefined;



  return exports;
}));


