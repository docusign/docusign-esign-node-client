# Docusign.ReturnUrlRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnUrl** | **String** | Identifies the return point after sending the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are:   * send (user sends the envelope) * save (user saves the envelope) * cancel (user cancels the sending transaction. No envelopeId is returned in this case.) * error (there is an error when performing the send) * sessionEnd (the sending session ends before the user completes another action). | [optional] 


