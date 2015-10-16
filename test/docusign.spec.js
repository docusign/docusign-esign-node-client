'use strict';

const test = require('ava');
const clone = require('lodash.clone');
const docusign = require('../docusign');
const dsUtils = require('../dsUtils');
const config = require('../test-config.json');
const DocuSignError = dsUtils.DocuSignError;

let baseEnv = clone(process.env);

test.beforeEach(function docusignBeforeEach (t) {
  process.env = clone(baseEnv);
  t.end();
});

test('init with debug', t => {
  return docusign.init(config.integratorKey, config.apiEnv, true)
  .then(response => {
    t.ok(process.env.dsDebug != null);
  });
});

test('init with live targetEnv', t => {
  return docusign.init(config.integratorKey, 'live', config.debug)
  .then(response => {
    t.ok(process.env.targetEnv != null);
  });
});

test('init with www targetEnv', t => {
  return docusign.init(config.integratorKey, 'www', config.debug)
  .then(response => {
    t.ok(process.env.targetEnv != null);
  });
});

test('init with invalid targetEnv', t => {
  return docusign.init(config.integratorKey, 'prod', config.debug)
  .then(response => {
    t.notOk(response);
  })
  .catch(err => {
    t.ok(err);
    t.ok(err instanceof DocuSignError);
    t.ok(/Invalid environment value/i.test(err.message), 'Wrong error message');
  });
});

test('init with empty integratorKey', t => {
  let badIntegratorKey = null;
  return docusign.init(badIntegratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.notOk(response);
  })
  .catch(err => {
    t.ok(err);
    t.ok(err instanceof DocuSignError);
    t.ok(/Integrator key cannot be null or empty string/i.test(err.message), 'Wrong error message');
  });
});
