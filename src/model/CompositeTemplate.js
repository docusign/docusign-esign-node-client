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
    define(['ApiClient', 'model/Document', 'model/InlineTemplate', 'model/ServerTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Document'), require('./InlineTemplate'), require('./ServerTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CompositeTemplate = factory(root.Docusign.ApiClient, root.Docusign.Document, root.Docusign.InlineTemplate, root.Docusign.ServerTemplate);
  }
}(this, function(ApiClient, Document, InlineTemplate, ServerTemplate) {
  'use strict';


  /**
   * The CompositeTemplate model module.
   * @module model/CompositeTemplate
   */

  /**
   * Constructs a new <code>CompositeTemplate</code>.
   * This object contains information about a [composite template][composite], which you can use to to apply multiple templates to a single envelope, combine templates with PDF forms, and combine templates with documents from cloud sources.  [composite]: /docs/esign-rest-api/esign101/concepts/templates/composite/
   * @alias module:model/CompositeTemplate
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CompositeTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompositeTemplate} obj Optional instance to populate.
   * @return {module:model/CompositeTemplate} The populated <code>CompositeTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('compositeTemplateId')) {
        obj['compositeTemplateId'] = ApiClient.convertToType(data['compositeTemplateId'], 'String');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = Document.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('inlineTemplates')) {
        obj['inlineTemplates'] = ApiClient.convertToType(data['inlineTemplates'], [InlineTemplate]);
      }
      if (data.hasOwnProperty('pdfMetaDataTemplateSequence')) {
        obj['pdfMetaDataTemplateSequence'] = ApiClient.convertToType(data['pdfMetaDataTemplateSequence'], 'String');
      }
      if (data.hasOwnProperty('serverTemplates')) {
        obj['serverTemplates'] = ApiClient.convertToType(data['serverTemplates'], [ServerTemplate]);
      }
    }
    return obj;
  }

  /**
   * The identify of this composite template. It is used as a reference when adding document object information. If used, the document's `content-disposition` must include the composite template ID to which the document should be added. If a composite template ID is not specified in the content-disposition, the document is applied based on the value of the `documentId` property only. If no document object is specified, the composite template inherits the first document.
   * @member {String} compositeTemplateId
   */
  exports.prototype['compositeTemplateId'] = undefined;
  /**
   * An optional document object that will act as the primary document in the composite template object. If the document node is present, it will take precedence over any server template or inline template documents. It always comes first. Only use this when you want to supply the document dynamically.
   * @member {module:model/Document} document
   */
  exports.prototype['document'] = undefined;
  /**
   *  Zero or more inline templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value.
   * @member {Array.<module:model/InlineTemplate>} inlineTemplates
   */
  exports.prototype['inlineTemplates'] = undefined;
  /**
   * 
   * @member {String} pdfMetaDataTemplateSequence
   */
  exports.prototype['pdfMetaDataTemplateSequence'] = undefined;
  /**
   * 0 or more server-side templates and their position in the overlay. If supplied, they are overlaid into the envelope in the order of their Sequence value
   * @member {Array.<module:model/ServerTemplate>} serverTemplates
   */
  exports.prototype['serverTemplates'] = undefined;



  return exports;
}));


