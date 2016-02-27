(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './MatchBox', './NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./MatchBox'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.MatchBox, root.Docusign.NameValue);
  }
}(this, function(module, MatchBox, NameValue) {
  'use strict';

  
  

  
  var Document = function Document() { 
    var self = this;
    
    /**
     * Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * datatype: String
     **/
    self.documentId = null;
    
    /**
     * 
     * datatype: String
     **/
    self.uri = null;
    
    /**
     * The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}].
     * datatype: String
     **/
    self.remoteUrl = null;
    
    /**
     * 
     * datatype: String
     **/
    self.name = null;
    
    /**
     * 
     * datatype: String
     **/
    self.password = null;
    
    /**
     * When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs.
     * datatype: String
     **/
    self.transformPdfFields = null;
    
    /**
     * The file extension type of the document. If the document is not a PDF it is converted to a PDF.
     * datatype: String
     **/
    self.fileExtension = null;
    
    /**
     * Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template. \n\nA matchbox consists of 5 elements:\n\n* pageNumber - The document page number  on which the matchbox will appear. \n* xPosition - The x position of the matchbox on a page. \n* yPosition - The y position of the matchbox on a page.\n* width - The width of the matchbox. \n* height - The height of the matchbox.
     * datatype: Array
     **/
    self.matchBoxes = [];
    
    /**
     * 
     * datatype: String
     **/
    self.order = null;
    
    /**
     * 
     * datatype: String
     **/
    self.pages = null;
    
    /**
     * 
     * datatype: Array
     **/
    self.documentFields = [];
    
    /**
     * When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.
     * datatype: String
     **/
    self.encryptedWithKeyManager = null;
    
    /**
     * The document byte stream. This allows putting a base64 version of document bytes into an envelope.
     * datatype: String
     **/
    self.documentBase64 = null;
    
    /**
     * Reserved: TBD
     * datatype: String
     **/
    self.applyAnchorTabs = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.documentId) {
        self.documentId = data.documentId;
      }
      
      if (data.uri) {
        self.uri = data.uri;
      }
      
      if (data.remoteUrl) {
        self.remoteUrl = data.remoteUrl;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.password) {
        self.password = data.password;
      }
      
      if (data.transformPdfFields) {
        self.transformPdfFields = data.transformPdfFields;
      }
      
      if (data.fileExtension) {
        self.fileExtension = data.fileExtension;
      }
      
      if (data.matchBoxes) {
        self.matchBoxes = data.matchBoxes;
      }
      
      if (data.order) {
        self.order = data.order;
      }
      
      if (data.pages) {
        self.pages = data.pages;
      }
      
      if (data.documentFields) {
        self.documentFields = data.documentFields;
      }
      
      if (data.encryptedWithKeyManager) {
        self.encryptedWithKeyManager = data.encryptedWithKeyManager;
      }
      
      if (data.documentBase64) {
        self.documentBase64 = data.documentBase64;
      }
      
      if (data.applyAnchorTabs) {
        self.applyAnchorTabs = data.applyAnchorTabs;
      }
      
    }

    
    /**
     * get Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @return {String}
     **/
    self.getDocumentId = function() {
      return self.documentId;
    }

    /**
     * set Specifies the document ID number that the tab is placed on. This must refer to an existing Document's ID attribute.
     * @param {String} documentId
     **/
    self.setDocumentId = function (documentId) {
      self.documentId = documentId;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getUri = function() {
      return self.uri;
    }

    /**
     * set 
     * @param {String} uri
     **/
    self.setUri = function (uri) {
      self.uri = uri;
    }
    
    /**
     * get The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}].
     * @return {String}
     **/
    self.getRemoteUrl = function() {
      return self.remoteUrl;
    }

    /**
     * set The file id from the cloud storage service where the document is located. This information is returned using [ML:GET /folders] or [ML:/folders/{folderid}].
     * @param {String} remoteUrl
     **/
    self.setRemoteUrl = function (remoteUrl) {
      self.remoteUrl = remoteUrl;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set 
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPassword = function() {
      return self.password;
    }

    /**
     * set 
     * @param {String} password
     **/
    self.setPassword = function (password) {
      self.password = password;
    }
    
    /**
     * get When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs.
     * @return {String}
     **/
    self.getTransformPdfFields = function() {
      return self.transformPdfFields;
    }

    /**
     * set When set to **true**, PDF form field data is transformed into document tab values when the PDF form field name matches the DocuSign custom tab tabLabel. The resulting PDF form data is also returned in the PDF meta data when requesting the document PDF. See the [ML:Transform PDF Fields] section for more information about how fields are transformed into DocuSign tabs.
     * @param {String} transformPdfFields
     **/
    self.setTransformPdfFields = function (transformPdfFields) {
      self.transformPdfFields = transformPdfFields;
    }
    
    /**
     * get The file extension type of the document. If the document is not a PDF it is converted to a PDF.
     * @return {String}
     **/
    self.getFileExtension = function() {
      return self.fileExtension;
    }

    /**
     * set The file extension type of the document. If the document is not a PDF it is converted to a PDF.
     * @param {String} fileExtension
     **/
    self.setFileExtension = function (fileExtension) {
      self.fileExtension = fileExtension;
    }
    
    /**
     * get Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template. \n\nA matchbox consists of 5 elements:\n\n* pageNumber - The document page number  on which the matchbox will appear. \n* xPosition - The x position of the matchbox on a page. \n* yPosition - The y position of the matchbox on a page.\n* width - The width of the matchbox. \n* height - The height of the matchbox.
     * @return {Array}
     **/
    self.getMatchBoxes = function() {
      return self.matchBoxes;
    }

    /**
     * set Matchboxes define areas in a document for document matching when you are creating envelopes. They are only used when you upload and edit a template. \n\nA matchbox consists of 5 elements:\n\n* pageNumber - The document page number  on which the matchbox will appear. \n* xPosition - The x position of the matchbox on a page. \n* yPosition - The y position of the matchbox on a page.\n* width - The width of the matchbox. \n* height - The height of the matchbox.
     * @param {Array} matchBoxes
     **/
    self.setMatchBoxes = function (matchBoxes) {
      self.matchBoxes = matchBoxes;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getOrder = function() {
      return self.order;
    }

    /**
     * set 
     * @param {String} order
     **/
    self.setOrder = function (order) {
      self.order = order;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getPages = function() {
      return self.pages;
    }

    /**
     * set 
     * @param {String} pages
     **/
    self.setPages = function (pages) {
      self.pages = pages;
    }
    
    /**
     * get 
     * @return {Array}
     **/
    self.getDocumentFields = function() {
      return self.documentFields;
    }

    /**
     * set 
     * @param {Array} documentFields
     **/
    self.setDocumentFields = function (documentFields) {
      self.documentFields = documentFields;
    }
    
    /**
     * get When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.
     * @return {String}
     **/
    self.getEncryptedWithKeyManager = function() {
      return self.encryptedWithKeyManager;
    }

    /**
     * set When set to **true**, the document is been already encrypted by the sender for use with the DocuSign Key Manager Security Appliance.
     * @param {String} encryptedWithKeyManager
     **/
    self.setEncryptedWithKeyManager = function (encryptedWithKeyManager) {
      self.encryptedWithKeyManager = encryptedWithKeyManager;
    }
    
    /**
     * get The document byte stream. This allows putting a base64 version of document bytes into an envelope.
     * @return {String}
     **/
    self.getDocumentBase64 = function() {
      return self.documentBase64;
    }

    /**
     * set The document byte stream. This allows putting a base64 version of document bytes into an envelope.
     * @param {String} documentBase64
     **/
    self.setDocumentBase64 = function (documentBase64) {
      self.documentBase64 = documentBase64;
    }
    
    /**
     * get Reserved: TBD
     * @return {String}
     **/
    self.getApplyAnchorTabs = function() {
      return self.applyAnchorTabs;
    }

    /**
     * set Reserved: TBD
     * @param {String} applyAnchorTabs
     **/
    self.setApplyAnchorTabs = function (applyAnchorTabs) {
      self.applyAnchorTabs = applyAnchorTabs;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Document = Document;
  }

  return Document;
  
  
}));
