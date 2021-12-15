var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var apiClient = require('./constants').apiClient;

describe('DiagnosticsApi Tests With Callbacks:', () => {
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

  it('getRequestLogSettings returns the correct request logging setting', (done) => {
    var diagnosticsApi = new docusign.DiagnosticsApi(apiClient);

    var callback = function (error, data) {
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
