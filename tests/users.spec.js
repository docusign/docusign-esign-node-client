'use strict';

const test = require('ava');
const docusign = require('../docusign');
const config = require('./test-config.json');

let client = null;
let userId = null;

test.before(function usersBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
    return client.admin.getUserList();
  })
  .then(userList => {
    userId = userList[0].userId;
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

test(function getSocialConnection (t) {
  return client.users.getSocialConnection(userId)
  .then(response => {
    t.ok(response.socialAccountInformation);
    t.same(response.userId, userId);
  });
});
