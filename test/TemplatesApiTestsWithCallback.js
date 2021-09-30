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

describe('TemplatesApi Tests With Callbacks:', () => {
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

  describe('TemplatesApi tests:', () => {
    it('listTemplates returns the list of templates for the specified account', (done) => {
      const templatesApi = new docusign.TemplatesApi(apiClient);

      const listTemplatesCallback = function (error, templateResults, _response) {
        if (error) {
          return done(error);
        }

        assert.notStrictEqual(templateResults, undefined);
        assert.notStrictEqual(templateResults.envelopeTemplates, undefined);
        done();
      };

      templatesApi.listTemplates(ACCOUNT_ID, listTemplatesCallback);
    });
  });
});
