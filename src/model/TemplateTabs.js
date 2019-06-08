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
    define(['ApiClient', 'model/Approve', 'model/Checkbox', 'model/CommentThread', 'model/Company', 'model/DateSigned', 'model/Decline', 'model/Email', 'model/EmailAddress', 'model/EnvelopeId', 'model/FirstName', 'model/FormulaTab', 'model/FullName', 'model/InitialHere', 'model/LastName', 'model/List', 'model/ModelDate', 'model/ModelNumber', 'model/Notarize', 'model/Note', 'model/PolyLineOverlay', 'model/RadioGroup', 'model/SignHere', 'model/SignerAttachment', 'model/SmartSection', 'model/Ssn', 'model/TabGroup', 'model/Text', 'model/Title', 'model/View', 'model/Zip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Approve'), require('./Checkbox'), require('./CommentThread'), require('./Company'), require('./DateSigned'), require('./Decline'), require('./Email'), require('./EmailAddress'), require('./EnvelopeId'), require('./FirstName'), require('./FormulaTab'), require('./FullName'), require('./InitialHere'), require('./LastName'), require('./List'), require('./ModelDate'), require('./ModelNumber'), require('./Notarize'), require('./Note'), require('./PolyLineOverlay'), require('./RadioGroup'), require('./SignHere'), require('./SignerAttachment'), require('./SmartSection'), require('./Ssn'), require('./TabGroup'), require('./Text'), require('./Title'), require('./View'), require('./Zip'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TemplateTabs = factory(root.Docusign.ApiClient, root.Docusign.Approve, root.Docusign.Checkbox, root.Docusign.CommentThread, root.Docusign.Company, root.Docusign.DateSigned, root.Docusign.Decline, root.Docusign.Email, root.Docusign.EmailAddress, root.Docusign.EnvelopeId, root.Docusign.FirstName, root.Docusign.FormulaTab, root.Docusign.FullName, root.Docusign.InitialHere, root.Docusign.LastName, root.Docusign.List, root.Docusign.ModelDate, root.Docusign.ModelNumber, root.Docusign.Notarize, root.Docusign.Note, root.Docusign.PolyLineOverlay, root.Docusign.RadioGroup, root.Docusign.SignHere, root.Docusign.SignerAttachment, root.Docusign.SmartSection, root.Docusign.Ssn, root.Docusign.TabGroup, root.Docusign.Text, root.Docusign.Title, root.Docusign.View, root.Docusign.Zip);
  }
}(this, function(ApiClient, Approve, Checkbox, CommentThread, Company, DateSigned, Decline, Email, EmailAddress, EnvelopeId, FirstName, FormulaTab, FullName, InitialHere, LastName, List, ModelDate, ModelNumber, Notarize, Note, PolyLineOverlay, RadioGroup, SignHere, SignerAttachment, SmartSection, Ssn, TabGroup, Text, Title, View, Zip) {
  'use strict';


  /**
   * The TemplateTabs model module.
   * @module model/TemplateTabs
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TemplateTabs</code>.
   * @alias module:model/TemplateTabs
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateTabs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateTabs} obj Optional instance to populate.
   * @return {module:model/TemplateTabs} The populated <code>TemplateTabs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('approveTabs')) {
        obj['approveTabs'] = ApiClient.convertToType(data['approveTabs'], [Approve]);
      }
      if (data.hasOwnProperty('checkboxTabs')) {
        obj['checkboxTabs'] = ApiClient.convertToType(data['checkboxTabs'], [Checkbox]);
      }
      if (data.hasOwnProperty('commentThreadTabs')) {
        obj['commentThreadTabs'] = ApiClient.convertToType(data['commentThreadTabs'], [CommentThread]);
      }
      if (data.hasOwnProperty('companyTabs')) {
        obj['companyTabs'] = ApiClient.convertToType(data['companyTabs'], [Company]);
      }
      if (data.hasOwnProperty('dateSignedTabs')) {
        obj['dateSignedTabs'] = ApiClient.convertToType(data['dateSignedTabs'], [DateSigned]);
      }
      if (data.hasOwnProperty('dateTabs')) {
        obj['dateTabs'] = ApiClient.convertToType(data['dateTabs'], [ModelDate]);
      }
      if (data.hasOwnProperty('declineTabs')) {
        obj['declineTabs'] = ApiClient.convertToType(data['declineTabs'], [Decline]);
      }
      if (data.hasOwnProperty('emailAddressTabs')) {
        obj['emailAddressTabs'] = ApiClient.convertToType(data['emailAddressTabs'], [EmailAddress]);
      }
      if (data.hasOwnProperty('emailTabs')) {
        obj['emailTabs'] = ApiClient.convertToType(data['emailTabs'], [Email]);
      }
      if (data.hasOwnProperty('envelopeIdTabs')) {
        obj['envelopeIdTabs'] = ApiClient.convertToType(data['envelopeIdTabs'], [EnvelopeId]);
      }
      if (data.hasOwnProperty('firstNameTabs')) {
        obj['firstNameTabs'] = ApiClient.convertToType(data['firstNameTabs'], [FirstName]);
      }
      if (data.hasOwnProperty('formulaTabs')) {
        obj['formulaTabs'] = ApiClient.convertToType(data['formulaTabs'], [FormulaTab]);
      }
      if (data.hasOwnProperty('fullNameTabs')) {
        obj['fullNameTabs'] = ApiClient.convertToType(data['fullNameTabs'], [FullName]);
      }
      if (data.hasOwnProperty('initialHereTabs')) {
        obj['initialHereTabs'] = ApiClient.convertToType(data['initialHereTabs'], [InitialHere]);
      }
      if (data.hasOwnProperty('lastNameTabs')) {
        obj['lastNameTabs'] = ApiClient.convertToType(data['lastNameTabs'], [LastName]);
      }
      if (data.hasOwnProperty('listTabs')) {
        obj['listTabs'] = ApiClient.convertToType(data['listTabs'], [List]);
      }
      if (data.hasOwnProperty('notarizeTabs')) {
        obj['notarizeTabs'] = ApiClient.convertToType(data['notarizeTabs'], [Notarize]);
      }
      if (data.hasOwnProperty('noteTabs')) {
        obj['noteTabs'] = ApiClient.convertToType(data['noteTabs'], [Note]);
      }
      if (data.hasOwnProperty('numberTabs')) {
        obj['numberTabs'] = ApiClient.convertToType(data['numberTabs'], [ModelNumber]);
      }
      if (data.hasOwnProperty('polyLineOverlayTabs')) {
        obj['polyLineOverlayTabs'] = ApiClient.convertToType(data['polyLineOverlayTabs'], [PolyLineOverlay]);
      }
      if (data.hasOwnProperty('radioGroupTabs')) {
        obj['radioGroupTabs'] = ApiClient.convertToType(data['radioGroupTabs'], [RadioGroup]);
      }
      if (data.hasOwnProperty('signerAttachmentTabs')) {
        obj['signerAttachmentTabs'] = ApiClient.convertToType(data['signerAttachmentTabs'], [SignerAttachment]);
      }
      if (data.hasOwnProperty('signHereTabs')) {
        obj['signHereTabs'] = ApiClient.convertToType(data['signHereTabs'], [SignHere]);
      }
      if (data.hasOwnProperty('smartSectionTabs')) {
        obj['smartSectionTabs'] = ApiClient.convertToType(data['smartSectionTabs'], [SmartSection]);
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
      if (data.hasOwnProperty('titleTabs')) {
        obj['titleTabs'] = ApiClient.convertToType(data['titleTabs'], [Title]);
      }
      if (data.hasOwnProperty('viewTabs')) {
        obj['viewTabs'] = ApiClient.convertToType(data['viewTabs'], [View]);
      }
      if (data.hasOwnProperty('zipTabs')) {
        obj['zipTabs'] = ApiClient.convertToType(data['zipTabs'], [Zip]);
      }
    }
    return obj;
  }

  /**
   * Specifies a tag on the document where you want the recipient to approve documents in an envelope without placing a signature or initials on the document. If the recipient clicks the Approve tag during the signing process, the recipient is considered to have signed the document. No information is shown on the document for the approval, but it is recorded as a signature in the envelope history.
   * @member {Array.<module:model/Approve>} approveTabs
   */
  exports.prototype['approveTabs'] = undefined;
  /**
   * Specifies a tag on the document in a location where the recipient can select an option.
   * @member {Array.<module:model/Checkbox>} checkboxTabs
   */
  exports.prototype['checkboxTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/CommentThread>} commentThreadTabs
   */
  exports.prototype['commentThreadTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient's company name to appear.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Company>} companyTabs
   */
  exports.prototype['companyTabs'] = undefined;
  /**
   * Specifies a tab on the document where the date the document was signed will automatically appear.
   * @member {Array.<module:model/DateSigned>} dateSignedTabs
   */
  exports.prototype['dateSignedTabs'] = undefined;
  /**
   * Specifies a tab on the document where you want the recipient to enter a date. Date tabs are single-line fields that allow date information to be entered in any format. The tooltip for this tab recommends entering the date as MM/DD/YYYY, but this is not enforced. The format entered by the signer is retained.   If you need a particular date format enforced, DocuSign recommends using a Text tab with a Validation Pattern and Validation Message to enforce the format.
   * @member {Array.<module:model/ModelDate>} dateTabs
   */
  exports.prototype['dateTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want to give the recipient the option of declining an envelope. If the recipient clicks the Decline tag during the signing process, the envelope is voided.
   * @member {Array.<module:model/Decline>} declineTabs
   */
  exports.prototype['declineTabs'] = undefined;
  /**
   * Specifies a location on the document where you want where you want the recipient's email, as entered in the recipient information, to display.
   * @member {Array.<module:model/EmailAddress>} emailAddressTabs
   */
  exports.prototype['emailAddressTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient to enter an email. Email tags are single-line fields that accept any characters. The system checks that a valid email format (i.e. xxx@yyy.zzz) is entered in the tag. It uses the same parameters as a Text tab, with the validation message and pattern set for email information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Email>} emailTabs
   */
  exports.prototype['emailTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the envelope ID for to appear. Recipients cannot enter or change the information in this tab, it is for informational purposes only.
   * @member {Array.<module:model/EnvelopeId>} envelopeIdTabs
   */
  exports.prototype['envelopeIdTabs'] = undefined;
  /**
   * Specifies tag on a document where you want the recipient's first name to appear. This tag takes the recipient's name, as entered in the recipient information, splits it into sections based on spaces and uses the first section as the first name.
   * @member {Array.<module:model/FirstName>} firstNameTabs
   */
  exports.prototype['firstNameTabs'] = undefined;
  /**
   * Specifies a tag that is used to add a calculated field to a document. Envelope recipients cannot directly enter information into the tag; the formula tab calculates and displays a new value when changes are made to the reference tag values. The reference tag information and calculation operations are entered in the \"formula\" element. See the [ML:Using the Calculated Fields Feature] quick start guide or [ML:DocuSign Service User Guide] for more information about formulas.
   * @member {Array.<module:model/FormulaTab>} formulaTabs
   */
  exports.prototype['formulaTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient's name to appear.
   * @member {Array.<module:model/FullName>} fullNameTabs
   */
  exports.prototype['fullNameTabs'] = undefined;
  /**
   * Specifies a tag location in the document at which a recipient will place their initials. The `optional` parameter specifies whether the initials are required or optional.
   * @member {Array.<module:model/InitialHere>} initialHereTabs
   */
  exports.prototype['initialHereTabs'] = undefined;
  /**
   * Specifies a tag on a document where you want the recipient's last name to appear. This tag takes the recipient's name, as entered in the recipient information, splits it into sections based on spaces and uses the last section as the last name.
   * @member {Array.<module:model/LastName>} lastNameTabs
   */
  exports.prototype['lastNameTabs'] = undefined;
  /**
   * Specify this tag to give your recipient a list of options, presented as a drop-down list, from which they can select.
   * @member {Array.<module:model/List>} listTabs
   */
  exports.prototype['listTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Notarize>} notarizeTabs
   */
  exports.prototype['notarizeTabs'] = undefined;
  /**
   * Specifies a location on the document where you want to place additional information, in the form of a note, for a recipient.
   * @member {Array.<module:model/Note>} noteTabs
   */
  exports.prototype['noteTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient to enter a number. It uses the same parameters as a Text tab, with the validation message and pattern set for number information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response. 
   * @member {Array.<module:model/ModelNumber>} numberTabs
   */
  exports.prototype['numberTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/PolyLineOverlay>} polyLineOverlayTabs
   */
  exports.prototype['polyLineOverlayTabs'] = undefined;
  /**
   * Specifies a tag on the document in a location where the recipient can select one option from a group of options using a radio button. The radio buttons do not have to be on the same page in a document.
   * @member {Array.<module:model/RadioGroup>} radioGroupTabs
   */
  exports.prototype['radioGroupTabs'] = undefined;
  /**
   * Specifies a tag on the document when you want the recipient to add supporting documents to an envelope.
   * @member {Array.<module:model/SignerAttachment>} signerAttachmentTabs
   */
  exports.prototype['signerAttachmentTabs'] = undefined;
  /**
   * A complex type the contains information about the tag that specifies where the recipient places their signature in the document. The \"optional\" parameter sets if the signature is required or optional. 
   * @member {Array.<module:model/SignHere>} signHereTabs
   */
  exports.prototype['signHereTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/SmartSection>} smartSectionTabs
   */
  exports.prototype['smartSectionTabs'] = undefined;
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
   * Specifies a tag on the document where you want the recipient's title to appear.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Title>} titleTabs
   */
  exports.prototype['titleTabs'] = undefined;
  /**
   * 
   * @member {Array.<module:model/View>} viewTabs
   */
  exports.prototype['viewTabs'] = undefined;
  /**
   * Specifies a tag on the document where you want the recipient to enter a ZIP code. The ZIP code can be a five numbers or the ZIP+4 format with nine numbers. The zip code can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for ZIP code information.  When getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
   * @member {Array.<module:model/Zip>} zipTabs
   */
  exports.prototype['zipTabs'] = undefined;



  return exports;
}));


