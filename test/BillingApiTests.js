let config;

try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const path = require('path');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;

const {
  PRIVATE_KEY,
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

if (PRIVATE_KEY) {
  let buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(PRIVATE_KEY, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    // eslint-disable-next-line no-buffer-constructor
    buf = new Buffer(PRIVATE_KEY, 'base64'); // Ta-da
  }

  // eslint-disable-next-line no-unused-vars
  const text = buf.toString('ascii');
  // fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('BillingApi tests:', (done) => {
  // eslint-disable-next-line no-undef
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

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then((userInfo) => {
            ACCOUNT_ID = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(`${accountDomain[0]}/restapi`);
            // console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch((error) => {
            if (error) {
              return done(error);
            }
          });
      })
    // eslint-disable-next-line consistent-return
      .catch((err) => {
        if (err) {
          return done(err);
        }
      });
  });
});
