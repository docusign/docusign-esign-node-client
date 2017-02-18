# Docusign.BccEmailAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bccEmailAddressId** | **String** | Only users with canManageAccount setting can use this option. An array of up to 5 email addresses the envelope is sent to as a BCC email.    Example: If your account has BCC for Email Archive set up for the email address &#39;archive@mycompany.com&#39; and you send an envelope using the BCC Email Override to send a BCC email to &#39;salesarchive@mycompany.com&#39;, then a copy of the envelope is only sent to the &#39;salesarchive@mycompany.com&#39; email address. | [optional] 
**email** | **String** | Specifies the BCC email address. DocuSign verifies that the email format is correct, but does not verify that the email is active.Using this overrides the BCC for Email Archive information setting for this envelope.  Maximum of length: 100 characters.  | [optional] 


