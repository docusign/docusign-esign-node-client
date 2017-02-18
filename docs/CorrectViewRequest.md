# Docusign.CorrectViewRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suppressNavigation** | **String** | Specifies whether the window is displayed with or without dressing. | [optional] 
**returnUrl** | **String** | Specifies the return point after correcting the envelope. DocuSign returns to the URL and includes an event parameter that can be used to redirect the recipient to another location. The possible event parameters returned are:   * send (user corrects and sends the envelope) * save (user saves the envelope) * cancel (user cancels the transaction.) * error (there is an error when performing the correct or send) * sessionEnd (the session ends before the user completes another action)  ## Important: You must include HTTPS:// in the URL or the redirect might be blocked by some browsers.  | [optional] 


