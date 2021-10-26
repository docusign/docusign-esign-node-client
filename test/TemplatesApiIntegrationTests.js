const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

let ACCOUNT_ID = '';

describe('TemplatesApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      console.error(err);
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
          console.error(error);
          return done(error);
        }
      });
  });
});
