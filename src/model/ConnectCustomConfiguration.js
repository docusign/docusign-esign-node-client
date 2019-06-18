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
    define(['ApiClient', 'model/ConnectSalesforceObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectSalesforceObject'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConnectCustomConfiguration = factory(root.Docusign.ApiClient, root.Docusign.ConnectSalesforceObject);
  }
}(this, function(ApiClient, ConnectSalesforceObject) {
  'use strict';


  /**
   * The ConnectCustomConfiguration model module.
   * @module model/ConnectCustomConfiguration
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConnectCustomConfiguration</code>.
   * @alias module:model/ConnectCustomConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ConnectCustomConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConnectCustomConfiguration} obj Optional instance to populate.
   * @return {module:model/ConnectCustomConfiguration} The populated <code>ConnectCustomConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowEnvelopePublish')) {
        obj['allowEnvelopePublish'] = ApiClient.convertToType(data['allowEnvelopePublish'], 'String');
      }
      if (data.hasOwnProperty('allowSalesforcePublish')) {
        obj['allowSalesforcePublish'] = ApiClient.convertToType(data['allowSalesforcePublish'], 'String');
      }
      if (data.hasOwnProperty('allUsers')) {
        obj['allUsers'] = ApiClient.convertToType(data['allUsers'], 'String');
      }
      if (data.hasOwnProperty('configurationType')) {
        obj['configurationType'] = ApiClient.convertToType(data['configurationType'], 'String');
      }
      if (data.hasOwnProperty('connectId')) {
        obj['connectId'] = ApiClient.convertToType(data['connectId'], 'String');
      }
      if (data.hasOwnProperty('enableLog')) {
        obj['enableLog'] = ApiClient.convertToType(data['enableLog'], 'String');
      }
      if (data.hasOwnProperty('envelopeEvents')) {
        obj['envelopeEvents'] = ApiClient.convertToType(data['envelopeEvents'], ['String']);
      }
      if (data.hasOwnProperty('externalFolderId')) {
        obj['externalFolderId'] = ApiClient.convertToType(data['externalFolderId'], 'String');
      }
      if (data.hasOwnProperty('externalFolderLabel')) {
        obj['externalFolderLabel'] = ApiClient.convertToType(data['externalFolderLabel'], 'String');
      }
      if (data.hasOwnProperty('includeCertificateOfCompletion')) {
        obj['includeCertificateOfCompletion'] = ApiClient.convertToType(data['includeCertificateOfCompletion'], 'String');
      }
      if (data.hasOwnProperty('includeCertSoapHeader')) {
        obj['includeCertSoapHeader'] = ApiClient.convertToType(data['includeCertSoapHeader'], 'String');
      }
      if (data.hasOwnProperty('includeDocumentFields')) {
        obj['includeDocumentFields'] = ApiClient.convertToType(data['includeDocumentFields'], 'String');
      }
      if (data.hasOwnProperty('includeDocuments')) {
        obj['includeDocuments'] = ApiClient.convertToType(data['includeDocuments'], 'String');
      }
      if (data.hasOwnProperty('includeEnvelopeVoidReason')) {
        obj['includeEnvelopeVoidReason'] = ApiClient.convertToType(data['includeEnvelopeVoidReason'], 'String');
      }
      if (data.hasOwnProperty('includeHMAC')) {
        obj['includeHMAC'] = ApiClient.convertToType(data['includeHMAC'], 'String');
      }
      if (data.hasOwnProperty('includeSenderAccountasCustomField')) {
        obj['includeSenderAccountasCustomField'] = ApiClient.convertToType(data['includeSenderAccountasCustomField'], 'String');
      }
      if (data.hasOwnProperty('includeTimeZoneInformation')) {
        obj['includeTimeZoneInformation'] = ApiClient.convertToType(data['includeTimeZoneInformation'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('recipientEvents')) {
        obj['recipientEvents'] = ApiClient.convertToType(data['recipientEvents'], ['String']);
      }
      if (data.hasOwnProperty('requireMutualTls')) {
        obj['requireMutualTls'] = ApiClient.convertToType(data['requireMutualTls'], 'String');
      }
      if (data.hasOwnProperty('requiresAcknowledgement')) {
        obj['requiresAcknowledgement'] = ApiClient.convertToType(data['requiresAcknowledgement'], 'String');
      }
      if (data.hasOwnProperty('salesforceAccessToken')) {
        obj['salesforceAccessToken'] = ApiClient.convertToType(data['salesforceAccessToken'], 'String');
      }
      if (data.hasOwnProperty('salesforceApiVersion')) {
        obj['salesforceApiVersion'] = ApiClient.convertToType(data['salesforceApiVersion'], 'String');
      }
      if (data.hasOwnProperty('salesforceDocumentsAsContentFiles')) {
        obj['salesforceDocumentsAsContentFiles'] = ApiClient.convertToType(data['salesforceDocumentsAsContentFiles'], 'String');
      }
      if (data.hasOwnProperty('salesforceRefreshToken')) {
        obj['salesforceRefreshToken'] = ApiClient.convertToType(data['salesforceRefreshToken'], 'String');
      }
      if (data.hasOwnProperty('senderOverride')) {
        obj['senderOverride'] = ApiClient.convertToType(data['senderOverride'], 'String');
      }
      if (data.hasOwnProperty('senderSelectableItems')) {
        obj['senderSelectableItems'] = ApiClient.convertToType(data['senderSelectableItems'], ['String']);
      }
      if (data.hasOwnProperty('sfObjects')) {
        obj['sfObjects'] = ApiClient.convertToType(data['sfObjects'], [ConnectSalesforceObject]);
      }
      if (data.hasOwnProperty('signMessageWithX509Certificate')) {
        obj['signMessageWithX509Certificate'] = ApiClient.convertToType(data['signMessageWithX509Certificate'], 'String');
      }
      if (data.hasOwnProperty('soapNamespace')) {
        obj['soapNamespace'] = ApiClient.convertToType(data['soapNamespace'], 'String');
      }
      if (data.hasOwnProperty('urlToPublishTo')) {
        obj['urlToPublishTo'] = ApiClient.convertToType(data['urlToPublishTo'], 'String');
      }
      if (data.hasOwnProperty('userIds')) {
        obj['userIds'] = ApiClient.convertToType(data['userIds'], ['String']);
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('useSoapInterface')) {
        obj['useSoapInterface'] = ApiClient.convertToType(data['useSoapInterface'], 'String');
      }
    }
    return obj;
  }

  /**
   * When set to **true**, data is sent to the urlToPublishTo web address. This option can be set to false to stop sending data while maintaining the Connect configuration information.
   * @member {String} allowEnvelopePublish
   */
  exports.prototype['allowEnvelopePublish'] = undefined;
  /**
   * 
   * @member {String} allowSalesforcePublish
   */
  exports.prototype['allowSalesforcePublish'] = undefined;
  /**
   * When set to **true**, the tracked envelope and recipient events for all users, including users that are added a later time, are sent through Connect.
   * @member {String} allUsers
   */
  exports.prototype['allUsers'] = undefined;
  /**
   * If merge field's are being used, specifies the type of the merge field. The only  supported value is **salesforce**.
   * @member {String} configurationType
   */
  exports.prototype['configurationType'] = undefined;
  /**
   *  Specifies the DocuSign generated ID for the Connect configuration.  
   * @member {String} connectId
   */
  exports.prototype['connectId'] = undefined;
  /**
   * This turns Connect logging on or off. When set to **true**, logging is turned on.
   * @member {String} enableLog
   */
  exports.prototype['enableLog'] = undefined;
  /**
   * A comma separated list of Ã¯Â¿Â½EnvelopeÃ¯Â¿Â½ related events that are tracked through Connect. The possible event values are: Sent, Delivered, Completed, Declined, and Voided.
   * @member {Array.<String>} envelopeEvents
   */
  exports.prototype['envelopeEvents'] = undefined;
  /**
   * 
   * @member {String} externalFolderId
   */
  exports.prototype['externalFolderId'] = undefined;
  /**
   * 
   * @member {String} externalFolderLabel
   */
  exports.prototype['externalFolderLabel'] = undefined;
  /**
   * When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes. 
   * @member {String} includeCertificateOfCompletion
   */
  exports.prototype['includeCertificateOfCompletion'] = undefined;
  /**
   * 
   * @member {String} includeCertSoapHeader
   */
  exports.prototype['includeCertSoapHeader'] = undefined;
  /**
   * When set to **true**, the Document Fields associated with envelope documents are included in the data. Document Fields are optional custom name-value pairs added to documents using the API. 
   * @member {String} includeDocumentFields
   */
  exports.prototype['includeDocumentFields'] = undefined;
  /**
   * When set to **true**, Connect will send the PDF document along with the update XML.
   * @member {String} includeDocuments
   */
  exports.prototype['includeDocuments'] = undefined;
  /**
   * When set to **true**, Connect will include the voidedReason for voided envelopes.
   * @member {String} includeEnvelopeVoidReason
   */
  exports.prototype['includeEnvelopeVoidReason'] = undefined;
  /**
   * 
   * @member {String} includeHMAC
   */
  exports.prototype['includeHMAC'] = undefined;
  /**
   * When set to **true**, Connect will include the sender account as Custom Field in the data.
   * @member {String} includeSenderAccountasCustomField
   */
  exports.prototype['includeSenderAccountasCustomField'] = undefined;
  /**
   * When set to **true**, Connect will include the envelope time zone information.
   * @member {String} includeTimeZoneInformation
   */
  exports.prototype['includeTimeZoneInformation'] = undefined;
  /**
   * The name of the Connect configuration. The name helps identify the configuration in the list.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * A comma separated list of Ã¯Â¿Â½RecipientÃ¯Â¿Â½ related events that are tracked through Connect. The possible event values are: Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded.
   * @member {Array.<String>} recipientEvents
   */
  exports.prototype['recipientEvents'] = undefined;
  /**
   * 
   * @member {String} requireMutualTls
   */
  exports.prototype['requireMutualTls'] = undefined;
  /**
   * When set to **true**, and a publication message fails to be acknowledged, the message goes back into the queue and the system will retry delivery after a successful acknowledgement is received. If the delivery fails a second time, the message is not returned to the queue for sending until Connect receives a successful acknowledgement and it has been at least 24 hours since the previous retry. There is a maximum of ten retries Alternately, you can use Republish Connect Information to manually republish the envelope information.
   * @member {String} requiresAcknowledgement
   */
  exports.prototype['requiresAcknowledgement'] = undefined;
  /**
   * 
   * @member {String} salesforceAccessToken
   */
  exports.prototype['salesforceAccessToken'] = undefined;
  /**
   * 
   * @member {String} salesforceApiVersion
   */
  exports.prototype['salesforceApiVersion'] = undefined;
  /**
   * 
   * @member {String} salesforceDocumentsAsContentFiles
   */
  exports.prototype['salesforceDocumentsAsContentFiles'] = undefined;
  /**
   * 
   * @member {String} salesforceRefreshToken
   */
  exports.prototype['salesforceRefreshToken'] = undefined;
  /**
   * 
   * @member {String} senderOverride
   */
  exports.prototype['senderOverride'] = undefined;
  /**
   * 
   * @member {Array.<String>} senderSelectableItems
   */
  exports.prototype['senderSelectableItems'] = undefined;
  /**
   * 
   * @member {Array.<module:model/ConnectSalesforceObject>} sfObjects
   */
  exports.prototype['sfObjects'] = undefined;
  /**
   * When set to **true**, Connect messages are signed with an X509 certificate. This provides support for 2-way SSL.
   * @member {String} signMessageWithX509Certificate
   */
  exports.prototype['signMessageWithX509Certificate'] = undefined;
  /**
   * The namespace of the SOAP interface.  The namespace value must be set if useSoapInterface is set to true.
   * @member {String} soapNamespace
   */
  exports.prototype['soapNamespace'] = undefined;
  /**
   * This is the web address and name of your listener or Retrieving Service endpoint. You need to include HTTPS:// in the web address.
   * @member {String} urlToPublishTo
   */
  exports.prototype['urlToPublishTo'] = undefined;
  /**
   * A comma separated list of userIds. This sets the users associated with the tracked envelope and recipient events. When one of the event occurs for a set user, the information is sent through Connect.   ###### Note: If allUsers is set to Ã¯Â¿Â½falseÃ¯Â¿Â½ then you must provide a list of user idÃ¯Â¿Â½s.
   * @member {Array.<String>} userIds
   */
  exports.prototype['userIds'] = undefined;
  /**
   * 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * When set to **true**, indicates that the `urlToPublishTo` property contains a SOAP endpoint.
   * @member {String} useSoapInterface
   */
  exports.prototype['useSoapInterface'] = undefined;



  return exports;
}));


