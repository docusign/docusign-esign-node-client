# The Official DocuSign eSignature Node Client SDK

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[NPM module](https://www.npmjs.com/package/docusign-esign) that wraps the <a href="https://www.docusign.com">DocuSign</a> API

[Documentation about the DocuSign API](https://developers.docusign.com/)

[Documentation about this package](http://docusign.github.io/docusign-esign-node-client)
<!---
[Changelog](./CHANGELOG.md)
commented out
-->

## Requirements
*   Node 4
*   Free [developer account](https://go.docusign.com/sandbox/productshot/?elqCampaignId=16531)

## Compatibility
*   Node 4+

## Installation
This SDK is provided as open source, which enables you to customize its functionality to suit your particular use case. To do so, download or clone the repository. If the SDK’s given functionality meets your integration needs, or if you’re working through our [code examples](https://developers.docusign.com/docs/esign-rest-api/how-to/) from the [DocuSign Developer Center](https://developers.docusign.com/), you merely need to install it by following the instructions below.

### NPM:
1. Open your preferred command-line console, then navigate to your project.
2. In the console, type the following commands: \
npm install docusign-esign -save

## Dependencies
This client has the following external dependencies:

**Minimum:**
*   DocuSign-eSign
*   Superagent 3.8.2

**Optional:**
*   Async v2.6.2
*   Jsonwebtoken v8.2.0
*   Passport-oauth2
*   Path

## Code examples

You can find on our GitHub a self-executing package of code examples for the eSignature C# SDK, called a [Launcher](https://github.com/docusign/code-examples-node/blob/master/README.md), that demonstrates common use cases. You can also download a version preconfigured for your DocuSign developer account from [Quickstart](https://developers.docusign.com/docs/esign-rest-api/quickstart/). These examples can use either the [Authorization Code Grant](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-code-grant) or [JSON Web Token (JWT)](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-jsonwebtoken) authentication workflows.

## OAuth implementations
For details regarding which type of OAuth grant will work best for your DocuSign integration, see [Choose OAuth Type](https://developers.docusign.com/platform/auth/choose/) in the [DocuSign Developer Center](https://developers.docusign.com/).

For security purposes, DocuSign recommends using the [Authorization Code Grant](https://developers.docusign.com/esign-rest-api/guides/authentication/oauth2-code-grant) flow.

## Support
Log issues against this client through GitHub. We also have an [active developer community on Stack Overflow](http://stackoverflow.com/questions/tagged/docusignapi).

## License
The DocuSign eSignature Node Client SDK is licensed under the [MIT License](https://github.com/docusign/docusign-node-client/blob/master/LICENSE).

### Additional resources
*   [DocuSign Developer Center](https://developers.docusign.com/)
*   [DocuSign API on Twitter](https://twitter.com/docusignapi)
*   [DocuSign For Developers on LinkedIn](https://www.linkedin.com/showcase/docusign-for-developers/)
*   [DocuSign For Developers on YouTube](https://www.youtube.com/channel/UCJSJ2kMs_qeQotmw4-lX2NQ)

[npm-image]: https://img.shields.io/npm/v/docusign-esign.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-esign
[downloads-image]: https://img.shields.io/npm/dm/docusign-esign.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-esign
[travis-image]: https://travis-ci.com/docusign/docusign-esign-node-client.svg?branch=master
[travis-url]: https://travis-ci.com/docusign/docusign-esign-node-client
[coveralls-image]: https://coveralls.io/repos/github/docusign/DocuSign-Node-Client/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/docusign/DocuSign-Node-Client?branch=master
