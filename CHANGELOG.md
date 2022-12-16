# DocuSign Node Client Changelog
See [DocuSign Support Center](https://support.docusign.com/en/releasenotes/) for Product Release Notes.


## [v5.20.0] - eSignature API v2.1-22.3.01.00 - 2022-11-22
### Changed
- Added support for version v2.1-22.3.01.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.19.0] - eSignature API v2.1-22.3.00.00 - 2022-09-07
### Changed
- Added support for version v2.1-22.3.00.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.18.0] - eSignature API v2.1-22.2.00.00 - 2022-06-23
### Changed
- Added support for version v2.1-22.2.00.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.17.0] - eSignature API v2.1-22.1.02.00 - 2022-05-18
### Changed
- Added support for version v2.1-22.1.02.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.16.0] - eSignature API v2.1-22.1.01.00 - 2022-04-07
### Changed
- Added support for version v2.1-22.1.01.00 of the DocuSign ESignature API.
- Updated the SDK release version.

### Breaking
- Following models are renamed

    - `ScheduledSendingApiModel` is renamed to `ScheduledSending`
    - `DelayedRoutingApiModel` is renamed to `DelayedRouting`

## [v5.15.0] - eSignature API v2.1-21.4.02.00 - 2022-02-08
### Changed
- Added support for version v2.1-21.4.02.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.14.0] - eSignature API v2.1-21.4.01.00 - 2022-01-06
### Changed
- Added support for version v2.1-21.4.01.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.14.0-rc1] - eSignature API v2.1-21.4.00.00 - 2021-12-13
### Changed
- Added support for version v2.1-21.4.00.00 of the DocuSign ESignature API.
- Updated the SDK release version.
### Security
- Version bump for passport-oauth2: [CVE-2021-41580](https://nvd.nist.gov/vuln/detail/CVE-2021-41580).

## [5.13.0] - ESignature API v2.1-21.3.02.00 - 2021-10-29
### Changed
- Added support for version v2.1-21.3.02.00 of the DocuSign ESignature API.
- Updated the SDK release version.


## [5.13.0-rc1] - ESignature API v2.1-21.3.00.00 - 2021-09-20
### Changed
- Added support for version v2.1-21.3.00.00 of the DocuSign ESignature API.
- Updated the SDK release version.


## [v5.12.0] - ESignature API v2.1-21.2.02.00 - 2021-09-02
### Changed
- Added support for version v2.1-21.2.02.00 of the DocuSign ESignature API.
- Updated the SDK release version.

## [v5.11.1] - eSignature API v2.1-21.2.00.00 - 2021-07-29
### Changed
- Updated Get Form Data unit test.
- Updated Travis-CI badge in README.md

## [v5.11.0] - eSignature API v2.1-21.2.00.00
### Changed
- Added support for version v2.1-21.2.00.00 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.10.0] - eSignature API v2.1-21.1.02.00
### Breaking
- Removed methods `getAccountSettingsExport`,`getSealProviders` from Accounts.
- Removed methods `createConnectSecret`,`deleteConnectSecret`,`generateConnectSecret`,`getConnectSecrets` from Connect.
- Removed methods `getDynamicSystemSettings`,`getTemplateInfo`,`getApplianceInfo`,`getAccount`,`getCustomFields`,`deleteCustomFieldsV2`,`getDocumentPages`,`getImage`,`getLocalePolicy`,`updatePageInfo`,`createPageInfo`,`deletePageInfo`,`updatePdf`,`getPdf`,`getPdfBlob`,`updatePdfBlob`,`createPdfBlob`,`updateRecipientDeniedDocumentCopy`,`deleteRecipientDeniedDocumentCopy`,`getSignerAttachment`,`deleteSignerAttachment`, from Envelopes.
- Removed methods `completeSignHash`,`getUserInfo`,`healthCheck`,`signHashSessionInfo`,`updateTransaction` from TrustServiceProviders.
- Removed methods `getUserListExport` from Users.

### Added
- Added new methods `getBulkSendBatchEnvelopes` to BulkEnvelopes.

### Changed
- Added support for version v2.1-21.1.02.00 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.9.0] - eSignature API v2.1-21.1.01.03
### Changed
- Added support for version v2.1-21.1.01.03 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.8.1] - eSignature API v2.1-20.3.01
### Changed
- Added support for version v2.1-20.3.01 of the DocuSign eSignature API.
- Updated the SDK release version.
### Fixed 
- DCM-3866, Added support for updateBrandResourcesByContentType function to take in file to upload.
- DCM-3369, Updated ApiClient to use an empty JSON object if the body is null.
- DCM-4614, Fixed out of memory issue when deserializing large files.

