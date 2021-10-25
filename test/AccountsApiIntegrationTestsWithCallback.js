const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');

let apiClient;
let ACCOUNT_ID = '';

describe('AccountsApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        apiClient = response.apiClient;
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      return done(err);
    }
  });

  it('getAccountInformation returns correct account and account settings when includeAccountSettings set to true', (done) => {
    const accountsApi = new docusign.AccountsApi(apiClient);

    const getAccountInformationCallback = function (error, accountInfo, _response) {
      if (error) {
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
