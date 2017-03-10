# Change Log
All notable changes to this project will be documented in this file.

See [DocuSign Support Center](https://support.docusign.com/en/releasenotes/) for Product Release Notes.

## [Unreleased]
More information later on.

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
