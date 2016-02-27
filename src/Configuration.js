(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ApiClient);
  }
}(this, function(module, ApiClient) {
  'use strict';

  var Configuration = function Configuration() {
    /**
     * The API client to use for every API call.
     */
    this.defaultApiClient = new ApiClient();

    /**
     * The default HTTP headers to be included for all API calls.
     */
    // Add DocuSign Tracking Header
    this.defaultHeaders = { "X-DocuSign-SDK": "Node" };
  };
    
  /**
   * Get the default API client, which would be used when creating API
   * instances without providing an API client.
   */
  Configuration.prototype.getDefaultApiClient = function getDefaultApiClient() {
    return this.defaultApiClient;
   }

  /**
   * Sets the default API client.
   */  
  Configuration.prototype.setDefaultApiClient = function setDefaultApiClient(defaultApiClient) {
    this.defaultApiClient = defaultApiClient;
  }

  Configuration.default = new Configuration();

  return Configuration;
}));
