'use strict';

const test = require('ava');
const proxyquire = require('proxyquire');
const requireUncached = require('require-uncached');
const config = require('../test-config.json');

let docusign;
let dsUtils;
let DocuSignError;
let internalState;

test.beforeEach(function docusignBeforeEach (t) {
  dsUtils = requireUncached('../dsUtils');
  docusign = proxyquire('../docusign', {
    './dsUtils': dsUtils
  });
  DocuSignError = dsUtils.DocuSignError;
  internalState = dsUtils.internalState;
  t.ok(Object.keys(internalState).length === 0, 'Internal state was not empty');
  t.end();
});

test('init with debug', t => {
  return docusign.init(config.integratorKey, config.apiEnv, true)
  .then(response => {
    t.ok(internalState.dsDebug != null);
  });
});

test('init with live targetEnv', t => {
  return docusign.init(config.integratorKey, 'live', config.debug)
  .then(response => {
    t.ok(internalState.targetEnv != null);
  });
});

test('init with www targetEnv', t => {
  return docusign.init(config.integratorKey, 'www', config.debug)
  .then(response => {
    t.ok(internalState.targetEnv != null);
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

test(function getAuthInfoError (t) {
  return docusign.getAuthInfo(config.email, `${config.password}nope`)
  .then(response => {
    t.notOk(response);
  })
  .catch(err => {
    t.ok(err);
  });
});
