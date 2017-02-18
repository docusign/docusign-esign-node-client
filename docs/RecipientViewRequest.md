# Docusign.RecipientViewRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientUserId** | **String** | A sender created value that shows the recipient is embedded (captive).   Maximum length: 100 characters. | [optional] 
**userId** | **String** | Specifies the user ID of the recipient. You can use with user ID or email and user name to identify the recipient. If user ID is used and a client user ID is provided, the value in the &#x60;userId&#x60; property must match a recipient ID (which can be retrieved with a GET recipients call) for the envelope. If a user ID is used and a clientUser ID is not provided, the user ID match the user ID of the authenticating user. | [optional] 
**userName** | **String** | Specifies the username of the recipient. You can use either email and userName or userId to identify the recipient. | [optional] 
**email** | **String** | Specifies the email of the recipient. You can use either email and userName or userId to identify the recipient. | [optional] 
**recipientId** | **String** | Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document. | [optional] 
**returnUrl** | **String** | The URL the recipient is directed to on certain events. DocuSign sends returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are:   * cancel (recipient cancels signing) * decline (recipient declines signing) * exception (exception occurs) * fax_pending (recipient has fax pending) * check); session_timeout (session times out) * completes signing) * expires) * viewing_complete (recipient completes viewing the envelope)  ## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers. | [optional] 
**pingUrl** | **String** | A client Url to be pinged by the DocuSign Signing experience to indicate to the client that Signing is active. An HTTP Get is executed against the client. The response from the client is ignored. The intent is for the client to reset it&#39;s session timer when the request is received. | [optional] 
**pingFrequency** | **String** | Only used if pingUrl is specified. This is the interval, in seconds, between pings on the pingUrl.  The default is 300 seconds. Valid values are 60-1200 seconds. | [optional] 
**authenticationMethod** | **String** | A sender created value that indicates the convention used to authenticate the signer. This information is included in the Certificate of Completion. | [optional] 
**assertionId** | **String** | A unique identifier of the authentication event executed by the client application. | [optional] 
**authenticationInstant** | **String** | A sender generated value that indicates the date/time that the signer was authenticated. | [optional] 
**securityDomain** | **String** | The domain in which the user authenticated. | [optional] 


