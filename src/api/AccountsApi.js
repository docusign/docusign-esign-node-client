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
	define(['Configuration', 'ApiClient', 'model/AccountIdentityVerificationResponse', 'model/AccountInformation', 'model/AccountPasswordRules', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/AccountSignatureProviders', 'model/BillingChargeResponse', 'model/Brand', 'model/BrandResources', 'model/BrandResourcesList', 'model/BrandsRequest', 'model/BrandsResponse', 'model/CaptiveRecipientInformation', 'model/ConsumerDisclosure', 'model/CustomField', 'model/CustomFields', 'model/ENoteConfiguration', 'model/ErrorDetails', 'model/FileTypeList', 'model/NewAccountDefinition', 'model/NewAccountSummary', 'model/NotificationDefaults', 'model/PaymentGatewayAccountsInfo', 'model/PermissionProfile', 'model/PermissionProfileInformation', 'model/ProvisioningInformation', 'model/RecipientNamesResponse', 'model/SupportedLanguages', 'model/TabAccountSettings', 'model/UserPasswordRules', 'model/Watermark'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AccountIdentityVerificationResponse'), require('../model/AccountInformation'), require('../model/AccountPasswordRules'), require('../model/AccountSettingsInformation'), require('../model/AccountSharedAccess'), require('../model/AccountSignatureProviders'), require('../model/BillingChargeResponse'), require('../model/Brand'), require('../model/BrandResources'), require('../model/BrandResourcesList'), require('../model/BrandsRequest'), require('../model/BrandsResponse'), require('../model/CaptiveRecipientInformation'), require('../model/ConsumerDisclosure'), require('../model/CustomField'), require('../model/CustomFields'), require('../model/ENoteConfiguration'), require('../model/ErrorDetails'), require('../model/FileTypeList'), require('../model/NewAccountDefinition'), require('../model/NewAccountSummary'), require('../model/NotificationDefaults'), require('../model/PaymentGatewayAccountsInfo'), require('../model/PermissionProfile'), require('../model/PermissionProfileInformation'), require('../model/ProvisioningInformation'), require('../model/RecipientNamesResponse'), require('../model/SupportedLanguages'), require('../model/TabAccountSettings'), require('../model/UserPasswordRules'), require('../model/Watermark'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.AccountIdentityVerificationResponse, root.Docusign.AccountInformation, root.Docusign.AccountPasswordRules, root.Docusign.AccountSettingsInformation, root.Docusign.AccountSharedAccess, root.Docusign.AccountSignatureProviders, root.Docusign.BillingChargeResponse, root.Docusign.Brand, root.Docusign.BrandResources, root.Docusign.BrandResourcesList, root.Docusign.BrandsRequest, root.Docusign.BrandsResponse, root.Docusign.CaptiveRecipientInformation, root.Docusign.ConsumerDisclosure, root.Docusign.CustomField, root.Docusign.CustomFields, root.Docusign.ENoteConfiguration, root.Docusign.ErrorDetails, root.Docusign.FileTypeList, root.Docusign.NewAccountDefinition, root.Docusign.NewAccountSummary, root.Docusign.NotificationDefaults, root.Docusign.PaymentGatewayAccountsInfo, root.Docusign.PermissionProfile, root.Docusign.PermissionProfileInformation, root.Docusign.ProvisioningInformation, root.Docusign.RecipientNamesResponse, root.Docusign.SupportedLanguages, root.Docusign.TabAccountSettings, root.Docusign.UserPasswordRules, root.Docusign.Watermark);
  }
}(this, function(Configuration, ApiClient, AccountIdentityVerificationResponse, AccountInformation, AccountPasswordRules, AccountSettingsInformation, AccountSharedAccess, AccountSignatureProviders, BillingChargeResponse, Brand, BrandResources, BrandResourcesList, BrandsRequest, BrandsResponse, CaptiveRecipientInformation, ConsumerDisclosure, CustomField, CustomFields, ENoteConfiguration, ErrorDetails, FileTypeList, NewAccountDefinition, NewAccountSummary, NotificationDefaults, PaymentGatewayAccountsInfo, PermissionProfile, PermissionProfileInformation, ProvisioningInformation, RecipientNamesResponse, SupportedLanguages, TabAccountSettings, UserPasswordRules, Watermark) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional)Callback function to receive the result of the _delete operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~_deleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the specified account.
     * This closes the specified account. You must be an account admin to close your account. Once closed, an account must be reopened by DocuSign.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~_deleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this._delete = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling _delete");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the create operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewAccountSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates new accounts.
     * Creates new DocuSign service accounts.

