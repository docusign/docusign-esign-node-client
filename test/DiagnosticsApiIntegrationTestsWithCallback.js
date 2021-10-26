const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

describe('DiagnosticsApi Tests With Callbacks:', () => {
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

  it('getRequestLogSettings returns the correct request logging setting', (done) => {
    const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);

    const callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.deepEqual(data, {
        apiRequestLogging: 'false',
        apiRequestLogMaxEntries: '50',
        apiRequestLogRemainingEntries: '0'
      });
      done();
    };

    diagnosticsApi.getRequestLogSettings(callback);
  });
});
