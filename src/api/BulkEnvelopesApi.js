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
	define(['Configuration', 'ApiClient', 'model/BulkSendBatchActionRequest', 'model/BulkSendBatchRequest', 'model/BulkSendBatchStatus', 'model/BulkSendBatchSummaries', 'model/BulkSendRequest', 'model/BulkSendResponse', 'model/BulkSendTestResponse', 'model/BulkSendingList', 'model/BulkSendingListSummaries', 'model/EnvelopesInformation', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BulkSendBatchActionRequest'), require('../model/BulkSendBatchRequest'), require('../model/BulkSendBatchStatus'), require('../model/BulkSendBatchSummaries'), require('../model/BulkSendRequest'), require('../model/BulkSendResponse'), require('../model/BulkSendTestResponse'), require('../model/BulkSendingList'), require('../model/BulkSendingListSummaries'), require('../model/EnvelopesInformation'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BulkEnvelopesApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BulkSendBatchActionRequest, root.Docusign.BulkSendBatchRequest, root.Docusign.BulkSendBatchStatus, root.Docusign.BulkSendBatchSummaries, root.Docusign.BulkSendRequest, root.Docusign.BulkSendResponse, root.Docusign.BulkSendTestResponse, root.Docusign.BulkSendingList, root.Docusign.BulkSendingListSummaries, root.Docusign.EnvelopesInformation, root.Docusign.ErrorDetails);
  }
}(this, function(Configuration, ApiClient, BulkSendBatchActionRequest, BulkSendBatchRequest, BulkSendBatchStatus, BulkSendBatchSummaries, BulkSendRequest, BulkSendResponse, BulkSendTestResponse, BulkSendingList, BulkSendingListSummaries, EnvelopesInformation, ErrorDetails) {
  'use strict';

  /**
   * BulkEnvelopes service.
   * @module api/BulkEnvelopesApi
   */

  /**
   * Constructs a new BulkEnvelopesApi. 
   * @alias module:api/BulkEnvelopesApi
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
     * (Optional) Callback function to receive the result of the createBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new bulk send list
     * This method creates a bulk send list that you can use to send an envelope to up to 1,000 recipients at once.

### Related topics

- [How to bulk send envelopes](/docs/esign-rest-api/how-to/bulk-send-envelopes/)

### Errors

| Error code                                              | Description                                                                                                                                                                                                                                                                              |
| :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BULK_SEND_MAX_COPIES_EXCEEDED                           | A bulk sending list cannot specify more than XXX copies in the mailing list. Call the settings API endpoint to find the maximum number of copies in a batch allowed for your account. In almost all cases, the default limit is 1000.                                                    |
| BULK_SEND_RECIPIENT_IDS_MUST_BE_UNIQUE                  | No two recipientIds can be same within a bulkCopy. Same restriction as a regular envelope applies. Specify unique recipient IDs for each recipient within a bulkCopy (model for envelope in mailing list).                                                                               |
| BULK_SEND_RECIPIENT_ID_REQUIRED                         | If no RoleName is present, recipientID is required in mailing list's bulkCopy. Add a roleName (that coalesces with template/envelope) or a recipientID.                                                                                                                                  |
| BULK_SEND_RECIPIENT_NAME_REQUIRED                       | Recipient {0} has no name. Specify a name for the recipient.                                                                                                                                                                                                                             |
| BULK_SEND_EMAIL_ADDRESS_REQUIRED_FOR_EMAIL_RECIPIENT    | Recipient {0} is an email recipient with no email address. Specify an email for the email recipient.                                                                                                                                                                                     |
| BULK_SEND_FAX_NUMBER_REQUIRED_FOR_FAX_RECIPIENT         | Recipient {0} is a fax recipient with no fax number. Specify a fax number for the fax recipient.                                                                                                                                                                                         |
| BULK_SEND_FAX_NUMBER_NOT_VALID                          | Recipient {0} specifies fax number {1}, which is not valid. Specify a valid fax number for the fax recipient.                                                                                                                                                                            |
| BULK_SEND_EMAIL_ADDRESS_NOT_VALID                       | Recipient {0} specifies email address {1}, which is not a valid email address.  Specify a valid email address for the recipient.                                                                                                                                                         |
| BULK_SEND_PHONE_NUMBER_REQURED_FOR_SMS_AUTH             | Recipient {0} specifies SMS auth, but no number was provided. Specify a phone number for the SMS auth recipient.                                                                                                                                                                         |
| BULK_SEND_PHONE_NUMBER_INVALID_FOR_SMS_AUTH             | Recipient {0} specifies phone number {1} for SMS auth, which is not valid. Specify a valid phone number for the SMS auth recipient.                                                                                                                                                      |
| BULK_SEND_ROLE_NAMES_MUST_BE_UNIQUE                     | Recipient role names cannot be duplicated; role {duplicateRecipientRole} appears multiple times. Use unique roleNames for recipients.                                                                                                                                                    |
| BULK_SEND_CANNOT_USE_BOTH_ROLE_AND_ID_ON_SAME_RECIPIENT | Recipients cannot have both ID and Role; {0} has both. Specify a roleName or recipientId, but not both for the same recipient.                                                                                                                                                           |
| BULK_SEND_CANNOT_USE_BOTH_ROLE_AND_ID_IN_SAME_LIST      | Cannot use both recipient role and ID in the same list. Specify a roleName or recipientId, but not both in the same list.                                                                                                                                                                |
| BULK_SEND_INVALID_ID_CHECK_CONFIGURATION                | Recipient {0} specified SMS authentication, but no SMS auth settings were provided. Provide an SMS auth setting (proper ID configuration) if SMS auth is specified.                                                                                                                      |
| BULK_SEND_INVALID_SBS_INPUT_CONFIGURATION               | Recipient {0} has more than one signature provider specified. Or signingProviderName is not specified. Or Signature provider : {0} is either unknown or not an available pen for this account. One or more SBS configuration is missing or invalid. The error details provide specifics. |
| BULK_SEND_TAB_LABELS_MUST_BE_UNIQUE                     | Tab label {0} is duplicated. Needs to be unique. Use a unique tab label.                                                                                                                                                                                                                 |
| BULK_SEND_TAB_LABEL_REQUIRED                            | Tab label is required. Specify a tab label.                                                                                                                                                                                                                                              |
| BULK_SEND_TAB_VALUE_REQUIRED                            | Tab Label value is required. Specify a value for the tab label.                                                                                                                                                                                                                          |
| BULK_SEND_ENVELOPE_CUSTOM_FIELD_NAME_MUST_BE_UNIQUE     | Custom fields must have distinct names. The field {0} appears more than once in a copy. Use unique names for custom fields.                                                                                                                                                              |
| BULK_SEND_ENVELOPE_CUSTOM_FIELD_NAME_REQUIRED           | All custom fields must have names. Specify a name for the custom field.                                                                                                                                                                                                                  |
| BULK_SEND_ENVELOPE_CUSTOM_FIELD_VALUE_REQUIRED          | Custom field {0} has no value. A custom field can have an empty value, but it cannot have a null value. Specify a value for the custom field.                                                                                                                                            |
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendingList} optsOrCallback.bulkSendingList 
     * @param {module:api/BulkEnvelopesApi~createBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.createBulkSendList = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendingList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendList");
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createBulkSendRequest operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Uses the specified bulk send list to send the envelope specified in the payload
     * This method initiates the bulk send process. It generates a bulk send request based on an [existing bulk send list][create_list] and an envelope or template.

Consider using the [BulkSend::createBulkSendTestRequest][create_test] method to test your bulk send list for compatibility with the envelope or template that you want to send first. To learn about the complete bulk send flow, see the [Bulk Send overview][BulkSendOverview].

If the envelopes were successfully queued for asynchronous processing, the response contains a `batchId` that you can use to get the status of the batch. If a failure occurs, the API returns an error message.

**Note:** Partial success or failure generally does not occur. Only the entire batch is queued for asynchronous processing.

### Related topics

- [How to bulk send envelopes](/docs/esign-rest-api/how-to/bulk-send-envelopes/)


### Errors

This method returns the following errors:

| Error code                                                 | Description                                                                                                                                                                                                                                                                                            |
| :--------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BULK_SEND_ENVELOPE_NOT_IN_SENDABLE_STATE                   | Envelope {0} is not in a sendable state. The envelope is not complete. Make sure it has a sendable status, such as `created`.                                                                                                                                                                          |
| BULK_SEND_ENVELOPE_LIST_CONTAINS_NO_COPIES                 | Cannot send an envelope with a bulk sending list which contains no copies.  The list you're trying to bulk send is empty. Make sure the bulk sending list you're using contains recipients.                                                                                                            |
| BULK_SEND_ENVELOPE_LIST_CONTAINS_TOO_MANY_COPIES           | Bulk sending list contains more than {0} copies. The list you're trying to bulk send will cause your account to exceed the 1,000-copy limit imposed for all accounts. Try sending two or more separate lists.                                                                                          |
| BULK_SEND_ENVELOPE_CANNOT_BE_NULL                          | Cannot send a bulk list without an envelope. Specify the envelope ID or template ID for the envelope you want to bulk send.                                                                                                                                                                            |
| BULK_SEND_BLOB_STORE_ERROR                                 | Could not save copy of bulk sending list. An error writing to the database occurred. Try again. If the error persists, contact DocuSign Support.                                                                                                                                                       |
| BULK_SEND_ACCOUNT_HAS_TOO_MANY_QUEUED_ENVELOPES            | Cannot send this bulk sending list because doing so would exceed the maximum of {maxCopies} in-flight envelopes. This account currently has {unprocessedEnvelopes} envelopes waiting to be processed. Please try again later." .Try again later, or contact DocuSign Support to request a higher tier. |
| BULK_SEND_ENVELOPE_NOT_FOUND                               | Envelope {envelopeOrTemplateId} does not exist or you do not have permission to access it. The envelopeId or templateId specified could not be found. Specify a valid value.                                                                                                                           |
| BULK_SEND_LIST_NOT_FOUND                                   | Bulk Sending list {listId} does not exist or you do not have permission to access it. The mailingListId specified could not be found. Specify a valid value.                                                                                                                                           |
| BULK_SEND_ENVELOPE_HAS_NO_RECIPIENTS                       | Bulk sending copy contains recipients, but the specified envelope does not. The recipients on the envelope and the bulk send list do not match. Make sure the envelope and list are compatible for sending.                                                                                            |
| BULK_SEND_RECIPIENT_ID_DOES_NOT_EXIST_IN_ENVELOPE          | Recipient {0} does not exist in the envelope. Add the missing recipient to the envelope.                                                                                                                                                                                                               |
| BULK_SEND_RECIPIENT_ID_DOES_NOT_MATCH                      | Recipient ID {envelopeMember.ID} does not match. Make sure the recipient information in the list and the envelope match up.                                                                                                                                                                            |
| BULK_SEND_ENVELOPE_HAS_BULK_RECIPIENT                      | Recipient {0} is a bulk recipient.  This is not supported. No legacy 'bulk recipient' allowed. In v2.1 of the eSignature API, you must use a bulk send list instead of a bulk recipient. See the API documentation for details.                                                                        |
| BULK_SEND_RECIPIENT_ROLE_DOES_NOT_MATCH                    | Recipient Role {envelopeMember.RoleName} does not match. Make sure the recipient information in the list and the envelope is compatible.                                                                                                                                                               |
| BULK_SEND_DUPLICATE_RECIPIENT_DETECTED                     | Duplicate recipients ({0}) not allowed, unless recipients have unique routing order specified on envelope.                                                                                                                                                                                             |
| BULK_SEND_ENVELOPE_HAS_NO_TABS                             | Bulk sending copy contains tabs, but the specified envelope does not. List and envelope tabs cannot be coalesced. Make sure they are compatible for sending.                                                                                                                                           |
| BULK_SEND_TAB_LABEL_DOES_NOT_EXIST_IN_ENVELOPE             | Tab with label {0} does not exist in envelope. Add the tab label to the envelope, remove the label from the list, or make sure you're specifying the correct list and envelope.                                                                                                                        |
| BULK_SEND_TAB_DOES_NOT_MATCH                               | Tab {0} does not match {0} in envelope. A tab exists on the list that does not match or is missing on the envelope. Make sure the tabs on the list and the envelope match.                                                                                                                             |
| BULK_SEND_ENVELOPE_HAS_NO_ENVELOPE_CUSTOM_FIELDS           | Bulk sending copy contains custom fields, but the specified envelope does not. There are custom fields on the list that the envelope does not have. Make sure that any custom fields on the list and the envelope match.                                                                               |
| BULK_SEND_ENVELOPE_CUSTOM_FIELD_DOES_NOT_EXIST_IN_ENVELOPE | Custom field {0} does not exist in the envelope. Either add the custom field on the list to the envelope, remove the custom field from the list, or make sure you're specifying the correct list and envelope.                                                                                         |
| BULK_SEND_ENVELOPE_CUSTOM_FIELD_NAME_DOES_NOT_MATCH        | Custom field names must match. {0} and {1} do not match. The custom field names on the list and the envelope do not match. Use identical names for both.                                                                                                                                               |

[create_list]:      /docs/esign-rest-api/reference/bulkenvelopes/bulksend/createbulksendlist/
[create_test]:      /docs/esign-rest-api/reference/bulkenvelopes/bulksend/createbulksendtestrequest/
[BulkSendOverview]: /docs/esign-rest-api/reference/bulkenvelopes/bulksend/


     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendRequest} optsOrCallback.bulkSendRequest 
     * @param {module:api/BulkEnvelopesApi~createBulkSendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendResponse}
     */
    this.createBulkSendRequest = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendRequest");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling createBulkSendRequest");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the createBulkSendTestRequest operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~createBulkSendTestRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendTestResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Tests whether the specified bulk sending list can be used to send an envelope
     * This method tests a bulk send list for compatibility with the envelope or template that you want to send. For example, a template that has three roles is not compatible with a bulk send list that has only two recipients. For this reason, you might want to test compatibility first.

A successful test result returns `true` for the `canBeSent` property. An unsuccessful test returns a JSON response that contains information about the errors that occurred.

If the test is successful, you can then send the envelope or template by using the [BulkSend::createBulkSendRequest][BulkSendRequest] method.

## Envelope Compatibility Checks

This section describes the envelope compatibility checks that the system performs.

**Top-Level Issues**

- Envelopes must be in a sendable state.
- The bulk send list must contain at least one copy (instance of an envelope), and no more than the maximum number of copies allowed for the account.
- The envelope must not be null and must be visible to the current user.
- The account cannot have more queued envelopes than the maximum number configured for the account.
- The bulk send list must exist.

**Recipients**

- The envelope must have recipients.
- If you are using an envelope, all of the recipients defined in the bulk send list must have corresponding recipient IDs in the envelope definition. If you are using a template, you must either match the recipient IDs or role IDs.
- The envelope cannot contain a bulk recipient (an artifact of the legacy version of DocuSign's bulk send
  functionality).

**Recipient Tabs**

- Every `recipient ID, tab label` pair in the bulk send list must correspond to a tab in the envelope.

**Custom Fields**

- Each envelope-level custom field in the bulk send list must correspond to the name of a `customField` in the
  envelope definition. You do not have to match the recipient-level custom fields.

[BulkSendRequest]:  /docs/esign-rest-api/reference/bulkenvelopes/bulksend/createbulksendrequest/



     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendRequest} optsOrCallback.bulkSendRequest 
     * @param {module:api/BulkEnvelopesApi~createBulkSendTestRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendTestResponse}
     */
    this.createBulkSendTestRequest = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBulkSendTestRequest");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling createBulkSendTestRequest");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendTestResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~deleteBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingListSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes an existing bulk send list
     * This method deletes a bulk send list.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {module:api/BulkEnvelopesApi~deleteBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingListSummaries}
     */
    this.deleteBulkSendList = function(accountId, bulkSendListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling deleteBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingListSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatchEnvelopes operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchEnvelopesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopesInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets envelopes from a specific bulk send batch
     * This method returns a list of envelopes in a specified bulk batch. Use the query parameters to filter and sort the envelopes by different attributes.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.include 
     * @param {String} optsOrCallback.order 
     * @param {String} optsOrCallback.orderBy 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchEnvelopesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopesInformation}
     */
    this.getBulkSendBatchEnvelopes = function(accountId, bulkSendBatchId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatchEnvelopes");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling getBulkSendBatchEnvelopes");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
      };
      var queryParams = {
        'count': optsOrCallback['count'],
        'include': optsOrCallback['include'],
        'order': optsOrCallback['order'],
        'order_by': optsOrCallback['orderBy'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EnvelopesInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/envelopes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatchStatus operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific bulk send batch status
     * Gets the general status of a specific bulk send batch such as:

- number of successes
- number pending
- number of errors

The `bulkErrors` property of the response object contains more information about the errors.

### Related topics

- [How to bulk send envelopes](/docs/esign-rest-api/how-to/bulk-send-envelopes/)

     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.getBulkSendBatchStatus = function(accountId, bulkSendBatchId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatchStatus");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling getBulkSendBatchStatus");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendBatches operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendBatchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a list of bulk send batch satuses initiated by account.
     * Returns a summary of bulk send batches.

Use the `batch_ids` query parameter to narrow the list of batches.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.batchIds 
     * @param {String} optsOrCallback.count 
     * @param {String} optsOrCallback.fromDate 
     * @param {String} optsOrCallback.searchText 
     * @param {String} optsOrCallback.startPosition 
     * @param {String} optsOrCallback.status 
     * @param {String} optsOrCallback.toDate 
     * @param {String} optsOrCallback.userId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendBatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchSummaries}
     */
    this.getBulkSendBatches = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendBatches");
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
        'batch_ids': optsOrCallback['batchIds'],
        'count': optsOrCallback['count'],
        'from_date': optsOrCallback['fromDate'],
        'search_text': optsOrCallback['searchText'],
        'start_position': optsOrCallback['startPosition'],
        'status': optsOrCallback['status'],
        'to_date': optsOrCallback['toDate'],
        'user_id': optsOrCallback['userId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BulkSendBatchSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets a specific bulk send list
     * This method returns all of the details associated with a specific bulk send list that belongs to the current user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {module:api/BulkEnvelopesApi~getBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.getBulkSendList = function(accountId, bulkSendListId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling getBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBulkSendLists operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~getBulkSendListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingListSummaries} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Lists top-level details for all bulk send lists visible to the current user
     * This method returns a list of bulk send lists belonging to the current user, as well as basic information about each list.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/BulkEnvelopesApi~getBulkSendListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingListSummaries}
     */
    this.getBulkSendLists = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBulkSendLists");
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
      var returnType = BulkSendingListSummaries;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendBatchAction operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendBatchActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Initiate a specific bulk send batch action
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {String} bulkAction 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendBatchActionRequest} optsOrCallback.bulkSendBatchActionRequest 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendBatchActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.updateBulkSendBatchAction = function(accountId, bulkSendBatchId, bulkAction, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendBatchActionRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendBatchAction");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling updateBulkSendBatchAction");
      }

      // verify the required parameter 'bulkAction' is set
      if (bulkAction === undefined || bulkAction === null) {
        throw new Error("Missing the required parameter 'bulkAction' when calling updateBulkSendBatchAction");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId,
        'bulkAction': bulkAction
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/{bulkAction}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendBatchStatus operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendBatchStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendBatchStatus} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Put/Update a specific bulk send batch status
     * Updates a specific bulk send batch status.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendBatchId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendBatchRequest} optsOrCallback.bulkSendBatchRequest 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendBatchStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendBatchStatus}
     */
    this.updateBulkSendBatchStatus = function(accountId, bulkSendBatchId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendBatchRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendBatchStatus");
      }

      // verify the required parameter 'bulkSendBatchId' is set
      if (bulkSendBatchId === undefined || bulkSendBatchId === null) {
        throw new Error("Missing the required parameter 'bulkSendBatchId' when calling updateBulkSendBatchStatus");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendBatchId': bulkSendBatchId
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
      var returnType = BulkSendBatchStatus;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateBulkSendList operation. If none specified a Promise will be returned.
     * @callback module:api/BulkEnvelopesApi~updateBulkSendListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkSendingList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an existing bulk send list.  If send_envelope query string value is provided, will accept an empty payload and try to send the specified envelope
     * This method replaces the definition of an existing bulk send list.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bulkSendListId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BulkSendingList} optsOrCallback.bulkSendingList 
     * @param {module:api/BulkEnvelopesApi~updateBulkSendListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkSendingList}
     */
    this.updateBulkSendList = function(accountId, bulkSendListId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['bulkSendingList'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateBulkSendList");
      }

      // verify the required parameter 'bulkSendListId' is set
      if (bulkSendListId === undefined || bulkSendListId === null) {
        throw new Error("Missing the required parameter 'bulkSendListId' when calling updateBulkSendList");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'bulkSendListId': bulkSendListId
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
      var returnType = BulkSendingList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));