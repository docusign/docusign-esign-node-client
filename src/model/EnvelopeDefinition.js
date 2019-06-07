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
    define(['ApiClient', 'model/Attachment', 'model/CompositeTemplate', 'model/CustomFields', 'model/Document', 'model/EmailSettings', 'model/EnvelopeDocument', 'model/EnvelopeMetadata', 'model/EventNotification', 'model/Folder', 'model/LockInformation', 'model/Notification', 'model/PowerForm', 'model/Recipients', 'model/TemplateRole', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Attachment'), require('./CompositeTemplate'), require('./CustomFields'), require('./Document'), require('./EmailSettings'), require('./EnvelopeDocument'), require('./EnvelopeMetadata'), require('./EventNotification'), require('./Folder'), require('./LockInformation'), require('./Notification'), require('./PowerForm'), require('./Recipients'), require('./TemplateRole'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeDefinition = factory(root.Docusign.ApiClient, root.Docusign.Attachment, root.Docusign.CompositeTemplate, root.Docusign.CustomFields, root.Docusign.Document, root.Docusign.EmailSettings, root.Docusign.EnvelopeDocument, root.Docusign.EnvelopeMetadata, root.Docusign.EventNotification, root.Docusign.Folder, root.Docusign.LockInformation, root.Docusign.Notification, root.Docusign.PowerForm, root.Docusign.Recipients, root.Docusign.TemplateRole, root.Docusign.UserInfo);
  }
}(this, function(ApiClient, Attachment, CompositeTemplate, CustomFields, Document, EmailSettings, EnvelopeDocument, EnvelopeMetadata, EventNotification, Folder, LockInformation, Notification, PowerForm, Recipients, TemplateRole, UserInfo) {
  'use strict';


  /**
   * The EnvelopeDefinition model module.
   * @module model/EnvelopeDefinition
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeDefinition</code>.
   * @alias module:model/EnvelopeDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeDefinition} obj Optional instance to populate.
   * @return {module:model/EnvelopeDefinition} The populated <code>EnvelopeDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessControlListBase64')) {
        obj['accessControlListBase64'] = ApiClient.convertToType(data['accessControlListBase64'], 'String');
      }
      if (data.hasOwnProperty('accessibility')) {
        obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
      }
      if (data.hasOwnProperty('allowComments')) {
        obj['allowComments'] = ApiClient.convertToType(data['allowComments'], 'String');
      }
      if (data.hasOwnProperty('allowMarkup')) {
        obj['allowMarkup'] = ApiClient.convertToType(data['allowMarkup'], 'String');
      }
      if (data.hasOwnProperty('allowReassign')) {
        obj['allowReassign'] = ApiClient.convertToType(data['allowReassign'], 'String');
      }
      if (data.hasOwnProperty('allowRecipientRecursion')) {
        obj['allowRecipientRecursion'] = ApiClient.convertToType(data['allowRecipientRecursion'], 'String');
      }
      if (data.hasOwnProperty('allowViewHistory')) {
        obj['allowViewHistory'] = ApiClient.convertToType(data['allowViewHistory'], 'String');
      }
      if (data.hasOwnProperty('anySigner')) {
        obj['anySigner'] = ApiClient.convertToType(data['anySigner'], 'String');
      }
      if (data.hasOwnProperty('asynchronous')) {
        obj['asynchronous'] = ApiClient.convertToType(data['asynchronous'], 'String');
      }
      if (data.hasOwnProperty('attachments')) {
        obj['attachments'] = ApiClient.convertToType(data['attachments'], [Attachment]);
      }
      if (data.hasOwnProperty('attachmentsUri')) {
        obj['attachmentsUri'] = ApiClient.convertToType(data['attachmentsUri'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopy')) {
        obj['authoritativeCopy'] = ApiClient.convertToType(data['authoritativeCopy'], 'String');
      }
      if (data.hasOwnProperty('authoritativeCopyDefault')) {
        obj['authoritativeCopyDefault'] = ApiClient.convertToType(data['authoritativeCopyDefault'], 'String');
      }
      if (data.hasOwnProperty('autoNavigation')) {
        obj['autoNavigation'] = ApiClient.convertToType(data['autoNavigation'], 'String');
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'String');
      }
      if (data.hasOwnProperty('brandLock')) {
        obj['brandLock'] = ApiClient.convertToType(data['brandLock'], 'String');
      }
      if (data.hasOwnProperty('certificateUri')) {
        obj['certificateUri'] = ApiClient.convertToType(data['certificateUri'], 'String');
      }
      if (data.hasOwnProperty('completedDateTime')) {
        obj['completedDateTime'] = ApiClient.convertToType(data['completedDateTime'], 'String');
      }
      if (data.hasOwnProperty('compositeTemplates')) {
        obj['compositeTemplates'] = ApiClient.convertToType(data['compositeTemplates'], [CompositeTemplate]);
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = CustomFields.constructFromObject(data['customFields']);
      }
      if (data.hasOwnProperty('customFieldsUri')) {
        obj['customFieldsUri'] = ApiClient.convertToType(data['customFieldsUri'], 'String');
      }
      if (data.hasOwnProperty('declinedDateTime')) {
        obj['declinedDateTime'] = ApiClient.convertToType(data['declinedDateTime'], 'String');
      }
      if (data.hasOwnProperty('deletedDateTime')) {
        obj['deletedDateTime'] = ApiClient.convertToType(data['deletedDateTime'], 'String');
      }
      if (data.hasOwnProperty('deliveredDateTime')) {
        obj['deliveredDateTime'] = ApiClient.convertToType(data['deliveredDateTime'], 'String');
      }
      if (data.hasOwnProperty('disableResponsiveDocument')) {
        obj['disableResponsiveDocument'] = ApiClient.convertToType(data['disableResponsiveDocument'], 'String');
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
      if (data.hasOwnProperty('documentsCombinedUri')) {
        obj['documentsCombinedUri'] = ApiClient.convertToType(data['documentsCombinedUri'], 'String');
      }
      if (data.hasOwnProperty('documentsUri')) {
        obj['documentsUri'] = ApiClient.convertToType(data['documentsUri'], 'String');
      }
      if (data.hasOwnProperty('emailBlurb')) {
        obj['emailBlurb'] = ApiClient.convertToType(data['emailBlurb'], 'String');
      }
      if (data.hasOwnProperty('emailSettings')) {
        obj['emailSettings'] = EmailSettings.constructFromObject(data['emailSettings']);
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
      }
      if (data.hasOwnProperty('enableWetSign')) {
        obj['enableWetSign'] = ApiClient.convertToType(data['enableWetSign'], 'String');
      }
      if (data.hasOwnProperty('enforceSignerVisibility')) {
        obj['enforceSignerVisibility'] = ApiClient.convertToType(data['enforceSignerVisibility'], 'String');
      }
      if (data.hasOwnProperty('envelopeAttachments')) {
        obj['envelopeAttachments'] = ApiClient.convertToType(data['envelopeAttachments'], [Attachment]);
      }
      if (data.hasOwnProperty('envelopeDocuments')) {
        obj['envelopeDocuments'] = ApiClient.convertToType(data['envelopeDocuments'], [EnvelopeDocument]);
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeIdStamping')) {
        obj['envelopeIdStamping'] = ApiClient.convertToType(data['envelopeIdStamping'], 'String');
      }
      if (data.hasOwnProperty('envelopeLocation')) {
        obj['envelopeLocation'] = ApiClient.convertToType(data['envelopeLocation'], 'String');
      }
      if (data.hasOwnProperty('envelopeMetadata')) {
        obj['envelopeMetadata'] = EnvelopeMetadata.constructFromObject(data['envelopeMetadata']);
      }
      if (data.hasOwnProperty('envelopeUri')) {
        obj['envelopeUri'] = ApiClient.convertToType(data['envelopeUri'], 'String');
      }
      if (data.hasOwnProperty('eventNotification')) {
        obj['eventNotification'] = EventNotification.constructFromObject(data['eventNotification']);
      }
      if (data.hasOwnProperty('eventNotifications')) {
        obj['eventNotifications'] = ApiClient.convertToType(data['eventNotifications'], [EventNotification]);
      }
      if (data.hasOwnProperty('expireAfter')) {
        obj['expireAfter'] = ApiClient.convertToType(data['expireAfter'], 'String');
      }
      if (data.hasOwnProperty('expireDateTime')) {
        obj['expireDateTime'] = ApiClient.convertToType(data['expireDateTime'], 'String');
      }
      if (data.hasOwnProperty('expireEnabled')) {
        obj['expireEnabled'] = ApiClient.convertToType(data['expireEnabled'], 'String');
      }
      if (data.hasOwnProperty('externalEnvelopeId')) {
        obj['externalEnvelopeId'] = ApiClient.convertToType(data['externalEnvelopeId'], 'String');
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('hasComments')) {
        obj['hasComments'] = ApiClient.convertToType(data['hasComments'], 'String');
      }
      if (data.hasOwnProperty('hasFormDataChanged')) {
        obj['hasFormDataChanged'] = ApiClient.convertToType(data['hasFormDataChanged'], 'String');
      }
      if (data.hasOwnProperty('hasWavFile')) {
        obj['hasWavFile'] = ApiClient.convertToType(data['hasWavFile'], 'String');
      }
      if (data.hasOwnProperty('holder')) {
        obj['holder'] = ApiClient.convertToType(data['holder'], 'String');
      }
      if (data.hasOwnProperty('initialSentDateTime')) {
        obj['initialSentDateTime'] = ApiClient.convertToType(data['initialSentDateTime'], 'String');
      }
      if (data.hasOwnProperty('is21CFRPart11')) {
        obj['is21CFRPart11'] = ApiClient.convertToType(data['is21CFRPart11'], 'String');
      }
      if (data.hasOwnProperty('isDynamicEnvelope')) {
        obj['isDynamicEnvelope'] = ApiClient.convertToType(data['isDynamicEnvelope'], 'String');
      }
      if (data.hasOwnProperty('isSignatureProviderEnvelope')) {
        obj['isSignatureProviderEnvelope'] = ApiClient.convertToType(data['isSignatureProviderEnvelope'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('lockInformation')) {
        obj['lockInformation'] = LockInformation.constructFromObject(data['lockInformation']);
      }
      if (data.hasOwnProperty('messageLock')) {
        obj['messageLock'] = ApiClient.convertToType(data['messageLock'], 'String');
      }
      if (data.hasOwnProperty('notification')) {
        obj['notification'] = Notification.constructFromObject(data['notification']);
      }
      if (data.hasOwnProperty('notificationUri')) {
        obj['notificationUri'] = ApiClient.convertToType(data['notificationUri'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('powerForm')) {
        obj['powerForm'] = PowerForm.constructFromObject(data['powerForm']);
      }
      if (data.hasOwnProperty('purgeCompletedDate')) {
        obj['purgeCompletedDate'] = ApiClient.convertToType(data['purgeCompletedDate'], 'String');
      }
      if (data.hasOwnProperty('purgeRequestDate')) {
        obj['purgeRequestDate'] = ApiClient.convertToType(data['purgeRequestDate'], 'String');
      }
      if (data.hasOwnProperty('purgeState')) {
        obj['purgeState'] = ApiClient.convertToType(data['purgeState'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = Recipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('recipientsLock')) {
        obj['recipientsLock'] = ApiClient.convertToType(data['recipientsLock'], 'String');
      }
      if (data.hasOwnProperty('recipientsUri')) {
        obj['recipientsUri'] = ApiClient.convertToType(data['recipientsUri'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = UserInfo.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('sentDateTime')) {
        obj['sentDateTime'] = ApiClient.convertToType(data['sentDateTime'], 'String');
      }
      if (data.hasOwnProperty('signerCanSignOnMobile')) {
        obj['signerCanSignOnMobile'] = ApiClient.convertToType(data['signerCanSignOnMobile'], 'String');
      }
      if (data.hasOwnProperty('signingLocation')) {
        obj['signingLocation'] = ApiClient.convertToType(data['signingLocation'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusChangedDateTime')) {
        obj['statusChangedDateTime'] = ApiClient.convertToType(data['statusChangedDateTime'], 'String');
      }
      if (data.hasOwnProperty('statusDateTime')) {
        obj['statusDateTime'] = ApiClient.convertToType(data['statusDateTime'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('templateRoles')) {
        obj['templateRoles'] = ApiClient.convertToType(data['templateRoles'], [TemplateRole]);
      }
      if (data.hasOwnProperty('templatesUri')) {
        obj['templatesUri'] = ApiClient.convertToType(data['templatesUri'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('useDisclosure')) {
        obj['useDisclosure'] = ApiClient.convertToType(data['useDisclosure'], 'String');
      }
      if (data.hasOwnProperty('voidedDateTime')) {
        obj['voidedDateTime'] = ApiClient.convertToType(data['voidedDateTime'], 'String');
      }
      if (data.hasOwnProperty('voidedReason')) {
        obj['voidedReason'] = ApiClient.convertToType(data['voidedReason'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accessControlListBase64
   */
  exports.prototype['accessControlListBase64'] = undefined;
  /**
   * Sets the document reading zones for screen reader applications.  This element can only be used if Document Accessibility is enabled for the account.   ###### Note: This information is currently generated from the DocuSign web console by setting the reading zones when creating a template, exporting the reading zone string information, and adding it here.
   * @member {String} accessibility
   */
  exports.prototype['accessibility'] = undefined;
  /**
   * 
   * @member {String} allowComments
   */
  exports.prototype['allowComments'] = undefined;
  /**
   * When set to **true**, Document Markup is enabled for envelope. Account must have Document Markup enabled to use this
   * @member {String} allowMarkup
   */
  exports.prototype['allowMarkup'] = undefined;
  /**
   * When set to **true**, the recipient can redirect an envelope to a more appropriate recipient.
   * @member {String} allowReassign
   */
  exports.prototype['allowReassign'] = undefined;
  /**
   * When set to **true**, this enables the Recursive Recipients feature and allows a recipient to appear more than once in the routing order.
   * @member {String} allowRecipientRecursion
   */
  exports.prototype['allowRecipientRecursion'] = undefined;
  /**
   * 
   * @member {String} allowViewHistory
   */
  exports.prototype['allowViewHistory'] = undefined;
  /**
   * 
   * @member {String} anySigner
   */
  exports.prototype['anySigner'] = undefined;
  /**
   * When set to **true**, the envelope is queued for processing and the value of the `status` property is set to 'Processing'. Additionally, get status calls return 'Processing' until completed.
   * @member {String} asynchronous
   */
  exports.prototype['asynchronous'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Attachment>} attachments
   */
  exports.prototype['attachments'] = undefined;
  /**
   * 
   * @member {String} attachmentsUri
   */
  exports.prototype['attachmentsUri'] = undefined;
  /**
   * Specifies the Authoritative copy feature. If set to true the Authoritative copy feature is enabled.
   * @member {String} authoritativeCopy
   */
  exports.prototype['authoritativeCopy'] = undefined;
  /**
   * 
   * @member {String} authoritativeCopyDefault
   */
  exports.prototype['authoritativeCopyDefault'] = undefined;
  /**
   * 
   * @member {String} autoNavigation
   */
  exports.prototype['autoNavigation'] = undefined;
  /**
   * This sets the brand profile format used for the envelope. The value in the string is the brandId associated with the profile. Account branding must be enabled for the account to use this option.
   * @member {String} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * 
   * @member {String} brandLock
   */
  exports.prototype['brandLock'] = undefined;
  /**
   * Retrieves a URI for an endpoint that allows you to easily retrieve certificate information.
   * @member {String} certificateUri
   */
  exports.prototype['certificateUri'] = undefined;
  /**
   * Specifies the date and time this item was completed.
   * @member {String} completedDateTime
   */
  exports.prototype['completedDateTime'] = undefined;
  /**
   * A complex type that can be added to create envelopes from a combination of DocuSign templates and PDF forms. The basic envelope remains the same, while the Composite Template adds new document and template overlays into the envelope. There can be any number of Composite Template structures in the envelope.
   * @member {Array.<module:model/CompositeTemplate>} compositeTemplates
   */
  exports.prototype['compositeTemplates'] = undefined;
  /**
   * Indicates the date and time the item was created.
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * @member {module:model/CustomFields} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the custom fields.
   * @member {String} customFieldsUri
   */
  exports.prototype['customFieldsUri'] = undefined;
  /**
   * The date and time the recipient declined the document.
   * @member {String} declinedDateTime
   */
  exports.prototype['declinedDateTime'] = undefined;
  /**
   * Specifies the data and time the item was deleted.
   * @member {String} deletedDateTime
   */
  exports.prototype['deletedDateTime'] = undefined;
  /**
   * Reserved: For DocuSign use only.
   * @member {String} deliveredDateTime
   */
  exports.prototype['deliveredDateTime'] = undefined;
  /**
   * 
   * @member {String} disableResponsiveDocument
   */
  exports.prototype['disableResponsiveDocument'] = undefined;
  /**
   * Complex element contains the details on the documents in the envelope.
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * 
   * @member {String} documentsCombinedUri
   */
  exports.prototype['documentsCombinedUri'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the documents.
   * @member {String} documentsUri
   */
  exports.prototype['documentsUri'] = undefined;
  /**
   * Optional element. This is the same as the email body. If specified it is included in email body for all envelope recipients. This can be a maximum of 10000 characters
   * @member {String} emailBlurb
   */
  exports.prototype['emailBlurb'] = undefined;
  /**
   * @member {module:model/EmailSettings} emailSettings
   */
  exports.prototype['emailSettings'] = undefined;
  /**
   * Specifies the subject of the email that is sent to all recipients.  See [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
   * @member {String} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * When set to **true**, the signer is allowed to print the document and sign it on paper.
   * @member {String} enableWetSign
   */
  exports.prototype['enableWetSign'] = undefined;
  /**
   * When set to **true**, documents with tabs can only be viewed by signers that have a tab on that document. Recipients that have an administrative role (Agent, Editor, or Intermediaries) or informational role (Certified Deliveries or Carbon Copies) can always see all the documents in an envelope, unless they are specifically excluded using this setting when an envelope is sent. Documents that do not have tabs are always visible to all recipients, unless they are specifically excluded using this setting when an envelope is sent.  Your account must have Document Visibility enabled to use this.
   * @member {String} enforceSignerVisibility
   */
  exports.prototype['enforceSignerVisibility'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Attachment>} envelopeAttachments
   */
  exports.prototype['envelopeAttachments'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EnvelopeDocument>} envelopeDocuments
   */
  exports.prototype['envelopeDocuments'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * When set to **true**, Envelope ID Stamping is enabled.
   * @member {String} envelopeIdStamping
   */
  exports.prototype['envelopeIdStamping'] = undefined;
  /**
   * 
   * @member {String} envelopeLocation
   */
  exports.prototype['envelopeLocation'] = undefined;
  /**
   * @member {module:model/EnvelopeMetadata} envelopeMetadata
   */
  exports.prototype['envelopeMetadata'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the envelope or envelopes.
   * @member {String} envelopeUri
   */
  exports.prototype['envelopeUri'] = undefined;
  /**
   * @member {module:model/EventNotification} eventNotification
   */
  exports.prototype['eventNotification'] = undefined;
  /**
   * 
   * @member {Array.<module:model/EventNotification>} eventNotifications
   */
  exports.prototype['eventNotifications'] = undefined;
  /**
   * 
   * @member {String} expireAfter
   */
  exports.prototype['expireAfter'] = undefined;
  /**
   * 
   * @member {String} expireDateTime
   */
  exports.prototype['expireDateTime'] = undefined;
  /**
   * 
   * @member {String} expireEnabled
   */
  exports.prototype['expireEnabled'] = undefined;
  /**
   * 
   * @member {String} externalEnvelopeId
   */
  exports.prototype['externalEnvelopeId'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * 
   * @member {String} hasComments
   */
  exports.prototype['hasComments'] = undefined;
  /**
   * 
   * @member {String} hasFormDataChanged
   */
  exports.prototype['hasFormDataChanged'] = undefined;
  /**
   * 
   * @member {String} hasWavFile
   */
  exports.prototype['hasWavFile'] = undefined;
  /**
   * 
   * @member {String} holder
   */
  exports.prototype['holder'] = undefined;
  /**
   * 
   * @member {String} initialSentDateTime
   */
  exports.prototype['initialSentDateTime'] = undefined;
  /**
   * When set to **true**, indicates that this module is enabled on the account.
   * @member {String} is21CFRPart11
   */
  exports.prototype['is21CFRPart11'] = undefined;
  /**
   * 
   * @member {String} isDynamicEnvelope
   */
  exports.prototype['isDynamicEnvelope'] = undefined;
  /**
   * 
   * @member {String} isSignatureProviderEnvelope
   */
  exports.prototype['isSignatureProviderEnvelope'] = undefined;
  /**
   * The date and time the item was last modified.
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
  /**
   * 
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/LockInformation} lockInformation
   */
  exports.prototype['lockInformation'] = undefined;
  /**
   * When set to **true**, prevents senders from changing the contents of `emailBlurb` and `emailSubject` properties for the envelope.   Additionally, this prevents users from making changes to the contents of `emailBlurb` and `emailSubject` properties when correcting envelopes.   However, if the `messageLock` node is set to true**** and the `emailSubject` property is empty, senders and correctors are able to add a subject to the envelope.
   * @member {String} messageLock
   */
  exports.prototype['messageLock'] = undefined;
  /**
   * @member {module:model/Notification} notification
   */
  exports.prototype['notification'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the notifications.
   * @member {String} notificationUri
   */
  exports.prototype['notificationUri'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {module:model/PowerForm} powerForm
   */
  exports.prototype['powerForm'] = undefined;
  /**
   * 
   * @member {String} purgeCompletedDate
   */
  exports.prototype['purgeCompletedDate'] = undefined;
  /**
   * 
   * @member {String} purgeRequestDate
   */
  exports.prototype['purgeRequestDate'] = undefined;
  /**
   * Initiates a purge request. Valid values are: * documents_queued: Places envelope documents in the purge queue. * documents_and_metadata_queued: Places envelope documents and metadata in the purge queue. 
   * @member {String} purgeState
   */
  exports.prototype['purgeState'] = undefined;
  /**
   * @member {module:model/Recipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * When set to **true**, prevents senders from changing, correcting, or deleting the recipient information for the envelope.
   * @member {String} recipientsLock
   */
  exports.prototype['recipientsLock'] = undefined;
  /**
   * Contains a URI for an endpoint that you can use to retrieve the recipients.
   * @member {String} recipientsUri
   */
  exports.prototype['recipientsUri'] = undefined;
  /**
   * @member {module:model/UserInfo} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * The date and time the envelope was sent.
   * @member {String} sentDateTime
   */
  exports.prototype['sentDateTime'] = undefined;
  /**
   * 
   * @member {String} signerCanSignOnMobile
   */
  exports.prototype['signerCanSignOnMobile'] = undefined;
  /**
   * Specifies the physical location where the signing takes place. It can have two enumeration values; InPerson and Online. The default value is Online.
   * @member {String} signingLocation
   */
  exports.prototype['signingLocation'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The data and time the status changed.
   * @member {String} statusChangedDateTime
   */
  exports.prototype['statusChangedDateTime'] = undefined;
  /**
   * 
   * @member {String} statusDateTime
   */
  exports.prototype['statusDateTime'] = undefined;
  /**
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * Specifies the template recipients. Each roleName in the template must have a recipient assigned to it. This is made up elements:  * email - The recipient's email address. * name - The recipient's name. * roleName - The template roleName associated with the recipient. * clientUserId - Optional, this sets if the signer is This specifies if the recipient is embedded or remote. If the clientUserId is not null then the recipient is embedded. Note that if a ClientUserId is used and the account settings SignerMustHaveAccount or SignerMustLoginToSign are true, an error is generated on sending. * defaultRecipient - Optional, When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient. * routingOrder - This specifies the routing order of the recipient in the envelope. * accessCode - This optional element specifies the access code a recipient has to enter to validate the identity. This can be a maximum of 50 characters. * inPersonSignerName - Optional, if the template role is an in person signer, this is the full legal name of the signer. This can be a maximum of 100 characters. * emailNotification - This is an optional complex element that has a role specific emailSubject, emailBody, and language. It follows the same format as the emailNotification node for Recipients. * tabs - This allows the tab values to be specified for matching to tabs in the template. 
   * @member {Array.<module:model/TemplateRole>} templateRoles
   */
  exports.prototype['templateRoles'] = undefined;
  /**
   * Contains a URI for an endpoint which you can use to retrieve the templates.
   * @member {String} templatesUri
   */
  exports.prototype['templatesUri'] = undefined;
  /**
   *  Used to identify an envelope. The id is a sender-generated value and is valid in the DocuSign system for 7 days. It is recommended that a transaction ID is used for offline signing to ensure that an envelope is not sent multiple times. The `transactionId` property can be used determine an envelope's status (i.e. was it created or not) in cases where the internet connection was lost before the envelope status was returned.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * When set to **true**, the disclosure is shown to recipients in accordance with the account's Electronic Record and Signature Disclosure frequency setting. When set to **false**, the Electronic Record and Signature Disclosure is not shown to any envelope recipients.   If the `useDisclosure` property is not set, then the account's normal disclosure setting is used and the value of the `useDisclosure` property is not returned in responses when getting envelope information.
   * @member {String} useDisclosure
   */
  exports.prototype['useDisclosure'] = undefined;
  /**
   * The date and time the envelope or template was voided.
   * @member {String} voidedDateTime
   */
  exports.prototype['voidedDateTime'] = undefined;
  /**
   * The reason the envelope or template was voided.
   * @member {String} voidedReason
   */
  exports.prototype['voidedReason'] = undefined;



  return exports;
}));


