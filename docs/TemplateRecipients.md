# Docusign.TemplateRecipients

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signers** | [**[Signer]**](Signer.md) | A complex type containing information about the Signer recipient. | [optional] 
**agents** | [**[Agent]**](Agent.md) | A complex type defining the management and access rights of a recipient assigned assigned as an agent on the document. | [optional] 
**editors** | [**[Editor]**](Editor.md) |  | [optional] 
**intermediaries** | [**[Intermediary]**](Intermediary.md) | Identifies a recipient that can, but is not required to, add name and email information for recipients at the same or subsequent level in the routing order (until subsequent Agents, Editors or Intermediaries recipient types are added). | [optional] 
**carbonCopies** | [**[CarbonCopy]**](CarbonCopy.md) | A complex type containing information about recipients who should receive a copy of the envelope, but does not need to sign it. | [optional] 
**certifiedDeliveries** | [**[CertifiedDelivery]**](CertifiedDelivery.md) | A complex type containing information on a recipient the must receive the completed documents for the envelope to be completed, but the recipient does not need to sign, initial, date, or add information to any of the documents. | [optional] 
**inPersonSigners** | [**[InPersonSigner]**](InPersonSigner.md) | Specifies a signer that is in the same physical location as a DocuSign user who will act as a Signing Host for the transaction. The recipient added is the Signing Host and new separate Signer Name field appears after Sign in person is selected. | [optional] 
**recipientCount** | **String** | The list of recipient event statuses that will trigger Connect to send updates to the url. It can be a two-part list with:  * recipientEventStatusCode - The recipient status, this can be Sent, Delivered, Completed, Declined, AuthenticationFailed, and AutoResponded. * includeDocuments - When set to **true**, the envelope time zone information is included in the message. | [optional] 
**currentRoutingOrder** | **String** |  | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


