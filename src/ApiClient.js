/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["axios"], factory);
    define(["@devhigley/parse-proxy"], factory);
  } else if (typeof module === "object" && module.exports) {    
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("axios"),
      require("@devhigley/parse-proxy")
    );
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ApiClient = factory(root.axios, root.parseProxy, opts);
  }
})(this, function (axios, parseProxy, opts) {
  "use strict";

  /**
    * The default HTTP headers to be included for all API calls.
    * @type {Array.<String>}
    * @default {}
    */
  var SCOPE_SIGNATURE = "signature";
  var SCOPE_EXTENDED = "extended";
  var SCOPE_IMPERSONATION = "impersonation";

  var removeNulls = function(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (typeof obj[k] === "object") removeNulls(obj[k]);
      if (isArray && obj.length === k) removeNulls(obj);
      if (obj[k] instanceof Array && obj[k].length === 0) delete obj[k];
    }
    return obj;
  };

  var generateAndSignJWTAssertion = function (
    clientId,
    scopes,
    privateKey,
    oAuthBasePath,
    expiresIn,
    userId
  ) {
    if(typeof expiresIn !== "number" || expiresIn < 0)
      throw new Error("Invalid expires in param detected");

    var MILLESECONDS_PER_SECOND = 1000,
      JWT_SIGNING_ALGO = "RS256",
      now = Math.floor(Date.now() / MILLESECONDS_PER_SECOND),
      later = now + expiresIn,
      jwt = require("jsonwebtoken"),
      parsedScopes = Array.isArray(scopes) ? scopes.join(" ") : scopes;

    var jwtPayload = {
      iss: clientId,
      aud: oAuthBasePath,
      iat: now,
      exp: later,
      scope: parsedScopes,
    };

    /** optional parameters  **/
    if(userId) {
      jwtPayload.sub = userId;
    }
    return jwt.sign(jwtPayload, privateKey, { algorithm: JWT_SIGNING_ALGO });
  };

  var sendJWTTokenRequest = function (
    assertion,
    oAuthBasePath,
    proxy,
    defaultHeaders,
    callback
  ) {
    const requestConfig = {
      baseURL: `https://${oAuthBasePath}`,
      method: "post",
      url: "/oauth/token",
      headers: {
        ...defaultHeaders,
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
      timeout: exports.prototype.timeout,
      data: {
        assertion: assertion,
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      },
    };

    if (proxy) {
      const proxyObj = parseProxy(proxy);
      requestConfig.proxy = proxyObj[0];
    }

    const oauthRequest = axios.request(requestConfig);

    if (!callback) {
      return new Promise(function (resolve, reject) {
        oauthRequest
          .then((response) => {
            const updatedObj = generateResponseObjectWithBodyProp(response);
            resolve(updatedObj);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      oauthRequest
        .then((response) => {
          const updatedObj = generateResponseObjectWithBodyProp(response);
          callback(null, updatedObj);
        })
        .catch((err) => {
          callback(err);
        });
    }
  };

  const generateResponseObjectWithBodyProp = (respObj) => {
    const { data: body, ...rest } = respObj;
    const updatedObj = { body, ...rest };
    return updatedObj;
  };

  var deriveOAuthBasePathFromRestBasePath = function(basePath) {
    if (basePath == null) {
      return exports.prototype.OAuth.BasePath.PRODUCTION;
    }
    if (basePath.includes("https://stage")) {
      return exports.prototype.OAuth.BasePath.STAGE;
    }
    if (basePath.includes("https://demo")) {
      return exports.prototype.OAuth.BasePath.DEMO;
    }
    if (basePath.includes("https://www.docusign")) {
      return exports.prototype.OAuth.BasePath.PRODUCTION;
    }
    return exports.prototype.OAuth.BasePath.PRODUCTION;
  };

  const encodeBase64 = (str) => {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(str).toString('base64');
    } else {
      return btoa(unescape(encodeURIComponent(str)));
    }
  }

  /**
   * @module ApiClient
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function(opts) {
    var defaults = {
      basePath: "https://www.docusign.net/restapi".replace(/\/+$/, ""),
      oAuthBasePath: require("./OAuth").BasePath.PRODUCTION,
    };

    this.defaultHeaders = {
      "X-DocuSign-SDK": "Node",
      "Node-Ver": process.version,
      "User-Agent": `Swagger-Codegen/v2.1/8.0.1/node/${process.version}`,
    };  

    opts = {...defaults, ...opts};
    opts.oAuthBasePath = deriveOAuthBasePathFromRestBasePath(opts.basePath);

    /**
     * The full URI for the desired proxy.
     * A complete list of supported proxies can be found here: https://www.npmjs.com/package/proxy-agent.     
     * @type {String}
     * @default 
     */
    this.proxy = opts.proxy;

    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://www.docusign.net/restapi
     */
    this.basePath = opts.basePath;

    /**
     * The base URL against which to resolve every authentication API call's (relative) path.
     * @type {String}
     * @default https://www.docusign.net/restapi
     */
    this.oAuthBasePath = opts.oAuthBasePath;

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'docusignAccessCode': {type: "oauth2"}
    };

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;
  };

    /**
   * Gets the API endpoint base URL.
   */
    exports.prototype.getBasePath = function getBasePath() {
    return this.basePath;
  };

  /**
   * Sets the API endpoint base URL.
   */
  exports.prototype.setBasePath = function setBasePath(basePath) {
    this.basePath = basePath;
    this.oAuthBasePath = deriveOAuthBasePathFromRestBasePath(basePath);
  };

    /**
   * Gets the authentication server endpoint base URL.
   */
    exports.prototype.getOAuthBasePath = function getOAuthBasePath() {
    return this.oAuthBasePath;
  };

  /**
   * Sets the authentication server endpoint base URL.
   */
  exports.prototype.setOAuthBasePath = function setOAuthBasePath(
    oAuthBasePath
  ) {
    this.oAuthBasePath = oAuthBasePath;
  };

  /**
   * Adds request headers to the API client. Useful for Authentication.
   */
  exports.prototype.addDefaultHeader = function addDefaultHeader(
    header,
    value
  ) {
    this.defaultHeaders[header] = value;
  };

    /**
   * Sets default JWT authorization token for APIs.
   */
    exports.prototype.setJWTToken = function setJWTToken(token) {
    if(!token){
      throw new Error("Missing the required parameter 'token' when calling setJWTToken.")
    }
    this.defaultHeaders["Authorization"] = `Bearer ${token}`;
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return "";
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = "/" + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(
      contentType != null && contentType.match(/^application\/json(;.*)?$/i)
    );
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (
      typeof window === "undefined" &&
        typeof require === "function" &&
        require("fs") &&
        param instanceof require("fs").ReadStream
        ) {
      return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === "function" && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === "function" && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === "function" && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (
        params.hasOwnProperty(key) &&
        params[key] != undefined &&
        params[key] != null
      ) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ",",
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: " ",
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: "\t",
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: "|",
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: "multi",
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(
    param,
    collectionFormat
  ) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case "csv":
        return param.map(this.paramToString).join(",");
      case "ssv":
        return param.map(this.paramToString).join(" ");
      case "tsv":
        return param.map(this.paramToString).join("\t");
      case "pipes":
        return param.map(this.paramToString).join("|");
      case "multi":
        // return the array directly as axios will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error("Unknown collection format: " + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} requestConfig The request configuration object used for <code>Axios</code> request.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(requestConfig, authNames) {
    var _this = this;
    authNames.forEach(function (authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case "basic":
          if (auth.username || auth.password) {
            requestConfig.auth = {
              username: auth.username || "",
              password: auth.password || "",
            };
          }
          break;
        case "apiKey":
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + " " + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth["in"] === "header") {
              requestConfig.headers = {
                ...requestConfig.headers,
                ...data,
              };
            } else {
              requestConfig.params = { ...requestConfig.params, ...data };
            }
          }
          break;
        case "oauth2":
          if (auth.accessToken) {
            requestConfig.headers = {
              ...requestConfig.headers,
              Authorization: "Bearer " + auth.accessToken,
            };
          }
          break;
        default:
          throw new Error("Unknown authentication type: " + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response An Axios response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null || response.status == 204) {
      return null;
    }
    // Rely on Axios Response Schema.
    // See https://axios-http.com/docs/res_schema
    var data = response.data;
    return exports.convertToType(data, returnType);
  };

  exports.prototype.hasBufferFormParam = function(formParams) {
    if (!formParams) {
      return false;
    }
    return Object.keys(formParams).some(function(key) {
      return formParams[key] instanceof Buffer;
    });
  };

  /**
   * (Optional)Callback function to receive the result of the <operationId> operation. If none specified a Promise will be returned.
   * @callback module:ApiClient~callApiCallback
   * @param {String} error Error message, if any.
   * @param data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
   * constructor for a complex type.
   * @param {module:ApiClient~callApiCallback} callback The callback function. If this is left undefined, this method will return a promise instead.
   * @returns {Object} The axios request object if a callback is specified, else {Promise} A {@link https://www.promisejs.org/|Promise} object.
   */
  exports.prototype.callApi = function callApi(
    path,
    httpMethod,
    pathParams,
    queryParams,
    headerParams,
    formParams,
    bodyParam,
    authNames,
    contentTypes,
    accepts,
    returnType,
    callback
  ) {
    var _this = this;
    var url = this.buildUrl(path, pathParams);
    
    const requestConfig = {
      method: httpMethod,
      url,
      timeout: this.timeout,
      paramsSerializer: {
        indexes: null,
      },
    };

    if (this.proxy) {
      const proxyObj = parseProxy(this.proxy);
      requestConfig.proxy = proxyObj[0];
    }

    var _formParams = this.normalizeParams(formParams);
    var body =
      httpMethod.toUpperCase() === "GET" && !bodyParam
        ? undefined
        : bodyParam || {};

    // apply authentications
    this.applyAuthToRequest(requestConfig, authNames);

    // set query parameters
    if (httpMethod.toUpperCase() === "GET" && this.cache === false) {
      queryParams["_"] = new Date().getTime();
    }
    const _queryParams = this.normalizeParams(queryParams);
    requestConfig.params = { ...requestConfig.params, ..._queryParams };

    // set header parameters
    const _headerParams = this.normalizeParams(headerParams);
    requestConfig.headers = {
      ...requestConfig.headers,
      ...this.defaultHeaders,
      ..._headerParams,
    };

    // set request timeout
    requestConfig.timeout = this.timeout;

    var contentType = this.jsonPreferredMime(contentTypes);

    if (contentType) {
      if (contentType != "multipart/form-data") {
        requestConfig.headers = {
          ...requestConfig.headers,
          "Content-Type": contentType,
        };
      }
    } else if (!requestConfig.headers["Content-Type"]) {
      requestConfig.headers = {
        ...requestConfig.headers,
        "Content-Type": "application/json",
      };
    }

    if (contentType === "application/x-www-form-urlencoded") {
      //automatic serialization happens with axios. ref: https://axios-http.com/docs/urlencoded
      requestConfig.data = this.normalizeParams(formParams);
    } else if (contentType == "multipart/form-data") {
      if (this.hasBufferFormParam(_formParams)) {
        requestConfig.headers = {
          ...requestConfig.headers,
          "Content-Disposition": 'form-data; name="file"; filename="file.xml"',
          "Content-Type": "application/octet-stream",
        };
        var formAttachmentKey = Object.keys(formParams).find(function (key) {
          return _this.isFileParam(_formParams[key]);
        });
        requestConfig.data = removeNulls(formParams[formAttachmentKey]);
      } else {
        //automatic serialization for formData is supported in axios as of 0.27.0. ref: https://axios-http.com/docs/multipart
        requestConfig.headers = {
          ...requestConfig.headers,
          "Content-Type": "multipart/form-data",
        };
        var _formParams = this.normalizeParams(formParams);
        requestConfig.data = _formParams;
      }
    } else if (body) {
      requestConfig.data = removeNulls(body);
    }

    var accept = this.jsonPreferredMime(accepts);

    if (accept) {
      requestConfig.headers = { ...requestConfig.headers, Accept: accept };
    }

    if (requestConfig.headers["Accept"] === "application/pdf") {
      requestConfig.responseType = "stream";
    }

    const request = axios.request(requestConfig);

      var data = null;
    if (!callback) {
      return new Promise(function (resolve, reject) {
        request
          .then((response) => {
            try {
              let streamData = [];
              if (requestConfig.headers["Accept"] === "application/pdf") {
                response.data.on("data", (chunk) => {
                  streamData.push(requestConfig.headers["Content-Transfer-Encoding"] === "base64" ? chunk.toString() : chunk);
                });
                response.data.on("end", () => {
                  let res = '';
                  if(!!streamData.length && streamData[0] instanceof Uint8Array) {
                    res = Buffer.concat(streamData);
                  } else {
                    res = streamData.join('');
                  }
                  resolve(res);
                });
              } else {
                data = _this.deserialize(response, returnType);
                resolve(data);
              }
            } catch (err) {
              reject(err);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      request
        .then((response) => {
          try {
            let streamData = [];
            if (requestConfig.headers["Accept"] === "application/pdf") {
              response.data.on("data", (chunk) => {
                streamData.push(requestConfig.headers["Content-Transfer-Encoding"] === "base64" ? chunk.toString() : chunk);
              });
              response.data.on("end", () => {
                let res = '';
                if(!!streamData.length && streamData[0] instanceof Uint8Array) {
                  res = Buffer.concat(streamData);
                } else {
                  res = streamData.join('');
                }
                callback(null, res, response);
              });
            } else {
              data = _this.deserialize(response, returnType);
              callback(null, data, response);
            }
          } catch (err) {
            callback(err);
          }
        })
        .catch((err) => {
          callback(err);
        });
      return request;
    }
  };

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, " "));
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type.
   */
  exports.convertToType = function(data, type) {
    switch (type) {
      case "Boolean":
        return Boolean(data);
      case "Integer":
        return parseInt(data, 10);
      case "Number":
        return parseFloat(data);
      case "String":
        return String(data);
      case "Date":
        return this.parseDate(String(data));
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === "function") {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === "object") {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
  exports.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = exports.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = exports.convertToType(data[k], itemType);
      }
    }
  };

  /**
   * Helper method to configure the OAuth accessCode/implicit flow parameters
   * @param clientId OAuth2 client ID: Identifies the client making the request.
   * Client applications may be scoped to a limited set of system access.
   * @param scopes the list of requested scopes.
   * @param redirectUri this determines where to deliver the response containing the authorization code or access token.
   * @param responseType determines the response type of the authorization request.
   * <br><i>Note</i>: these response types are mutually exclusive for a client application.
   * A public/native client application may only request a response type of "token";
   * a private/trusted client application may only request a response type of "code".
   * @param state Allows for arbitrary state that may be useful to your application.
   * The value in this parameter will be round-tripped along with the response so you can make sure it didn't change.
   */
  exports.prototype.getAuthorizationUri = function (
    clientId,
    scopes,
    redirectUri,
    responseType,
    state
  ) {
    if (!clientId) throw new Error("Error clientId is required");
    if (!scopes) throw new Error("Error scopes is required");
    if (!scopes) throw new Error("Error scopes is required");
    if (!this.hasNoInvalidScopes(scopes))
      throw new Error("Error invalid scope detected");
    if (!redirectUri) throw new Error("Error redirectUri is required");
    if (!responseType) throw new Error("Error responseType is required");

    var formattedScopes = scopes.join(encodeURI(" "));
    return (
      "https://" +
      this.getOAuthBasePath() +
      "/oauth/auth" +
      "?response_type=" +
      responseType +
      "&scope=" +
      formattedScopes +
      "&client_id=" +
      clientId +
      "&redirect_uri=" +
      encodeURIComponent(redirectUri) +
      (state ? "&state=" + encodeURIComponent(state) : "")
    );
  };

  /**
   * @param clientId OAuth2 client ID: Identifies the client making the request.
   * Client applications may be scoped to a limited set of system access.
   * @param clientSecret the secret key you generated when you set up the integration in Docusign Admin console.
   * @param code The authorization code that you received from the <i>getAuthorizationUri</i> callback.
   * @return OAuthToken object.xx
   */
  exports.prototype.generateAccessToken = function (
    clientId,
    clientSecret,
    code,
    callback
  ) {
    if (!clientId) throw new Error("Error clientId is required", null);
    if (!clientSecret) throw new Error("Error clientSecret is required", null);
    if (!code) throw new Error("Error code is required", null);

    var clientString = clientId + ":" + clientSecret,
      postData = {
        grant_type: "authorization_code",
        code: code,
      },
      headers = {
        ...this.defaultHeaders,
        Authorization: "Basic " + encodeBase64(clientString),
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
      OAuthToken = require("./OAuth").OAuthToken;

      const requestConfig = {
      baseURL: `https://${this.oAuthBasePath}`,
      method: "post",
      url: "/oauth/token",
      headers: {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: postData,
    };
    const request = axios.request(requestConfig);

    if (!callback) {
      return new Promise(function (resolve, reject) {
        request
          .then((response) => {
            resolve(OAuthToken.constructFromObject(response.data));
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      request
        .then((response) => {
          let OAuthToken = require("./OAuth").OAuthToken;
          return callback(null, OAuthToken.constructFromObject(response.data));
        })
        .catch((err) => {
          return callback(err);
        });
    }
  };

  /**
   * @param accessToken the bearer token to use to authenticate for this call.
   * @return OAuth UserInfo model
   */
  exports.prototype.getUserInfo = function(accessToken, callback) {
    if(!accessToken) throw new Error("Error accessToken is required", null);

    var headers = {
      ...this.defaultHeaders,
      Authorization: "Bearer " + accessToken,
      "Cache-Control": "no-store",
      Pragma: "no-cache",
    };

    const requestConfig = {
      baseURL: `https://${this.oAuthBasePath}`,
      method: "get",
      url: "/oauth/userinfo",
      headers: headers,
    };
    if (this.proxy) {
      const proxyObj = parseProxy(this.proxy);
      requestConfig.proxy = proxyObj[0];
    }

    const request = axios.request(requestConfig);
    
    var UserInfo = require("./OAuth").UserInfo;

    if (!callback) {
      try {
        return new Promise(function (resolve, reject) {
          request
            .then((response) => {
              try {
                return resolve(UserInfo.constructFromObject(response.data));
              } catch (err) {
                throw err;
              }
            })
            .catch((err) => {
              reject(err);
            });
        });
      } catch (err) {
        throw err;
      }
    } else {
      request
        .then((response) => {
          return callback(null, UserInfo.constructFromObject(response.data));
        })
        .catch((err) => {
          return callback(err);
        });
    }
  };

  /**
   * Helper method to build the OAuth JWT grant uri (used once to get a user consent for impersonation)
   * @param clientId OAuth2 client ID
   * @param redirectURI OAuth2 redirect uri
   * @param oAuthBasePath Docusign OAuth base path (account-d.docusign.com for the developer sandbox
   * 			  and account.docusign.com for the production platform)
   * @returns {string} the OAuth JWT grant uri as a String
   */
  exports.prototype.getJWTUri = function (
    clientId,
    redirectURI,
    oAuthBasePath
  ) {    
    return (
      "https://" +
      oAuthBasePath +
      "/oauth/auth" +
      "?" +
      "response_type=code&" +
      "client_id=" +
      encodeURIComponent(clientId) +
      "&" +
      "scope=" +
      encodeURIComponent(`${SCOPE_SIGNATURE} ${SCOPE_IMPERSONATION}`) +
      "&" +
      "redirect_uri=" +
      encodeURIComponent(redirectURI)
    );
  };

  /**
   * @deprecated since version 4.1.0
   * Configures the current instance of ApiClient with a fresh OAuth JWT access token from Docusign
   * @param privateKeyFilename the filename of the RSA private key
   * @param oAuthBasePath Docusign OAuth base path (account-d.docusign.com for the developer sandbox
   *   			and account.docusign.com for the production platform)
   * @param clientId Docusign OAuth Client Id (AKA Integrator Key)
   * @param userId Docusign user Id to be impersonated (This is a UUID)
   * @param expiresIn in seconds for the token time-to-live
   * @param callback the callback function.
   */
  exports.prototype.configureJWTAuthorizationFlow = function (
    privateKeyFilename,
    oAuthBasePath,
    clientId,
    userId,
    expiresIn,
    callback
  ) {
    console.warn(
      "configureJWTAuthorizationFlow is a deprecated function! Please use requestJWTUserToken()"
    );
    var _this = this;
    var jwt = require("jsonwebtoken"),
      fs  = require("fs"),
      private_key = fs.readFileSync(privateKeyFilename),
      now         = Math.floor(Date.now() / 1000),
      later       = now + expiresIn;

    var jwt_payload = {
      iss: clientId,
      sub: userId,
      aud: oAuthBasePath,
      iat: now,
      exp: later,
      scope: SCOPE_SIGNATURE,
    };

    var assertion = jwt.sign(jwt_payload, private_key, {algorithm: "RS256"});

    const requestConfig = {
      baseURL: `https://${oAuthBasePath}`,
      method: "post",
      url: "/oauth/token",
      headers: {
        ...this.defaultHeaders,
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
      timeout: this.timeout,
      data: {
        assertion: assertion,
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      },
    };

    const request = axios.request(requestConfig);
    const onSuccess = (response) => {
      if (callback) {
        if (response.data && response.data.access_token) {
          _this.addDefaultHeader(
            "Authorization",
            "Bearer " + response.data.access_token
          );
        }
        callback(null, response);
      }
    };

    const onFailure = (error) => {
      if (callback) {
        callback(error);
      }
    };
    request.then(onSuccess, onFailure);
  };

  exports.prototype.hasNoInvalidScopes = function(scopes) {
    var validScopes = require("./oauth/Scope");

    return (
      Array.isArray(scopes) &&
      scopes.length > 0 &&
      scopes.every(function(scope) {
        return Object.keys(validScopes).some(function(key) {
          return validScopes[key] === scope;
        });
      })
    );
  };

  exports.prototype.sendJWTTokenRequest = function(assertion, callback) {
    return sendJWTTokenRequest(
      assertion,
      this.oAuthBasePath,
      this.proxy,
      this.defaultHeaders,
      callback
    );
  };
  
  exports.prototype.requestJWTUserToken = function(
    clientId,
    userId,
    scopes,
    rsaPrivateKey,
    expiresIn,
    callback
  ) {
    var privateKey = rsaPrivateKey,
      assertion = generateAndSignJWTAssertion(
        clientId,
        scopes,
        privateKey,
        this.getOAuthBasePath(),
        expiresIn,
        userId
      );

    return sendJWTTokenRequest(
      assertion,
      this.oAuthBasePath,
      this.proxy,
      this.defaultHeaders,
      callback
    );
  };

  exports.prototype.requestJWTApplicationToken = function(
    clientId,
    scopes,
    rsaPrivateKey,
    expiresIn,
    callback
  ) {
    var privateKey = rsaPrivateKey,
      assertion = generateAndSignJWTAssertion(
        clientId,
        scopes,
        privateKey,
        this.getOAuthBasePath(),
        expiresIn
      );

    return sendJWTTokenRequest(
      assertion,
      this.oAuthBasePath,
      this.proxy,
      this.defaultHeaders,
      callback
    );
  };

  exports.prototype.OAuth = require("./OAuth");
  exports.prototype.RestApi = require("./RestApi");
  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports(opts);

  return exports;
});

module.exports.OAuth = require("./OAuth");
module.exports.RestApi = require("./RestApi");
