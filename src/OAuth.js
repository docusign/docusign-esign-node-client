var Scope_SIGNATURE = require('./oauth/Scope').SIGNATURE;
var Scope_EXTENDED = require('./oauth/Scope').EXTENDED;
var Scope_IMPERSONATION = require('./oauth/Scope').IMPERSONATION;
var CODE = require('./oauth/ResponseType').CODE;
var TOKEN = require('./oauth/ResponseType').TOKEN;
var UserInfo = require('./oauth/UserInfo');
var OAuthToken = require('./oauth/OAuthToken');

module.exports = {
  Scope: {
    SIGNATURE: Scope_SIGNATURE,
    EXTENDED: Scope_EXTENDED,
    IMPERSONATION: Scope_IMPERSONATION,
  },
  ResponseType: {
    CODE: CODE,
    TOKEN: TOKEN,
  },
  UserInfo: UserInfo,
  OAuthToken: OAuthToken
};

Object.freeze(module.exports.Scope);
Object.freeze(module.exports.ResponseType);