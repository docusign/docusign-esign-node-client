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
    root.Docusign.ReportInProductRunResponseRowFields = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ReportInProductRunResponseRowFields model module.
   * @module model/ReportInProductRunResponseRowFields
   */

  /**
   * Constructs a new <code>ReportInProductRunResponseRowFields</code>.
   * @alias module:model/ReportInProductRunResponseRowFields
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportInProductRunResponseRowFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInProductRunResponseRowFields} obj Optional instance to populate.
   * @return {module:model/ReportInProductRunResponseRowFields} The populated <code>ReportInProductRunResponseRowFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCodeRequired')) {
        obj['accessCodeRequired'] = ApiClient.convertToType(data['accessCodeRequired'], 'String');
      }
      if (data.hasOwnProperty('accessCodesAttempted')) {
        obj['accessCodesAttempted'] = ApiClient.convertToType(data['accessCodesAttempted'], 'String');
      }
      if (data.hasOwnProperty('accessCodesFailed')) {
        obj['accessCodesFailed'] = ApiClient.convertToType(data['accessCodesFailed'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('authenticationCategory')) {
        obj['authenticationCategory'] = ApiClient.convertToType(data['authenticationCategory'], 'String');
      }
      if (data.hasOwnProperty('authenticationSuccess')) {
        obj['authenticationSuccess'] = ApiClient.convertToType(data['authenticationSuccess'], 'String');
      }
      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
      }
      if (data.hasOwnProperty('averageTimeToCompleteSeconds')) {
        obj['averageTimeToCompleteSeconds'] = ApiClient.convertToType(data['averageTimeToCompleteSeconds'], 'String');
      }
      if (data.hasOwnProperty('avgCompleteSeconds')) {
        obj['avgCompleteSeconds'] = ApiClient.convertToType(data['avgCompleteSeconds'], 'String');
      }
      if (data.hasOwnProperty('captureMethod')) {
        obj['captureMethod'] = ApiClient.convertToType(data['captureMethod'], 'String');
      }
      if (data.hasOwnProperty('completed')) {
        obj['completed'] = ApiClient.convertToType(data['completed'], 'String');
      }
      if (data.hasOwnProperty('completedTs')) {
        obj['completedTs'] = ApiClient.convertToType(data['completedTs'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
      }
      if (data.hasOwnProperty('customField')) {
        obj['customField'] = ApiClient.convertToType(data['customField'], 'String');
      }
      if (data.hasOwnProperty('declinedDate')) {
        obj['declinedDate'] = ApiClient.convertToType(data['declinedDate'], 'String');
      }
      if (data.hasOwnProperty('declinedReason')) {
        obj['declinedReason'] = ApiClient.convertToType(data['declinedReason'], 'String');
      }
      if (data.hasOwnProperty('deliveredDate')) {
        obj['deliveredDate'] = ApiClient.convertToType(data['deliveredDate'], 'String');
      }
      if (data.hasOwnProperty('envelopeCount')) {
        obj['envelopeCount'] = ApiClient.convertToType(data['envelopeCount'], 'String');
      }
      if (data.hasOwnProperty('envelopeCreator')) {
        obj['envelopeCreator'] = ApiClient.convertToType(data['envelopeCreator'], 'String');
      }
      if (data.hasOwnProperty('envelopeId')) {
        obj['envelopeId'] = ApiClient.convertToType(data['envelopeId'], 'String');
      }
      if (data.hasOwnProperty('envelopeInitialSendTs')) {
        obj['envelopeInitialSendTs'] = ApiClient.convertToType(data['envelopeInitialSendTs'], 'String');
      }
      if (data.hasOwnProperty('envelopesBilled')) {
        obj['envelopesBilled'] = ApiClient.convertToType(data['envelopesBilled'], 'String');
      }
      if (data.hasOwnProperty('envelopesCompleted')) {
        obj['envelopesCompleted'] = ApiClient.convertToType(data['envelopesCompleted'], 'String');
      }
      if (data.hasOwnProperty('envelopesCompletedCount')) {
        obj['envelopesCompletedCount'] = ApiClient.convertToType(data['envelopesCompletedCount'], 'String');
      }
      if (data.hasOwnProperty('envelopesDeclined')) {
        obj['envelopesDeclined'] = ApiClient.convertToType(data['envelopesDeclined'], 'String');
      }
      if (data.hasOwnProperty('envelopesSent')) {
        obj['envelopesSent'] = ApiClient.convertToType(data['envelopesSent'], 'String');
      }
      if (data.hasOwnProperty('envelopesSentCount')) {
        obj['envelopesSentCount'] = ApiClient.convertToType(data['envelopesSentCount'], 'String');
      }
      if (data.hasOwnProperty('envelopesVoided')) {
        obj['envelopesVoided'] = ApiClient.convertToType(data['envelopesVoided'], 'String');
      }
      if (data.hasOwnProperty('envelopeVoidedReason')) {
        obj['envelopeVoidedReason'] = ApiClient.convertToType(data['envelopeVoidedReason'], 'String');
      }
      if (data.hasOwnProperty('eodDocumentDescription')) {
        obj['eodDocumentDescription'] = ApiClient.convertToType(data['eodDocumentDescription'], 'String');
      }
      if (data.hasOwnProperty('eodDocumentName')) {
        obj['eodDocumentName'] = ApiClient.convertToType(data['eodDocumentName'], 'String');
      }
      if (data.hasOwnProperty('eodDocumentProfileId')) {
        obj['eodDocumentProfileId'] = ApiClient.convertToType(data['eodDocumentProfileId'], 'String');
      }
      if (data.hasOwnProperty('eodTransactionId')) {
        obj['eodTransactionId'] = ApiClient.convertToType(data['eodTransactionId'], 'String');
      }
      if (data.hasOwnProperty('eodTransactionName')) {
        obj['eodTransactionName'] = ApiClient.convertToType(data['eodTransactionName'], 'String');
      }
      if (data.hasOwnProperty('eventDate')) {
        obj['eventDate'] = ApiClient.convertToType(data['eventDate'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
      }
      if (data.hasOwnProperty('expiredTs')) {
        obj['expiredTs'] = ApiClient.convertToType(data['expiredTs'], 'String');
      }
      if (data.hasOwnProperty('failureReason')) {
        obj['failureReason'] = ApiClient.convertToType(data['failureReason'], 'String');
      }
      if (data.hasOwnProperty('failures')) {
        obj['failures'] = ApiClient.convertToType(data['failures'], 'String');
      }
      if (data.hasOwnProperty('failureVendorCode')) {
        obj['failureVendorCode'] = ApiClient.convertToType(data['failureVendorCode'], 'String');
      }
      if (data.hasOwnProperty('failureVendorReason')) {
        obj['failureVendorReason'] = ApiClient.convertToType(data['failureVendorReason'], 'String');
      }
      if (data.hasOwnProperty('firstSendTs')) {
        obj['firstSendTs'] = ApiClient.convertToType(data['firstSendTs'], 'String');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('hoursToCompleteEnd')) {
        obj['hoursToCompleteEnd'] = ApiClient.convertToType(data['hoursToCompleteEnd'], 'String');
      }
      if (data.hasOwnProperty('hoursToCompleteStart')) {
        obj['hoursToCompleteStart'] = ApiClient.convertToType(data['hoursToCompleteStart'], 'String');
      }
      if (data.hasOwnProperty('idChecksAttempted')) {
        obj['idChecksAttempted'] = ApiClient.convertToType(data['idChecksAttempted'], 'String');
      }
      if (data.hasOwnProperty('idChecksFailed')) {
        obj['idChecksFailed'] = ApiClient.convertToType(data['idChecksFailed'], 'String');
      }
      if (data.hasOwnProperty('idCountry')) {
        obj['idCountry'] = ApiClient.convertToType(data['idCountry'], 'String');
      }
      if (data.hasOwnProperty('idMethod')) {
        obj['idMethod'] = ApiClient.convertToType(data['idMethod'], 'String');
      }
      if (data.hasOwnProperty('initialSendTs')) {
        obj['initialSendTs'] = ApiClient.convertToType(data['initialSendTs'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('lastActivity')) {
        obj['lastActivity'] = ApiClient.convertToType(data['lastActivity'], 'String');
      }
      if (data.hasOwnProperty('lastActivityDate')) {
        obj['lastActivityDate'] = ApiClient.convertToType(data['lastActivityDate'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('lastSentDate')) {
        obj['lastSentDate'] = ApiClient.convertToType(data['lastSentDate'], 'String');
      }
      if (data.hasOwnProperty('lastUsed')) {
        obj['lastUsed'] = ApiClient.convertToType(data['lastUsed'], 'String');
      }
      if (data.hasOwnProperty('metadataRemoved')) {
        obj['metadataRemoved'] = ApiClient.convertToType(data['metadataRemoved'], 'String');
      }
      if (data.hasOwnProperty('notSigned')) {
        obj['notSigned'] = ApiClient.convertToType(data['notSigned'], 'String');
      }
      if (data.hasOwnProperty('numberOfAuthenticatedRecipients')) {
        obj['numberOfAuthenticatedRecipients'] = ApiClient.convertToType(data['numberOfAuthenticatedRecipients'], 'String');
      }
      if (data.hasOwnProperty('numberOfCompletedSignatures')) {
        obj['numberOfCompletedSignatures'] = ApiClient.convertToType(data['numberOfCompletedSignatures'], 'String');
      }
      if (data.hasOwnProperty('numberOfDocuments')) {
        obj['numberOfDocuments'] = ApiClient.convertToType(data['numberOfDocuments'], 'String');
      }
      if (data.hasOwnProperty('numberOfPages')) {
        obj['numberOfPages'] = ApiClient.convertToType(data['numberOfPages'], 'String');
      }
      if (data.hasOwnProperty('numberOfRecipients')) {
        obj['numberOfRecipients'] = ApiClient.convertToType(data['numberOfRecipients'], 'String');
      }
      if (data.hasOwnProperty('numberOfSends')) {
        obj['numberOfSends'] = ApiClient.convertToType(data['numberOfSends'], 'String');
      }
      if (data.hasOwnProperty('numberOfSigners')) {
        obj['numberOfSigners'] = ApiClient.convertToType(data['numberOfSigners'], 'String');
      }
      if (data.hasOwnProperty('numberOfTotalDocuments')) {
        obj['numberOfTotalDocuments'] = ApiClient.convertToType(data['numberOfTotalDocuments'], 'String');
      }
      if (data.hasOwnProperty('numberOfTotalPages')) {
        obj['numberOfTotalPages'] = ApiClient.convertToType(data['numberOfTotalPages'], 'String');
      }
      if (data.hasOwnProperty('numberOfTotalSigners')) {
        obj['numberOfTotalSigners'] = ApiClient.convertToType(data['numberOfTotalSigners'], 'String');
      }
      if (data.hasOwnProperty('numberOfUniqueSenders')) {
        obj['numberOfUniqueSenders'] = ApiClient.convertToType(data['numberOfUniqueSenders'], 'String');
      }
      if (data.hasOwnProperty('numberTotalRecipients')) {
        obj['numberTotalRecipients'] = ApiClient.convertToType(data['numberTotalRecipients'], 'String');
      }
      if (data.hasOwnProperty('otherRecipientsList')) {
        obj['otherRecipientsList'] = ApiClient.convertToType(data['otherRecipientsList'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('ownerMail')) {
        obj['ownerMail'] = ApiClient.convertToType(data['ownerMail'], 'String');
      }
      if (data.hasOwnProperty('periodEnd')) {
        obj['periodEnd'] = ApiClient.convertToType(data['periodEnd'], 'String');
      }
      if (data.hasOwnProperty('periodStart')) {
        obj['periodStart'] = ApiClient.convertToType(data['periodStart'], 'String');
      }
      if (data.hasOwnProperty('phoneCallsAttempted')) {
        obj['phoneCallsAttempted'] = ApiClient.convertToType(data['phoneCallsAttempted'], 'String');
      }
      if (data.hasOwnProperty('phoneCallsFailed')) {
        obj['phoneCallsFailed'] = ApiClient.convertToType(data['phoneCallsFailed'], 'String');
      }
      if (data.hasOwnProperty('piiRedacted')) {
        obj['piiRedacted'] = ApiClient.convertToType(data['piiRedacted'], 'String');
      }
      if (data.hasOwnProperty('purgeDate')) {
        obj['purgeDate'] = ApiClient.convertToType(data['purgeDate'], 'String');
      }
      if (data.hasOwnProperty('reasonForDeclining')) {
        obj['reasonForDeclining'] = ApiClient.convertToType(data['reasonForDeclining'], 'String');
      }
      if (data.hasOwnProperty('reasonForVoiding')) {
        obj['reasonForVoiding'] = ApiClient.convertToType(data['reasonForVoiding'], 'String');
      }
      if (data.hasOwnProperty('reassignReason')) {
        obj['reassignReason'] = ApiClient.convertToType(data['reassignReason'], 'String');
      }
      if (data.hasOwnProperty('received')) {
        obj['received'] = ApiClient.convertToType(data['received'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('recipientAction')) {
        obj['recipientAction'] = ApiClient.convertToType(data['recipientAction'], 'String');
      }
      if (data.hasOwnProperty('recipientCompanyName')) {
        obj['recipientCompanyName'] = ApiClient.convertToType(data['recipientCompanyName'], 'String');
      }
      if (data.hasOwnProperty('recipientCountry')) {
        obj['recipientCountry'] = ApiClient.convertToType(data['recipientCountry'], 'String');
      }
      if (data.hasOwnProperty('recipientEmail')) {
        obj['recipientEmail'] = ApiClient.convertToType(data['recipientEmail'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('recipientName')) {
        obj['recipientName'] = ApiClient.convertToType(data['recipientName'], 'String');
      }
      if (data.hasOwnProperty('recipientRoleName')) {
        obj['recipientRoleName'] = ApiClient.convertToType(data['recipientRoleName'], 'String');
      }
      if (data.hasOwnProperty('recipientTemplateRoleName')) {
        obj['recipientTemplateRoleName'] = ApiClient.convertToType(data['recipientTemplateRoleName'], 'String');
      }
      if (data.hasOwnProperty('recipientTitle')) {
        obj['recipientTitle'] = ApiClient.convertToType(data['recipientTitle'], 'String');
      }
      if (data.hasOwnProperty('recipientType')) {
        obj['recipientType'] = ApiClient.convertToType(data['recipientType'], 'String');
      }
      if (data.hasOwnProperty('recipientUserId')) {
        obj['recipientUserId'] = ApiClient.convertToType(data['recipientUserId'], 'String');
      }
      if (data.hasOwnProperty('remainingSignatures')) {
        obj['remainingSignatures'] = ApiClient.convertToType(data['remainingSignatures'], 'String');
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('senderAccountId')) {
        obj['senderAccountId'] = ApiClient.convertToType(data['senderAccountId'], 'String');
      }
      if (data.hasOwnProperty('senderCompanyName')) {
        obj['senderCompanyName'] = ApiClient.convertToType(data['senderCompanyName'], 'String');
      }
      if (data.hasOwnProperty('senderCountry')) {
        obj['senderCountry'] = ApiClient.convertToType(data['senderCountry'], 'String');
      }
      if (data.hasOwnProperty('senderEmail')) {
        obj['senderEmail'] = ApiClient.convertToType(data['senderEmail'], 'String');
      }
      if (data.hasOwnProperty('senderIPAddress')) {
        obj['senderIPAddress'] = ApiClient.convertToType(data['senderIPAddress'], 'String');
      }
      if (data.hasOwnProperty('senderJobTitle')) {
        obj['senderJobTitle'] = ApiClient.convertToType(data['senderJobTitle'], 'String');
      }
      if (data.hasOwnProperty('senderName')) {
        obj['senderName'] = ApiClient.convertToType(data['senderName'], 'String');
      }
      if (data.hasOwnProperty('senderUserId')) {
        obj['senderUserId'] = ApiClient.convertToType(data['senderUserId'], 'String');
      }
      if (data.hasOwnProperty('signatureType')) {
        obj['signatureType'] = ApiClient.convertToType(data['signatureType'], 'String');
      }
      if (data.hasOwnProperty('signatureTypeValue')) {
        obj['signatureTypeValue'] = ApiClient.convertToType(data['signatureTypeValue'], 'String');
      }
      if (data.hasOwnProperty('signDate')) {
        obj['signDate'] = ApiClient.convertToType(data['signDate'], 'String');
      }
      if (data.hasOwnProperty('signed')) {
        obj['signed'] = ApiClient.convertToType(data['signed'], 'String');
      }
      if (data.hasOwnProperty('signedDate')) {
        obj['signedDate'] = ApiClient.convertToType(data['signedDate'], 'String');
      }
      if (data.hasOwnProperty('signedOnMobile')) {
        obj['signedOnMobile'] = ApiClient.convertToType(data['signedOnMobile'], 'String');
      }
      if (data.hasOwnProperty('signedOnPaper')) {
        obj['signedOnPaper'] = ApiClient.convertToType(data['signedOnPaper'], 'String');
      }
      if (data.hasOwnProperty('signerList')) {
        obj['signerList'] = ApiClient.convertToType(data['signerList'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusChangedDate')) {
        obj['statusChangedDate'] = ApiClient.convertToType(data['statusChangedDate'], 'String');
      }
      if (data.hasOwnProperty('statusChangedTs')) {
        obj['statusChangedTs'] = ApiClient.convertToType(data['statusChangedTs'], 'String');
      }
      if (data.hasOwnProperty('statusComment')) {
        obj['statusComment'] = ApiClient.convertToType(data['statusComment'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('successes')) {
        obj['successes'] = ApiClient.convertToType(data['successes'], 'String');
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('templateName')) {
        obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
      }
      if (data.hasOwnProperty('templatesCreated')) {
        obj['templatesCreated'] = ApiClient.convertToType(data['templatesCreated'], 'String');
      }
      if (data.hasOwnProperty('templatesCreatedCount')) {
        obj['templatesCreatedCount'] = ApiClient.convertToType(data['templatesCreatedCount'], 'String');
      }
      if (data.hasOwnProperty('terminalStatusDate')) {
        obj['terminalStatusDate'] = ApiClient.convertToType(data['terminalStatusDate'], 'String');
      }
      if (data.hasOwnProperty('timeToCompleteSeconds')) {
        obj['timeToCompleteSeconds'] = ApiClient.convertToType(data['timeToCompleteSeconds'], 'String');
      }
      if (data.hasOwnProperty('timeToDeliver')) {
        obj['timeToDeliver'] = ApiClient.convertToType(data['timeToDeliver'], 'String');
      }
      if (data.hasOwnProperty('totalDocuments')) {
        obj['totalDocuments'] = ApiClient.convertToType(data['totalDocuments'], 'String');
      }
      if (data.hasOwnProperty('totalEnvelopes')) {
        obj['totalEnvelopes'] = ApiClient.convertToType(data['totalEnvelopes'], 'String');
      }
      if (data.hasOwnProperty('totalPages')) {
        obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'String');
      }
      if (data.hasOwnProperty('totalRecipients')) {
        obj['totalRecipients'] = ApiClient.convertToType(data['totalRecipients'], 'String');
      }
      if (data.hasOwnProperty('totalSigners')) {
        obj['totalSigners'] = ApiClient.convertToType(data['totalSigners'], 'String');
      }
      if (data.hasOwnProperty('uniqueSenders')) {
        obj['uniqueSenders'] = ApiClient.convertToType(data['uniqueSenders'], 'String');
      }
      if (data.hasOwnProperty('userAccountEmail')) {
        obj['userAccountEmail'] = ApiClient.convertToType(data['userAccountEmail'], 'String');
      }
      if (data.hasOwnProperty('userAccountName')) {
        obj['userAccountName'] = ApiClient.convertToType(data['userAccountName'], 'String');
      }
      if (data.hasOwnProperty('userAccountStatus')) {
        obj['userAccountStatus'] = ApiClient.convertToType(data['userAccountStatus'], 'String');
      }
      if (data.hasOwnProperty('userCount')) {
        obj['userCount'] = ApiClient.convertToType(data['userCount'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('verificationStatus')) {
        obj['verificationStatus'] = ApiClient.convertToType(data['verificationStatus'], 'String');
      }
      if (data.hasOwnProperty('verificationType')) {
        obj['verificationType'] = ApiClient.convertToType(data['verificationType'], 'String');
      }
      if (data.hasOwnProperty('viewDate')) {
        obj['viewDate'] = ApiClient.convertToType(data['viewDate'], 'String');
      }
      if (data.hasOwnProperty('voidedTs')) {
        obj['voidedTs'] = ApiClient.convertToType(data['voidedTs'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} accessCodeRequired
   */
  exports.prototype['accessCodeRequired'] = undefined;
  /**
   * 
   * @member {String} accessCodesAttempted
   */
  exports.prototype['accessCodesAttempted'] = undefined;
  /**
   * 
   * @member {String} accessCodesFailed
   */
  exports.prototype['accessCodesFailed'] = undefined;
  /**
   * The account ID associated with the envelope.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * 
   * @member {String} authenticationCategory
   */
  exports.prototype['authenticationCategory'] = undefined;
  /**
   * 
   * @member {String} authenticationSuccess
   */
  exports.prototype['authenticationSuccess'] = undefined;
  /**
   * 
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
  /**
   * 
   * @member {String} averageTimeToCompleteSeconds
   */
  exports.prototype['averageTimeToCompleteSeconds'] = undefined;
  /**
   * 
   * @member {String} avgCompleteSeconds
   */
  exports.prototype['avgCompleteSeconds'] = undefined;
  /**
   * 
   * @member {String} captureMethod
   */
  exports.prototype['captureMethod'] = undefined;
  /**
   * 
   * @member {String} completed
   */
  exports.prototype['completed'] = undefined;
  /**
   * 
   * @member {String} completedTs
   */
  exports.prototype['completedTs'] = undefined;
  /**
   * 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * 
   * @member {String} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * 
   * @member {String} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * 
   * @member {String} customField
   */
  exports.prototype['customField'] = undefined;
  /**
   * 
   * @member {String} declinedDate
   */
  exports.prototype['declinedDate'] = undefined;
  /**
   * The reason the recipient declined the document.
   * @member {String} declinedReason
   */
  exports.prototype['declinedReason'] = undefined;
  /**
   * 
   * @member {String} deliveredDate
   */
  exports.prototype['deliveredDate'] = undefined;
  /**
   * 
   * @member {String} envelopeCount
   */
  exports.prototype['envelopeCount'] = undefined;
  /**
   * 
   * @member {String} envelopeCreator
   */
  exports.prototype['envelopeCreator'] = undefined;
  /**
   * The envelope ID of the envelope status that failed to post.
   * @member {String} envelopeId
   */
  exports.prototype['envelopeId'] = undefined;
  /**
   * 
   * @member {String} envelopeInitialSendTs
   */
  exports.prototype['envelopeInitialSendTs'] = undefined;
  /**
   * 
   * @member {String} envelopesBilled
   */
  exports.prototype['envelopesBilled'] = undefined;
  /**
   * 
   * @member {String} envelopesCompleted
   */
  exports.prototype['envelopesCompleted'] = undefined;
  /**
   * 
   * @member {String} envelopesCompletedCount
   */
  exports.prototype['envelopesCompletedCount'] = undefined;
  /**
   * 
   * @member {String} envelopesDeclined
   */
  exports.prototype['envelopesDeclined'] = undefined;
  /**
   * 
   * @member {String} envelopesSent
   */
  exports.prototype['envelopesSent'] = undefined;
  /**
   * 
   * @member {String} envelopesSentCount
   */
  exports.prototype['envelopesSentCount'] = undefined;
  /**
   * 
   * @member {String} envelopesVoided
   */
  exports.prototype['envelopesVoided'] = undefined;
  /**
   * 
   * @member {String} envelopeVoidedReason
   */
  exports.prototype['envelopeVoidedReason'] = undefined;
  /**
   * 
   * @member {String} eodDocumentDescription
   */
  exports.prototype['eodDocumentDescription'] = undefined;
  /**
   * 
   * @member {String} eodDocumentName
   */
  exports.prototype['eodDocumentName'] = undefined;
  /**
   * 
   * @member {String} eodDocumentProfileId
   */
  exports.prototype['eodDocumentProfileId'] = undefined;
  /**
   * 
   * @member {String} eodTransactionId
   */
  exports.prototype['eodTransactionId'] = undefined;
  /**
   * 
   * @member {String} eodTransactionName
   */
  exports.prototype['eodTransactionName'] = undefined;
  /**
   * 
   * @member {String} eventDate
   */
  exports.prototype['eventDate'] = undefined;
  /**
   * 
   * @member {String} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * 
   * @member {String} expiredTs
   */
  exports.prototype['expiredTs'] = undefined;
  /**
   * 
   * @member {String} failureReason
   */
  exports.prototype['failureReason'] = undefined;
  /**
   * 
   * @member {String} failures
   */
  exports.prototype['failures'] = undefined;
  /**
   * 
   * @member {String} failureVendorCode
   */
  exports.prototype['failureVendorCode'] = undefined;
  /**
   * 
   * @member {String} failureVendorReason
   */
  exports.prototype['failureVendorReason'] = undefined;
  /**
   * 
   * @member {String} firstSendTs
   */
  exports.prototype['firstSendTs'] = undefined;
  /**
   * 
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * The name of the group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * 
   * @member {String} hoursToCompleteEnd
   */
  exports.prototype['hoursToCompleteEnd'] = undefined;
  /**
   * 
   * @member {String} hoursToCompleteStart
   */
  exports.prototype['hoursToCompleteStart'] = undefined;
  /**
   * 
   * @member {String} idChecksAttempted
   */
  exports.prototype['idChecksAttempted'] = undefined;
  /**
   * 
   * @member {String} idChecksFailed
   */
  exports.prototype['idChecksFailed'] = undefined;
  /**
   * 
   * @member {String} idCountry
   */
  exports.prototype['idCountry'] = undefined;
  /**
   * 
   * @member {String} idMethod
   */
  exports.prototype['idMethod'] = undefined;
  /**
   * 
   * @member {String} initialSendTs
   */
  exports.prototype['initialSendTs'] = undefined;
  /**
   * 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * 
   * @member {String} lastActivity
   */
  exports.prototype['lastActivity'] = undefined;
  /**
   * 
   * @member {String} lastActivityDate
   */
  exports.prototype['lastActivityDate'] = undefined;
  /**
   * 
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * 
   * @member {String} lastSentDate
   */
  exports.prototype['lastSentDate'] = undefined;
  /**
   * 
   * @member {String} lastUsed
   */
  exports.prototype['lastUsed'] = undefined;
  /**
   * 
   * @member {String} metadataRemoved
   */
  exports.prototype['metadataRemoved'] = undefined;
  /**
   * 
   * @member {String} notSigned
   */
  exports.prototype['notSigned'] = undefined;
  /**
   * 
   * @member {String} numberOfAuthenticatedRecipients
   */
  exports.prototype['numberOfAuthenticatedRecipients'] = undefined;
  /**
   * 
   * @member {String} numberOfCompletedSignatures
   */
  exports.prototype['numberOfCompletedSignatures'] = undefined;
  /**
   * 
   * @member {String} numberOfDocuments
   */
  exports.prototype['numberOfDocuments'] = undefined;
  /**
   * 
   * @member {String} numberOfPages
   */
  exports.prototype['numberOfPages'] = undefined;
  /**
   * 
   * @member {String} numberOfRecipients
   */
  exports.prototype['numberOfRecipients'] = undefined;
  /**
   * 
   * @member {String} numberOfSends
   */
  exports.prototype['numberOfSends'] = undefined;
  /**
   * 
   * @member {String} numberOfSigners
   */
  exports.prototype['numberOfSigners'] = undefined;
  /**
   * 
   * @member {String} numberOfTotalDocuments
   */
  exports.prototype['numberOfTotalDocuments'] = undefined;
  /**
   * 
   * @member {String} numberOfTotalPages
   */
  exports.prototype['numberOfTotalPages'] = undefined;
  /**
   * 
   * @member {String} numberOfTotalSigners
   */
  exports.prototype['numberOfTotalSigners'] = undefined;
  /**
   * 
   * @member {String} numberOfUniqueSenders
   */
  exports.prototype['numberOfUniqueSenders'] = undefined;
  /**
   * 
   * @member {String} numberTotalRecipients
   */
  exports.prototype['numberTotalRecipients'] = undefined;
  /**
   * 
   * @member {String} otherRecipientsList
   */
  exports.prototype['otherRecipientsList'] = undefined;
  /**
   * 
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * 
   * @member {String} ownerMail
   */
  exports.prototype['ownerMail'] = undefined;
  /**
   * 
   * @member {String} periodEnd
   */
  exports.prototype['periodEnd'] = undefined;
  /**
   * 
   * @member {String} periodStart
   */
  exports.prototype['periodStart'] = undefined;
  /**
   * 
   * @member {String} phoneCallsAttempted
   */
  exports.prototype['phoneCallsAttempted'] = undefined;
  /**
   * 
   * @member {String} phoneCallsFailed
   */
  exports.prototype['phoneCallsFailed'] = undefined;
  /**
   * 
   * @member {String} piiRedacted
   */
  exports.prototype['piiRedacted'] = undefined;
  /**
   * 
   * @member {String} purgeDate
   */
  exports.prototype['purgeDate'] = undefined;
  /**
   * 
   * @member {String} reasonForDeclining
   */
  exports.prototype['reasonForDeclining'] = undefined;
  /**
   * 
   * @member {String} reasonForVoiding
   */
  exports.prototype['reasonForVoiding'] = undefined;
  /**
   * 
   * @member {String} reassignReason
   */
  exports.prototype['reassignReason'] = undefined;
  /**
   * 
   * @member {String} received
   */
  exports.prototype['received'] = undefined;
  /**
   * 
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * 
   * @member {String} recipientAction
   */
  exports.prototype['recipientAction'] = undefined;
  /**
   * 
   * @member {String} recipientCompanyName
   */
  exports.prototype['recipientCompanyName'] = undefined;
  /**
   * 
   * @member {String} recipientCountry
   */
  exports.prototype['recipientCountry'] = undefined;
  /**
   * 
   * @member {String} recipientEmail
   */
  exports.prototype['recipientEmail'] = undefined;
  /**
   * Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document.
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * 
   * @member {String} recipientName
   */
  exports.prototype['recipientName'] = undefined;
  /**
   * 
   * @member {String} recipientRoleName
   */
  exports.prototype['recipientRoleName'] = undefined;
  /**
   * 
   * @member {String} recipientTemplateRoleName
   */
  exports.prototype['recipientTemplateRoleName'] = undefined;
  /**
   * 
   * @member {String} recipientTitle
   */
  exports.prototype['recipientTitle'] = undefined;
  /**
   * 
   * @member {String} recipientType
   */
  exports.prototype['recipientType'] = undefined;
  /**
   * 
   * @member {String} recipientUserId
   */
  exports.prototype['recipientUserId'] = undefined;
  /**
   * 
   * @member {String} remainingSignatures
   */
  exports.prototype['remainingSignatures'] = undefined;
  /**
   * Specifies the routing order of the recipient in the envelope. 
   * @member {String} routingOrder
   */
  exports.prototype['routingOrder'] = undefined;
  /**
   * 
   * @member {String} senderAccountId
   */
  exports.prototype['senderAccountId'] = undefined;
  /**
   * 
   * @member {String} senderCompanyName
   */
  exports.prototype['senderCompanyName'] = undefined;
  /**
   * 
   * @member {String} senderCountry
   */
  exports.prototype['senderCountry'] = undefined;
  /**
   * 
   * @member {String} senderEmail
   */
  exports.prototype['senderEmail'] = undefined;
  /**
   * 
   * @member {String} senderIPAddress
   */
  exports.prototype['senderIPAddress'] = undefined;
  /**
   * 
   * @member {String} senderJobTitle
   */
  exports.prototype['senderJobTitle'] = undefined;
  /**
   * 
   * @member {String} senderName
   */
  exports.prototype['senderName'] = undefined;
  /**
   * 
   * @member {String} senderUserId
   */
  exports.prototype['senderUserId'] = undefined;
  /**
   * 
   * @member {String} signatureType
   */
  exports.prototype['signatureType'] = undefined;
  /**
   * 
   * @member {String} signatureTypeValue
   */
  exports.prototype['signatureTypeValue'] = undefined;
  /**
   * 
   * @member {String} signDate
   */
  exports.prototype['signDate'] = undefined;
  /**
   * 
   * @member {String} signed
   */
  exports.prototype['signed'] = undefined;
  /**
   * 
   * @member {String} signedDate
   */
  exports.prototype['signedDate'] = undefined;
  /**
   * 
   * @member {String} signedOnMobile
   */
  exports.prototype['signedOnMobile'] = undefined;
  /**
   * 
   * @member {String} signedOnPaper
   */
  exports.prototype['signedOnPaper'] = undefined;
  /**
   * 
   * @member {String} signerList
   */
  exports.prototype['signerList'] = undefined;
  /**
   * Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 
   * @member {String} statusChangedDate
   */
  exports.prototype['statusChangedDate'] = undefined;
  /**
   * 
   * @member {String} statusChangedTs
   */
  exports.prototype['statusChangedTs'] = undefined;
  /**
   * 
   * @member {String} statusComment
   */
  exports.prototype['statusComment'] = undefined;
  /**
   * 
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * 
   * @member {String} successes
   */
  exports.prototype['successes'] = undefined;
  /**
   * The unique identifier of the template. If this is not provided, DocuSign will generate a value. 
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * 
   * @member {String} templateName
   */
  exports.prototype['templateName'] = undefined;
  /**
   * 
   * @member {String} templatesCreated
   */
  exports.prototype['templatesCreated'] = undefined;
  /**
   * 
   * @member {String} templatesCreatedCount
   */
  exports.prototype['templatesCreatedCount'] = undefined;
  /**
   * 
   * @member {String} terminalStatusDate
   */
  exports.prototype['terminalStatusDate'] = undefined;
  /**
   * 
   * @member {String} timeToCompleteSeconds
   */
  exports.prototype['timeToCompleteSeconds'] = undefined;
  /**
   * 
   * @member {String} timeToDeliver
   */
  exports.prototype['timeToDeliver'] = undefined;
  /**
   * 
   * @member {String} totalDocuments
   */
  exports.prototype['totalDocuments'] = undefined;
  /**
   * 
   * @member {String} totalEnvelopes
   */
  exports.prototype['totalEnvelopes'] = undefined;
  /**
   * 
   * @member {String} totalPages
   */
  exports.prototype['totalPages'] = undefined;
  /**
   * 
   * @member {String} totalRecipients
   */
  exports.prototype['totalRecipients'] = undefined;
  /**
   * 
   * @member {String} totalSigners
   */
  exports.prototype['totalSigners'] = undefined;
  /**
   * 
   * @member {String} uniqueSenders
   */
  exports.prototype['uniqueSenders'] = undefined;
  /**
   * 
   * @member {String} userAccountEmail
   */
  exports.prototype['userAccountEmail'] = undefined;
  /**
   * 
   * @member {String} userAccountName
   */
  exports.prototype['userAccountName'] = undefined;
  /**
   * 
   * @member {String} userAccountStatus
   */
  exports.prototype['userAccountStatus'] = undefined;
  /**
   * 
   * @member {String} userCount
   */
  exports.prototype['userCount'] = undefined;
  /**
   * 
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * 
   * @member {String} verificationStatus
   */
  exports.prototype['verificationStatus'] = undefined;
  /**
   * 
   * @member {String} verificationType
   */
  exports.prototype['verificationType'] = undefined;
  /**
   * 
   * @member {String} viewDate
   */
  exports.prototype['viewDate'] = undefined;
  /**
   * 
   * @member {String} voidedTs
   */
  exports.prototype['voidedTs'] = undefined;



  return exports;
}));


