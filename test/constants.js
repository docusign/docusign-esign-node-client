const docusign = require('../src/index');

const oAuth = docusign.ApiClient.OAuth;
const restApi = docusign.ApiClient.RestApi;
let config;

try {
  config = require('../test-config');
  if (!config) throw new Error('missed required configs');
} catch (err) {
  console.error(err);
}

const USER_NAME = config.email;
const PRIVATE_KEY = config.privateKey;
const INTEGRATOR_KEY = config.integratorKey;
const INTEGRATOR_KEY_AUTH_CODE = config.integratorKeyAuthCode;
const INTEGRATOR_KEY_IMPLICIT = config.integratorKeyImplicit;
const CLIENT_SECRET = config.clientSecret;
const TEMPLATE_ID = config.templateId;

// for production environment update to "www.docusign.net/restapi"
const BASE_PATH = restApi.BasePath.DEMO;
const OAUTH_BASE_PATH = oAuth.BasePath.DEMO;

const SING_TEST1_FILE = 'docs/SignTest1.pdf';
const SING_TEST2_FILE = 'docs/SignTest1.docx';
const LARGE_TEST_DOCUMENT1 = 'docs/LargeTestDocument1.pdf';
const BRAND_LOGO_PATH = 'img/docusign-lgo.png';
const BRAND_XML_PATH = 'docs/brand.xml';
const ACCOUNT_ID = '';
const ENVELOPE_ID = '';
const USER_ID = config.userId;
const REDIRECT_URI = 'https://www.docusign.com/api';
const PRIVATE_KEY_FILENAME = 'keys/docusign_private_key.txt';
const EXPIRES_IN = 3600;

function getSignerTabsDefinition() {
  const signHere = docusign.SignHere.constructFromObject({
    documentId: '1',
    pageNumber: '1',
    recipientId: '1',
    xPosition: '100',
    yPosition: '100',
  });

  const signHereTabs = [];
  signHereTabs.push(signHere);
  const tabs = new docusign.Tabs();
  tabs.signHereTabs = signHereTabs;

  return tabs;
}

const apiClient = new docusign.ApiClient({
  basePath: BASE_PATH,
  oAuthBasePath: OAUTH_BASE_PATH,
});
const scopes = [
  oAuth.Scope.IMPERSONATION,
  oAuth.Scope.SIGNATURE,
];

module.exports = {
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
  ACCOUNT_ID,
  ENVELOPE_ID,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  getSignerTabsDefinition,
  apiClient,
  scopes,
};
