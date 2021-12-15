var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var apiClient = require('./constants').apiClient;

describe('DiagnosticsApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done).then(() => {
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

  var diagnosticsApi = new docusign.DiagnosticsApi(apiClient);
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
