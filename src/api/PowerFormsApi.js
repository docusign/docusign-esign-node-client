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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/PowerForm', 'model/PowerFormSendersResponse', 'model/PowerFormsFormDataResponse', 'model/PowerFormsRequest', 'model/PowerFormsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/PowerForm'), require('../model/PowerFormSendersResponse'), require('../model/PowerFormsFormDataResponse'), require('../model/PowerFormsRequest'), require('../model/PowerFormsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.PowerFormsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.PowerForm, root.Docusign.PowerFormSendersResponse, root.Docusign.PowerFormsFormDataResponse, root.Docusign.PowerFormsRequest, root.Docusign.PowerFormsResponse);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, PowerForm, PowerFormSendersResponse, PowerFormsFormDataResponse, PowerFormsRequest, PowerFormsResponse) {
  'use strict';

  /**
   * PowerForms service.
   * @module api/PowerFormsApi
   */

  /**
   * Constructs a new PowerFormsApi. 
   * @alias module:api/PowerFormsApi
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
     * (Optional) Callback function to receive the result of the createPowerForm operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~createPowerFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerForm} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new PowerForm.
     * This method creates a new PowerForm.

You create a PowerForm from an existing DocuSign [template](/docs/esign-rest-api/reference/templates/templates/create/), based on the `templateId` in the request body.

 PowerForms that you create from a template are referred to as *web PowerForms*.

**Note:** The DocuSign Admin console also supports creating a PowerForm by uploading a PDF file that has active form fields (referred to as a *PDF PowerForm*). However, PDF PowerForms are deprecated and are not supported in the API.

**Note:** A PowerForm can have only one sender. (Because PowerForms are not necessarily sent by email, this user is also referred to as the PowerForm *initiator*.) If you need to associate multiple senders with a PowerForm, create multiple copies of the PowerForm by using the same template (one copy for each sender). By default, the sender is the PowerForm Administrator who creates the PowerForm.


### Signing modes

You can use one of the following signing modes for a PowerForm:

**`email`**

This mode verifies the recipient's identity by using email authentication before the recipient can sign a document. The recipient enters their email address on the landing page and then clicks **Begin Signing** to begin the signing process. The system then sends an email message with a validation code to the recipient. If the recipient does not provide a valid email address, they do not receive the email message containing the access code and are not able to open and sign the document.

Alternatively, you can make the process easier for signers by using email authentication only and omitting the access code. To do this, you append the `activateonly` flag to the PowerForm URL and set it to true by passing in the value `1`.  When the flag is active, the first recipient receives an email with a link that initiates the signing session without having to enter access code.

Example: `activateonly=1`

**`direct`**

This mode does not require any verification. After a recipient enters their email address on the landing page and clicks **Begin Signing,** a new browser tab opens and the recipient can immediately begin the signing process.

Because the `direct` signing mode does not verify the recipient's identity by using email authentication, we strongly recommend that you use this mode only when the PowerForm is accessible behind a secure portal where the recipient's identity is already authenticated, or where another form of authentication is specified for the recipient in the DocuSign template (for example, an access code, phone authentication, or ID check).

**Note:** In the account settings, `enablePowerFormDirect` must be **true** to use `direct` as the `signingMode`.

### Redirect URLs

You can control the URL to which signers are redirected after signing your PowerForm. However, the URL is specified elsewhere, outside of the PowerForm creation process. For details, see [How do I specify a URL to redirect to when a PowerForm is completed?](https://support.docusign.com/en/articles/How-do-I-specify-a-URL-to-redirect-to-when-a-Powerform-is-completed).

### More information

For more information about creating PowerForms, see [Create a PowerForm](https://support.docusign.com/en/guides/ndse-user-guide-create-a-powerform).


     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PowerForm} optsOrCallback.powerForm 
     * @param {module:api/PowerFormsApi~createPowerFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerForm}
     */
    this.createPowerForm = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['powerForm'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createPowerForm");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerForm;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deletePowerForm operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~deletePowerFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete a PowerForm.
     * This method deletes a PowerForm.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} powerFormId 
     * @param {module:api/PowerFormsApi~deletePowerFormCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePowerForm = function(accountId, powerFormId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deletePowerForm");
      }

      // verify the required parameter 'powerFormId' is set
      if (powerFormId === undefined || powerFormId === null) {
        throw new Error("Missing the required parameter 'powerFormId' when calling deletePowerForm");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'powerFormId': powerFormId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms/{powerFormId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deletePowerForms operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~deletePowerFormsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerFormsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes one or more PowerForms
     * This method deletes one or more PowerForms. The request body takes an array of PowerForm objects that are deleted based on the `powerFormId`.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PowerFormsRequest} optsOrCallback.powerFormsRequest 
     * @param {module:api/PowerFormsApi~deletePowerFormsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerFormsResponse}
     */
    this.deletePowerForms = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['powerFormsRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deletePowerForms");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerFormsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPowerForm operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~getPowerFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerForm} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a single PowerForm.
     * This method returns detailed information about a specific PowerForm.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} powerFormId 
     * @param {module:api/PowerFormsApi~getPowerFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerForm}
     */
    this.getPowerForm = function(accountId, powerFormId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPowerForm");
      }

      // verify the required parameter 'powerFormId' is set
      if (powerFormId === undefined || powerFormId === null) {
        throw new Error("Missing the required parameter 'powerFormId' when calling getPowerForm");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'powerFormId': powerFormId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerForm;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms/{powerFormId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPowerFormData operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~getPowerFormDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerFormsFormDataResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the form data associated with the usage of a PowerForm.
     * This method enables Powerform Administrators or the sender of a PowerForm to download the data that recipients have entered into a PowerForm.

You specify the format in which you want to retrieve the data in the `Accept` header. This header accepts the following values:


- `application/json`: JSON format
- `application/xml`: XML format
- `text/csv`: Comma-separated value (CSV) format

**Note:** Only PowerForm Administrators or the PowerForm Sender can download the data associated with a PowerForm.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} powerFormId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.dataLayout 
     * @param {String} optsOrCallback.fromDate 
     * @param {String} optsOrCallback.toDate 
     * @param {module:api/PowerFormsApi~getPowerFormDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerFormsFormDataResponse}
     */
    this.getPowerFormData = function(accountId, powerFormId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPowerFormData");
      }

      // verify the required parameter 'powerFormId' is set
      if (powerFormId === undefined || powerFormId === null) {
        throw new Error("Missing the required parameter 'powerFormId' when calling getPowerFormData");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'powerFormId': powerFormId
      };
      var queryParams = {
        'data_layout': optsOrCallback['dataLayout'],
        'from_date': optsOrCallback['fromDate'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerFormsFormDataResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms/{powerFormId}/form_data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listPowerFormSenders operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~listPowerFormSendersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerFormSendersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the list of PowerForms available to the user.
     * This method returns a list of users who have sent PowerForms.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/PowerFormsApi~listPowerFormSendersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerFormSendersResponse}
     */
    this.listPowerFormSenders = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPowerFormSenders");
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
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerFormSendersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms/senders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listPowerForms operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~listPowerFormsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerFormsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns the list of PowerForms available to the user.
     * This method returns a list of PowerForms that are available to the user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.fromDate 
     * @param {String} optsOrCallback.order 
     * @param {String} optsOrCallback.orderBy 
     * @param {String} optsOrCallback.searchFields 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.toDate 
     * @param {module:api/PowerFormsApi~listPowerFormsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerFormsResponse}
     */
    this.listPowerForms = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPowerForms");
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
        'from_date': optsOrCallback['fromDate'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'search_fields': optsOrCallback['searchFields'],
        'search_text': optsOrCallback['searchText'],
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerFormsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updatePowerForm operation. If none specified a Promise will be returned.
     * @callback module:api/PowerFormsApi~updatePowerFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PowerForm} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new PowerForm.
     * This method updates an existing PowerForm.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} powerFormId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PowerForm} optsOrCallback.powerForm 
     * @param {module:api/PowerFormsApi~updatePowerFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PowerForm}
     */
    this.updatePowerForm = function(accountId, powerFormId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['powerForm'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePowerForm");
      }

      // verify the required parameter 'powerFormId' is set
      if (powerFormId === undefined || powerFormId === null) {
        throw new Error("Missing the required parameter 'powerFormId' when calling updatePowerForm");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'powerFormId': powerFormId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PowerForm;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/powerforms/{powerFormId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));