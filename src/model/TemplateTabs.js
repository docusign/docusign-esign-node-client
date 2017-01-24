(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Approve', './Checkbox', './Company', './DateSigned', './Decline', './Email', './EmailAddress', './EnvelopeId', './FirstName', './FormulaTab', './FullName', './InitialHere', './LastName', './List', './Note', './RadioGroup', './SignHere', './SignerAttachment', './Ssn', './Text', './Title', './Zip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Approve'), require('./Checkbox'), require('./Company'), require('./DateSigned'), require('./Decline'), require('./Email'), require('./EmailAddress'), require('./EnvelopeId'), require('./FirstName'), require('./FormulaTab'), require('./FullName'), require('./InitialHere'), require('./LastName'), require('./List'), require('./Note'), require('./RadioGroup'), require('./SignHere'), require('./SignerAttachment'), require('./Ssn'), require('./Text'), require('./Title'), require('./Zip'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Approve, root.Docusign.Checkbox, root.Docusign.Company, root.Docusign.DateSigned, root.Docusign.Decline, root.Docusign.Email, root.Docusign.EmailAddress, root.Docusign.EnvelopeId, root.Docusign.FirstName, root.Docusign.FormulaTab, root.Docusign.FullName, root.Docusign.InitialHere, root.Docusign.LastName, root.Docusign.List, root.Docusign.Note, root.Docusign.RadioGroup, root.Docusign.SignHere, root.Docusign.SignerAttachment, root.Docusign.Ssn, root.Docusign.Text, root.Docusign.Title, root.Docusign.Zip);
  }
}(this, function(module, Approve, Checkbox, Company, DateSigned, Decline, Email, EmailAddress, EnvelopeId, FirstName, FormulaTab, FullName, InitialHere, LastName, List, Note, RadioGroup, SignHere, SignerAttachment, Ssn, Text, Title, Zip) {
  'use strict';

  
  

  
  var TemplateTabs = function TemplateTabs() { 
    var self = this;
    
    /**
     * A complex type the contains information about the tag that specifies where the recipient places their signature in the document. The \"optional\" parameter sets if the signature is required or optional.
     * datatype: Array
     **/
    self.signHereTabs = [];
    
    /**
     * Specifies a tag location in the document at which a recipient will place their initials. The `optional` parameter specifies whether the initials are required or optional.
     * datatype: Array
     **/
    self.initialHereTabs = [];
    
    /**
     * Specifies a tag on the document when you want the recipient to add supporting documents to an envelope.
     * datatype: Array
     **/
    self.signerAttachmentTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient to approve documents in an envelope without placing a signature or initials on the document. If the recipient clicks the Approve tag during the signing process, the recipient is considered to have signed the document. No information is shown on the document for the approval, but it is recorded as a signature in the envelope history.
     * datatype: Array
     **/
    self.approveTabs = [];
    
    /**
     * Specifies a tag on the document where you want to give the recipient the option of declining an envelope. If the recipient clicks the Decline tag during the signing process, the envelope is voided.
     * datatype: Array
     **/
    self.declineTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient's name to appear.
     * datatype: Array
     **/
    self.fullNameTabs = [];
    
    /**
     * Specifies a tab on the document where the date the document was signed will automatically appear.
     * datatype: Array
     **/
    self.dateSignedTabs = [];
    
    /**
     * Specifies a tag on the document where you want the envelope ID for to appear. Recipients cannot enter or change the information in this tab, it is for informational purposes only.
     * datatype: Array
     **/
    self.envelopeIdTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient's company name to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.companyTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient's title to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.titleTabs = [];
    
    /**
     * Specifies a that that is an adaptable field that allows the recipient to enter different text information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.textTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient to enter a number. It uses the same parameters as a Text tab, with the validation message and pattern set for number information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.numberTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient to enter a Social Security Number (SSN). A SSN can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for SSN information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.ssnTabs = [];
    
    /**
     * Specifies a tab on the document where you want the recipient to enter a date. Date tabs are single-line fields that allow date information to be entered in any format. The tooltip for this tab recommends entering the date as MM/DD/YYYY, but this is not enforced. The format entered by the signer is retained. \n\nIf you need a particular date format enforced, DocuSign recommends using a Text tab with a Validation Pattern and Validation Message to enforce the format.
     * datatype: Array
     **/
    self.dateTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient to enter a ZIP code. The ZIP code can be a five numbers or the ZIP+4 format with nine numbers. The zip code can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for ZIP code information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.zipTabs = [];
    
    /**
     * Specifies a tag on the document where you want the recipient to enter an email. Email tags are single-line fields that accept any characters. The system checks that a valid email format (i.e. xxx@yyy.zzz) is entered in the tag. It uses the same parameters as a Text tab, with the validation message and pattern set for email information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * datatype: Array
     **/
    self.emailTabs = [];
    
    /**
     * Specifies a location on the document where you want to place additional information, in the form of a note, for a recipient.
     * datatype: Array
     **/
    self.noteTabs = [];
    
    /**
     * Specifies a tag on the document in a location where the recipient can select an option.
     * datatype: Array
     **/
    self.checkboxTabs = [];
    
    /**
     * Specifies a tag on the document in a location where the recipient can select one option from a group of options using a radio button. The radio buttons do not have to be on the same page in a document.
     * datatype: Array
     **/
    self.radioGroupTabs = [];
    
    /**
     * Specify this tag to give your recipient a list of options, presented as a drop-down list, from which they can select.
     * datatype: Array
     **/
    self.listTabs = [];
    
    /**
     * Specifies tag on a document where you want the recipient's first name to appear. This tag takes the recipient's name, as entered in the recipient information, splits it into sections based on spaces and uses the first section as the first name.
     * datatype: Array
     **/
    self.firstNameTabs = [];
    
    /**
     * Specifies a tag on a document where you want the recipient’s last name to appear. This tag takes the recipient’s name, as entered in the recipient information, splits it into sections based on spaces and uses the last section as the last name.
     * datatype: Array
     **/
    self.lastNameTabs = [];
    
    /**
     * Specifies a location on the document where you want where you want the recipient’s email, as entered in the recipient information, to display.
     * datatype: Array
     **/
    self.emailAddressTabs = [];
    
    /**
     * Specifies a tag that is used to add a calculated field to a document. Envelope recipients cannot directly enter information into the tag; the formula tab calculates and displays a new value when changes are made to the reference tag values. The reference tag information and calculation operations are entered in the \"formula\" element. See the [ML:Using the Calculated Fields Feature] quick start guide or [ML:DocuSign Service User Guide] for more information about formulas.
     * datatype: Array
     **/
    self.formulaTabs = [];
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.signHereTabs) {
        self.signHereTabs = data.signHereTabs;
      }
      
      if (data.initialHereTabs) {
        self.initialHereTabs = data.initialHereTabs;
      }
      
      if (data.signerAttachmentTabs) {
        self.signerAttachmentTabs = data.signerAttachmentTabs;
      }
      
      if (data.approveTabs) {
        self.approveTabs = data.approveTabs;
      }
      
      if (data.declineTabs) {
        self.declineTabs = data.declineTabs;
      }
      
      if (data.fullNameTabs) {
        self.fullNameTabs = data.fullNameTabs;
      }
      
      if (data.dateSignedTabs) {
        self.dateSignedTabs = data.dateSignedTabs;
      }
      
      if (data.envelopeIdTabs) {
        self.envelopeIdTabs = data.envelopeIdTabs;
      }
      
      if (data.companyTabs) {
        self.companyTabs = data.companyTabs;
      }
      
      if (data.titleTabs) {
        self.titleTabs = data.titleTabs;
      }
      
      if (data.textTabs) {
        self.textTabs = data.textTabs;
      }
      
      if (data.numberTabs) {
        self.numberTabs = data.numberTabs;
      }
      
      if (data.ssnTabs) {
        self.ssnTabs = data.ssnTabs;
      }
      
      if (data.dateTabs) {
        self.dateTabs = data.dateTabs;
      }
      
      if (data.zipTabs) {
        self.zipTabs = data.zipTabs;
      }
      
      if (data.emailTabs) {
        self.emailTabs = data.emailTabs;
      }
      
      if (data.noteTabs) {
        self.noteTabs = data.noteTabs;
      }
      
      if (data.checkboxTabs) {
        self.checkboxTabs = data.checkboxTabs;
      }
      
      if (data.radioGroupTabs) {
        self.radioGroupTabs = data.radioGroupTabs;
      }
      
      if (data.listTabs) {
        self.listTabs = data.listTabs;
      }
      
      if (data.firstNameTabs) {
        self.firstNameTabs = data.firstNameTabs;
      }
      
      if (data.lastNameTabs) {
        self.lastNameTabs = data.lastNameTabs;
      }
      
      if (data.emailAddressTabs) {
        self.emailAddressTabs = data.emailAddressTabs;
      }
      
      if (data.formulaTabs) {
        self.formulaTabs = data.formulaTabs;
      }
      
    }

    
    /**
     * get A complex type the contains information about the tag that specifies where the recipient places their signature in the document. The \"optional\" parameter sets if the signature is required or optional.
     * @return {Array}
     **/
    self.getSignHereTabs = function() {
      return self.signHereTabs;
    }

    /**
     * set A complex type the contains information about the tag that specifies where the recipient places their signature in the document. The \"optional\" parameter sets if the signature is required or optional.
     * @param {Array} signHereTabs
     **/
    self.setSignHereTabs = function (signHereTabs) {
      self.signHereTabs = signHereTabs;
    }
    
    /**
     * get Specifies a tag location in the document at which a recipient will place their initials. The `optional` parameter specifies whether the initials are required or optional.
     * @return {Array}
     **/
    self.getInitialHereTabs = function() {
      return self.initialHereTabs;
    }

    /**
     * set Specifies a tag location in the document at which a recipient will place their initials. The `optional` parameter specifies whether the initials are required or optional.
     * @param {Array} initialHereTabs
     **/
    self.setInitialHereTabs = function (initialHereTabs) {
      self.initialHereTabs = initialHereTabs;
    }
    
    /**
     * get Specifies a tag on the document when you want the recipient to add supporting documents to an envelope.
     * @return {Array}
     **/
    self.getSignerAttachmentTabs = function() {
      return self.signerAttachmentTabs;
    }

    /**
     * set Specifies a tag on the document when you want the recipient to add supporting documents to an envelope.
     * @param {Array} signerAttachmentTabs
     **/
    self.setSignerAttachmentTabs = function (signerAttachmentTabs) {
      self.signerAttachmentTabs = signerAttachmentTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient to approve documents in an envelope without placing a signature or initials on the document. If the recipient clicks the Approve tag during the signing process, the recipient is considered to have signed the document. No information is shown on the document for the approval, but it is recorded as a signature in the envelope history.
     * @return {Array}
     **/
    self.getApproveTabs = function() {
      return self.approveTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient to approve documents in an envelope without placing a signature or initials on the document. If the recipient clicks the Approve tag during the signing process, the recipient is considered to have signed the document. No information is shown on the document for the approval, but it is recorded as a signature in the envelope history.
     * @param {Array} approveTabs
     **/
    self.setApproveTabs = function (approveTabs) {
      self.approveTabs = approveTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want to give the recipient the option of declining an envelope. If the recipient clicks the Decline tag during the signing process, the envelope is voided.
     * @return {Array}
     **/
    self.getDeclineTabs = function() {
      return self.declineTabs;
    }

    /**
     * set Specifies a tag on the document where you want to give the recipient the option of declining an envelope. If the recipient clicks the Decline tag during the signing process, the envelope is voided.
     * @param {Array} declineTabs
     **/
    self.setDeclineTabs = function (declineTabs) {
      self.declineTabs = declineTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient's name to appear.
     * @return {Array}
     **/
    self.getFullNameTabs = function() {
      return self.fullNameTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient's name to appear.
     * @param {Array} fullNameTabs
     **/
    self.setFullNameTabs = function (fullNameTabs) {
      self.fullNameTabs = fullNameTabs;
    }
    
    /**
     * get Specifies a tab on the document where the date the document was signed will automatically appear.
     * @return {Array}
     **/
    self.getDateSignedTabs = function() {
      return self.dateSignedTabs;
    }

    /**
     * set Specifies a tab on the document where the date the document was signed will automatically appear.
     * @param {Array} dateSignedTabs
     **/
    self.setDateSignedTabs = function (dateSignedTabs) {
      self.dateSignedTabs = dateSignedTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the envelope ID for to appear. Recipients cannot enter or change the information in this tab, it is for informational purposes only.
     * @return {Array}
     **/
    self.getEnvelopeIdTabs = function() {
      return self.envelopeIdTabs;
    }

    /**
     * set Specifies a tag on the document where you want the envelope ID for to appear. Recipients cannot enter or change the information in this tab, it is for informational purposes only.
     * @param {Array} envelopeIdTabs
     **/
    self.setEnvelopeIdTabs = function (envelopeIdTabs) {
      self.envelopeIdTabs = envelopeIdTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient's company name to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getCompanyTabs = function() {
      return self.companyTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient's company name to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} companyTabs
     **/
    self.setCompanyTabs = function (companyTabs) {
      self.companyTabs = companyTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient's title to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getTitleTabs = function() {
      return self.titleTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient's title to appear.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} titleTabs
     **/
    self.setTitleTabs = function (titleTabs) {
      self.titleTabs = titleTabs;
    }
    
    /**
     * get Specifies a that that is an adaptable field that allows the recipient to enter different text information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getTextTabs = function() {
      return self.textTabs;
    }

    /**
     * set Specifies a that that is an adaptable field that allows the recipient to enter different text information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} textTabs
     **/
    self.setTextTabs = function (textTabs) {
      self.textTabs = textTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient to enter a number. It uses the same parameters as a Text tab, with the validation message and pattern set for number information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getNumberTabs = function() {
      return self.numberTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient to enter a number. It uses the same parameters as a Text tab, with the validation message and pattern set for number information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} numberTabs
     **/
    self.setNumberTabs = function (numberTabs) {
      self.numberTabs = numberTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient to enter a Social Security Number (SSN). A SSN can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for SSN information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getSsnTabs = function() {
      return self.ssnTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient to enter a Social Security Number (SSN). A SSN can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for SSN information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} ssnTabs
     **/
    self.setSsnTabs = function (ssnTabs) {
      self.ssnTabs = ssnTabs;
    }
    
    /**
     * get Specifies a tab on the document where you want the recipient to enter a date. Date tabs are single-line fields that allow date information to be entered in any format. The tooltip for this tab recommends entering the date as MM/DD/YYYY, but this is not enforced. The format entered by the signer is retained. \n\nIf you need a particular date format enforced, DocuSign recommends using a Text tab with a Validation Pattern and Validation Message to enforce the format.
     * @return {Array}
     **/
    self.getDateTabs = function() {
      return self.dateTabs;
    }

    /**
     * set Specifies a tab on the document where you want the recipient to enter a date. Date tabs are single-line fields that allow date information to be entered in any format. The tooltip for this tab recommends entering the date as MM/DD/YYYY, but this is not enforced. The format entered by the signer is retained. \n\nIf you need a particular date format enforced, DocuSign recommends using a Text tab with a Validation Pattern and Validation Message to enforce the format.
     * @param {Array} dateTabs
     **/
    self.setDateTabs = function (dateTabs) {
      self.dateTabs = dateTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient to enter a ZIP code. The ZIP code can be a five numbers or the ZIP+4 format with nine numbers. The zip code can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for ZIP code information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getZipTabs = function() {
      return self.zipTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient to enter a ZIP code. The ZIP code can be a five numbers or the ZIP+4 format with nine numbers. The zip code can be typed with or without dashes. It uses the same parameters as a Text tab, with the validation message and pattern set for ZIP code information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} zipTabs
     **/
    self.setZipTabs = function (zipTabs) {
      self.zipTabs = zipTabs;
    }
    
    /**
     * get Specifies a tag on the document where you want the recipient to enter an email. Email tags are single-line fields that accept any characters. The system checks that a valid email format (i.e. xxx@yyy.zzz) is entered in the tag. It uses the same parameters as a Text tab, with the validation message and pattern set for email information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @return {Array}
     **/
    self.getEmailTabs = function() {
      return self.emailTabs;
    }

    /**
     * set Specifies a tag on the document where you want the recipient to enter an email. Email tags are single-line fields that accept any characters. The system checks that a valid email format (i.e. xxx@yyy.zzz) is entered in the tag. It uses the same parameters as a Text tab, with the validation message and pattern set for email information.\n\nWhen getting information that includes this tab type, the original value of the tab when the associated envelope was sent is included in the response.
     * @param {Array} emailTabs
     **/
    self.setEmailTabs = function (emailTabs) {
      self.emailTabs = emailTabs;
    }
    
    /**
     * get Specifies a location on the document where you want to place additional information, in the form of a note, for a recipient.
     * @return {Array}
     **/
    self.getNoteTabs = function() {
      return self.noteTabs;
    }

    /**
     * set Specifies a location on the document where you want to place additional information, in the form of a note, for a recipient.
     * @param {Array} noteTabs
     **/
    self.setNoteTabs = function (noteTabs) {
      self.noteTabs = noteTabs;
    }
    
    /**
     * get Specifies a tag on the document in a location where the recipient can select an option.
     * @return {Array}
     **/
    self.getCheckboxTabs = function() {
      return self.checkboxTabs;
    }

    /**
     * set Specifies a tag on the document in a location where the recipient can select an option.
     * @param {Array} checkboxTabs
     **/
    self.setCheckboxTabs = function (checkboxTabs) {
      self.checkboxTabs = checkboxTabs;
    }
    
    /**
     * get Specifies a tag on the document in a location where the recipient can select one option from a group of options using a radio button. The radio buttons do not have to be on the same page in a document.
     * @return {Array}
     **/
    self.getRadioGroupTabs = function() {
      return self.radioGroupTabs;
    }

    /**
     * set Specifies a tag on the document in a location where the recipient can select one option from a group of options using a radio button. The radio buttons do not have to be on the same page in a document.
     * @param {Array} radioGroupTabs
     **/
    self.setRadioGroupTabs = function (radioGroupTabs) {
      self.radioGroupTabs = radioGroupTabs;
    }
    
    /**
     * get Specify this tag to give your recipient a list of options, presented as a drop-down list, from which they can select.
     * @return {Array}
     **/
    self.getListTabs = function() {
      return self.listTabs;
    }

    /**
     * set Specify this tag to give your recipient a list of options, presented as a drop-down list, from which they can select.
     * @param {Array} listTabs
     **/
    self.setListTabs = function (listTabs) {
      self.listTabs = listTabs;
    }
    
    /**
     * get Specifies tag on a document where you want the recipient's first name to appear. This tag takes the recipient's name, as entered in the recipient information, splits it into sections based on spaces and uses the first section as the first name.
     * @return {Array}
     **/
    self.getFirstNameTabs = function() {
      return self.firstNameTabs;
    }

    /**
     * set Specifies tag on a document where you want the recipient's first name to appear. This tag takes the recipient's name, as entered in the recipient information, splits it into sections based on spaces and uses the first section as the first name.
     * @param {Array} firstNameTabs
     **/
    self.setFirstNameTabs = function (firstNameTabs) {
      self.firstNameTabs = firstNameTabs;
    }
    
    /**
     * get Specifies a tag on a document where you want the recipient’s last name to appear. This tag takes the recipient’s name, as entered in the recipient information, splits it into sections based on spaces and uses the last section as the last name.
     * @return {Array}
     **/
    self.getLastNameTabs = function() {
      return self.lastNameTabs;
    }

    /**
     * set Specifies a tag on a document where you want the recipient’s last name to appear. This tag takes the recipient’s name, as entered in the recipient information, splits it into sections based on spaces and uses the last section as the last name.
     * @param {Array} lastNameTabs
     **/
    self.setLastNameTabs = function (lastNameTabs) {
      self.lastNameTabs = lastNameTabs;
    }
    
    /**
     * get Specifies a location on the document where you want where you want the recipient’s email, as entered in the recipient information, to display.
     * @return {Array}
     **/
    self.getEmailAddressTabs = function() {
      return self.emailAddressTabs;
    }

    /**
     * set Specifies a location on the document where you want where you want the recipient’s email, as entered in the recipient information, to display.
     * @param {Array} emailAddressTabs
     **/
    self.setEmailAddressTabs = function (emailAddressTabs) {
      self.emailAddressTabs = emailAddressTabs;
    }
    
    /**
     * get Specifies a tag that is used to add a calculated field to a document. Envelope recipients cannot directly enter information into the tag; the formula tab calculates and displays a new value when changes are made to the reference tag values. The reference tag information and calculation operations are entered in the \"formula\" element. See the [ML:Using the Calculated Fields Feature] quick start guide or [ML:DocuSign Service User Guide] for more information about formulas.
     * @return {Array}
     **/
    self.getFormulaTabs = function() {
      return self.formulaTabs;
    }

    /**
     * set Specifies a tag that is used to add a calculated field to a document. Envelope recipients cannot directly enter information into the tag; the formula tab calculates and displays a new value when changes are made to the reference tag values. The reference tag information and calculation operations are entered in the \"formula\" element. See the [ML:Using the Calculated Fields Feature] quick start guide or [ML:DocuSign Service User Guide] for more information about formulas.
     * @param {Array} formulaTabs
     **/
    self.setFormulaTabs = function (formulaTabs) {
      self.formulaTabs = formulaTabs;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateTabs = TemplateTabs;
  }

  return TemplateTabs;
  
  
}));
