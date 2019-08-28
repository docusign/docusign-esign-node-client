# The Official DocuSign Node Client

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[NPM module](https://www.npmjs.com/package/docusign-esign) that wraps the <a href="https://www.docusign.com">DocuSign</a> API

[Documentation about the DocuSign API](https://developers.docusign.com/)

[Documentation about this package](http://docusign.github.io/docusign-node-client)
<!---
[Changelog](./CHANGELOG.md)
commented out
-->


<p><h3>&#x26A0;&#xFE0F; The current release is <code>the first version to use <a href=“https://developers.docusign.com/esign-rest-api“>eSignature API v2.1</a></code>. The GA version will be released soon.</h3></p><p><h3>All previous releases use eSignature API v2 and they no longer will be actively maintained.</p>

## Requirements
- Node 4
- Free [Developer Sandbox](https://go.docusign.com/sandbox/productshot/?elqCampaignId=16531)

## Compatibility

- Node 4+

## Note:

This open-source SDK is provided for cases where you would like to make additional changes that the SDK does not provide out-of-the-box. If you simply want to use the SDK with any of the examples shown in the [Developer Center](https://developers.docusign.com/esign-rest-api/code-examples), follow the installation instructions below.

## Installation

## NPM:

1. Open your preferred command-line console, then navigate to your project.
2. In the console, type the following commands:  
   **npm install docusign-esign -save**


## Dependencies

This client has the following external dependencies:

### Minimum:

- DocuSign-eSign
- Superagent 3.8.2

### Optional:

- Async v2.6.2
- Jsonwebtoken v8.2.0
- Passport-oauth2
- Path

## Code Examples

### Launchers

DocuSign provides a sample application referred to as a [Launcher](https://github.com/docusign/eg-03-node-auth-code-grant). The Launcher contains a set of 18 common use cases and associated source files. These examples use DocuSign&#39;s [Authorization Code Grant](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-code-grant) flow.

### Proof-of-concept applications

If your goal is to create a proof-of-concept application, DocuSign provides a set of [Quick Start](https://developers.docusign.com/esign-rest-api/code-examples/quickstart-overview) examples. The Quick Startexamples are meant to be used with DocuSign&#39;s [OAuth Token Generator](https://developers.docusign.com/oauth-token-generator), which will allow you to generate tokens for the Demo/Sandbox environment only. These tokens last for eight hours and will enable you to build your proof-of-concept application without the need to fully implement an OAuth solution.

## OAuth Implementations

For details regarding which type of OAuth grant will work best for your DocuSign integration, see the [REST API Authentication Overview](https://developers.docusign.com/esign-rest-api/guides/authentication) guide located on the [DocuSign Developer Center](https://developers.docusign.com/).

For security purposes, DocuSign recommends using the [Authorization Code Grant](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-code-grant) flow.

There are other use-case scenarios, such as **single-page applications** (SPA) that use **Cross-Origin Resource Sharing** (CORS), or where there may not be a user to interact with your Service Account. For these use cases, DocuSign also supports [JWT](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-jsonwebtoken) and [Implicit](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-implicit) grants. For Ccode eExamples, see the links below:

- [JWT (JSON Web Token)](https://github.com/docusign/eg-01-node-jwt)
- Implicit Grant (coming soon)

## Support

Log issues against this client through GitHub. We also have an [active developer community on Stack Overflow](http://stackoverflow.com/questions/tagged/docusignapi).

## License

The DocuSign Node Client is licensed under the [MIT License](https://github.com/docusign/docusign-node-client/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/docusign-esign.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-esign
[downloads-image]: https://img.shields.io/npm/dm/docusign-esign.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-esign
[travis-image]: https://img.shields.io/travis/docusign/docusign-node-client.svg?style=flat
[travis-url]: https://travis-ci.org/docusign/docusign-node-client
[coveralls-image]: https://coveralls.io/repos/github/docusign/DocuSign-Node-Client/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/docusign/DocuSign-Node-Client?branch=master
