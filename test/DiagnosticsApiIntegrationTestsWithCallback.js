const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
let { ACCOUNT_ID, apiClient } = require('./constants');

describe('DiagnosticsApi Tests With Callbacks:', () => {
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

  it('getRequestLogSettings returns the correct request logging setting', (done) => {
    const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);

    const callback = function (error, data, __response) {
      if (error) {
        return done(error);
      }
      assert.deepEqual(data, {
        apiRequestLogging: 'false',
        apiRequestLogMaxEntries: '50',
        apiRequestLogRemainingEntries: '0',
      });
      done();
    };

    diagnosticsApi.getRequestLogSettings(ACCOUNT_ID, callback);
  });
});
