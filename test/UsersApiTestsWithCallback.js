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

describe('UsersApi Tests With Callbacks:', function (done) {

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
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN, function (err, res) {
      var baseUri,
        accountDomain;
      if (err) {
        return done(err);
      }
      apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

      apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
        if (err) {
          return done(err);
        }
        ACCOUNT_ID = userInfo.accounts[0].accountId;
        baseUri = userInfo.accounts[0].baseUri;
        accountDomain = baseUri.split('/v2');
        apiClient.setBasePath(accountDomain[0] + '/restapi');
        console.log('LoginInformation: ' + JSON.stringify(userInfo));
        return done();
      });
    });
  });

    describe('UsersApi tests:', function () {
        const usersApi = new docusign.UsersApi(apiClient);

        it('Get users', function (done) {
            var listUsersCallback = function (error, userInformationList, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(userInformationList, undefined);
                assert.notStrictEqual(userInformationList.users, undefined);
                assert.notStrictEqual(userInformationList.users[0], undefined);
                done();
            }
            usersApi.list(ACCOUNT_ID, listUsersCallback)
        })

        it('get user', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            usersApi.getInformation(ACCOUNT_ID, USER_ID, callback)

        })

        it('create user', function (done) {
            const newUser = new docusign.UserInformation();
            newUser.company = 'TestCompany';
            newUser.email = 'test@email.com';
            newUser.firstName = 'First';
            newUser.lastName = 'Last';

            const newUsersDefinition = new docusign.NewUsersDefinition();
            newUsersDefinition.newUsers = [];
            newUsersDefinition.newUsers.push(newUser);

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            usersApi.create(ACCOUNT_ID, {newUsersDefinition}, callback)

        })
    })
});
