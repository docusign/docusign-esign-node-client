const path = require('path');
const fs = require('fs');

const {
  INTEGRATOR_KEY,
  OAUTH_BASE_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  apiClient,
  scopes
} = require('./constants');

const JWTAuth = async () => {
  // IMPORTANT NOTE:
  // the first time you ask for a JWT access token, you should grant access by making the following call
  // get DocuSign OAuth authorization url:
  apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
  // open DocuSign OAuth authorization url in the browser, login and grant access
  // END OF NOTE
  const privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
  const res = await apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN);
  let baseUri;
  let accountDomain;
  apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);
  const userInfo = await apiClient.getUserInfo(res.body.access_token);
  let ACCOUNT_ID = userInfo.accounts[0].accountId;
  baseUri = userInfo.accounts[0].baseUri;
  accountDomain = baseUri.split('/v2');
  apiClient.setBasePath(`${accountDomain[0]}/restapi`);
  return { apiClient, ACCOUNT_ID };
};

module.exports = { JWTAuth };
