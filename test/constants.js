var docusign = require('../src/index');

var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;

try {
  config = require('../test-config');
  if (!config) throw new Error('missed required configs');
} catch (err) {
  console.error(err);
}

var EMAIL = config.email;
var INTEGRATOR_KEY = config.integratorKey;
var INTEGRATOR_KEY_AUTH_CODE = config.integratorKeyAuthCode;
var INTEGRATOR_KEY_IMPLICIT = config.integratorKeyImplicit;
var CLIENT_SECRET = config.clientSecret;
var TEMPLATE_ID = config.templateId;

// for production environment update to "www.docusign.net/restapi"
var BASE_PATH = restApi.BasePath.DEMO;
var OAUTH_BASE_PATH = oAuth.BasePath.DEMO;

var SIGN_TEST1_FILE = 'docs/SignTest1.pdf';
var SIGN_TEST2_FILE = 'docs/SignTest1.docx';
var LARGE_TEST_DOCUMENT1 = 'docs/LargeTestDocument1.pdf';
var BRAND_LOGO_PATH = 'img/docusign-lgo.png';
var BRAND_XML_PATH = 'docs/brand.xml';
var USER_ID = config.userId;
var REDIRECT_URI = 'https://www.docusign.com/api';
var PRIVATE_KEY_FILENAME = 'keys/docusign_private_key.txt';
var EXPIRES_IN = 3600;

function getSignerTabsDefinition () {
  var signHere = docusign.SignHere.constructFromObject({
    documentId: '1',
    pageNumber: '1',
    recipientId: '1',
    xPosition: '100',
    yPosition: '100'
  });

  var signHereTabs = [];
  signHereTabs.push(signHere);
  var tabs = new docusign.Tabs();
  tabs.signHereTabs = signHereTabs;

  return tabs;
}

var apiClient = new docusign.ApiClient({
  basePath: BASE_PATH,
  oAuthBasePath: OAUTH_BASE_PATH
});
var scopes = [
  oAuth.Scope.IMPERSONATION,
  oAuth.Scope.SIGNATURE
];

module.exports = {
  EMAIL,
  INTEGRATOR_KEY,
  INTEGRATOR_KEY_AUTH_CODE,
  INTEGRATOR_KEY_IMPLICIT,
  CLIENT_SECRET,
  TEMPLATE_ID,
  BASE_PATH,
  OAUTH_BASE_PATH,
  SIGN_TEST1_FILE,
  SIGN_TEST2_FILE,
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
};
