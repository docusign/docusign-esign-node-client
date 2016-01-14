# Changelog

## Unreleased
  - [`c6a342e`](https://github.com/docusign/DocuSign-Node-Client/commit/c6a342e) add changelog
  - [`60a2c6e`](https://github.com/docusign/DocuSign-Node-Client/commit/60a2c6e) Update roadmap.md
  - [`dd7bb03`](https://github.com/docusign/DocuSign-Node-Client/commit/dd7bb03) add roadmap
  - [`c278636`](https://github.com/docusign/DocuSign-Node-Client/commit/c278636) update readme example fix #37

## `69fee21` 7.1.0
  - [`bf378c5`](https://github.com/docusign/DocuSign-Node-Client/commit/bf378c5) ignore the callback case
  - [`fdd6896`](https://github.com/docusign/DocuSign-Node-Client/commit/fdd6896) Merge pull request #36 from docusign/recipienttabs
  - [`d75ff66`](https://github.com/docusign/DocuSign-Node-Client/commit/d75ff66) (origin/recipienttabs) adopted a few stylistic suggestions from CJ.
  - [`afbef66`](https://github.com/docusign/DocuSign-Node-Client/commit/afbef66) (recipienttabs) removed debugging log statements
  - **NEW** [`d8d827d`](https://github.com/docusign/DocuSign-Node-Client/commit/) added a parameter to getRecipients to add tabs for recipients
  - [`0c24f91`](https://github.com/docusign/DocuSign-Node-Client/commit/0c24f91) added jsconfig.json file to help with ES6 support in VS Code

## `e686289` (tag: v7.0.4) 7.0.4
  - More testing, plus coverage and little badges to denote coverage
  - [`441a99f`](https://github.com/docusign/DocuSign-Node-Client/commit/441a99f) use nyc over istanbul since it works with subprocesses
  - [`29a6c87`](https://github.com/docusign/DocuSign-Node-Client/commit/29a6c87) update docs
  - [`5afd8f7`](https://github.com/docusign/DocuSign-Node-Client/commit/5afd8f7) update readme and remove sample-config
  - [`2ea10bd`](https://github.com/docusign/DocuSign-Node-Client/commit/2ea10bd) Merge pull request #35 from docusign/more-test-rewrite
  - [`4c77396`](https://github.com/docusign/DocuSign-Node-Client/commit/4c77396) add shields
  - [`97c1b5b`](https://github.com/docusign/DocuSign-Node-Client/commit/97c1b5b) (origin/more-test-rewrite, more-test-rewrite) refactor getSignedDocuments to use dsUtils.makeRequest
  - [`c746bfb`](https://github.com/docusign/DocuSign-Node-Client/commit/c746bfb) attach status codes above 400 to error details
  - [`a4ce68c`](https://github.com/docusign/DocuSign-Node-Client/commit/a4ce68c) use named fn
  - [`e5ff433`](https://github.com/docusign/DocuSign-Node-Client/commit/e5ff433) ignore
  - [`2988158`](https://github.com/docusign/DocuSign-Node-Client/commit/2988158) add getSignerViewMissingClientUserId test
  - [`f48439b`](https://github.com/docusign/DocuSign-Node-Client/commit/f48439b) store userIds in test-config
  - [`a309b60`](https://github.com/docusign/DocuSign-Node-Client/commit/a309b60) return rejected promise if no clientUserId
  - [`3dc29ce`](https://github.com/docusign/DocuSign-Node-Client/commit/3dc29ce) add test for getAuthInfoError
  - [`7846646`](https://github.com/docusign/DocuSign-Node-Client/commit/7846646) add test for sendEnvelopeMissingSource
  - [`4efc8f3`](https://github.com/docusign/DocuSign-Node-Client/commit/4efc8f3) fix an ignore
  - [`f5fd86b`](https://github.com/docusign/DocuSign-Node-Client/commit/f5fd86b) lowercase the fileSource.type
  - [`de24901`](https://github.com/docusign/DocuSign-Node-Client/commit/de24901) more informative error message for missing file source
  - [`f68f699`](https://github.com/docusign/DocuSign-Node-Client/commit/f68f699) throw error if no file source is given
  - [`09322de`](https://github.com/docusign/DocuSign-Node-Client/commit/09322de) add test for [getView] sign action with showSignAndReturn
  - [`f6bdf57`](https://github.com/docusign/DocuSign-Node-Client/commit/f6bdf57) add coverage ignores for tedious bits
  - [`9064fe9`](https://github.com/docusign/DocuSign-Node-Client/commit/9064fe9) add tests for getSignature and getEmptySignature
  - [`bad480f`](https://github.com/docusign/DocuSign-Node-Client/commit/bad480f) dont throw error if no signatures found
  - [`6ef38b2`](https://github.com/docusign/DocuSign-Node-Client/commit/6ef38b2) add sendTemplate test
  - [`894dc54`](https://github.com/docusign/DocuSign-Node-Client/commit/894dc54) add getSignerView test
  - [`5678d85`](https://github.com/docusign/DocuSign-Node-Client/commit/5678d85) add setEnvelopeStatus test
  - [`8d28ee8`](https://github.com/docusign/DocuSign-Node-Client/commit/8d28ee8) add sendEnvelope test
  - [`7074d4f`](https://github.com/docusign/DocuSign-Node-Client/commit/7074d4f) add getView test
  - [`2510f0b`](https://github.com/docusign/DocuSign-Node-Client/commit/2510f0b) add getEnvelopeList test
  - [`7e2bcc7`](https://github.com/docusign/DocuSign-Node-Client/commit/7e2bcc7) add tests to cover error cases for dsUtils.makeRequest
  - [`b57b066`](https://github.com/docusign/DocuSign-Node-Client/commit/b57b066) ignore isDebugLogEnabled if
  - [`571b572`](https://github.com/docusign/DocuSign-Node-Client/commit/571b572) remove unused lodash.clone
  - [`00d6bb6`](https://github.com/docusign/DocuSign-Node-Client/commit/00d6bb6) fix the docusign.spec to work with new internal state
  - [`adb5089`](https://github.com/docusign/DocuSign-Node-Client/commit/adb5089) ignore some logic branches
  - [`51b0d7a`](https://github.com/docusign/DocuSign-Node-Client/commit/51b0d7a) move things to shared internal state
  - [`2876a3d`](https://github.com/docusign/DocuSign-Node-Client/commit/2876a3d) use util.inspect instead of stringify for cleaner output
  - [`26ab18f`](https://github.com/docusign/DocuSign-Node-Client/commit/26ab18f) remove dead code branches
  - [`7062db0`](https://github.com/docusign/DocuSign-Node-Client/commit/7062db0) ignore DocuSignError if
  - [`e7954cc`](https://github.com/docusign/DocuSign-Node-Client/commit/e7954cc) add docusign.spec to increase coverage
  - [`143001d`](https://github.com/docusign/DocuSign-Node-Client/commit/143001d) remove old mocha opts
  - [`06a47e5`](https://github.com/docusign/DocuSign-Node-Client/commit/06a47e5) add runnable callback examples from old walkthrough tests
  - [`7dbeb97`](https://github.com/docusign/DocuSign-Node-Client/commit/7dbeb97) return plain objects
  - [`47faa52`](https://github.com/docusign/DocuSign-Node-Client/commit/47faa52) dont wrap the already wrapped promise
  - [`557bb5b`](https://github.com/docusign/DocuSign-Node-Client/commit/557bb5b) use Bluebird.try to catch all the synchronous exceptions
  - [`01d53ad`](https://github.com/docusign/DocuSign-Node-Client/commit/01d53ad) update _createEnvelope jsdocs
  - [`ea29915`](https://github.com/docusign/DocuSign-Node-Client/commit/ea29915) move test-config to top-level

## 7.0.3
  - Notably, we started to care about testing again which had been neglected for a few version now
  - [`819470e`](https://github.com/docusign/DocuSign-Node-Client/commit/819470e) Merge pull request #34 from docusign/test-rewrite
  - [`aa27632`](https://github.com/docusign/DocuSign-Node-Client/commit/aa27632) (origin/test-rewrite, test-rewrite) add ci
  - [`3d26ae9`](https://github.com/docusign/DocuSign-Node-Client/commit/3d26ae9) clean up npm scripts
  - [`5a79001`](https://github.com/docusign/DocuSign-Node-Client/commit/5a79001) add test coverage script
  - [`d5360b6`](https://github.com/docusign/DocuSign-Node-Client/commit/d5360b6) update test script
  - [`70c37d7`](https://github.com/docusign/DocuSign-Node-Client/commit/70c37d7) remove old component tests
  - [`842f9db`](https://github.com/docusign/DocuSign-Node-Client/commit/842f9db) move new tests into test folder
  - [`d4a1bb8`](https://github.com/docusign/DocuSign-Node-Client/commit/d4a1bb8) rename before/after functions so they read better in aggregated output
  - [`2089db1`](https://github.com/docusign/DocuSign-Node-Client/commit/2089db1) port over users tests
  - [`5d42b53`](https://github.com/docusign/DocuSign-Node-Client/commit/5d42b53) port over folders tests
  - [`7d86b59`](https://github.com/docusign/DocuSign-Node-Client/commit/7d86b59) fix infinite loop in getEnvelopes
  - [`a70b0ed`](https://github.com/docusign/DocuSign-Node-Client/commit/a70b0ed) port over envelopes tests
  - [`620daa0`](https://github.com/docusign/DocuSign-Node-Client/commit/620daa0) use a proper uuid solution
  - [`9fa8045`](https://github.com/docusign/DocuSign-Node-Client/commit/9fa8045) stop storing auth info
  - [`410e265`](https://github.com/docusign/DocuSign-Node-Client/commit/410e265) begin re-write of tests with admin.spec.js
  - [`2a5baa5`](https://github.com/docusign/DocuSign-Node-Client/commit/2a5baa5) ignore auth-info
  - [`9a66c7a`](https://github.com/docusign/DocuSign-Node-Client/commit/9a66c7a) throw a catchable error if we can parse baseUrl
  - [`b8ca37a`](https://github.com/docusign/DocuSign-Node-Client/commit/b8ca37a) add ava and nock for testing
  - [`4a9ee85`](https://github.com/docusign/DocuSign-Node-Client/commit/4a9ee85) Update README.md

## 7.0.2
  - [`8887bd8`](https://github.com/docusign/DocuSign-Node-Client/commit/8887bd8) return a promise directly from sendEnvelope & _createEnvelope
  - [`26f87c1`](https://github.com/docusign/DocuSign-Node-Client/commit/26f87c1) update keywords and description to denote our promise support

## 7.0.1
  - [`d635421`](https://github.com/docusign/DocuSign-Node-Client/commit/d635421) move async to devDependencies since core code does not depend on it
  - [`782a3d8`](https://github.com/docusign/DocuSign-Node-Client/commit/782a3d8) refactor sendMultipart to use promises internally and return a promise
  - [`2a98068`](https://github.com/docusign/DocuSign-Node-Client/commit/2a98068) remove dependence on async.whilst in folders.getEnvelopes
  - [`0d34061`](https://github.com/docusign/DocuSign-Node-Client/commit/0d34061) update promise example

## 7.0.0
  - [`b616d92`](https://github.com/docusign/DocuSign-Node-Client/commit/b616d92) Merge pull request #30 from docusign/next
  - [`3ecc888`](https://github.com/docusign/DocuSign-Node-Client/commit/3ecc888) (origin/next, next) update docs
  - [`0e97822`](https://github.com/docusign/DocuSign-Node-Client/commit/0e97822) denote that callbacks are optional
  - [`1875eaa`](https://github.com/docusign/DocuSign-Node-Client/commit/1875eaa) fix logOut jsdoc to show properly
  - [`9562f13`](https://github.com/docusign/DocuSign-Node-Client/commit/9562f13) add jsdoc namespace for Auth
  - [`33799fa`](https://github.com/docusign/DocuSign-Node-Client/commit/33799fa) add jsdoc for public logOut method
  - [`ca7b9dd`](https://github.com/docusign/DocuSign-Node-Client/commit/ca7b9dd) change getOauthToken jsdoc to @public
  - [`e072b58`](https://github.com/docusign/DocuSign-Node-Client/commit/e072b58) refactor admin internals to use promises
  - [`4e35298`](https://github.com/docusign/DocuSign-Node-Client/commit/4e35298) refactor auth internals to use promises
  - [`8f08f0b`](https://github.com/docusign/DocuSign-Node-Client/commit/8f08f0b) refactor internals of envelopes for makeRequest methods
  - [`c957936`](https://github.com/docusign/DocuSign-Node-Client/commit/c957936) refactor folders internals to use promises
  - [`4c37d30`](https://github.com/docusign/DocuSign-Node-Client/commit/4c37d30) refactor users internals to use promises
  - [`d16c935`](https://github.com/docusign/DocuSign-Node-Client/commit/d16c935) catch makeRequest errors and log in single place before rethrow
  - **POTENTIALLY BREAKING** [`eb7831a`](https://github.com/docusign/DocuSign-Node-Client/commit/) refactor makeRequest to return a promise
  - [`f3ab6bc`](https://github.com/docusign/DocuSign-Node-Client/commit/f3ab6bc) remove old todo
  - **BREAKING** [`5595925`](https://github.com/docusign/DocuSign-Node-Client/commit/) change all public facing methods to have seamless promise interface
  - [`25873ee`](https://github.com/docusign/DocuSign-Node-Client/commit/25873ee) dedupe multipart file preparation to single function;

## 6.2.0
  - [`c0268b8`](https://github.com/docusign/DocuSign-Node-Client/commit/c0268b8) use the accountIdGuid instead of numerical accountId; fix #29
  - [`3cc539b`](https://github.com/docusign/DocuSign-Node-Client/commit/3cc539b) update docs
  - [`92f1eab`](https://github.com/docusign/DocuSign-Node-Client/commit/92f1eab) fix anchor tag links to have href
  - **NEW** [`ea70e24`](https://github.com/docusign/DocuSign-Node-Client/commit/) add some debug logging for headers on requests
  - [`ccb38c5`](https://github.com/docusign/DocuSign-Node-Client/commit/ccb38c5) remove unused baseUrl param
  - [`b78d44e`](https://github.com/docusign/DocuSign-Node-Client/commit/b78d44e) update docs

## 6.1.0
  - [`b05de1b`](https://github.com/docusign/DocuSign-Node-Client/commit/b05de1b) add docs to linter ignore
  - [`f656bdc`](https://github.com/docusign/DocuSign-Node-Client/commit/f656bdc) linter fixes
  - **NEW** [`e851f56`](https://github.com/docusign/DocuSign-Node-Client/commit/) Add setEnvelopeStatus method to envelopes component

## 6.0.0
  - [`c82c61f`](https://github.com/docusign/DocuSign-Node-Client/commit/c82c61f) update docs
  - **BREAKING** [`e77c347`](https://github.com/docusign/DocuSign-Node-Client/commit/) support all params in sendTemplate

## 5.0.1
  - Documentation updates
  - Also begin to use different jsdoc tool to generate documentation

## 5.0.0
  - [`4a9cf06`](https://github.com/docusign/DocuSign-Node-Client/commit/4a9cf06) lint fixes
  - [`6cc2f2e`](https://github.com/docusign/DocuSign-Node-Client/commit/6cc2f2e) expose the default account info
  - **BREAKING** [`e2cd0b5`](https://github.com/docusign/DocuSign-Node-Client/commit/) remove redundant client in variable name

## 4.0.1
  - Fix syntax and linting errors

## 4.0.0
  - Notably:
    + We exposed the access token from the SDK internals so you could store the auth token for later use in a different workflow
  - [`b192e90`](https://github.com/docusign/DocuSign-Node-Client/commit/b192e90) Merge pull request #21 from docusign/expose-access-token
  - [`262d509`](https://github.com/docusign/DocuSign-Node-Client/commit/262d509) expose method to get auth info directly
  - [`2e3b5e6`](https://github.com/docusign/DocuSign-Node-Client/commit/2e3b5e6) expose method to create client from existing auth info
  - [`cddfb6c`](https://github.com/docusign/DocuSign-Node-Client/commit/cddfb6c) expose relevant auth data on client init
  - [`aa90f1f`](https://github.com/docusign/DocuSign-Node-Client/commit/aa90f1f) support all sendEnvelope params

## 3.2.0
  - [`72e27fb`](https://github.com/docusign/DocuSign-Node-Client/commit/72e27fb) expose the DocuSignError on the main export
  - [`3f27cbc`](https://github.com/docusign/DocuSign-Node-Client/commit/3f27cbc) fix some readme typos; fix #18
  - [`a8a7620`](https://github.com/docusign/DocuSign-Node-Client/commit/a8a7620) add `debugLog` to encapsulate debug condition
  - [`bebc7f6`](https://github.com/docusign/DocuSign-Node-Client/commit/bebc7f6) add files array to package.json to limit the scope of what we publish
  - [`1f4db7e`](https://github.com/docusign/DocuSign-Node-Client/commit/1f4db7e) change style-check script to be called lint

## 3.1.0
  - Expose the authentication method within `getSignerView`
  - [`f5157dd`](https://github.com/docusign/DocuSign-Node-Client/commit/f5157dd) Changed version to 3.1.0 since exported function signature changed.
  - [`213c9a0`](https://github.com/docusign/DocuSign-Node-Client/commit/213c9a0) Merge pull request #15 from docusign/embeddedSigningUpdate
  - [`1ff5392`](https://github.com/docusign/DocuSign-Node-Client/commit/1ff5392) expose auth method, enforce required params

## 2.1.0
  - Add support for promisified methods using bluebird
  - [`21ba506`](https://github.com/docusign/DocuSign-Node-Client/commit/21ba506) Support promise API by wrapping existing methods with bluebird
    + This means every method would require an `-Async` suffix to invoke the promise compatible interface

## 2.0.0

  - Complete polish over the initial 1.0.0 release
  - Decision to use `semistandard` as our de facto style and linter
  - Add missing JSDoc comments and use them in a more consistent manner
  - [`16569ab`](https://github.com/docusign/DocuSign-Node-Client/commit/16569ab) Implement sane and consistent error handling throughout SDK
