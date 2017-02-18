# Docusign.InitialHere

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Specifies the tool tip text for the tab. | [optional] 
**tabLabel** | **String** | The label string associated with the tab. | [optional] 
**scaleValue** | **Object** |  Sets the size for the InitialHere tab. It can be value from 0.5 to 1.0, where 1.0 represents full size and 0.5 is 50% size. | [optional] 
**optional** | **String** |  | [optional] 
**documentId** | **String** | Specifies the document ID number that the tab is placed on. This must refer to an existing Document&#39;s ID attribute. | [optional] 
**recipientId** | **String** | Unique for the recipient. It is used by the tab element to indicate which recipient is to sign the Document. | [optional] 
**pageNumber** | **String** | Specifies the page number on which the tab is located. | [optional] 
**xPosition** | **String** | This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position. | [optional] 
**yPosition** | **String** | This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position. | [optional] 
**anchorString** | **String** | Anchor text information for a radio button. | [optional] 
**anchorXOffset** | **String** | Specifies the X axis location of the tab, in achorUnits, relative to the anchorString. | [optional] 
**anchorYOffset** | **String** | Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString. | [optional] 
**anchorUnits** | **String** | Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches. | [optional] 
**anchorIgnoreIfNotPresent** | **String** | When set to **true**, this tab is ignored if anchorString is not found in the document. | [optional] 
**anchorCaseSensitive** | **String** | When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**. | [optional] 
**anchorMatchWholeWord** | **String** | When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**. | [optional] 
**anchorHorizontalAlignment** | **String** | Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**. | [optional] 
**tabId** | **String** | The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].      | [optional] 
**templateLocked** | **String** | When set to **true**, the sender cannot change any attributes of the recipient. Used only when working with template recipients.  | [optional] 
**templateRequired** | **String** | When set to **true**, the sender may not remove the recipient. Used only when working with template recipients. | [optional] 
**conditionalParentLabel** | **String** | For conditional fields this is the TabLabel of the parent tab that controls this tab&#39;s visibility. | [optional] 
**conditionalParentValue** | **String** | For conditional fields, this is the value of the parent tab that controls the tab&#39;s visibility.  If the parent tab is a Checkbox, Radio button, Optional Signature, or Optional Initial use \&quot;on\&quot; as the value to show that the parent tab is active.  | [optional] 
**customTabId** | **String** | The DocuSign generated custom tab ID for the custom tab to be applied. This can only be used when adding new tabs for a recipient. When used, the new tab inherits all the custom tab properties. | [optional] 
**mergeField** | [**MergeField**](MergeField.md) |  | [optional] 
**status** | **String** | Indicates the envelope status. Valid values are:  * sent - The envelope is sent to the recipients.  * created - The envelope is saved as a draft and can be modified and sent later. | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


