(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../Configuration', '../ApiClient', '../model/PermissionProfile', '../model/ErrorDetails', '../model/TabAccountSettings', '../model/UserInformationList', '../model/UserInformation', '../model/WorkspaceFolderContents', '../model/WorkspaceItemList', '../model/WorkspaceItem', '../model/PageImages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/PermissionProfile'), require('../model/ErrorDetails'), require('../model/TabAccountSettings'), require('../model/UserInformationList'), require('../model/UserInformation'), require('../model/WorkspaceFolderContents'), require('../model/WorkspaceItemList'), require('../model/WorkspaceItem'), require('../model/PageImages'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UncategorizedApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.PermissionProfile, root.Docusign.ErrorDetails, root.Docusign.TabAccountSettings, root.Docusign.UserInformationList, root.Docusign.UserInformation, root.Docusign.WorkspaceFolderContents, root.Docusign.WorkspaceItemList, root.Docusign.WorkspaceItem, root.Docusign.PageImages);
  }
}(this, function(Configuration, ApiClient, PermissionProfile, ErrorDetails, TabAccountSettings, UserInformationList, UserInformation, WorkspaceFolderContents, WorkspaceItemList, WorkspaceItem, PageImages) {
  'use strict';

  var UncategorizedApi = function UncategorizedApi(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient();

    var self = this;
    
    
    self.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    }
    
    self.getApiClient = function() {
      return this.apiClient;
    }
    
    
    /// <summary>
    /// Creates a new permission profile in the specified account. 
    /// </summary>
    self.PermissionProfilesPostPermissionProfilesOptions = function () {
      
      var include = null;
      
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Creates a new permission profile in the specified account.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {PermissionProfile} permissionProfile: 
     * @param {UncategorizedApi.PermissionProfilesPostPermissionProfilesOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: PermissionProfile
     */
    self.permissionProfilesPostPermissionProfiles = function(accountId, permissionProfile, options, callback) {
      var postBody = permissionProfile;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling permissionProfilesPostPermissionProfiles";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'include': options.include
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new PermissionProfile();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Returns a permissions profile in the specified account. 
    /// </summary>
    self.PermissionProfilesGetPermissionProfileOptions = function () {
      
      var include = null;
      
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Returns a permissions profile in the specified account.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId: 
     * @param {UncategorizedApi.PermissionProfilesGetPermissionProfileOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: PermissionProfile
     */
    self.permissionProfilesGetPermissionProfile = function(accountId, permissionProfileId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling permissionProfilesGetPermissionProfile";
      }
      
      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == null) {
        throw "Missing the required parameter 'permissionProfileId' when calling permissionProfilesGetPermissionProfile";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'include': options.include
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new PermissionProfile();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Updates a permission profile within the specified account. 
    /// </summary>
    self.PermissionProfilesPutPermissionProfilesOptions = function () {
      
      var include = null;
      
      
      this.setInclude = function(include) {
        this.include = include;
      }
	
      this.getInclude = function() {
        return this.include;
      }
      
    }
    
    
    /**
     * Updates a permission profile within the specified account.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId: 
     * @param {PermissionProfile} permissionProfile: 
     * @param {UncategorizedApi.PermissionProfilesPutPermissionProfilesOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: PermissionProfile
     */
    self.permissionProfilesPutPermissionProfiles = function(accountId, permissionProfileId, permissionProfile, options, callback) {
      var postBody = permissionProfile;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling permissionProfilesPutPermissionProfiles";
      }
      
      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == null) {
        throw "Missing the required parameter 'permissionProfileId' when calling permissionProfilesPutPermissionProfiles";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'include': options.include
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new PermissionProfile();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes a permissions profile within the specified account.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} permissionProfileId: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.permissionProfilesDeletePermissionProfiles = function(accountId, permissionProfileId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling permissionProfilesDeletePermissionProfiles";
      }
      
      // verify the required parameter 'permissionProfileId' is set
      if (permissionProfileId == null) {
        throw "Missing the required parameter 'permissionProfileId' when calling permissionProfilesDeletePermissionProfiles";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'permissionProfileId': permissionProfileId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/permission_profiles/{permissionProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Returns tab settings list for specified account
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabAccountSettings
     */
    self.getTabSettings = function(accountId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getTabSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TabAccountSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/tabs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Modifies tab settings for specified account
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {TabAccountSettings} tabAccountSettings: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: TabAccountSettings
     */
    self.putSettings = function(accountId, tabAccountSettings, callback) {
      var postBody = tabAccountSettings;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling putSettings";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new TabAccountSettings();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/settings/tabs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Change one or more user in the specified account.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {UserInformationList} userInformationList: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: UserInformationList
     */
    self.putUsers = function(accountId, userInformationList, callback) {
      var postBody = userInformationList;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling putUsers";
      }
      

      
      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new UserInformationList();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Updates the specified user information.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} userId: The user ID of the user being accessed. Generally this is the user ID of the authenticated user, but if the authenticated user is an Admin on the account, this may be another user the Admin user is accessing.
     * @param {UserInformation} userInformation: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: UserInformation
     */
    self.putUser = function(accountId, userId, userInformation, callback) {
      var postBody = userInformation;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling putUser";
      }
      
      // verify the required parameter 'userId' is set
      if (userId == null) {
        throw "Missing the required parameter 'userId' when calling putUser";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new UserInformation();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// List Workspace Folder Contents Retrieves workspace folder contents, which can include sub folders and files.
    /// </summary>
    self.GetWorkspaceFolderOptions = function () {
      
      var includeThumbnails = null;
      
      var startPosition = null;
      
      var count = null;
      
      var includeSubFolders = null;
      
      var workspaceUserId = null;
      
      var includeFiles = null;
      
      var includeUserDetail = null;
      
      
      /*
       * When set to **true**, thumbnails are returned as part of the response.  The default is **false**.
       */
      this.setIncludeThumbnails = function(includeThumbnails) {
        this.includeThumbnails = includeThumbnails;
      }
	
      this.getIncludeThumbnails = function() {
        return this.includeThumbnails;
      }
      
      /*
       * The position within the total result set from which to start returning values.
       */
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      /*
       * The maximum number of results to be returned by this request.
       */
      this.setCount = function(count) {
        this.count = count;
      }
	
      this.getCount = function() {
        return this.count;
      }
      
      /*
       * When set to **true**, information about the sub-folders of the current folder is returned. The default is **false**.
       */
      this.setIncludeSubFolders = function(includeSubFolders) {
        this.includeSubFolders = includeSubFolders;
      }
	
      this.getIncludeSubFolders = function() {
        return this.includeSubFolders;
      }
      
      /*
       * If set, then the results are filtered to those associated with the specified userId.
       */
      this.setWorkspaceUserId = function(workspaceUserId) {
        this.workspaceUserId = workspaceUserId;
      }
	
      this.getWorkspaceUserId = function() {
        return this.workspaceUserId;
      }
      
      /*
       * When set to **true**, file information is returned in the response along with folder information. The default is **false**.
       */
      this.setIncludeFiles = function(includeFiles) {
        this.includeFiles = includeFiles;
      }
	
      this.getIncludeFiles = function() {
        return this.includeFiles;
      }
      
      /*
       * Set to **true** to return extended details about the user. The default is **false**.
       */
      this.setIncludeUserDetail = function(includeUserDetail) {
        this.includeUserDetail = includeUserDetail;
      }
	
      this.getIncludeUserDetail = function() {
        return this.includeUserDetail;
      }
      
    }
    
    
    /**
     * List Workspace Folder Contents
     * Retrieves workspace folder contents, which can include sub folders and files.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {UncategorizedApi.GetWorkspaceFolderOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: WorkspaceFolderContents
     */
    self.getWorkspaceFolder = function(accountId, workspaceId, folderId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getWorkspaceFolder";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling getWorkspaceFolder";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getWorkspaceFolder";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'include_thumbnails': options.includeThumbnails,
          'start_position': options.startPosition,
          'count': options.count,
          'include_sub_folders': options.includeSubFolders,
          'workspace_user_id': options.workspaceUserId,
          'include_files': options.includeFiles,
          'include_user_detail': options.includeUserDetail
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new WorkspaceFolderContents();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Deletes workspace one or more specific files/folders from the given folder or root.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {WorkspaceItemList} workspaceItemList: 
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.deleteWorkspaceItems = function(accountId, workspaceId, folderId, workspaceItemList, callback) {
      var postBody = workspaceItemList;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling deleteWorkspaceItems";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteWorkspaceItems";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling deleteWorkspaceItems";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Creates a workspace file.
     * 
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: WorkspaceItem
     */
    self.postWorkspaceFiles = function(accountId, workspaceId, folderId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling postWorkspaceFiles";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling postWorkspaceFiles";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling postWorkspaceFiles";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new WorkspaceItem();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// Get Workspace File Retrieves a workspace file (the binary).
    /// </summary>
    self.GetWorkspaceFileOptions = function () {
      
      var isDownload = null;
      
      var pdfVersion = null;
      
      
      /*
       * When set to **true**, the Content-Disposition header is set in the response. The value of the header provides the filename of the file. Default is **false**.
       */
      this.setIsDownload = function(isDownload) {
        this.isDownload = isDownload;
      }
	
      this.getIsDownload = function() {
        return this.isDownload;
      }
      
      /*
       * When set to **true** the file returned as a PDF.
       */
      this.setPdfVersion = function(pdfVersion) {
        this.pdfVersion = pdfVersion;
      }
	
      this.getPdfVersion = function() {
        return this.pdfVersion;
      }
      
    }
    
    
    /**
     * Get Workspace File
     * Retrieves a workspace file (the binary).
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {String} fileId: Specifies the room file ID GUID.
     * @param {UncategorizedApi.GetWorkspaceFileOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response

     */
    self.getWorkspaceFile = function(accountId, workspaceId, folderId, fileId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getWorkspaceFile";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling getWorkspaceFile";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getWorkspaceFile";
      }
      
      // verify the required parameter 'fileId' is set
      if (fileId == null) {
        throw "Missing the required parameter 'fileId' when calling getWorkspaceFile";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'is_download': options.isDownload,
          'pdf_version': options.pdfVersion
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          callback(error, data, response);
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    
    /**
     * Update Workspace File Metadata
     * Updates workspace item metadata for one or more specific files/folders.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {String} fileId: Specifies the room file ID GUID.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: WorkspaceItem
     */
    self.putWorkspaceFile = function(accountId, workspaceId, folderId, fileId, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling putWorkspaceFile";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling putWorkspaceFile";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling putWorkspaceFile";
      }
      
      // verify the required parameter 'fileId' is set
      if (fileId == null) {
        throw "Missing the required parameter 'fileId' when calling putWorkspaceFile";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
      };
      var queryParams = {};
      
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new WorkspaceItem();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
    /// <summary>
    /// List File Pages Retrieves a workspace file as rasterized pages.
    /// </summary>
    self.GetWorkspaceFilePagesOptions = function () {
      
      var dpi = null;
      
      var maxHeight = null;
      
      var startPosition = null;
      
      var maxWidth = null;
      
      var count = null;
      
      
      /*
       * Number of dots per inch for the resulting image. The default if not used is 94. The range is 1-310.
       */
      this.setDpi = function(dpi) {
        this.dpi = dpi;
      }
	
      this.getDpi = function() {
        return this.dpi;
      }
      
      /*
       * Sets the maximum height (in pixels) of the returned image.
       */
      this.setMaxHeight = function(maxHeight) {
        this.maxHeight = maxHeight;
      }
	
      this.getMaxHeight = function() {
        return this.maxHeight;
      }
      
      /*
       * The position within the total result set from which to start returning values. The value **thumbnail** may be used to return the page image.
       */
      this.setStartPosition = function(startPosition) {
        this.startPosition = startPosition;
      }
	
      this.getStartPosition = function() {
        return this.startPosition;
      }
      
      /*
       * Sets the maximum width (in pixels) of the returned image.
       */
      this.setMaxWidth = function(maxWidth) {
        this.maxWidth = maxWidth;
      }
	
      this.getMaxWidth = function() {
        return this.maxWidth;
      }
      
      /*
       * The maximum number of results to be returned by this request.
       */
      this.setCount = function(count) {
        this.count = count;
      }
	
      this.getCount = function() {
        return this.count;
      }
      
    }
    
    
    /**
     * List File Pages
     * Retrieves a workspace file as rasterized pages.
     * @param {String} accountId: The external account number (int) or account ID Guid.
     * @param {String} workspaceId: Specifies the workspace ID GUID.
     * @param {String} folderId: The ID of the folder being accessed.
     * @param {String} fileId: Specifies the room file ID GUID.
     * @param {UncategorizedApi.GetWorkspaceFilePagesOptions} options: Options for modifying the method behavior.
     * @param {function} callback: the callback function, accepting three arguments: error, data, response
     *   data is of type: PageImages
     */
    self.getWorkspaceFilePages = function(accountId, workspaceId, folderId, fileId, options, callback) {
      var postBody = null;
      
      // verify the required parameter 'accountId' is set
      if (accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getWorkspaceFilePages";
      }
      
      // verify the required parameter 'workspaceId' is set
      if (workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling getWorkspaceFilePages";
      }
      
      // verify the required parameter 'folderId' is set
      if (folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getWorkspaceFilePages";
      }
      
      // verify the required parameter 'fileId' is set
      if (fileId == null) {
        throw "Missing the required parameter 'fileId' when calling getWorkspaceFilePages";
      }
      

      
      var pathParams = {
        'accountId': accountId,
        'workspaceId': workspaceId,
        'folderId': folderId,
        'fileId': fileId
      };
      var queryParams = {};
      if (options != null) {
        queryParams = {
          'dpi': options.dpi,
          'max_height': options.maxHeight,
          'start_position': options.startPosition,
          'max_width': options.maxWidth,
          'count': options.count
        };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = ['application/json'];

      var handleResponse = null;
      if (callback) {
        handleResponse = function(error, data, response) {
          if (!error && data) {
            var result = new PageImages();
            result.constructFromObject(data);
            callback(error, result, response);
          } else {
            callback(error, data, response);
          }
        };
      }

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/workspaces/{workspaceId}/folders/{folderId}/files/{fileId}/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, handleResponse
      );
      
    }
    
    
  };

  return UncategorizedApi;
}));
