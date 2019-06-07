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
    define(['ApiClient', 'model/EnvelopeEvent', 'model/RecipientEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeEvent'), require('./RecipientEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EventNotification = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeEvent, root.Docusign.RecipientEvent);
  }
}(this, function(ApiClient, EnvelopeEvent, RecipientEvent) {
  'use strict';


  /**
   * The EventNotification model module.
   * @module model/EventNotification
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EventNotification</code>.
   * This optional complex element allows a message to be sent a specified URL when the envelope or recipient changes status. It is similar to DocuSign Connect. For example, if an envelope changes from \&quot;Sent\&quot; to \&quot;Delivered\&quot;, a message containing the updated envelope status and optionally the documents is sent to the URL. When an eventNotification is attached to an envelope using the API, it only applies to the envelope (treating the envelope as the sender). This is different from envelopes created through the console user interface, where the user is treated as the sender.
   * @alias module:model/EventNotification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EventNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventNotification} obj Optional instance to populate.
   * @return {module:model/EventNotification} The populated <code>EventNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('envelopeEvents')) {
        obj['envelopeEvents'] = ApiClient.convertToType(data['envelopeEvents'], [EnvelopeEvent]);
      }
      if (data.hasOwnProperty('includeCertificateOfCompletion')) {
        obj['includeCertificateOfCompletion'] = ApiClient.convertToType(data['includeCertificateOfCompletion'], 'String');
      }
      if (data.hasOwnProperty('includeCertificateWithSoap')) {
        obj['includeCertificateWithSoap'] = ApiClient.convertToType(data['includeCertificateWithSoap'], 'String');
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
      if (data.hasOwnProperty('includeSenderAccountAsCustomField')) {
        obj['includeSenderAccountAsCustomField'] = ApiClient.convertToType(data['includeSenderAccountAsCustomField'], 'String');
      }
      if (data.hasOwnProperty('includeTimeZone')) {
        obj['includeTimeZone'] = ApiClient.convertToType(data['includeTimeZone'], 'String');
      }
      if (data.hasOwnProperty('loggingEnabled')) {
        obj['loggingEnabled'] = ApiClient.convertToType(data['loggingEnabled'], 'String');
      }
      if (data.hasOwnProperty('recipientEvents')) {
        obj['recipientEvents'] = ApiClient.convertToType(data['recipientEvents'], [RecipientEvent]);
      }
      if (data.hasOwnProperty('requireAcknowledgment')) {
        obj['requireAcknowledgment'] = ApiClient.convertToType(data['requireAcknowledgment'], 'String');
      }
      if (data.hasOwnProperty('signMessageWithX509Cert')) {
        obj['signMessageWithX509Cert'] = ApiClient.convertToType(data['signMessageWithX509Cert'], 'String');
      }
      if (data.hasOwnProperty('soapNameSpace')) {
        obj['soapNameSpace'] = ApiClient.convertToType(data['soapNameSpace'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('useSoapInterface')) {
        obj['useSoapInterface'] = ApiClient.convertToType(data['useSoapInterface'], 'String');
      }
    }
    return obj;
  }

  /**
   * A list of envelope-level event statuses that will trigger Connect to send updates to the endpoint specified in the `url` property.   To receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
   * @member {Array.<module:model/EnvelopeEvent>} envelopeEvents
   */
  exports.prototype['envelopeEvents'] = undefined;
  /**
   * When set to **true**, the Connect Service includes the Certificate of Completion with completed envelopes. 
   * @member {String} includeCertificateOfCompletion
   */
  exports.prototype['includeCertificateOfCompletion'] = undefined;
  /**
   * When set to **true**, this tells the Connect service to send the DocuSign signedby certificate as part of the outgoing SOAP xml. This appears in the XML as wsse:BinarySecurityToken.
   * @member {String} includeCertificateWithSoap
   */
  exports.prototype['includeCertificateWithSoap'] = undefined;
  /**
   * When set to **true**, the Document Fields associated with envelope documents are included in the data. Document Fields are optional custom name-value pairs added to documents using the API. 
   * @member {String} includeDocumentFields
   */
  exports.prototype['includeDocumentFields'] = undefined;
  /**
   * When set to **true**, the PDF documents are included in the message along with the updated XML. 
   * @member {String} includeDocuments
   */
  exports.prototype['includeDocuments'] = undefined;
  /**
   * When set to **true**, this tells the Connect Service to include the void reason, as entered by the person that voided the envelope, in the message. 
   * @member {String} includeEnvelopeVoidReason
   */
  exports.prototype['includeEnvelopeVoidReason'] = undefined;
  /**
   * When set to **true**, the sender account ID is included as a envelope custom field in the data. 
   * @member {String} includeSenderAccountAsCustomField
   */
  exports.prototype['includeSenderAccountAsCustomField'] = undefined;
  /**
   * When set to **true**, the envelope time zone information is included in the message. 
   * @member {String} includeTimeZone
   */
  exports.prototype['includeTimeZone'] = undefined;
  /**
   * When set to **true**, logging is turned on for envelope events on the Web Console Connect page. 
   * @member {String} loggingEnabled
   */
  exports.prototype['loggingEnabled'] = undefined;
  /**
   * A list of recipient event statuses that will trigger Connect to send updates to   the endpoint specified in the url property.  To receive notifications, you must include either an `envelopeEvents` node or a `recipientEvents` node. You do not need to specify both.
   * @member {Array.<module:model/RecipientEvent>} recipientEvents
   */
  exports.prototype['recipientEvents'] = undefined;
  /**
   * When set to **true**, the DocuSign Connect service checks that the message was received and retries on failures. 
   * @member {String} requireAcknowledgment
   */
  exports.prototype['requireAcknowledgment'] = undefined;
  /**
   * When set to **true**, messages are signed with an X509 certificate. This provides support for 2-way SSL in the envelope. 
   * @member {String} signMessageWithX509Cert
   */
  exports.prototype['signMessageWithX509Cert'] = undefined;
  /**
   * This lists the namespace in the SOAP listener provided.
   * @member {String} soapNameSpace
   */
  exports.prototype['soapNameSpace'] = undefined;
  /**
   * Specifies the endpoint to which envelope updates are sent. Udpates are sent as XML unless `useSoapInterface` property is set to **true**.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * When set to **true**, this tells the Connect service that the user's endpoint has implemented a SOAP interface. 
   * @member {String} useSoapInterface
   */
  exports.prototype['useSoapInterface'] = undefined;



  return exports;
}));


