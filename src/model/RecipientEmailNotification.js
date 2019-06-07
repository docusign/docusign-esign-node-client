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
    define(['ApiClient', 'model/PropertyMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.RecipientEmailNotification = factory(root.Docusign.ApiClient, root.Docusign.PropertyMetadata);
  }
}(this, function(ApiClient, PropertyMetadata) {
  'use strict';


  /**
   * The RecipientEmailNotification model module.
   * @module model/RecipientEmailNotification
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RecipientEmailNotification</code>.
   * @alias module:model/RecipientEmailNotification
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecipientEmailNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipientEmailNotification} obj Optional instance to populate.
   * @return {module:model/RecipientEmailNotification} The populated <code>RecipientEmailNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emailBody')) {
        obj['emailBody'] = ApiClient.convertToType(data['emailBody'], 'String');
      }
      if (data.hasOwnProperty('emailBodyMetadata')) {
        obj['emailBodyMetadata'] = PropertyMetadata.constructFromObject(data['emailBodyMetadata']);
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], 'String');
      }
      if (data.hasOwnProperty('emailSubjectMetadata')) {
        obj['emailSubjectMetadata'] = PropertyMetadata.constructFromObject(data['emailSubjectMetadata']);
      }
      if (data.hasOwnProperty('supportedLanguage')) {
        obj['supportedLanguage'] = ApiClient.convertToType(data['supportedLanguage'], 'String');
      }
      if (data.hasOwnProperty('supportedLanguageMetadata')) {
        obj['supportedLanguageMetadata'] = PropertyMetadata.constructFromObject(data['supportedLanguageMetadata']);
      }
    }
    return obj;
  }

  /**
   * Specifies the email body of the message sent to the recipient.   Maximum length: 10000 characters. 
   * @member {String} emailBody
   */
  exports.prototype['emailBody'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} emailBodyMetadata
   */
  exports.prototype['emailBodyMetadata'] = undefined;
  /**
   * Specifies the subject of the email that is sent to all recipients.  See [ML:Template Email Subject Merge Fields] for information about adding merge field information to the email subject.
   * @member {String} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} emailSubjectMetadata
   */
  exports.prototype['emailSubjectMetadata'] = undefined;
  /**
   * A simple type enumeration of the language used. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bahasa Indonesia (id), Bahasa Melayu (ms) Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro),Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).
   * @member {String} supportedLanguage
   */
  exports.prototype['supportedLanguage'] = undefined;
  /**
   * @member {module:model/PropertyMetadata} supportedLanguageMetadata
   */
  exports.prototype['supportedLanguageMetadata'] = undefined;



  return exports;
}));


