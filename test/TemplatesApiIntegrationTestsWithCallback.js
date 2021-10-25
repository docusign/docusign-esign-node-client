const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');

let ACCOUNT_ID = '';
let apiClient;

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

  it('listTemplates returns the list of templates for the specified account', (done) => {
    const templatesApi = new docusign.TemplatesApi(apiClient);

    const listTemplatesCallback = function (error, templateResults, _response) {
      if (error) {
        return done(error);
      }

      assert.notStrictEqual(templateResults, undefined);
      assert.notStrictEqual(templateResults.envelopeTemplates, undefined);
      assert.notStrictEqual(templateResults.envelopeTemplates[0], undefined);
      done();
    };

    templatesApi.listTemplates(ACCOUNT_ID, listTemplatesCallback);
  });
});