This is used to create multiple DocuSign accounts with one call. It uses the same information and formats as the normal a  [Accounts:create](accounts_create) call with the information included within a `newAccountRequests` element. A maximum of 100 new accounts can be created at one time.

Note that the structure of the XML request is slightly different than the JSON request, in that the new account information is included in a `newAccountDefinition` property inside the `newAccountRequests` element.
Response

The response returns the new account ID, password and the default user information for each newly created account.

A 201 code is returned if the call succeeded.  While the call may have succeed, some of the individual account requests may have failed. In the case of failures to create the account,  an `errorDetails` node is added in the response to each specific request that failed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.previewBillingPlan When set to **true**, creates the account using a preview billing plan.
     * @param {module:model/NewAccountDefinition} optsOrCallback.newAccountDefinition 
     * @param {module:api/AccountsApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewAccountSummary}
     */
    this.create = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['newAccountDefinition'];

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
      };
      var queryParams = {
        'preview_billing_plan': optsOrCallback['previewBillingPlan']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NewAccountSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createBrand operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates one or more brand profile files for the account.
     * Creates one or more brand profile files for the account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSig`) must be set to **true** for the account to use this call.

An error is returned if `brandId` property for a brand profile is already set for the account. To upload a new version of an existing brand profile, you must delete the profile and then upload the newer version.

When brand profile files are being uploaded, they must be combined into one zip file and the `Content-Type` must be `application/zip`.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Brand} optsOrCallback.brand 
     * @param {module:api/AccountsApi~createBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.createBrand = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['brand'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBrand");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createCustomField operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createCustomFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates an acount custom field.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.applyToTemplates 
     * @param {module:model/CustomField} optsOrCallback.customField 
     * @param {module:api/AccountsApi~createCustomFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.createCustomField = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customField'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCustomField");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'apply_to_templates': optsOrCallback['applyToTemplates']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/custom_fields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createPermissionProfile operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~createPermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new permission profile in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:model/PermissionProfile} optsOrCallback.permissionProfile 
     * @param {module:api/AccountsApi~createPermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.createPermissionProfile = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['permissionProfile'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createPermissionProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/permission_profiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteBrand operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteBrandCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes a brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {module:api/AccountsApi~deleteBrandCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBrand = function(accountId, brandId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling deleteBrand");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteBrandLogoByType operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete one branding logo.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~deleteBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBrandLogoByType = function(accountId, brandId, logoType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling deleteBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling deleteBrandLogoByType");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteBrands operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes one or more brand profiles.
     * Deletes one or more brand profiles from an account. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`) must be set to **true** to use this call.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BrandsRequest} optsOrCallback.brandsRequest 
     * @param {module:api/AccountsApi~deleteBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.deleteBrands = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['brandsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBrands");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteCaptiveRecipient operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteCaptiveRecipientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaptiveRecipientInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the signature for one or more captive recipient records.
     * Deletes the signature for one or more captive recipient records; it is primarily used for testing. This provides a way to reset the signature associated with a client user ID so that a new signature can be created the next time the client user ID is used.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} recipientPart 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CaptiveRecipientInformation} optsOrCallback.captiveRecipientInformation 
     * @param {module:api/AccountsApi~deleteCaptiveRecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaptiveRecipientInformation}
     */
    this.deleteCaptiveRecipient = function(accountId, recipientPart, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['captiveRecipientInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCaptiveRecipient");
      }

      // verify the required parameter 'recipientPart' is set
      if (recipientPart == undefined || recipientPart == null) {
        throw new Error("Missing the required parameter 'recipientPart' when calling deleteCaptiveRecipient");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'recipientPart': recipientPart
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CaptiveRecipientInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/captive_recipients/{recipientPart}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteCustomField operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteCustomFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete an existing account custom field.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} customFieldId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.applyToTemplates 
     * @param {module:api/AccountsApi~deleteCustomFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomField = function(accountId, customFieldId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomField");
      }

      // verify the required parameter 'customFieldId' is set
      if (customFieldId == undefined || customFieldId == null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling deleteCustomField");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'customFieldId': customFieldId
      };
      var queryParams = {
        'apply_to_templates': optsOrCallback['applyToTemplates']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/custom_fields/{customFieldId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteENoteConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deleteENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~deleteENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteENoteConfiguration = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteENoteConfiguration");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/enote_configuration', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deletePermissionProfile operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~deletePermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a permissions profile within the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {module:api/AccountsApi~deletePermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePermissionProfile = function(accountId, permissionProfileId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deletePermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling deletePermissionProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAccountIdentityVerification operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAccountIdentityVerificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountIdentityVerificationResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the list of identity verification options for an account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getAccountIdentityVerificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountIdentityVerificationResponse}
     */
    this.getAccountIdentityVerification = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountIdentityVerification");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountIdentityVerificationResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/identity_verification', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAccountInformation operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAccountInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the account information for the specified account.
     * Retrieves the account information for the specified account.

**Response**
The `canUpgrade` property contains is a Boolean that indicates whether the account can be upgraded through the API. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeAccountSettings When set to **true**, includes the account settings for the account in the response.
     * @param {module:api/AccountsApi~getAccountInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountInformation}
     */
    this.getAccountInformation = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountInformation");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include_account_settings': optsOrCallback['includeAccountSettings']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAccountTabSettings operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAccountTabSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabAccountSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns tab settings list for specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getAccountTabSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabAccountSettings}
     */
    this.getAccountTabSettings = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountTabSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TabAccountSettings;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getAllPaymentGatewayAccounts operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getAllPaymentGatewayAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentGatewayAccountsInfo} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get all payment gateway account for the provided accountId
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getAllPaymentGatewayAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentGatewayAccountsInfo}
     */
    this.getAllPaymentGatewayAccounts = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAllPaymentGatewayAccounts");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PaymentGatewayAccountsInfo;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/payment_gateway_accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBillingCharges operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBillingChargesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingChargeResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets list of recurring and usage charges for the account.
     * Retrieves the list of recurring and usage charges for the account. This can be used to determine the charge structure and usage of charge plan items. 

Privileges required: account administrator 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeCharges Specifies which billing charges to return. Valid values are:  * envelopes * seats 
     * @param {module:api/AccountsApi~getBillingChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingChargeResponse}
     */
    this.getBillingCharges = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBillingCharges");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include_charges': optsOrCallback['includeCharges']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingChargeResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_charges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBrand operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Brand} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get information for a specific brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeExternalReferences 
     * @param {String} optsOrCallback.includeLogos 
     * @param {module:api/AccountsApi~getBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Brand}
     */
    this.getBrand = function(accountId, brandId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrand");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
        'include_external_references': optsOrCallback['includeExternalReferences'],
        'include_logos': optsOrCallback['includeLogos']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Brand;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBrandExportFile operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBrandExportFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Export a specific brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {module:api/AccountsApi~getBrandExportFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBrandExportFile = function(accountId, brandId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandExportFile");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandExportFile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBrandLogoByType operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Obtains the specified image for a brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~getBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getBrandLogoByType = function(accountId, brandId, logoType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling getBrandLogoByType");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBrandResources operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBrandResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandResourcesList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the specified account&#39;s list of branding resources (metadata).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {module:api/AccountsApi~getBrandResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandResourcesList}
     */
    this.getBrandResources = function(accountId, brandId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandResources");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandResources");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandResourcesList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getBrandResourcesByContentType operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getBrandResourcesByContentTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the specified branding resource file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} resourceContentType 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.langcode 
     * @param {String} optsOrCallback.returnMaster 
     * @param {module:api/AccountsApi~getBrandResourcesByContentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getBrandResourcesByContentType = function(accountId, brandId, resourceContentType, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBrandResourcesByContentType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling getBrandResourcesByContentType");
      }

      // verify the required parameter 'resourceContentType' is set
      if (resourceContentType == undefined || resourceContentType == null) {
        throw new Error("Missing the required parameter 'resourceContentType' when calling getBrandResourcesByContentType");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'resourceContentType': resourceContentType
      };
      var queryParams = {
        'langcode': optsOrCallback['langcode'],
        'return_master': optsOrCallback['returnMaster']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getConsumerDisclosure operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getConsumerDisclosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the Electronic Record and Signature Disclosure.
     * Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, for the requested envelope recipient. This might be different than the current account disclosure depending on account settings, such as branding, and when the account disclosure was last updated. An optional query string can be included to return the language for the disclosure.  
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} langCode The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to Ã¯Â¿Â½browserÃ¯Â¿Â½ to automatically detect the browser language being used by the viewer and display the disclosure in that language.
     * @param {module:api/AccountsApi~getConsumerDisclosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosure = function(accountId, langCode, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosure");
      }

      // verify the required parameter 'langCode' is set
      if (langCode == undefined || langCode == null) {
        throw new Error("Missing the required parameter 'langCode' when calling getConsumerDisclosure");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'langCode': langCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/consumer_disclosure/{langCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getConsumerDisclosureDefault operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getConsumerDisclosureDefaultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the Electronic Record and Signature Disclosure for the account.
     * Retrieves the Electronic Record and Signature Disclosure, with HTML formatting, associated with the account. You can use an optional query string to set the language for the disclosure.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.langCode Specifies the language used in the response. The supported languages, with the language value shown in parenthesis, are: Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk), and Vietnamese (vi).  Additionally, the value can be set to &#x60;browser&#x60; to automatically detect the browser language being used by the viewer and display the disclosure in that language. 
     * @param {module:api/AccountsApi~getConsumerDisclosureDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.getConsumerDisclosureDefault = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConsumerDisclosureDefault");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'langCode': optsOrCallback['langCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/consumer_disclosure', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getENoteConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ENoteConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ENoteConfiguration}
     */
    this.getENoteConfiguration = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getENoteConfiguration");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ENoteConfiguration;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/enote_configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getNotificationDefaults operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getNotificationDefaultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationDefaults} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns default user level settings for a specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getNotificationDefaultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationDefaults}
     */
    this.getNotificationDefaults = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNotificationDefaults");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotificationDefaults;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/notification_defaults', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getPasswordRules operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getPasswordRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountPasswordRules} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the password rules
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getPasswordRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountPasswordRules}
     */
    this.getPasswordRules = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPasswordRules");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountPasswordRules;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/password_rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getPasswordRules_0 operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getPasswordRules_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPasswordRules} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get membership account password rules
     * @param {module:api/AccountsApi~getPasswordRules_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPasswordRules}
     */
    this.getPasswordRules_0 = function(callback) {
      var postBody = null;

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserPasswordRules;

      return this.apiClient.callApi(
        '/v2.1/current_user/password_rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getPermissionProfile operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getPermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a permissions profile in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:api/AccountsApi~getPermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.getPermissionProfile = function(accountId, permissionProfileId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling getPermissionProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getProvisioning operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getProvisioningCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProvisioningInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the account provisioning information for the account.
     * Retrieves the account provisioning information for the account.
     * @param {module:api/AccountsApi~getProvisioningCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProvisioningInformation}
     */
    this.getProvisioning = function(callback) {
      var postBody = null;

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProvisioningInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/provisioning', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getSupportedLanguages operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getSupportedLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SupportedLanguages} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets list of supported languages for recipient language setting.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getSupportedLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SupportedLanguages}
     */
    this.getSupportedLanguages = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSupportedLanguages");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SupportedLanguages;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/supported_languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getWatermark operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getWatermarkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Watermark} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get watermark information.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~getWatermarkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Watermark}
     */
    this.getWatermark = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWatermark");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Watermark;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/watermark', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getWatermarkPreview operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~getWatermarkPreviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Watermark} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get watermark preview.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Watermark} optsOrCallback.watermark 
     * @param {module:api/AccountsApi~getWatermarkPreviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Watermark}
     */
    this.getWatermarkPreview = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['watermark'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWatermarkPreview");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Watermark;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/watermark/preview', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listBrands operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of brand profiles.
     * Retrieves the list of brand profiles associated with the account and the default brand profiles. The Account Branding feature (accountSettings properties `canSelfBrandSend` and `canSelfBrandSend`)  must be set to **true** for the account to use this call.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.excludeDistributorBrand When set to **true**, excludes distributor brand information from the response set.
     * @param {String} optsOrCallback.includeLogos When set to **true**, returns the logos associated with the brand.
     * @param {module:api/AccountsApi~listBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandsResponse}
     */
    this.listBrands = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listBrands");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'exclude_distributor_brand': optsOrCallback['excludeDistributorBrand'],
        'include_logos': optsOrCallback['includeLogos']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listCustomFields operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of custom fields associated with the account.
     * Retrieves a list of envelope custom fields associated with the account. You can use these fields in the envelopes for your account to record information about the envelope, help search for envelopes and track information. The envelope custom fields are shown in the Envelope Settings section when a user is creating an envelope in the DocuSign member console. The envelope custom fields are not seen by the envelope recipients.

There are two types of envelope custom fields, text, and list. A text custom field lets the sender enter the value for the field. The list custom field lets the sender select the value of the field from a list you provide.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.listCustomFields = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomFields");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/custom_fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listPermissions operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfileInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of permission profiles.
     * Retrieves a list of Permission Profiles. Permission Profiles are a standard set of user permissions that you can apply to individual users or users in a Group. This makes it easier to manage user permissions for a large number of users, without having to change permissions on a user-by-user basis.

Currently, Permission Profiles can only be created and modified in the DocuSign console.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:api/AccountsApi~listPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfileInformation}
     */
    this.listPermissions = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPermissions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfileInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/permission_profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listRecipientNamesByEmail operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listRecipientNamesByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecipientNamesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets recipient names associated with an email address.
     * Retrieves a list of recipients in the specified account that are associated with a email address supplied in the query string.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.email The email address for the user
     * @param {module:api/AccountsApi~listRecipientNamesByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecipientNamesResponse}
     */
    this.listRecipientNamesByEmail = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listRecipientNamesByEmail");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'email': optsOrCallback['email']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecipientNamesResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/recipient_names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listSettings operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets account settings information.
     * Retrieves the account settings information for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSettingsInformation}
     */
    this.listSettings = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listSharedAccess operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listSharedAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSharedAccess} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Reserved: Gets the shared item status for one or more users.
     * Reserved: Retrieves shared item status for one or more users and types of items.

Users with account administration privileges can retrieve shared access information for all account users. Users without account administrator privileges can only retrieve shared access information for themselves and the returned information is limited to the retrieving the status of all members of the account that are sharing their folders to the user. This is equivalent to setting the shared=shared_from.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count Specifies maximum number of results included in the response. If no value is specified, this defaults to 1000.
     * @param {String} optsOrCallback.envelopesNotSharedUserStatus 
     * @param {String} optsOrCallback.folderIds 
     * @param {String} optsOrCallback.itemType Specifies the type of shared item being requested. The accepted values are: -envelopes: returns information about envelope sharing between users.
     * @param {String} optsOrCallback.searchText This can be used to filter user names in the response. The wild-card &#39;*&#39; (asterisk) can be used around the string.
     * @param {String} optsOrCallback.shared Specifies which users should be included in the response. Multiple values can be used in the query by using a comma separated list of shared values. If the requestor does not have account administrator privileges, the shared_to value is used. Requestors that do not have account administrator privileges can only use the shared_to, any other setting will result in an error. The accepted values are:  -not_shared: Returns account users that the specified item type is not being shared with and that are not sharing the specified item type with the user.  User X (Share) X Account user  -shared_to: Returns account users that the specified item type is not being shared with and who are sharing the specified item type with the user (only shared to the user).  User X (Share) Account user  -shared_from: Returns account users that the specified item type is being shared with and who are not sharing the specified item type with the user (only shared from the user).  User (Share) &gt;&gt; Account user  -shared_to_and_from: Returns account users that the specified item type is being shared with and who are sharing the specified item type with the user.  User &lt;&lt; (Share) &gt;&gt; Account user
     * @param {String} optsOrCallback.startPosition If the response set exceeds Count, this can be used to specify that the method should return users starting at the specified index. The first index is 0, and should be used in the first GET call. Typically this number is a multiple of Count. If no value is specified, this defaults to be 0. 
     * @param {String} optsOrCallback.userIds A comma separated list of userIds for whom the shared item information is being requested. 
     * @param {module:api/AccountsApi~listSharedAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSharedAccess}
     */
    this.listSharedAccess = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSharedAccess");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'envelopes_not_shared_user_status': optsOrCallback['envelopesNotSharedUserStatus'],
        'folder_ids': optsOrCallback['folderIds'],
        'item_type': optsOrCallback['itemType'],
        'search_text': optsOrCallback['searchText'],
        'shared': optsOrCallback['shared'],
        'start_position': optsOrCallback['startPosition'],
        'user_ids': optsOrCallback['userIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSharedAccess;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/shared_access', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listSignatureProviders operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listSignatureProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSignatureProviders} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns Account available signature providers for specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listSignatureProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSignatureProviders}
     */
    this.listSignatureProviders = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSignatureProviders");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSignatureProviders;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/signatureProviders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listUnsupportedFileTypes operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~listUnsupportedFileTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileTypeList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a list of unsupported file types.
     * Retrieves a list of file types (mime-types and file-extensions) that are not supported for upload through the DocuSign system.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/AccountsApi~listUnsupportedFileTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileTypeList}
     */
    this.listUnsupportedFileTypes = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listUnsupportedFileTypes");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FileTypeList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/unsupported_file_types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateAccountTabSettings operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateAccountTabSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TabAccountSettings} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Modifies tab settings for specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/TabAccountSettings} optsOrCallback.tabAccountSettings 
     * @param {module:api/AccountsApi~updateAccountTabSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TabAccountSettings}
     */
    this.updateAccountTabSettings = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['tabAccountSettings'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateAccountTabSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TabAccountSettings;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateBrand operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateBrandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Brand} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an existing brand.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Brand} optsOrCallback.brand 
     * @param {module:api/AccountsApi~updateBrandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Brand}
     */
    this.updateBrand = function(accountId, brandId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['brand'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrand");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrand");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Brand;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateBrandLogoByType operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateBrandLogoByTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Put one branding logo.
     * @param {String} logoFileBytes Brand logo binary Stream. Supported formats: JPG, GIF, PNG. Maximum file size: 300 KB. Recommended dimensions: 296 x 76 pixels (larger images will be resized). Changes may take up to one hour to display in all places
     * @param {String} accountId The external account number (int) or account ID GUID.
     * @param {String} brandId The unique identifier for a brand. This property is used to apply branding to an envelope.
     * @param {String} logoType One of **Primary**, **Secondary** or **Email**.
     * @param {module:api/AccountsApi~updateBrandLogoByTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBrandLogoByType = function(logoFileBytes, accountId, brandId, logoType, callback) {
      var postBody = logoFileBytes;

      // verify the required parameter 'logoFileBytes' is set
      if (logoFileBytes == undefined || logoFileBytes == null) {
        throw new Error("Missing the required parameter 'logoFileBytes' when calling updateBrandLogoByType");
      }

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrandLogoByType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrandLogoByType");
      }

      // verify the required parameter 'logoType' is set
      if (logoType == undefined || logoType == null) {
        throw new Error("Missing the required parameter 'logoType' when calling updateBrandLogoByType");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'logoType': logoType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['image/png'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/logos/{logoType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateBrandResourcesByContentType operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateBrandResourcesByContentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrandResources} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Uploads a branding resource file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} brandId The unique identifier of a brand.
     * @param {String} resourceContentType 
     * @param {module:api/AccountsApi~updateBrandResourcesByContentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrandResources}
     */
    this.updateBrandResourcesByContentType = function(accountId, brandId, resourceContentType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBrandResourcesByContentType");
      }

      // verify the required parameter 'brandId' is set
      if (brandId == undefined || brandId == null) {
        throw new Error("Missing the required parameter 'brandId' when calling updateBrandResourcesByContentType");
      }

      // verify the required parameter 'resourceContentType' is set
      if (resourceContentType == undefined || resourceContentType == null) {
        throw new Error("Missing the required parameter 'resourceContentType' when calling updateBrandResourcesByContentType");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'brandId': brandId,
        'resourceContentType': resourceContentType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BrandResources;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/brands/{brandId}/resources/{resourceContentType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateConsumerDisclosure operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateConsumerDisclosureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsumerDisclosure} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update Consumer Disclosure.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} langCode The simple type enumeration the language used in the response. The supported languages, with the language value shown in parenthesis, are:Arabic (ar), Bulgarian (bg), Czech (cs), Chinese Simplified (zh_CN), Chinese Traditional (zh_TW), Croatian (hr), Danish (da), Dutch (nl), English US (en), English UK (en_GB), Estonian (et), Farsi (fa), Finnish (fi), French (fr), French Canada (fr_CA), German (de), Greek (el), Hebrew (he), Hindi (hi), Hungarian (hu), Bahasa Indonesia (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Bahasa Melayu (ms), Norwegian (no), Polish (pl), Portuguese (pt), Portuguese Brazil (pt_BR), Romanian (ro), Russian (ru), Serbian (sr), Slovak (sk), Slovenian (sl), Spanish (es),Spanish Latin America (es_MX), Swedish (sv), Thai (th), Turkish (tr), Ukrainian (uk) and Vietnamese (vi). Additionally, the value can be set to Ã¯Â¿Â½browserÃ¯Â¿Â½ to automatically detect the browser language being used by the viewer and display the disclosure in that language.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeMetadata 
     * @param {module:model/ConsumerDisclosure} optsOrCallback.consumerDisclosure 
     * @param {module:api/AccountsApi~updateConsumerDisclosureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConsumerDisclosure}
     */
    this.updateConsumerDisclosure = function(accountId, langCode, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['consumerDisclosure'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateConsumerDisclosure");
      }

      // verify the required parameter 'langCode' is set
      if (langCode == undefined || langCode == null) {
        throw new Error("Missing the required parameter 'langCode' when calling updateConsumerDisclosure");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'langCode': langCode
      };
      var queryParams = {
        'include_metadata': optsOrCallback['includeMetadata']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ConsumerDisclosure;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/consumer_disclosure/{langCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateCustomField operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateCustomFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFields} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an existing account custom field.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} customFieldId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.applyToTemplates 
     * @param {module:model/CustomField} optsOrCallback.customField 
     * @param {module:api/AccountsApi~updateCustomFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFields}
     */
    this.updateCustomField = function(accountId, customFieldId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customField'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomField");
      }

      // verify the required parameter 'customFieldId' is set
      if (customFieldId == undefined || customFieldId == null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateCustomField");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'customFieldId': customFieldId
      };
      var queryParams = {
        'apply_to_templates': optsOrCallback['applyToTemplates']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CustomFields;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/custom_fields/{customFieldId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateENoteConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateENoteConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ENoteConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates configuration information for the eNote eOriginal integration.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ENoteConfiguration} optsOrCallback.eNoteConfiguration 
     * @param {module:api/AccountsApi~updateENoteConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ENoteConfiguration}
     */
    this.updateENoteConfiguration = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['eNoteConfiguration'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateENoteConfiguration");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ENoteConfiguration;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/enote_configuration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateNotificationDefaults operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateNotificationDefaultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationDefaults} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates default user level settings for a specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/NotificationDefaults} optsOrCallback.notificationDefaults 
     * @param {module:api/AccountsApi~updateNotificationDefaultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationDefaults}
     */
    this.updateNotificationDefaults = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['notificationDefaults'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateNotificationDefaults");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotificationDefaults;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/notification_defaults', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updatePasswordRules operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updatePasswordRulesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountPasswordRules} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update the password rules
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/AccountPasswordRules} optsOrCallback.accountPasswordRules 
     * @param {module:api/AccountsApi~updatePasswordRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountPasswordRules}
     */
    this.updatePasswordRules = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['accountPasswordRules'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePasswordRules");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountPasswordRules;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/password_rules', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updatePermissionProfile operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updatePermissionProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionProfile} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates a permission profile within the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.include 
     * @param {module:model/PermissionProfile} optsOrCallback.permissionProfile 
     * @param {module:api/AccountsApi~updatePermissionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionProfile}
     */
    this.updatePermissionProfile = function(accountId, permissionProfileId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['permissionProfile'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePermissionProfile");
      }

      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == undefined || permissionProfileId == null) {
        throw new Error("Missing the required parameter 'permissionProfileId' when calling updatePermissionProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {
        'include': optsOrCallback['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PermissionProfile;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateSettings operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the account settings for an account.
     * Updates the account settings for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/AccountSettingsInformation} optsOrCallback.accountSettingsInformation 
     * @param {module:api/AccountsApi~updateSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSettings = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['accountSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateSharedAccess operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateSharedAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountSharedAccess} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Reserved: Sets the shared access information for users.
     * Reserved: Sets the shared access information for one or more users.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.itemType 
     * @param {String} optsOrCallback.preserveExistingSharedAccess 
     * @param {String} optsOrCallback.userIds 
     * @param {module:model/AccountSharedAccess} optsOrCallback.accountSharedAccess 
     * @param {module:api/AccountsApi~updateSharedAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountSharedAccess}
     */
    this.updateSharedAccess = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['accountSharedAccess'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSharedAccess");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'item_type': optsOrCallback['itemType'],
        'preserve_existing_shared_access': optsOrCallback['preserveExistingSharedAccess'],
        'user_ids': optsOrCallback['userIds']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountSharedAccess;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/shared_access', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateWatermark operation. If none specified a Promise will be returned.
     * @callback module:api/AccountsApi~updateWatermarkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Watermark} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update watermark information.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Watermark} optsOrCallback.watermark 
     * @param {module:api/AccountsApi~updateWatermarkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Watermark}
     */
    this.updateWatermark = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['watermark'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateWatermark");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Watermark;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/watermark', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
