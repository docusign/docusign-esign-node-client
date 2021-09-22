const docusign = require('../src/index');

let config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const assert = require('assert');
const path = require('path');

const {
  INTEGRATOR_KEY,
  OAUTH_BASE_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  apiClient,
  scopes,
} = require('./constants');
let { ACCOUNT_ID } = require('./constants');

describe('AccountsApi Tests With Callbacks:', (done) => {
  before((done) => {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    const oauthLoginUrl = apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE

    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN, (err, res) => {
      let baseUri;
      let accountDomain;
      if (err) {
        return done(err);
      }
      apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);

      apiClient.getUserInfo(res.body.access_token, (err, userInfo) => {
        if (err) {
          return done(err);
        }
        ACCOUNT_ID = userInfo.accounts[0].accountId;
        baseUri = userInfo.accounts[0].baseUri;
        accountDomain = baseUri.split('/v2');
        apiClient.setBasePath(`${accountDomain[0]}/restapi`);
        console.log(`LoginInformation: ${JSON.stringify(userInfo)}`);
        return done();
      });
    });
  });

  describe('AccountsApi tests:', () => {
    it('Get account info', (done) => {
      const accountsApi = new docusign.AccountsApi(apiClient);

      const getAccountInformationCallback = function (error, accountInfo, _response) {
        if (error) {
          return done(error);
        }

        assert.notStrictEqual(accountInfo, undefined);
        assert.notStrictEqual(accountInfo.accountSettings, undefined);
        done();
      };

      accountsApi.getAccountInformation(ACCOUNT_ID, { includeAccountSettings: true }, getAccountInformationCallback);
    });
  });
});
