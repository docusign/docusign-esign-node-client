const docusign = require('../src/index');

let config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const assert = require('assert');
const path = require('path');

const { JWTAuth } = require('./helpers');
let { ACCOUNT_ID, apiClient } = require('./constants');

describe('DiagnosticsApi tests:', () => {
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

  describe('DiagnosticsApi tests:', () => {
    const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);
    it('getRequestLogSettings returns the correct request logging setting', (done) => {
      diagnosticsApi.getRequestLogSettings()
        .then((data) => {
          assert.deepEqual(data, {
            apiRequestLogging: 'false',
            apiRequestLogMaxEntries: '50',
            apiRequestLogRemainingEntries: '0',
          });
          done();
        })
        .catch((error) => {
          if (error) {
            return done(error);
          }
        });
    });
  });
});
