'use strict';

const test = require('ava');
const docusign = require('../docusign');
const config = require('./test-config.json');

let client = null;

test.before(function foldersBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
  });
});

test.after(function foldersAfter (t) {
  return client.logOut();
});

test(function getEnvelopes (t) {
  let doFullRetrieval = true;
  return client.folders.getEnvelopes('all', doFullRetrieval)
  .then(response => {
    t.ok(response[0].subject != null);
  });
});

test(function searchThroughEnvelopes (t) {
  return client.folders.searchThroughEnvelopes('please')
  .then(response => {
    t.ok(response.folderItems.length > 0);
    t.ok(response.totalSetSize);
    t.ok(response.resultSetSize);
  });
});