## [v5.7.0] - eSignature API v2.1-20.3.00
### Changed
- Added support for version v2.1-20.3.00 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.6.0] - eSignature API v2.1-20.2.02.02
### Changed
- Added support for version v2.1-20.2.02.02 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.5.0] - eSignature API v2.1-20.2.00
### Changed
- Added support for version v2.1-20.2.00 of the DocuSign eSignature API.
- Updated the SDK release version.
- Added properties `batchSize`, `queueLimit`, and `totalQueued` to bulk send response.

## [v5.4.0] - eSignature API v2.1-20.1.02
### Changed
- Added support for version v2.1-20.1.02 of the DocuSign eSignature API.
- Updated the SDK release version.

## [v5.3.0] - eSignature API v2.1-20.1.00
### Changed

- Added support for version v2.1-20.1.00 of the DocuSign eSignature API.
- Updated the SDK release version.

### Added

- Added the new property `copyRecipientData` to envelopes. When set to **true**, the information that recipients enter is retained when you clone an envelope. For example, if you resend an envelope that was declined or voided after one or more recipients entered data, that data is retained. Note that the new account UI setting `enableEnvelopeCopyWithData` must be enabled for the account.
- Added `RecipientIdentityInputOption` and `inputOptions` to `RecipientIdentityVerification.js`: Reserved for DocuSign.

### Deleted

- Deleted the GET methods for account seals providers, which returned the seals for an account.

## [v5.2.0] - eSignature API v2.1-19.4.01
### Changed
- The SDK now supports version 19.4.01 of the DocuSign eSignature API.
- SDK Release Version updated.

## [v5.1.0] - eSignature API v2.1-19.2.02
### Changed
- The SDK now supports version 19.2.02 of the DocuSign eSignature API.
- SDK Release Version updated.

## [v5.0.2] - 2019-07-12
### Security
- [CVE-2019-10744](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10744).

## [v5.0.1] - 2019-06-25
### Removed
- Removed hardcoded test config values from test cases. Config values are now being read from env variables.

## [v5.0.0] - eSignature API v2.1-19.1.02
### BREAKING
- The SDK now supports version v2.1-19.1.02 of the DocuSign eSignature API.
- SDK Release Version updated.

## [v4.3.0] - eSignature API v19.1.02
### Changed
- The SDK now supports version 19.1.02 of the DocuSign eSignature API.
- SDK Release Version updated.
### Added
- Cache-control and Pragma headers to the oAuth calls. (DCM-2244)
- *tabGroupLabels* field to all Tabs models
- Witnesses field to all Recipients models
- Models for Smart Sections feature
- Initial support of HMAC to DocuSign Connect
### Fixed
- A bug where API response for 'moveEnvelopes' was improperly documented as a non-undefined value. (DCM-3085)
- A bug where dateTabs and numberTabs were not being able to be initialized by the docusign.Tabs object. (DCM-3226)
 
##[v4.2.2] eSignature API v18.4.02
### Added
- Support for the **latest DocuSign API** (18.4.02.00).

### Updated
- updateBrandLogoByType, which enables you to upload a brand logo.

##[v4.2.0] eSignature API v18.3.02
### Fixed
-	Fixed a problem with the BulkEnvelopesApi.UpdateRecipients() method that could cause it to return a "Value cannot be null.\r\nParameter name: stream" error rather than add bulk recipients to an envelope. (DCM-2957)
-	Fixed a problem with the EnvelopesApi.listStatus methods that could cause them to ignore sets of envelope IDs passed in to get statuses for specific envelopes. (DCM-2956)
-	Fixes a a typo in a an ApiClient dependency "Oauth.js" to "OAuth.js". (DCM-3021)
### Changed
-	The SDK now supports version 18.3.02 of the DocuSign eSignature API.
### Added
-	Node SDK methods have been updated to use a promise pattern. The methods will return promise objects, which represent the eventual completed output of the method, unless a specific callback is provided in the method call. (DCM-2204)

