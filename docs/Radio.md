# Docusign.Radio

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**value** | **String** | Specifies the value of the tab.  | [optional] 
**selected** | **String** | When set to **true**, the radio button is selected. | [optional] 
**tabId** | **String** | The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].      | [optional] 
**required** | **String** | When set to **true**, the signer is required to fill out this tab | [optional] 
**locked** | **String** | When set to **true**, the signer cannot change the data of the custom tab. | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


