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

let { ACCOUNT_ID, ENVELOPE_ID } = require('./constants');

describe('FoldersApi tests:', () => {
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
    apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN)
      .then((res) => {
        let baseUri;
        let accountDomain;
        apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);

        apiClient.getUserInfo(res.body.access_token)
          .then((userInfo) => {
            ACCOUNT_ID = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(`${accountDomain[0]}/restapi`);
            done();
          })
          .catch((error) => {
            if (error) {
              return done(error);
            }
          });
      })
      .catch((err) => {
        if (err) {
          return done(err);
        }
      });
  });

  describe('FoldersApi tests:', () => {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);
    const foldersApi = new docusign.FoldersApi(apiClient);

    it('moveEnvelopes should move the envelopes to the specified folder if the foldersRequest option is provided', (done) => {
      const foldersRequest = new docusign.FoldersRequest();
      foldersRequest.envelopeIds = [];
      foldersRequest.envelopeIds.push(ENVELOPE_ID);

      envelopesApi.getEnvelope(ACCOUNT_ID, ENVELOPE_ID)
        .then((envelope) => {
          assert.notStrictEqual(envelope, undefined);

          return foldersApi.moveEnvelopes(ACCOUNT_ID, 'recyclebin', { foldersRequest });
        })
        .then((foldersResponse) => {
          assert.notStrictEqual(foldersResponse, undefined);
          done();
        })
        .catch((error) => {
          if (error) {
            return done(error);
          }
        });
    });
  });
});