## [v4.1.0] - eSignature API v18.3.00 - 9/13/2018
### Changed
- The `getOAuthBasePath()` method is now an accessor function for the new `oAuthBasePath` property, rather than being derived from `basePath`.
- Updated the swagger spec to version 18.3.00.00
### Added
-	Created a new `ApiClient` property, `oAuthBasePath`. This property is retrieved using `getOAuthBasePath()` and set by **setOAuthBasePath()**. DCM-2834
-	Created a new `docusign.ApiClient.OAuth.BasePath` collection that holds base path data for the following environments: `STAGE, DEMO, PRODUCTION`.
-	Created a new `docusign.ApiClient.RestApi.BasePath` collection that holds rest API base paths for the following environments: `STAGE, DEMO, PRODUCTION`.	These recorded path values can be accessed using an instantiated `docusign.apiClient` object.
-	Added an `opts` parameter that allows you to specify parameter values when instantiating an `apiClient`. The `opts` parameter currently supports passing in `basePath` and `oAuthBasePath` values. If not set during instantiation of an `apiClient`, they default to their production values.
- An	`Organization` value has been added to the account model. DCM-2710
### Deprecated
- The `configureJWTAuthorizationFlow` method is now deprecated. Please use `requestJWTUserToken` instead, which takes the private key as byte array or a Stream. DCM-2765

## [v4.0.2] - eSignature API v18.1.02 - 7/3/2018
### Changed
- All SDK methods have been updated such that the `opts` parameter may now contain the callback, making the other opts parameters optional, and it has been renamed `optsOrCallback`. 
This resolves the breaking change for applications upgrading from version 3.X.X to 4.X.X.
- The OAuth authorization code grant and implicit grant code examples in the readme.md file have been updated to use the addDefaultHeader method. Each API client needs this header to access DocuSign APIs.
 
## [4.0.1] - 2018-06-25
### Fixed
- Issues [`#101`](https://github.com/docusign/DocuSign-Node-Client/issues/101) and [`#66`](https://github.com/docusign/DocuSign-Node-Client/issues/66)
- listTabs now maps to an array of List instead of array of Array
 
## [4.0.0] - 2018-06-06
### BREAKING
- This update has some breaking changes as certain api calls no longer accept query parameters. 
- Due to this, their respective SDK method signatures of changed
For example:
  - EnvelopesApi.listDocuments(accountId, envelopeId, opts, callback) 
  - has changed to:
  - EnvelopesApi.listDocuments(accountId, envelopeId, callback) 

### Changed
- Updated the package with the latest API release.

## [3.3.0] - 2018-06-04
### Added
- Support for OAuth Implicit Grant.
- Support for OAuth Get Use Info.

## [3.2.0] - 2017-08-01
### Added
- Support for DocuSign JWT OAuth for service integration (2-legged authentication)
 
## [3.1.0] - 2017-06-17
### Added
- Support for DocuSign OAuth

## [3.0.0] - 2017-03-10
### BREAKING
- The SDK now supports the**Full and latest DocuSign API support**(17.1.00.00). NO MORE OMITTED ENDPOINTS.
- **Getter and setter methods of all models' fields were removed.** Direct access to models' fields is now required. See the code snippet in README.md and test/SdkUnitTests.js for example.
- Added optional `opts` to several methods across different APIs. Old client code might need to be updated prior to using 3.0.0 and above.
- Methods that accept optional parameters, defined as `opts`, now accept plain javascript objects only. For instance AuthenticationApi.login({'api_password': true}) will return a fake password that can be used in subsequent API calls instead of the original password.

### Removed
- All Optional data structures that were used as optional parameters for some API methods (in the form of**Docusign.XxxApi.doSomethingOptions**). Use javascript plain objects instead.

### Added
- **Complete and proper SDK [Documentation](http://docusign.github.io/docusign-node-client/module-index.html), including detailed information and links about all modules and methods of the SDK.**
- New test case: create a DocuSign template.

### Fixed
- Issue [`#52`](https://github.com/docusign/DocuSign-Node-Client/issues/52): TypeError: self.envelopeTemplateDefinition.constructFromObject is not a function.

### Changed
- Updated the package with the latest API release.

## [2.1.0] - 2017-01-24
### Added
- Documentation about several Authentication methods supported by DocuSign API.
- Changelog to keep track of release highlights.
### Changed
- Support for DocuSign Core release 16.1.00.00.
- Code snippet to use base URL from the login call. Required for integrations when they go live.

### Fixed
- Issue [`#47`](https://github.com/docusign/DocuSign-Node-Client/issues/47): Some DocuSign API calls don't like null as object property value.

## [2.0.3] - 2016-03-23
### Added
- TravisCI automatic testing.

### Changed
- Updated the package to a newer API release.
- Switched to MIT license.
- Updated documentation on README.
