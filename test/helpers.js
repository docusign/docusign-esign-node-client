var path = require('path');
var fs = require('fs');

var constants = require('./constants');

var INTEGRATOR_KEY = constants.INTEGRATOR_KEY;
var OAUTH_BASE_PATH = constants.OAUTH_BASE_PATH;
var USER_ID = constants.USER_ID;
var REDIRECT_URI = constants.REDIRECT_URI;
var PRIVATE_KEY_FILENAME = constants.PRIVATE_KEY_FILENAME;
var EXPIRES_IN = constants.EXPIRES_IN;
var apiClient = constants.apiClient;
var scopes = constants.scopes;
var PRIVATE_KEY = config.PRIVATE_KEY;

var JWTAuth = () => {

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
    fs.writeFileSync(path.resolve('test', PRIVATE_KEY_FILENAME), text);
  }

  return new Promise(function (resolve, reject) {
    try {
      // IMPORTANT NOTE:
      // the first time you ask for a JWT access token, you should grant access by making the following call
      // get DocuSign OAuth authorization url:
      var authorizationUrl = apiClient.getJWTUri(INTEGRATOR_KEY, REDIRECT_URI, OAUTH_BASE_PATH);
      // open DocuSign OAuth authorization url in the browser, login and grant access
      console.log('OAuth authorization url:', authorizationUrl);
      // END OF NOTE
      var privateKeyFile = fs.readFileSync(path.resolve(__dirname, PRIVATE_KEY_FILENAME));
      apiClient.requestJWTUserToken(INTEGRATOR_KEY, USER_ID, scopes, privateKeyFile, EXPIRES_IN).then(function (res) {
        var baseUri;
        var accountDomain;
        apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);
        apiClient.getUserInfo(res.body.access_token).then(function (userInfo) {
          var ACCOUNT_ID = userInfo.accounts[0].accountId;
          baseUri = userInfo.accounts[0].baseUri;
          accountDomain = baseUri.split('/v2');
          apiClient.setBasePath(`${accountDomain[0]}/restapi`);
          return resolve({ apiClient, ACCOUNT_ID });
        }).catch(function (err) {
          return reject(err);
        });
      }).catch(function (err) {
        return reject(err);
      });
    } catch (err) {
      return reject(err);
    }
  });
};

module.exports = { JWTAuth };
