# Docusign.LockInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lockedByUser** | [**UserInfo**](UserInfo.md) |  | [optional] 
**lockedByApp** | **String** | Specifies the friendly name of  the application that is locking the envelope. | [optional] 
**lockedUntilDateTime** | **String** |  | [optional] 
**lockDurationInSeconds** | **String** | Sets the time, in seconds, until the lock expires when there is no activity on the envelope.  If no value is entered, then the default value of 300 seconds is used. The maximum value is 1,800 seconds.  The lock duration can be extended.  | [optional] 
**lockType** | **String** |  | [optional] 
**useScratchPad** | **String** | Reserved for future use.  Indicates whether a scratchpad is used for editing information.   | [optional] 
**lockToken** | **String** |  | [optional] 
**errorDetails** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 


