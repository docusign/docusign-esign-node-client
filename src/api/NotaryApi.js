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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/Notary', 'model/NotaryJournalList', 'model/NotaryJurisdiction', 'model/NotaryJurisdictionList', 'model/NotaryResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/Notary'), require('../model/NotaryJournalList'), require('../model/NotaryJurisdiction'), require('../model/NotaryJurisdictionList'), require('../model/NotaryResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NotaryApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.Notary, root.Docusign.NotaryJournalList, root.Docusign.NotaryJurisdiction, root.Docusign.NotaryJurisdictionList, root.Docusign.NotaryResult);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, Notary, NotaryJournalList, NotaryJurisdiction, NotaryJurisdictionList, NotaryResult) {
  'use strict';

  /**
   * Notary service.
   * @module api/NotaryApi
   */

  /**
   * Constructs a new NotaryApi. 
   * @alias module:api/NotaryApi
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
     * (Optional) Callback function to receive the result of the createNotary operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~createNotaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add a notary to the system
     * Registers the current user as a notary.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Notary} optsOrCallback.notary 
     * @param {module:api/NotaryApi~createNotaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notary}
     */
    this.createNotary = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['notary'];

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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notary;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createNotaryJurisdictions operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~createNotaryJurisdictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJurisdiction} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Add a notary jurisdiction to the system
     * Creates a jurisdiction object.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/NotaryJurisdiction} optsOrCallback.notaryJurisdiction 
     * @param {module:api/NotaryApi~createNotaryJurisdictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJurisdiction}
     */
    this.createNotaryJurisdictions = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['notaryJurisdiction'];

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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotaryJurisdiction;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary/jurisdictions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteNotaryJurisdiction operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~deleteNotaryJurisdictionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete a notary jurisdiction a specified user.
     * Deletes the specified jurisdiction.
     * @param {String} jurisdictionId 
     * @param {module:api/NotaryApi~deleteNotaryJurisdictionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNotaryJurisdiction = function(jurisdictionId, callback) {
      var postBody = null;

      // verify the required parameter 'jurisdictionId' is set
      if (jurisdictionId === undefined || jurisdictionId === null) {
        throw new Error("Missing the required parameter 'jurisdictionId' when calling deleteNotaryJurisdiction");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'jurisdictionId': jurisdictionId
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
        '/v2.1/current_user/notary/jurisdictions/{jurisdictionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getNotary operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~getNotaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get notary settings for a user
     * Gets settings for a notary user.
The current user must be a notary.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeJurisdictions 
     * @param {module:api/NotaryApi~getNotaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryResult}
     */
    this.getNotary = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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
        'include_jurisdictions': optsOrCallback['includeJurisdictions']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotaryResult;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getNotaryJurisdiction operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~getNotaryJurisdictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJurisdiction} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get notary a jurisdiction for a user
     * Gets a jurisdiction object for the current user.  The following restrictions apply:

- The current user must be a notary.
- The `jurisdictionId` must be a jurisdiction that the notary is registered for.

     * @param {String} jurisdictionId 
     * @param {module:api/NotaryApi~getNotaryJurisdictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJurisdiction}
     */
    this.getNotaryJurisdiction = function(jurisdictionId, callback) {
      var postBody = null;

      // verify the required parameter 'jurisdictionId' is set
      if (jurisdictionId === undefined || jurisdictionId === null) {
        throw new Error("Missing the required parameter 'jurisdictionId' when calling getNotaryJurisdiction");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'jurisdictionId': jurisdictionId
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
      var returnType = NotaryJurisdiction;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary/jurisdictions/{jurisdictionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getNotaryJurisdictionSeal operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~getNotaryJurisdictionSealCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get notary seal for a jurisdiction
     * 
     * @param {String} jurisdictionId 
     * @param {module:api/NotaryApi~getNotaryJurisdictionSealCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getNotaryJurisdictionSeal = function(jurisdictionId, callback) {
      var postBody = null;

      // verify the required parameter 'jurisdictionId' is set
      if (jurisdictionId === undefined || jurisdictionId === null) {
        throw new Error("Missing the required parameter 'jurisdictionId' when calling getNotaryJurisdictionSeal");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'jurisdictionId': jurisdictionId
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
        '/v2.1/current_user/notary/jurisdictions/{jurisdictionId}/seal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getNotaryJurisdictions operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~getNotaryJurisdictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJurisdictionList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get notary jurisdictions for a user
     * Returns a list of jurisdictions that the notary is registered in.
The current user must be a notary.
     * @param {module:api/NotaryApi~getNotaryJurisdictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJurisdictionList}
     */
    this.getNotaryJurisdictions = function(callback) {
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotaryJurisdictionList;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary/jurisdictions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listNotaryJournals operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~listNotaryJournalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJournalList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get notary jurisdictions for a user
     * 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {module:api/NotaryApi~listNotaryJournalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJournalList}
     */
    this.listNotaryJournals = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

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
        'count': optsOrCallback['count'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotaryJournalList;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary/journals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateNotary operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~updateNotaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update a notary
     * Updates notary information for the current user.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Notary} optsOrCallback.notary 
     * @param {module:api/NotaryApi~updateNotaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notary}
     */
    this.updateNotary = function(optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['notary'];

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

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Notary;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateNotaryJurisdiction operation. If none specified a Promise will be returned.
     * @callback module:api/NotaryApi~updateNotaryJurisdictionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotaryJurisdiction} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update a notary jurisdiction
     * Updates the jurisdiction information about a notary.

The following restrictions apply:

- The current user must be a notary.
- The `jurisdictionId` path parameter must be a jurisdiction that the notary is registered for.
- The `jurisdictionId` path parameter must match the request body's `jurisdiction.jurisdictionId`.

The request body must have a full `jurisdiction` object for the jurisdiction property.
The best way to do this is to use `getNotaryJurisdiction` to obtain the current values and update the properties you want to change.

For example, assume `getNotaryJurisdiction` returns this:

```
{
    "jurisdiction": {
        "jurisdictionId": "15",
        "name": "Iowa",
        "county": "",
        "enabled": "true",
        "countyInSeal": "false",
        "commissionIdInSeal": "true",
        "stateNameInSeal": "true",
        "notaryPublicInSeal": "true",
        "allowSystemCreatedSeal": "true",
        "allowUserUploadedSeal": "false"
    },
    "commissionId": "123456",
    "commissionExpiration": "2020-08-31T07:00:00.0000000Z",
    "registeredName": "Bob Notary",
    "county": "Adams",
    "sealType": "system_created"
}
```

If you want to change the name of the notary from "Bob Notary" to "Robert Notary", your request body would be:

```
{
    "jurisdiction": {
        "jurisdictionId": "15",
        "name": "Iowa",
        "county": "",
        "enabled": "true",
        "countyInSeal": "false",
        "commissionIdInSeal": "true",
        "stateNameInSeal": "true",
        "notaryPublicInSeal": "true",
        "allowSystemCreatedSeal": "true",
        "allowUserUploadedSeal": "false"
    },
    "commissionId": "123456",
    "commissionExpiration": "2020-08-31T07:00:00.0000000Z",
    "registeredName": "Robert Notary",
    "county": "Adams",
    "sealType": "system_created"
}
```

     * @param {String} jurisdictionId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/NotaryJurisdiction} optsOrCallback.notaryJurisdiction 
     * @param {module:api/NotaryApi~updateNotaryJurisdictionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotaryJurisdiction}
     */
    this.updateNotaryJurisdiction = function(jurisdictionId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['notaryJurisdiction'];

      // verify the required parameter 'jurisdictionId' is set
      if (jurisdictionId === undefined || jurisdictionId === null) {
        throw new Error("Missing the required parameter 'jurisdictionId' when calling updateNotaryJurisdiction");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'jurisdictionId': jurisdictionId
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
      var returnType = NotaryJurisdiction;

      return this.apiClient.callApi(
        '/v2.1/current_user/notary/jurisdictions/{jurisdictionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));