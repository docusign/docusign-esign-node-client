const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
let { ACCOUNT_ID, apiClient } = require('./constants');

describe('TemplatesApi tests:', () => {
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

  it('listTemplates returns the list of templates for the specified account', (done) => {
    const templatesApi = new docusign.TemplatesApi(apiClient);
    templatesApi.listTemplates(ACCOUNT_ID)
      .then((templateResults) => {
        assert.notStrictEqual(templateResults, undefined);
        assert.notStrictEqual(templateResults.envelopeTemplates, undefined);
        assert.notStrictEqual(templateResults.envelopeTemplates[0], undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
});
