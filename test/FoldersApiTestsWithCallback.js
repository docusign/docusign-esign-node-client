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

describe('FoldersApi Tests With Callbacks:', () => {
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

  describe('FoldersApi tests:', () => {
    const foldersApi = new docusign.FoldersApi(apiClient);

    it('moveEnvelopes should move the envelopes to the specified folder if the foldersRequest option is provided', (done) => {
      const foldersRequest = new docusign.FoldersRequest();
      foldersRequest.envelopeIds = [];
      foldersRequest.envelopeIds.push(ENVELOPE_ID);

      const callback = function (error, data, __response) {
        if (error) {
          return done(error);
        }
        assert.notStrictEqual(data, undefined);
        done();
      };
      foldersApi.moveEnvelopes(ACCOUNT_ID, 'recyclebin', { foldersRequest }, callback);
    });
  });
});
