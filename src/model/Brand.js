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
    define(['ApiClient', 'model/BrandEmailContent', 'model/BrandLink', 'model/BrandLogos', 'model/BrandResourceUrls', 'model/ErrorDetails', 'model/NameValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrandEmailContent'), require('./BrandLink'), require('./BrandLogos'), require('./BrandResourceUrls'), require('./ErrorDetails'), require('./NameValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.Brand = factory(root.Docusign.ApiClient, root.Docusign.BrandEmailContent, root.Docusign.BrandLink, root.Docusign.BrandLogos, root.Docusign.BrandResourceUrls, root.Docusign.ErrorDetails, root.Docusign.NameValue);
  }
}(this, function(ApiClient, BrandEmailContent, BrandLink, BrandLogos, BrandResourceUrls, ErrorDetails, NameValue) {
  'use strict';


  /**
   * The Brand model module.
   * @module model/Brand
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Brand</code>.
   * @alias module:model/Brand
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Brand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Brand} obj Optional instance to populate.
   * @return {module:model/Brand} The populated <code>Brand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('brandCompany')) {
        obj['brandCompany'] = ApiClient.convertToType(data['brandCompany'], 'String');
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'String');
      }
      if (data.hasOwnProperty('brandLanguages')) {
        obj['brandLanguages'] = ApiClient.convertToType(data['brandLanguages'], ['String']);
      }
      if (data.hasOwnProperty('brandName')) {
        obj['brandName'] = ApiClient.convertToType(data['brandName'], 'String');
      }
      if (data.hasOwnProperty('colors')) {
        obj['colors'] = ApiClient.convertToType(data['colors'], [NameValue]);
      }
      if (data.hasOwnProperty('defaultBrandLanguage')) {
        obj['defaultBrandLanguage'] = ApiClient.convertToType(data['defaultBrandLanguage'], 'String');
      }
      if (data.hasOwnProperty('emailContent')) {
        obj['emailContent'] = ApiClient.convertToType(data['emailContent'], [BrandEmailContent]);
      }
      if (data.hasOwnProperty('errorDetails')) {
        obj['errorDetails'] = ErrorDetails.constructFromObject(data['errorDetails']);
      }
      if (data.hasOwnProperty('isOverridingCompanyName')) {
        obj['isOverridingCompanyName'] = ApiClient.convertToType(data['isOverridingCompanyName'], 'Boolean');
      }
      if (data.hasOwnProperty('isSendingDefault')) {
        obj['isSendingDefault'] = ApiClient.convertToType(data['isSendingDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('isSigningDefault')) {
        obj['isSigningDefault'] = ApiClient.convertToType(data['isSigningDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('landingPages')) {
        obj['landingPages'] = ApiClient.convertToType(data['landingPages'], [NameValue]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [BrandLink]);
      }
      if (data.hasOwnProperty('logos')) {
        obj['logos'] = BrandLogos.constructFromObject(data['logos']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = BrandResourceUrls.constructFromObject(data['resources']);
      }
    }
    return obj;
  }

  /**
   * The name of the company associated with this brand.
   * @member {String} brandCompany
   */
  exports.prototype['brandCompany'] = undefined;
  /**
   * The ID used to identify a specific brand in API calls.
   * @member {String} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * 
   * @member {Array.<String>} brandLanguages
   */
  exports.prototype['brandLanguages'] = undefined;
  /**
   * The name of the brand.
   * @member {String} brandName
   */
  exports.prototype['brandName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} colors
   */
  exports.prototype['colors'] = undefined;
  /**
   * 
   * @member {String} defaultBrandLanguage
   */
  exports.prototype['defaultBrandLanguage'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BrandEmailContent>} emailContent
   */
  exports.prototype['emailContent'] = undefined;
  /**
   * @member {module:model/ErrorDetails} errorDetails
   */
  exports.prototype['errorDetails'] = undefined;
  /**
   * 
   * @member {Boolean} isOverridingCompanyName
   */
  exports.prototype['isOverridingCompanyName'] = undefined;
  /**
   * 
   * @member {Boolean} isSendingDefault
   */
  exports.prototype['isSendingDefault'] = undefined;
  /**
   * 
   * @member {Boolean} isSigningDefault
   */
  exports.prototype['isSigningDefault'] = undefined;
  /**
   * 
   * @member {Array.<module:model/NameValue>} landingPages
   */
  exports.prototype['landingPages'] = undefined;
  /**
   * 
   * @member {Array.<module:model/BrandLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {module:model/BrandLogos} logos
   */
  exports.prototype['logos'] = undefined;
  /**
   * @member {module:model/BrandResourceUrls} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


