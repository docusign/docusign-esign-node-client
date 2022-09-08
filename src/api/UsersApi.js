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
	define(['Configuration', 'ApiClient', 'model/ContactGetResponse', 'model/ContactModRequest', 'model/ContactUpdateResponse', 'model/CustomSettingsInformation', 'model/ErrorDetails', 'model/NewUsersDefinition', 'model/NewUsersSummary', 'model/UserInfoList', 'model/UserInformation', 'model/UserInformationList', 'model/UserProfile', 'model/UserSettingsInformation', 'model/UserSignature', 'model/UserSignatureDefinition', 'model/UserSignaturesInformation', 'model/UsersResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ContactGetResponse'), require('../model/ContactModRequest'), require('../model/ContactUpdateResponse'), require('../model/CustomSettingsInformation'), require('../model/ErrorDetails'), require('../model/NewUsersDefinition'), require('../model/NewUsersSummary'), require('../model/UserInfoList'), require('../model/UserInformation'), require('../model/UserInformationList'), require('../model/UserProfile'), require('../model/UserSettingsInformation'), require('../model/UserSignature'), require('../model/UserSignatureDefinition'), require('../model/UserSignaturesInformation'), require('../model/UsersResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UsersApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ContactGetResponse, root.Docusign.ContactModRequest, root.Docusign.ContactUpdateResponse, root.Docusign.CustomSettingsInformation, root.Docusign.ErrorDetails, root.Docusign.NewUsersDefinition, root.Docusign.NewUsersSummary, root.Docusign.UserInfoList, root.Docusign.UserInformation, root.Docusign.UserInformationList, root.Docusign.UserProfile, root.Docusign.UserSettingsInformation, root.Docusign.UserSignature, root.Docusign.UserSignatureDefinition, root.Docusign.UserSignaturesInformation, root.Docusign.UsersResponse);
  }
}(this, function(Configuration, ApiClient, ContactGetResponse, ContactModRequest, ContactUpdateResponse, CustomSettingsInformation, ErrorDetails, NewUsersDefinition, NewUsersSummary, UserInfoList, UserInformation, UserInformationList, UserProfile, UserSettingsInformation, UserSignature, UserSignatureDefinition, UserSignaturesInformation, UsersResponse) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
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
     * (Optional) Callback function to receive the result of the _delete operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~_deleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes users account privileges.
     * This closes one or more user records in the account. Users are never deleted from an account, but closing a user prevents them from using account functions.

The response returns whether the API execution was successful (200 - OK) or  if it failed. The response contains a user structure similar to the request and includes the user changes. If an error occurred during the DELETE operation for any of the users, the response for that user contains an `errorDetails` node with `errorCode` and `message` properties.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback._delete 
     * @param {module:model/UserInfoList} optsOrCallback.userInfoList 
     * @param {module:api/UsersApi~_deleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersResponse}
     */
    this._delete = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userInfoList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
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
        'delete': optsOrCallback['_delete']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UsersResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the create operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewUsersSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds news user to the specified account.
     * Adds new users to your account. Set the `userSettings` property in the request to specify the actions the users can perform on the account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/NewUsersDefinition} optsOrCallback.newUsersDefinition 
     * @param {module:api/UsersApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewUsersSummary}
     */
    this.create = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['newUsersDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling create");
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
      var returnType = NewUsersSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createSignatures operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~createSignaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignaturesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds user Signature and initials images to a Signature.
     * Adds a user signature image and/or user initials image to the specified user. 

The userId property specified in the endpoint must match the authenticated user's userId and the user must be a member of the account.

The rules and processes associated with this are:

* If Content-Type is set to application/json, then the default behavior for creating a default signature image, based on the name and a DocuSign font, is used.
* If Content-Type is set to multipart/form-data, then the request must contain a first part with the user signature information, followed by parts that contain the images.

For each Image part, the Content-Disposition header has a "filename" value that is used to map to the `signatureName` and/or `signatureInitials` properties in the JSON to the image. 

For example: 
`Content-Disposition: file; filename="Ron Test20121127083900"`

If no matching image (by filename value) is found, then the image is not set. One, both, or neither of the signature and initials images can be set with this call.

The Content-Transfer-Encoding: base64 header, set in the header for the part containing the image, can be set to indicate that the images are formatted as base64 instead of as binary.

If successful, 200-OK is returned, and a JSON structure containing the signature information is provided, note that the signatureId can change with each API POST, PUT, or DELETE since the changes to the signature structure cause the current signature to be closed, and a new signature record to be created.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserSignaturesInformation} optsOrCallback.userSignaturesInformation 
     * @param {module:api/UsersApi~createSignaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignaturesInformation}
     */
    this.createSignatures = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userSignaturesInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createSignatures");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createSignatures");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = UserSignaturesInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteContactWithId operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteContactWithIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Replaces a particular contact associated with an account for the DocuSign service.
     * This method deletes a contact associated with an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} contactId The unique identifier of a person in the contacts address book.
     * @param {module:api/UsersApi~deleteContactWithIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactUpdateResponse}
     */
    this.deleteContactWithId = function(accountId, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteContactWithId");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling deleteContactWithId");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'contactId': contactId
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
      var returnType = ContactUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/contacts/{contactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteContacts operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete contacts associated with an account for the DocuSign service.
     * This method deletes multiple contacts associated with an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ContactModRequest} optsOrCallback.contactModRequest 
     * @param {module:api/UsersApi~deleteContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactUpdateResponse}
     */
    this.deleteContacts = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['contactModRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteContacts");
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
      var returnType = ContactUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/contacts', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteCustomSettings operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteCustomSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes custom user settings for a specified user.
     * Deletes the specified custom user settings for a single user.

###Deleting Grouped Custom User Settings###

If the custom user settings you want to delete are grouped, you must include the following information in the header, after Content-Type, in the request:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings.

If the extra header information is not included, only the custom user settings that were added without a group are deleted.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CustomSettingsInformation} optsOrCallback.customSettingsInformation 
     * @param {module:api/UsersApi~deleteCustomSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomSettingsInformation}
     */
    this.deleteCustomSettings = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCustomSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteCustomSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = CustomSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/custom_settings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteProfileImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteProfileImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the user profile image for the specified user.
     * Deletes the user profile image from the  specified user's profile.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~deleteProfileImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProfileImage = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteProfileImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteProfileImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2.1/accounts/{accountId}/users/{userId}/profile/image', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteSignature operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteSignatureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Removes removes signature information for the specified user.
     * Removes the signature information for the user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {module:api/UsersApi~deleteSignatureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSignature = function(accountId, userId, signatureId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteSignature");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteSignature");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling deleteSignature");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId
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
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteSignatureImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~deleteSignatureImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignature} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes the user initials image or the  user signature image for the specified user.
     * Deletes the specified initials image or signature image for the specified user.

