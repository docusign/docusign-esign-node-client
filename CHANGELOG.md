# DocuSign Node Client Changelog

See [DocuSign Support Center](https://support.docusign.com/en/releasenotes/) for Product Release Notes.

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
