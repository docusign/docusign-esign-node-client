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
	define(['Configuration', 'ApiClient', 'model/AccountBillingPlanResponse', 'model/BillingInvoice', 'model/BillingInvoicesResponse', 'model/BillingInvoicesSummary', 'model/BillingPaymentItem', 'model/BillingPaymentRequest', 'model/BillingPaymentResponse', 'model/BillingPaymentsResponse', 'model/BillingPlanInformation', 'model/BillingPlanResponse', 'model/BillingPlanUpdateResponse', 'model/BillingPlansResponse', 'model/CreditCardInformation', 'model/DowngradRequestBillingInfoResponse', 'model/DowngradeBillingPlanInformation', 'model/DowngradePlanUpdateResponse', 'model/ErrorDetails', 'model/PurchasedEnvelopesInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AccountBillingPlanResponse'), require('../model/BillingInvoice'), require('../model/BillingInvoicesResponse'), require('../model/BillingInvoicesSummary'), require('../model/BillingPaymentItem'), require('../model/BillingPaymentRequest'), require('../model/BillingPaymentResponse'), require('../model/BillingPaymentsResponse'), require('../model/BillingPlanInformation'), require('../model/BillingPlanResponse'), require('../model/BillingPlanUpdateResponse'), require('../model/BillingPlansResponse'), require('../model/CreditCardInformation'), require('../model/DowngradRequestBillingInfoResponse'), require('../model/DowngradeBillingPlanInformation'), require('../model/DowngradePlanUpdateResponse'), require('../model/ErrorDetails'), require('../model/PurchasedEnvelopesInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BillingApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.AccountBillingPlanResponse, root.Docusign.BillingInvoice, root.Docusign.BillingInvoicesResponse, root.Docusign.BillingInvoicesSummary, root.Docusign.BillingPaymentItem, root.Docusign.BillingPaymentRequest, root.Docusign.BillingPaymentResponse, root.Docusign.BillingPaymentsResponse, root.Docusign.BillingPlanInformation, root.Docusign.BillingPlanResponse, root.Docusign.BillingPlanUpdateResponse, root.Docusign.BillingPlansResponse, root.Docusign.CreditCardInformation, root.Docusign.DowngradRequestBillingInfoResponse, root.Docusign.DowngradeBillingPlanInformation, root.Docusign.DowngradePlanUpdateResponse, root.Docusign.ErrorDetails, root.Docusign.PurchasedEnvelopesInformation);
  }
}(this, function(Configuration, ApiClient, AccountBillingPlanResponse, BillingInvoice, BillingInvoicesResponse, BillingInvoicesSummary, BillingPaymentItem, BillingPaymentRequest, BillingPaymentResponse, BillingPaymentsResponse, BillingPlanInformation, BillingPlanResponse, BillingPlanUpdateResponse, BillingPlansResponse, CreditCardInformation, DowngradRequestBillingInfoResponse, DowngradeBillingPlanInformation, DowngradePlanUpdateResponse, ErrorDetails, PurchasedEnvelopesInformation) {
  'use strict';

  /**
   * Billing service.
   * @module api/BillingApi
   */

  /**
   * Constructs a new BillingApi. 
   * @alias module:api/BillingApi
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
     * (Optional) Callback function to receive the result of the getBillingPlan operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getBillingPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPlanResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the billing plan details.
     * Retrieves the billing plan details for the specified billing plan ID.
     * @param {String} billingPlanId The ID of the billing plan being accessed.
     * @param {module:api/BillingApi~getBillingPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPlanResponse}
     */
    this.getBillingPlan = function(billingPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'billingPlanId' is set
      if (billingPlanId === undefined || billingPlanId === null) {
        throw new Error("Missing the required parameter 'billingPlanId' when calling getBillingPlan");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'billingPlanId': billingPlanId
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
      var returnType = BillingPlanResponse;

      return this.apiClient.callApi(
        '/v2.1/billing_plans/{billingPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getCreditCardInfo operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getCreditCardInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreditCardInformation} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get metadata for a given credit card.
     * This method returns information about a credit card associated with an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/BillingApi~getCreditCardInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreditCardInformation}
     */
    this.getCreditCardInfo = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCreditCardInfo");
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
      var returnType = CreditCardInformation;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan/credit_card', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getDowngradeRequestBillingInfo operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getDowngradeRequestBillingInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DowngradRequestBillingInfoResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns downgrade plan information for the specified account.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/BillingApi~getDowngradeRequestBillingInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DowngradRequestBillingInfoResponse}
     */
    this.getDowngradeRequestBillingInfo = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getDowngradeRequestBillingInfo");
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
      var returnType = DowngradRequestBillingInfoResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan/downgrade', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getInvoice operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingInvoice} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieves a billing invoice.
     * Retrieves the specified invoice. 

###### Note: If the `pdfAvailable` property in the response is set to *true*, you can download a PDF version of the invoice. To download the PDF, make the call again and change the value of the `Accept` property in the header to `Accept: application/pdf`.

Privileges required: account administrator

The response returns a list of charges and information about the charges. Quantities are usually shown as 'unlimited' or an integer. Amounts are shown in the currency set for the account.

**Response**
The following table provides a description of the different `chargeName` property values. The information will grow as more chargeable items are added to the system.

| chargeName | Description |
| --- | --- |
| id_check | IDÂ Check Charge |
| in_person_signing | In Person Signing charge |
| envelopes Included | Sent Envelopes for the account |
| age_verify | Age verification check |
| ofac | OFAC Check |
| id_confirm | ID confirmation check |
| student_authentication | STAN PIN authentication check |
| wet_sign_fax | Pages for returning signed documents by fax |
| attachment_fax | Pages for returning attachments by fax |
| phone_authentication | Phone authentication charge |
| powerforms | PowerForm envelopes sent |
| signer_payments | Payment processing charge |
| outbound_fax | Send by fax charge |
| bulk_recipient_envelopes | Bulk Recipient Envelopes sent |
| sms_authentications | SMS authentication charge |
| saml_authentications | SAML authentication charge |
| express_signer_certificate | DocuSign Express Certificate charge |
| personal_signer_certificate | Personal Signer Certificate charge |
| safe_certificate | SAFE BioPharma Signer Certificate charge |
| seats | Included active seats charge |
| open_trust_certificate | OpenTrust Signer Certificate charge | 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} invoiceId 
     * @param {module:api/BillingApi~getInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingInvoice}
     */
    this.getInvoice = function(accountId, invoiceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getInvoice");
      }

      // verify the required parameter 'invoiceId' is set
      if (invoiceId === undefined || invoiceId === null) {
        throw new Error("Missing the required parameter 'invoiceId' when calling getInvoice");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'invoiceId': invoiceId
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
      var returnType = BillingInvoice;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_invoices/{invoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPayment operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPaymentItem} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets billing payment information for a specific payment.
     * Retrieves the information for a specified payment. 

Privileges required: account administrator 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} paymentId 
     * @param {module:api/BillingApi~getPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPaymentItem}
     */
    this.getPayment = function(accountId, paymentId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPayment");
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getPayment");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'paymentId': paymentId
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
      var returnType = BillingPaymentItem;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_payments/{paymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getPlan operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~getPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountBillingPlanResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Account Billing Plan
     * Retrieves the billing plan information for the specified account, including the current billing plan, successor plans, billing address, and billing credit card.

By default the successor plan and credit card information is included in the response. This information can be excluded from the response by adding the appropriate optional query string with the `setting` set to **false**. 

Response

The response returns the billing plan information, including the currency code, for the plan. The `billingPlan` and `succesorPlans` property values are the same as those shown in the [ML:Get Billing Plan Details] reference. the `billingAddress` and `creditCardInformation` property values are the same as those shown in the [ML:Update Billing Plan] reference.

###### Note: When credit card number information is shown, a mask is applied to the response so that only the last 4 digits of the card number are visible. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.includeCreditCardInformation When set to **true**, excludes credit card information from the response.
     * @param {String} optsOrCallback.includeDowngradeInformation 
     * @param {String} optsOrCallback.includeMetadata When set to **true**, the `canUpgrade` and `renewalStatus` properities are included the response and an array of `supportedCountries` property is added to the `billingAddress` information. 
     * @param {String} optsOrCallback.includeSuccessorPlans When set to **true**, excludes successor information from the response.
     * @param {String} optsOrCallback.includeTaxExemptId 
     * @param {module:api/BillingApi~getPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountBillingPlanResponse}
     */
    this.getPlan = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getPlan");
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
        'include_credit_card_information': optsOrCallback['includeCreditCardInformation'],
        'include_downgrade_information': optsOrCallback['includeDowngradeInformation'],
        'include_metadata': optsOrCallback['includeMetadata'],
        'include_successor_plans': optsOrCallback['includeSuccessorPlans'],
        'include_tax_exempt_id': optsOrCallback['includeTaxExemptId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AccountBillingPlanResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listBillingPlans operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~listBillingPlansCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPlansResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets the list of available billing plans.
     * Retrieves a list of the billing plans associated with a distributor.
     * @param {module:api/BillingApi~listBillingPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPlansResponse}
     */
    this.listBillingPlans = function(callback) {
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
      var returnType = BillingPlansResponse;

      return this.apiClient.callApi(
        '/v2.1/billing_plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listInvoices operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~listInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingInvoicesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get a List of Billing Invoices
     * Retrieves a list of invoices for the account. If the from date or to date queries are not specified, the response returns invoices for the last 365 days.

Privileges required: account administrator 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.fromDate Specifies the date/time of the earliest invoice in the account to retrieve.
     * @param {String} optsOrCallback.toDate Specifies the date/time of the latest invoice in the account to retrieve.
     * @param {module:api/BillingApi~listInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingInvoicesResponse}
     */
    this.listInvoices = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listInvoices");
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
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingInvoicesResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listInvoicesPastDue operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~listInvoicesPastDueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingInvoicesSummary} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get a list of past due invoices.
     * Returns a list past due invoices for the account and notes if payment can be made through the REST API. 

Privileges Required: account administrator
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {module:api/BillingApi~listInvoicesPastDueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingInvoicesSummary}
     */
    this.listInvoicesPastDue = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listInvoicesPastDue");
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
      var returnType = BillingInvoicesSummary;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_invoices_past_due', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listPayments operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~listPaymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPaymentsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets payment information for one or more payments.
     * Retrieves a list containing information about one or more payments. If the from date or to date queries are not used, the response returns payment information for the last 365 days. 

Privileges required: account administrator 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.fromDate Specifies the date/time of the earliest payment in the account to retrieve.
     * @param {String} optsOrCallback.toDate Specifies the date/time of the latest payment in the account to retrieve.
     * @param {module:api/BillingApi~listPaymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPaymentsResponse}
     */
    this.listPayments = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listPayments");
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
        'to_date': optsOrCallback['toDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingPaymentsResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the makePayment operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~makePaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPaymentResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Posts a payment to a past due invoice.
     * Posts a payment to a past due invoice. 

###### Note: This can only be used if the `paymentAllowed` value for a past due invoice is true. This can be determined calling [ML:GetBillingInvoicesPastDue].

The response returns information for a single payment, if a payment ID was used in the endpoint, or a list of payments. If the from date or to date queries or payment ID are not used, the response returns payment information for the last 365 days. If the request was for a single payment ID, the `nextUri` and `previousUri` properties are not returned.

Privileges required: account administrator
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BillingPaymentRequest} optsOrCallback.billingPaymentRequest 
     * @param {module:api/BillingApi~makePaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPaymentResponse}
     */
    this.makePayment = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['billingPaymentRequest'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling makePayment");
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
      var returnType = BillingPaymentResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the purchaseEnvelopes operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~purchaseEnvelopesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Reserverd: Purchase additional envelopes.
     * Reserved: At this time, this endpoint is limited to DocuSign internal use only. Completes the purchase of envelopes for your account. The actual purchase is done as part of an internal workflow interaction with an envelope vendor.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/PurchasedEnvelopesInformation} optsOrCallback.purchasedEnvelopesInformation 
     * @param {module:api/BillingApi~purchaseEnvelopesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.purchaseEnvelopes = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['purchasedEnvelopesInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling purchaseEnvelopes");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan/purchased_envelopes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateDowngradeAccountBillingPlan operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~updateDowngradeAccountBillingPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DowngradePlanUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Queues downgrade billing plan request for an account.
     * 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/DowngradeBillingPlanInformation} optsOrCallback.downgradeBillingPlanInformation 
     * @param {module:api/BillingApi~updateDowngradeAccountBillingPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DowngradePlanUpdateResponse}
     */
    this.updateDowngradeAccountBillingPlan = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['downgradeBillingPlanInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateDowngradeAccountBillingPlan");
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
      var returnType = DowngradePlanUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan/downgrade', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updatePlan operation. If none specified a Promise will be returned.
     * @callback module:api/BillingApi~updatePlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingPlanUpdateResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates the account billing plan.
     * Updates the billing plan information, billing address, and credit card information for the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.previewBillingPlan When set to **true**, updates the account using a preview billing plan.
     * @param {module:model/BillingPlanInformation} optsOrCallback.billingPlanInformation 
     * @param {module:api/BillingApi~updatePlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingPlanUpdateResponse}
     */
    this.updatePlan = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = optsOrCallback['billingPlanInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updatePlan");
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
        'preview_billing_plan': optsOrCallback['previewBillingPlan']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BillingPlanUpdateResponse;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/billing_plan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));