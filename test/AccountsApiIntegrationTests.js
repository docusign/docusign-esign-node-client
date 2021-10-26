const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

let ACCOUNT_ID = '';

describe('AccountsApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  it('getAccountInformation returns correct account and account settings when includeAccountSettings set to true', (done) => {
    const accountsApi = new docusign.AccountsApi(apiClient);
    accountsApi.getAccountInformation(ACCOUNT_ID, { includeAccountSettings: true })
      .then((accountInfo) => {
        assert.notStrictEqual(accountInfo, undefined);
        assert.strictEqual(accountInfo.accountIdGuid, ACCOUNT_ID);
        assert.notStrictEqual(accountInfo.accountSettings, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accessCodeFormat, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accountNotification, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accountUISettings, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.tabAccountSettings, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          console.error(error);
          return done(error);
        }
      });
  });
});
