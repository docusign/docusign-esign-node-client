const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

describe('DiagnosticsApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((_response) => {
        done();
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);
  it('getRequestLogSettings returns the correct request logging setting', (done) => {
    diagnosticsApi.getRequestLogSettings()
      .then((data) => {
        assert.deepEqual(data, {
          apiRequestLogging: 'false',
          apiRequestLogMaxEntries: '50',
          apiRequestLogRemainingEntries: '0'
        });
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
