const docusign = require('../src/index');
const assert = require('assert');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;

const { JWTAuth } = require('./helpers');

const {
  PRIVATE_KEY,
} = require('./constants');

let { ACCOUNT_ID, apiClient } = require('./constants');

if (PRIVATE_KEY) {
  let buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(PRIVATE_KEY, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(PRIVATE_KEY, 'base64'); // Ta-da
  }

  const text = buf.toString('ascii');
  // fs.writeFileSync(path.resolve('test', PRIVATE_KEY_FILENAME), text);
}

describe('AccountsApi tests:', () => {
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
    accountsApi.getAccountInformation(ACCOUNT_ID, { includeAccountSettings: true })
      .then((accountInfo) => {
        assert.notStrictEqual(accountInfo, undefined);
        assert.notStrictEqual(accountInfo.accountSettings, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accessCodeFormat, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accountNotification, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.accountUISettings, undefined);
        assert.notStrictEqual(accountInfo.accountSettings.tabAccountSettings, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
});
