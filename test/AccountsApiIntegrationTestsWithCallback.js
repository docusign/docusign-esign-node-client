var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var apiClient = require('./constants').apiClient;

var ACCOUNT_ID = ''; describe('AccountsApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      }).catch((err) => {
        console.error(err);
        return done(err);
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  it('getAccountInformation returns correct account and account settings when includeAccountSettings set to true', (done) => {
    var accountsApi = new docusign.AccountsApi(apiClient);

    var getAccountInformationCallback = function (error, accountInfo, _response) {
      if (error) {
        console.error(error);
        return done(error);
      }

      assert.notStrictEqual(accountInfo, undefined);
      assert.strictEqual(accountInfo.accountIdGuid, ACCOUNT_ID);
      assert.notStrictEqual(accountInfo.accountSettings, undefined);
      assert.notStrictEqual(accountInfo.accountSettings.accessCodeFormat, undefined);
      assert.notStrictEqual(accountInfo.accountSettings.accountNotification, undefined);
      assert.notStrictEqual(accountInfo.accountSettings.accountUISettings, undefined);
      assert.notStrictEqual(accountInfo.accountSettings.tabAccountSettings, undefined);
      done();
    };

    accountsApi.getAccountInformation(ACCOUNT_ID, { includeAccountSettings: true }, getAccountInformationCallback);
  });
});
