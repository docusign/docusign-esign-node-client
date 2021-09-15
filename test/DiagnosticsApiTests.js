var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
var assert = require('assert');
var path = require('path');
var superagent = require('superagent');

var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

const {
  USER_NAME,
  PRIVATE_KEY,
  INTEGRATOR_KEY,
  INTEGRATOR_KEY_AUTH_CODE,
  INTEGRATOR_KEY_IMPLICIT,
  CLIENT_SECRET,
  TEMPLATE_ID,
  BASE_PATH,
  OAUTH_BASE_PATH,
  SING_TEST1_FILE,
  SING_TEST2_FILE,
  LARGE_TEST_DOCUMENT1,
  BRAND_LOGO_PATH,
  BRAND_XML_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  getSignerTabsDefinition,
  apiClient,
  scopes
}=require('./constants')
let {ACCOUNT_ID,ENVELOPE_ID}=require('./constants')

if (PRIVATE_KEY) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(PRIVATE_KEY, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(PRIVATE_KEY, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  // fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('DiagnosticsApi tests:', function (done) {


  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN)
      .then(function (res) {
        var baseUri,
          accountDomain;
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            ACCOUNT_ID = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(accountDomain[0] + '/restapi');
            // console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });

  describe('DiagnosticsApi tests:', function () {
    const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);
    it('Get settings', function (done) {
      diagnosticsApi.getRequestLogSettings()
          .then((data) => {
            assert.deepEqual(data, {
              apiRequestLogging: 'false',
              apiRequestLogMaxEntries: '50',
              apiRequestLogRemainingEntries: '0'
            })
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
    })
  })

});