The function deletes one or the other of the image types, to delete both the initials image and signature image you must call the endpoint twice.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {String} imageType One of **signature_image** or **initials_image**.
     * @param {module:api/UsersApi~deleteSignatureImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignature}
     */
    this.deleteSignatureImage = function(accountId, userId, signatureId, imageType, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteSignatureImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteSignatureImage");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling deleteSignatureImage");
      }

      // verify the required parameter 'imageType' is set
      if (imageType === undefined || imageType === null) {
        throw new Error("Missing the required parameter 'imageType' when calling deleteSignatureImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId,
        'imageType': imageType
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
      var returnType = UserSignature;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getContactById operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactGetResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a particular contact associated with the user's account.
     * This method returns one or more contacts
associated with a DocuSign account. You can also
retrieve contacts from connected [cloud storage][CloudStorage] providers by using the
`cloud_provider` query parameter. By default,
contacts are retrieved from the DocuSign account's
default address book.

To return a specific contact, use the `contactId`
query parameter. To return all contacts associated
with an account, omit this parameter.

[CloudStorage]: /docs/esign-rest-api/reference/cloudstorage/
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} contactId The unique identifier of a person in the contacts address book.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.cloudProvider 
     * @param {module:api/UsersApi~getContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactGetResponse}
     */
    this.getContactById = function(accountId, contactId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getContactById");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContactById");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'contactId': contactId
      };
      var queryParams = {
        'cloud_provider': optsOrCallback['cloudProvider']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ContactGetResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/contacts/{contactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getInformation operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the user information for a specified user.
     * Retrieves the user information for the specified user. 

To return additional user information that details the last login date, login status, and the user's password expiration date, set the optional `additional_info` query string parameter to **true**.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.additionalInfo When set to **true**, the full list of user information is returned for each user in the account.
     * @param {String} optsOrCallback.email 
     * @param {module:api/UsersApi~getInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformation}
     */
    this.getInformation = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getInformation");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getInformation");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'additional_info': optsOrCallback['additionalInfo'],
        'email': optsOrCallback['email']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getProfile operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfile} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the user profile for a specified user.
     * Retrieves the user profile information, the privacy settings and personal information (address, phone number, etc.) for the specified user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~getProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProfile}
     */
    this.getProfile = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getProfile");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = UserProfile;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getProfileImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getProfileImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the user profile image for the specified user.
     * Retrieves the user profile picture for the specified user. The image is returned in the same format as uploaded.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the specified account.

