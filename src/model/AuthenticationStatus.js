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
    define(['ApiClient', 'model/EventResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AuthenticationStatus = factory(root.Docusign.ApiClient, root.Docusign.EventResult);
  }
}(this, function(ApiClient, EventResult) {
  'use strict';


  /**
   * The AuthenticationStatus model module.
   * @module model/AuthenticationStatus
   */

  /**
   * Constructs a new <code>AuthenticationStatus</code>.
   * Contains information about the authentication status.
   * @alias module:model/AuthenticationStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AuthenticationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationStatus} obj Optional instance to populate.
   * @return {module:model/AuthenticationStatus} The populated <code>AuthenticationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessCodeResult')) {
        obj['accessCodeResult'] = EventResult.constructFromObject(data['accessCodeResult']);
      }
      if (data.hasOwnProperty('ageVerifyResult')) {
        obj['ageVerifyResult'] = EventResult.constructFromObject(data['ageVerifyResult']);
      }
      if (data.hasOwnProperty('anySocialIDResult')) {
        obj['anySocialIDResult'] = EventResult.constructFromObject(data['anySocialIDResult']);
      }
      if (data.hasOwnProperty('facebookResult')) {
        obj['facebookResult'] = EventResult.constructFromObject(data['facebookResult']);
      }
      if (data.hasOwnProperty('googleResult')) {
        obj['googleResult'] = EventResult.constructFromObject(data['googleResult']);
      }
      if (data.hasOwnProperty('identityVerificationResult')) {
        obj['identityVerificationResult'] = EventResult.constructFromObject(data['identityVerificationResult']);
      }
      if (data.hasOwnProperty('idLookupResult')) {
        obj['idLookupResult'] = EventResult.constructFromObject(data['idLookupResult']);
      }
      if (data.hasOwnProperty('idQuestionsResult')) {
        obj['idQuestionsResult'] = EventResult.constructFromObject(data['idQuestionsResult']);
      }
      if (data.hasOwnProperty('linkedinResult')) {
        obj['linkedinResult'] = EventResult.constructFromObject(data['linkedinResult']);
      }
      if (data.hasOwnProperty('liveIDResult')) {
        obj['liveIDResult'] = EventResult.constructFromObject(data['liveIDResult']);
      }
      if (data.hasOwnProperty('ofacResult')) {
        obj['ofacResult'] = EventResult.constructFromObject(data['ofacResult']);
      }
      if (data.hasOwnProperty('openIDResult')) {
        obj['openIDResult'] = EventResult.constructFromObject(data['openIDResult']);
      }
      if (data.hasOwnProperty('phoneAuthResult')) {
        obj['phoneAuthResult'] = EventResult.constructFromObject(data['phoneAuthResult']);
      }
      if (data.hasOwnProperty('salesforceResult')) {
        obj['salesforceResult'] = EventResult.constructFromObject(data['salesforceResult']);
      }
      if (data.hasOwnProperty('signatureProviderResult')) {
        obj['signatureProviderResult'] = EventResult.constructFromObject(data['signatureProviderResult']);
      }
      if (data.hasOwnProperty('smsAuthResult')) {
        obj['smsAuthResult'] = EventResult.constructFromObject(data['smsAuthResult']);
      }
      if (data.hasOwnProperty('sTANPinResult')) {
        obj['sTANPinResult'] = EventResult.constructFromObject(data['sTANPinResult']);
      }
      if (data.hasOwnProperty('twitterResult')) {
        obj['twitterResult'] = EventResult.constructFromObject(data['twitterResult']);
      }
      if (data.hasOwnProperty('yahooResult')) {
        obj['yahooResult'] = EventResult.constructFromObject(data['yahooResult']);
      }
    }
    return obj;
  }

  /**
   * The result of a user's attempt to authenticate by using an access code. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} accessCodeResult
   */
  exports.prototype['accessCodeResult'] = undefined;
  /**
   * The result of an age verification check. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} ageVerifyResult
   */
  exports.prototype['ageVerifyResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} anySocialIDResult
   */
  exports.prototype['anySocialIDResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} facebookResult
   */
  exports.prototype['facebookResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} googleResult
   */
  exports.prototype['googleResult'] = undefined;
  /**
   * The result of an [Identity Verification][IDV] workflow.  [IDV]: /docs/esign-rest-api/reference/accounts/identityverifications/
   * @member {module:model/EventResult} identityVerificationResult
   */
  exports.prototype['identityVerificationResult'] = undefined;
  /**
   * The result of an ID lookup authentication check. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} idLookupResult
   */
  exports.prototype['idLookupResult'] = undefined;
  /**
   * The result of the user's answers to ID challenge questions. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} idQuestionsResult
   */
  exports.prototype['idQuestionsResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} linkedinResult
   */
  exports.prototype['linkedinResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} liveIDResult
   */
  exports.prototype['liveIDResult'] = undefined;
  /**
   * The result of an Office of Foreign Asset Control (OFAC) check. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} ofacResult
   */
  exports.prototype['ofacResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} openIDResult
   */
  exports.prototype['openIDResult'] = undefined;
  /**
   * The result of the user's attempt to authenticate by using two-factor authentication (2FA) through phone messaging. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} phoneAuthResult
   */
  exports.prototype['phoneAuthResult'] = undefined;
  /**
   * Success/failure result of authentication using sign-in with a Salesforce account. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} salesforceResult
   */
  exports.prototype['salesforceResult'] = undefined;
  /**
   * The result of the user's attempt to authenticate by using a signature provider.
   * @member {module:model/EventResult} signatureProviderResult
   */
  exports.prototype['signatureProviderResult'] = undefined;
  /**
   * The result of the user's attempt to authenticate by using two-factor authentication (2FA) through SMS messaging on a mobile phone.
   * @member {module:model/EventResult} smsAuthResult
   */
  exports.prototype['smsAuthResult'] = undefined;
  /**
   * The result of a Student Authentication Network (STAN) authentication check. It returns:  - `Status`: `Pass` or `Fail`. - `dateTime`: The date and time that the event occurred. - `FailureDescription`: A string containing the details about a failed authentication. - `VendorFailureStatusCode`: A string containing the vendor's status code for a failed authentication. 
   * @member {module:model/EventResult} sTANPinResult
   */
  exports.prototype['sTANPinResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} twitterResult
   */
  exports.prototype['twitterResult'] = undefined;
  /**
   * Deprecated.
   * @member {module:model/EventResult} yahooResult
   */
  exports.prototype['yahooResult'] = undefined;



  return exports;
}));


