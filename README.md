# The Official Docusign eSignature Node Client SDK

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

The Docusign SDK makes integrating Docusign into your apps and websites a seamless experience.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
	* [Version Information](#versionInformation)
	* [Requirements](#requirements)
	* [Compatibility](#compatibility)
	* [NPM](#npm)	
- [Dependencies](#dependencies)
- [API Reference](#apiReference)
- [Code Examples](#codeExamples)
- [OAuth Implementations](#oauthImplementations)
- [Changelog](#changeLog)
- [Support](#support)
- [License](#license)
- [Additional Resources](#additionalResources)

<a id="introduction"></a>
## Introduction
Integrate eSignatures into your application in minutes. The secure and award-winning Docusign eSignature API makes requesting signatures, automating forms, and tracking documents directly from your app easy.

<a id="installation"></a>
## Installation
This client SDK is provided as open source, which enables you to customize its functionality to suit your particular use case. To do so, download or clone the repository. If the SDK’s given functionality meets your integration needs, or if you’re working through our [code examples](https://developers.docusign.com/docs/esign-rest-api/how-to/) from the [Docusign Developer Center](https://developers.docusign.com/), you merely need to install it by following the instructions below.

<a id="versionInformation"></a>
### Version Information
- **API version**: v2.1
- **Latest SDK version**: 8.0.1

<a id="requirements"></a>
## Requirements
*   Node 12
*   Free [developer account](https://go.docusign.com/o/sandbox/?postActivateUrl=https://developers.docusign.com/)

<a id="compatibility"></a>
## Compatibility
*   Node 12+

<a id="npm"></a>
### NPM:
1. Open your preferred command-line console, then navigate to your project.
2. In the console, type the following commands: \
npm install docusign-esign -save

<a id="dependencies"></a>
## SDK Dependencies
This client has the following external dependencies:

**Minimum:**
*   docusign-esign
*   Axios v1.6.8+
*   @devhigley/parse-proxy v1.0.3+
*   Csv-stringify v1.0.0+
*   Jsonwebtoken v9.0.0+
*   Passport-oauth2 v1.6.1+
*   Safe-buffer v5.1.2+

<a id="apiReference"></a>
## API Reference
You can refer to the API reference [here](https://developers.docusign.com/docs/esign-rest-api/reference/).

<a id="codeExamples"></a>
## Code examples
Explore our GitHub repository for the [Launcher](https://github.com/docusign/code-examples-node/), a self-executing package housing code examples for the eSignature Node SDK. This package showcases several common use cases and their respective source files. Additionally, you can download a version preconfigured for your Docusign developer account from [Quickstart](https://developers.docusign.com/docs/esign-rest-api/quickstart/). These examples support both the [Authorization Code Grant](https://developers.docusign.com/platform/auth/authcode/) and [JSON Web Token (JWT)](https://developers.docusign.com/platform/auth/jwt/) authentication workflows.

<a id="oauthImplementations"></a>
## OAuth implementations
For details regarding which type of OAuth grant will work best for your Docusign integration, see [Choose OAuth Type](https://developers.docusign.com/platform/auth/choose/) in the [Docusign Developer Center](https://developers.docusign.com/).

For security purposes, Docusign recommends using the [Authorization Code Grant](https://developers.docusign.com/platform/auth/authcode/) flow.

<a id="changeLog"></a>
## Changelog
You can refer to the complete changelog [here](https://github.com/docusign/docusign-esign-node-client/blob/master/CHANGELOG.md).

<a id="support"></a>
## Support
Log issues against this client SDK through GitHub. You can also reach out to us through [Docusign Community](https://community.docusign.com/developer-59) and [Stack Overflow](https://stackoverflow.com/questions/tagged/docusignapi).

<a id="license"></a>
## License
The Docusign eSignature Node Client SDK is licensed under the [MIT License](https://github.com/docusign/docusign-esign-node-client/blob/master/LICENSE).

<a id="additionalResources"></a>
### Additional resources
*   [Docusign Developer Center](https://developers.docusign.com/)
*   [Docusign API on Twitter](https://twitter.com/docusignapi)
*   [Docusign For Developers on LinkedIn](https://www.linkedin.com/showcase/docusign-for-developers/)
*   [Docusign For Developers on YouTube](https://www.youtube.com/channel/UCJSJ2kMs_qeQotmw4-lX2NQ)

[npm-image]: https://img.shields.io/npm/v/docusign-esign.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-esign
[downloads-image]: https://img.shields.io/npm/dm/docusign-esign.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-esign