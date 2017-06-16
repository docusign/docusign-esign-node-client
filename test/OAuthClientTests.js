const express = require('express');
const passport = require('passport');
var session = require('express-session');
var docusign = require('../src/index');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(session({
  secret: 'secret token',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var hostUrl = 'http://' + host + ':' + port;

// Configure Passport
passport.use(new docusign.OAuthClient({
  sandbox: true,
  clientID: 'ae30ea4e-xxxx-xxxx-xxxx-fcb57d2dc4df',
  clientSecret: 'b4dccdbe-xxxx-xxxx-xxxx-b2f0f7448f8f',
  callbackURL: hostUrl + '/auth/callback'
},
  function (accessToken, refreshToken, user, done) {
    // Here we're just assigning the tokens to the user profile object but we
    // could be using session storage or any other form of transient-ish storage
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    return done(null, user);
  }
));

app.get('/auth', function (req, res) {
  passport.authenticate('docusign'/*, {state: 'optional state'}*/)(req, res);
});

app.get('/auth/callback', function (req, res) {
  passport.authenticate('docusign'/*, {state: 'optional state'}*/, function (err, user) {
    if (err) {
      return res.send(err);
    }
    if (!user) {
      return res.redirect('/auth');
    }

    // getting the API client ready
    var apiClient = new docusign.ApiClient();
    // for production environment update to "www.docusign.net/restapi"
    var BaseUrl = 'https://demo.docusign.net/restapi';
    apiClient.setBasePath(BaseUrl);
    apiClient.addDefaultHeader('Authorization', 'Bearer ' + user.accessToken);

    // creating an instance of the authentication API
    var authApi = new docusign.AuthenticationApi(apiClient);
    var loginOps = {};
    loginOps.apiPassword = 'true';
    loginOps.includeAccountIdGuid = 'true';
    // making login call. we could also use DocuSign OAuth userinfo call
    authApi.login(loginOps, function (error, loginInfo, response) {
      if (error) {
        return res.send(error);
      }
      if (loginInfo) {
        // list of user account(s)
        // note that a given user may be a member of multiple accounts
        var loginAccounts = loginInfo.loginAccounts;
        var loginAccount = loginAccounts[0];
        var baseUrl = loginAccount.baseUrl;
        var accountDomain = baseUrl.split('/v2');

        // below code required for production, no effect in demo (same domain)
        apiClient.setBasePath(accountDomain[0]);
        docusign.Configuration.default.setDefaultApiClient(apiClient);

        // return the list of accounts to the browser
        return res.send(loginAccounts);
      }
    });
  })(req, res);
});

app.listen(port, host, function (err) {
  if (err) {
    throw err;
  }

  console.log('Your server is running on http://' + host + ':' + port + '.');
});
