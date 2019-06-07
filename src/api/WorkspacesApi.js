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
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/PageImages', 'model/Workspace', 'model/WorkspaceFolderContents', 'model/WorkspaceItem', 'model/WorkspaceItemList', 'model/WorkspaceList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/PageImages'), require('../model/Workspace'), require('../model/WorkspaceFolderContents'), require('../model/WorkspaceItem'), require('../model/WorkspaceItemList'), require('../model/WorkspaceList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspacesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.PageImages, root.Docusign.Workspace, root.Docusign.WorkspaceFolderContents, root.Docusign.WorkspaceItem, root.Docusign.WorkspaceItemList, root.Docusign.WorkspaceList);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, PageImages, Workspace, WorkspaceFolderContents, WorkspaceItem, WorkspaceItemList, WorkspaceList) {
  'use strict';

  /**
   * Workspaces service.
   * @module api/WorkspacesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new WorkspacesApi. 
   * @alias module:api/WorkspacesApi
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
     * (Optional)Callback function to receive the result of the createWorkspace operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Create a Workspace
     * Creates a new workspace.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Workspace} optsOrCallback.workspace 
     * @param {module:api/WorkspacesApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    this.createWorkspace = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['workspace'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createWorkspace");
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
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the createWorkspaceFile operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~createWorkspaceFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceItem} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a workspace file.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {module:api/WorkspacesApi~createWorkspaceFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceItem}
     */
    this.createWorkspaceFile = function(accountId, workspaceId, folderId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createWorkspaceFile");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling createWorkspaceFile");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling createWorkspaceFile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
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
      var returnType = WorkspaceItem;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteWorkspace operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete Workspace
     * Deletes an existing workspace (logically).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {module:api/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    this.deleteWorkspace = function(accountId, workspaceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteWorkspace");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspace");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the deleteWorkspaceFolderItems operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~deleteWorkspaceFolderItemsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes workspace one or more specific files/folders from the given folder or root.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/WorkspaceItemList} optsOrCallback.workspaceItemList 
     * @param {module:api/WorkspacesApi~deleteWorkspaceFolderItemsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkspaceFolderItems = function(accountId, workspaceId, folderId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['workspaceItemList'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteWorkspaceFolderItems");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspaceFolderItems");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling deleteWorkspaceFolderItems");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
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
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getWorkspace operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Workspace
     * Retrives properties about a workspace given a unique workspaceId. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {module:api/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    this.getWorkspace = function(accountId, workspaceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkspace");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getWorkspace");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the getWorkspaceFile operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~getWorkspaceFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Workspace File
     * Retrieves a workspace file (the binary).
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {String} fileId Specifies the room file ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.isDownload When set to **true**, the Content-Disposition header is set in the response. The value of the header provides the filename of the file. Default is **false**.
     * @param {String} optsOrCallback.pdfVersion When set to **true** the file returned as a PDF.
     * @param {module:api/WorkspacesApi~getWorkspaceFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWorkspaceFile = function(accountId, workspaceId, folderId, fileId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkspaceFile");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getWorkspaceFile");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling getWorkspaceFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw new Error("Missing the required parameter 'fileId' when calling getWorkspaceFile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
      };
      var queryParams = {
        'is_download': optsOrCallback['isDownload'],
        'pdf_version': optsOrCallback['pdfVersion']
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
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listWorkspaceFilePages operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~listWorkspaceFilePagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageImages} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * List File Pages
     * Retrieves a workspace file as rasterized pages.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {String} fileId Specifies the room file ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count The maximum number of results to be returned by this request.
     * @param {String} optsOrCallback.dpi Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
     * @param {String} optsOrCallback.maxHeight Sets the maximum height (in pixels) of the returned image.
     * @param {String} optsOrCallback.maxWidth Sets the maximum width (in pixels) of the returned image.
     * @param {String} optsOrCallback.startPosition The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.
     * @param {module:api/WorkspacesApi~listWorkspaceFilePagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageImages}
     */
    this.listWorkspaceFilePages = function(accountId, workspaceId, folderId, fileId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listWorkspaceFilePages");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling listWorkspaceFilePages");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling listWorkspaceFilePages");
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw new Error("Missing the required parameter 'fileId' when calling listWorkspaceFilePages");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'dpi': optsOrCallback['dpi'],
        'max_height': optsOrCallback['maxHeight'],
        'max_width': optsOrCallback['maxWidth'],
        'start_position': optsOrCallback['startPosition']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageImages;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listWorkspaceFolderItems operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~listWorkspaceFolderItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceFolderContents} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * List Workspace Folder Contents
     * Retrieves workspace folder contents, which can include sub folders and files.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count The maximum number of results to be returned by this request.
     * @param {String} optsOrCallback.includeFiles When set to **true**, file information is returned in the response along with folder information. The default is **false**.
     * @param {String} optsOrCallback.includeSubFolders When set to **true**, information about the sub-folders of the current folder is returned. The default is **false**.
     * @param {String} optsOrCallback.includeThumbnails When set to **true**, thumbnails are returned as part of the response.  The default is **false**.
     * @param {String} optsOrCallback.includeUserDetail Set to **true** to return extended details about the user. The default is **false**.
     * @param {String} optsOrCallback.startPosition The position within the total result set from which to start returning values.
     * @param {String} optsOrCallback.workspaceUserId If set, then the results are filtered to those associated with the specified userId.
     * @param {module:api/WorkspacesApi~listWorkspaceFolderItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceFolderContents}
     */
    this.listWorkspaceFolderItems = function(accountId, workspaceId, folderId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listWorkspaceFolderItems");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling listWorkspaceFolderItems");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling listWorkspaceFolderItems");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'include_files': optsOrCallback['includeFiles'],
        'include_sub_folders': optsOrCallback['includeSubFolders'],
        'include_thumbnails': optsOrCallback['includeThumbnails'],
        'include_user_detail': optsOrCallback['includeUserDetail'],
        'start_position': optsOrCallback['startPosition'],
        'workspace_user_id': optsOrCallback['workspaceUserId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WorkspaceFolderContents;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the listWorkspaces operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~listWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * List Workspaces
     * Gets information about the Workspaces that have been created.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/WorkspacesApi~listWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceList}
     */
    this.listWorkspaces = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listWorkspaces");
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
      var returnType = WorkspaceList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateWorkspace operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update Workspace
     * Updates information about a specific workspace.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/Workspace} optsOrCallback.workspace 
     * @param {module:api/WorkspacesApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    this.updateWorkspace = function(accountId, workspaceId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['workspace'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateWorkspace");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspace");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId
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
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional)Callback function to receive the result of the updateWorkspaceFile operation. If none specified a Promise will be returned.
     * @callback module:api/WorkspacesApi~updateWorkspaceFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceItem} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Update Workspace File Metadata
     * Updates workspace item metadata for one or more specific files/folders.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} workspaceId Specifies the workspace ID GUID.
     * @param {String} folderId The ID of the folder being accessed.
     * @param {String} fileId Specifies the room file ID GUID.
     * @param {module:api/WorkspacesApi~updateWorkspaceFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceItem}
     */
    this.updateWorkspaceFile = function(accountId, workspaceId, folderId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateWorkspaceFile");
      }

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspaceFile");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw new Error("Missing the required parameter 'folderId' when calling updateWorkspaceFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw new Error("Missing the required parameter 'fileId' when calling updateWorkspaceFile");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
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
      var returnType = WorkspaceItem;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