If successful, the response returns a 200 - OK and the user profile image.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.encoding 
     * @param {module:api/UsersApi~getProfileImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getProfileImage = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getProfileImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getProfileImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'encoding': optsOrCallback['encoding']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['image/gif'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/profile/image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getSettings operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the user account settings for a specified user.
     * Retrieves a list of the account settings and email notification information for the specified user.

The response returns the account setting name/value information and the email notification settings for the specified user. For more information about the different user settings, see the [ML:userSettings list].
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSettingsInformation}
     */
    this.getSettings = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = UserSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getSignature operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getSignatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignature} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the user signature information for the specified user.
     * Retrieves the structure of a single signature with a known signature name.

The userId specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {module:api/UsersApi~getSignatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignature}
     */
    this.getSignature = function(accountId, userId, signatureId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSignature");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getSignature");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling getSignature");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId
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
      var returnType = UserSignature;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getSignatureImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~getSignatureImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the user initials image or the  user signature image for the specified user.
     * Retrieves the specified initials image or signature image for the specified user. The image is returned in the same format as uploaded. In the request you can specify if the chrome (the added line and identifier around the initial image) is returned with the image.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".

###### Note: Older envelopes might only have chromed images. If getting the non-chromed image fails, try getting the chromed image.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {String} imageType One of **signature_image** or **initials_image**.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeChrome 
     * @param {module:api/UsersApi~getSignatureImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getSignatureImage = function(accountId, userId, signatureId, imageType, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getSignatureImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getSignatureImage");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling getSignatureImage");
      }

      // verify the required parameter 'imageType' is set
      if (imageType === undefined || imageType === null) {
        throw new Error("Missing the required parameter 'imageType' when calling getSignatureImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId,
        'imageType': imageType
      };
      var queryParams = {
        'include_chrome': optsOrCallback['includeChrome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['image/gif'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the list operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the list of users for the specified account.
     * Retrieves the list of users for the specified account.

The response returns the list of users for the account along with the information about the result set. If the `additional_info` query was added to the endpoint and set to **true**, the full user information is returned for each user
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.additionalInfo When set to **true**, the full list of user information is returned for each user in the account.
     * @param {String} optsOrCallback.alternateAdminsOnly 
     * @param {String} optsOrCallback.count Number of records to return. The number must be greater than 0 and less than or equal to 100. 
     * @param {String} optsOrCallback.domainUsersOnly 
     * @param {String} optsOrCallback.email 
     * @param {String} optsOrCallback.emailSubstring Filters the returned user records by the email address or a sub-string of email address.
     * @param {String} optsOrCallback.groupId Filters user records returned by one or more group Id's.
     * @param {String} optsOrCallback.includeUsersettingsForCsv 
     * @param {String} optsOrCallback.loginStatus 
     * @param {String} optsOrCallback.notGroupId 
     * @param {String} optsOrCallback.startPosition Starting value for the list. 
     * @param {String} optsOrCallback.status 
     * @param {String} optsOrCallback.userNameSubstring Filters the user records returned by the user name or a sub-string of user name.
     * @param {module:api/UsersApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationList}
     */
    this.list = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling list");
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
        'additional_info': optsOrCallback['additionalInfo'],
        'alternate_admins_only': optsOrCallback['alternateAdminsOnly'],
        'count': optsOrCallback['count'],
        'domain_users_only': optsOrCallback['domainUsersOnly'],
        'email': optsOrCallback['email'],
        'email_substring': optsOrCallback['emailSubstring'],
        'group_id': optsOrCallback['groupId'],
        'include_usersettings_for_csv': optsOrCallback['includeUsersettingsForCsv'],
        'login_status': optsOrCallback['loginStatus'],
        'not_group_id': optsOrCallback['notGroupId'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'user_name_substring': optsOrCallback['userNameSubstring']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserInformationList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listCustomSettings operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~listCustomSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves the custom user settings for a specified user.
     * Retrieves a list of custom user settings for a single user.

Custom settings provide a flexible way to store and retrieve custom user information that can be used in your own system.

###### Note: Custom user settings are not the same as user account settings.

###Getting Grouped Custom User Settings###

If the custom user settings you want to retrieve are grouped, you must include the following information in the header, after Content-Type, in the request:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings.

If the extra header information is not included, only the custom user settings that were added without a group are retrieved.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~listCustomSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomSettingsInformation}
     */
    this.listCustomSettings = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listCustomSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listCustomSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = CustomSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/custom_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listSignatures operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~listSignaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignaturesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves a list of user signature definitions for a specified user.
     * Retrieves the signature definitions for the specified user.

The userId parameter specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.stampType 
     * @param {module:api/UsersApi~listSignaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignaturesInformation}
     */
    this.listSignatures = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listSignatures");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listSignatures");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'stamp_type': optsOrCallback['stampType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserSignaturesInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the postContacts operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~postContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Imports multiple new contacts into the contacts collection from CSV, JSON, or XML (based on content type).
     * This method adds multiple contacts into a contacts list.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ContactModRequest} optsOrCallback.contactModRequest 
     * @param {module:api/UsersApi~postContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactUpdateResponse}
     */
    this.postContacts = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['contactModRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling postContacts");
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
      var returnType = ContactUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the putContacts operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~putContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Replaces contacts associated with an account for the DocuSign service.
     * This method updates one or more contacts associated with an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/ContactModRequest} optsOrCallback.contactModRequest 
     * @param {module:api/UsersApi~putContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactUpdateResponse}
     */
    this.putContacts = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['contactModRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling putContacts");
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
      var returnType = ContactUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/contacts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateCustomSettings operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateCustomSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomSettingsInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds or updates custom user settings for the specified user.
     * Adds or updates custom user settings for the specified user.

###### Note: Custom user settings are not the same as user account settings.

Custom settings provide a flexible way to store and retrieve custom user information that you can use in your own system.

**Important**: There is a limit on the size for all the custom user settings for a single user. The limit is 4,000 characters, which includes the XML and JSON structure for the settings.

### Grouping Custom User Settings ###

You can group custom user settings when adding them. Grouping allows you to retrieve settings that are in a specific group, instead of retrieving all the user custom settings.

To group custom user settings, add the following information in the header, after Content-Type:

`X-DocuSign-User-Settings-Key:group_name`

Where the `group_name` is your designated name for the group of customer user settings. Grouping is shown in the Example Request Body below.

When getting or deleting grouped custom user settings, you must include the extra header information.

Grouping custom user settings is not required and if the extra header information is not included, the custom user settings are added normally and can be retrieved or deleted without including the additional header.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/CustomSettingsInformation} optsOrCallback.customSettingsInformation 
     * @param {module:api/UsersApi~updateCustomSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomSettingsInformation}
     */
    this.updateCustomSettings = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['customSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateCustomSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCustomSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = CustomSettingsInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/custom_settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateProfile operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the user profile information for the specified user.
     * Updates the user's detail information, profile information, privacy settings, and personal information in the user ID card.

You can also change a user's name by changing the information in the `userDetails` property. When changing a user's name, you can either change the information in the `userName` property OR change the information in `firstName`, `middleName`, `lastName, suffixName`, and `title` properties. Changes to `firstName`, `middleName`, `lastName`, `suffixName`, and `title` properties take precedence over changes to the `userName` property.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserProfile} optsOrCallback.userProfile 
     * @param {module:api/UsersApi~updateProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProfile = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userProfile'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateProfile");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateProfile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
        '/v2.1/accounts/{accountId}/users/{userId}/profile', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateProfileImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateProfileImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the user profile image for a specified user.
     * Updates the user profile image by uploading an image to the user profile.

The supported image formats are: gif, png, jpeg, and bmp. The file must be less than 200K. For best viewing results, DocuSign recommends that the image is no more than 79 pixels wide and high.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {module:api/UsersApi~updateProfileImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProfileImage = function(accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateProfileImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateProfileImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['image/gif'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/profile/image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateSettings operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateSettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the user account settings for a specified user.
     * Updates the account settings list and email notification types for the specified user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.allowAllLanguages 
     * @param {module:model/UserSettingsInformation} optsOrCallback.userSettingsInformation 
     * @param {module:api/UsersApi~updateSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSettings = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userSettingsInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSettings");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateSettings");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'allow_all_languages': optsOrCallback['allowAllLanguages']
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
        '/v2.1/accounts/{accountId}/users/{userId}/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateSignature operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateSignatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignature} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the user signature for a specified user.
     * Creates, or updates, the signature font and initials for the specified user. When creating a signature, you use this resource to create the signature name and then add the signature and initials images into the signature.

###### Note: This will also create a default signature for the user when one does not exist.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.closeExistingSignature When set to **true**, closes the current signature.
     * @param {module:model/UserSignatureDefinition} optsOrCallback.userSignatureDefinition 
     * @param {module:api/UsersApi~updateSignatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignature}
     */
    this.updateSignature = function(accountId, userId, signatureId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userSignatureDefinition'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSignature");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateSignature");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling updateSignature");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId
      };
      var queryParams = {
        'close_existing_signature': optsOrCallback['closeExistingSignature']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserSignature;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateSignatureImage operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateSignatureImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignature} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the user signature image or user initials image for the specified user.
     * Updates the user signature image or user initials image for the specified user. The supported image formats for this file are: gif, png, jpeg, and bmp. The file must be less than 200K.

The userId property specified in the endpoint must match the authenticated user's user ID and the user must be a member of the account.

The `signatureId` parameter accepts a signature ID or a signature name. DocuSign recommends you use signature ID (`signatureId`), since some names contain characters that do not properly encode into a URL. If you use the user name, it is likely that the name includes spaces. In that case, URL encode the name before using it in the endpoint. 

For example encode "Bob Smith" as "Bob%20Smith".

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {String} signatureId The ID of the signature being accessed.
     * @param {String} imageType One of **signature_image** or **initials_image**.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.transparentPng 
     * @param {module:api/UsersApi~updateSignatureImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignature}
     */
    this.updateSignatureImage = function(accountId, userId, signatureId, imageType, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSignatureImage");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateSignatureImage");
      }

      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling updateSignatureImage");
      }

      // verify the required parameter 'imageType' is set
      if (imageType === undefined || imageType === null) {
        throw new Error("Missing the required parameter 'imageType' when calling updateSignatureImage");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId,
        'signatureId': signatureId,
        'imageType': imageType
      };
      var queryParams = {
        'transparent_png': optsOrCallback['transparentPng']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['image/gif'];
      var accepts = ['application/json'];
      var returnType = UserSignature;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}/{imageType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateSignatures operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateSignaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSignaturesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds/updates a user signature.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/UserSignaturesInformation} optsOrCallback.userSignaturesInformation 
     * @param {module:api/UsersApi~updateSignaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSignaturesInformation}
     */
    this.updateSignatures = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userSignaturesInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateSignatures");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateSignatures");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
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
      var returnType = UserSignaturesInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}/signatures', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateUser operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the specified user information.
     * To update user information for a specific user, submit a [Users](#Users) object with updated field values in the request body of this operation.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} userId The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.allowAllLanguages 
     * @param {module:model/UserInformation} optsOrCallback.userInformation 
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformation}
     */
    this.updateUser = function(accountId, userId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
        'allow_all_languages': optsOrCallback['allowAllLanguages']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateUsers operation. If none specified a Promise will be returned.
     * @callback module:api/UsersApi~updateUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInformationList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Change one or more user in the specified account.
     * This method updates the information about one or more account users.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.allowAllLanguages 
     * @param {module:model/UserInformationList} optsOrCallback.userInformationList 
     * @param {module:api/UsersApi~updateUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInformationList}
     */
    this.updateUsers = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['userInformationList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateUsers");
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
        'allow_all_languages': optsOrCallback['allowAllLanguages']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserInformationList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));