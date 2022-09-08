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
    define(['ApiClient', 'model/Agent', 'model/CarbonCopy', 'model/CertifiedDelivery', 'model/Editor', 'model/ErrorDetails', 'model/InPersonSigner', 'model/Intermediary', 'model/NotaryRecipient', 'model/Participant', 'model/SealSign', 'model/Signer', 'model/Witness'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Agent'), require('./CarbonCopy'), require('./CertifiedDelivery'), require('./Editor'), require('./ErrorDetails'), require('./InPersonSigner'), require('./Intermediary'), require('./NotaryRecipient'), require('./Participant'), require('./SealSign'), require('./Signer'), require('./Witness'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateRecipients = factory(root.Docusign.ApiClient, root.Docusign.Agent, root.Docusign.CarbonCopy, root.Docusign.CertifiedDelivery, root.Docusign.Editor, root.Docusign.ErrorDetails, root.Docusign.InPersonSigner, root.Docusign.Intermediary, root.Docusign.NotaryRecipient, root.Docusign.Participant, root.Docusign.SealSign, root.Docusign.Signer, root.Docusign.Witness);
  }
}(this, function(ApiClient, Agent, CarbonCopy, CertifiedDelivery, Editor, ErrorDetails, InPersonSigner, Intermediary, NotaryRecipient, Participant, SealSign, Signer, Witness) {
  'use strict';


  /**
   * The TemplateRecipients model module.
   * @module model/TemplateRecipients
   */

  /**
   * Constructs a new <code>TemplateRecipients</code>.
   * @alias module:model/TemplateRecipients
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateRecipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateRecipients} obj Optional instance to populate.
   * @return {module:model/TemplateRecipients} The populated <code>TemplateRecipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agents')) {
        obj['agents'] = ApiClient.convertToType(data['agents'], [Agent]);
      }
      if (data.hasOwnProperty('carbonCopies')) {
        obj['carbonCopies'] = ApiClient.convertToType(data['carbonCopies'], [CarbonCopy]);
      }
      if (data.hasOwnProperty('certifiedDeliveries')) {
        obj['certifiedDeliveries'] = ApiClient.convertToType(data['certifiedDeliveries'], [CertifiedDelivery]);
      }
      if (data.hasOwnProperty('currentRoutingOrder')) {
        obj['currentRoutingOrder'] = ApiClient.convertToType(data['currentRoutingOrder'], 'String');
      }
      if (data.hasOwnProperty('editors')) {
        obj['editors'] = ApiClient.convertToType(data['editors'], [Editor]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('inPersonSigners')) {
        obj['inPersonSigners'] = ApiClient.convertToType(data['inPersonSigners'], [InPersonSigner]);
      }
      if (data.hasOwnProperty('intermediaries')) {
        obj['intermediaries'] = ApiClient.convertToType(data['intermediaries'], [Intermediary]);
      }
      if (data.hasOwnProperty('notaries')) {
        obj['notaries'] = ApiClient.convertToType(data['notaries'], [NotaryRecipient]);
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
      }
      if (data.hasOwnProperty('recipientCount')) {
        obj['recipientCount'] = ApiClient.convertToType(data['recipientCount'], 'String');
      }
      if (data.hasOwnProperty('seals')) {
        obj['seals'] = ApiClient.convertToType(data['seals'], [SealSign]);
      }
      if (data.hasOwnProperty('signers')) {
        obj['signers'] = ApiClient.convertToType(data['signers'], [Signer]);
      }
      if (data.hasOwnProperty('witnesses')) {
        obj['witnesses'] = ApiClient.convertToType(data['witnesses'], [Witness]);
      }
    }
    return obj;
  }

  /**
   * A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document.
   * @member {Array.<module:model/Agent>} agents
   */
  exports.prototype['agents'] = undefined;
  /**
   * A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it.
   * @member {Array.<module:model/CarbonCopy>} carbonCopies
   */
  exports.prototype['carbonCopies'] = undefined;
  /**
   * A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents.
   * @member {Array.<module:model/CertifiedDelivery>} certifiedDeliveries
   */
  exports.prototype['certifiedDeliveries'] = undefined;
  /**
   * 
   * @member {String} currentRoutingOrder
   */
  exports.prototype['currentRoutingOrder'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Editor>} editors
   */
  exports.prototype['editors'] = undefined;
  /**
   * This object describes errors that occur. It is only valid for responses and ignored in requests.
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected.
   * @member {Array.<module:model/InPersonSigner>} inPersonSigners
   */
  exports.prototype['inPersonSigners'] = undefined;
  /**
   * Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added).
   * @member {Array.<module:model/Intermediary>} intermediaries
   */
  exports.prototype['intermediaries'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NotaryRecipient>} notaries
   */
  exports.prototype['notaries'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Participant>} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:  * recipientEventStatusCode - The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded. * includeDocuments - When set to **true**, the envelope time zone information is included in the message.
   * @member {String} recipientCount
   */
  exports.prototype['recipientCount'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SealSign>} seals
   */
  exports.prototype['seals'] = undefined;
  /**
   * A complex type containing information about the Signer recipient.
   * @member {Array.<module:model/Signer>} signers
   */
  exports.prototype['signers'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Witness>} witnesses
   */
  exports.prototype['witnesses'] = undefined;



  return exports;
}));


