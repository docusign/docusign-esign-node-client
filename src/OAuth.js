const Scope_SIGNATURE = require('./oauth/Scope').SIGNATURE;
const Scope_EXTENDED = require('./oauth/Scope').EXTENDED;
const Scope_IMPERSONATION = require('./oauth/Scope').IMPERSONATION;
const PRODUCTION_OAUTH_BASE_PATH = require('./oauth/BasePath').PRODUCTION;
const DEMO_OAUTH_BASE_PATH = require('./oauth/BasePath').DEMO;
const STAGE_OAUTH_BASE_PATH = require('./oauth/BasePath').STAGE;
const { CODE } = require('./oauth/ResponseType');
const { TOKEN } = require('./oauth/ResponseType');
const UserInfo = require('./oauth/UserInfo');
const OAuthToken = require('./oauth/OAuthToken');

module.exports = {
  Scope: {
    SIGNATURE: Scope_SIGNATURE,
    EXTENDED: Scope_EXTENDED,
    IMPERSONATION: Scope_IMPERSONATION,
  },
  ResponseType: {
    CODE,
    TOKEN,
  },
  BasePath: {
    PRODUCTION: PRODUCTION_OAUTH_BASE_PATH,
    STAGE: STAGE_OAUTH_BASE_PATH,
    DEMO: DEMO_OAUTH_BASE_PATH,
  },
  UserInfo,
  OAuthToken,
};

Object.freeze(module.exports.Scope);
Object.freeze(module.exports.ResponseType);
Object.freeze(module.exports.BasePath);
