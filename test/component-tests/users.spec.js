'use strict';

const test = require('ava');
const docusign = require('../../docusign');
const config = require('../../test-config.json');

let client = null;
let { userId, noSigUserId } = config;

test.before(function usersBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
  });
});

test.after(function usersAfter (t) {
  return client.logOut();
});

test(function getInfo (t) {
  return client.users.getInfo(userId)
  .then(response => {
    t.ok(response.userName);
    t.same(response.userId, userId);
  });
});

test(function getSignature (t) {
  return client.users.getSignature(userId)
  .then(response => {
    let regex = new RegExp('https://demo.docusign.net/restapi/.+/signatures/.+/signature_image');
    t.regexTest(regex, response);
  });
});

test(function getEmptySignature (t) {
  let noSigClient;
  return docusign.createClient(config.noSigEmail, config.password)
  .then(_client => {
    noSigClient = _client;
    return noSigClient.users.getSignature(noSigUserId);
  })
  .then(response => {
    t.ok(response === 'No signatures found');
  })
  .then(() => {
    return noSigClient.logOut();
  });
});

test(function getSocialConnection (t) {
  return client.users.getSocialConnection(userId)
  .then(response => {
    t.ok(response.socialAccountInformation);
    t.same(response.userId, userId);
  });
});
