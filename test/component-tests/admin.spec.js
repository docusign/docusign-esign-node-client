'use strict';

const test = require('ava');
const docusign = require('../../docusign');
const config = require('../test-config.json');

let client = null;
let userId = null;

test.before(function adminBefore (t) {
  return docusign.init(config.integratorKey, config.apiEnv, config.debug)
  .then(response => {
    t.ok(response.message === 'successfully initialized');
    return docusign.createClient(config.email, config.password);
  })
  .then(_client => {
    client = _client;
  });
});

test.after(function adminAfter (t) {
  return client.logOut();
});

test(function getOrgAccountInfo (t) {
  return client.admin.getOrgAccountInfo()
  .then(response => {
    t.ok(response.accountIdGuid);
    t.ok(response.planStartDate);
    t.ok(response.planName);
    t.ok(response.billingPeriodStartDate);
  });
});

test(function getUserList (t) {
  return client.admin.getUserList()
  .then(response => {
    t.ok(response[0].userName);
    t.ok(response[0].userId);
    t.ok(response[0].userType);
    t.ok(response[0].isAdmin);
    t.ok(response[0].userStatus);
    t.ok(response[0].uri);
    t.ok(response[0].email);
    t.ok(response[0].firstName);
    t.ok(response[0].lastName);
  });
});

test.serial(function addUsers (t) {
  let usersToAdd = [{
    first: 'test',
    last: 'docusign',
    email: 'test.docusign@test.com',
    password: 'password',
    forgottenPasswordInfo: {
      forgottenPasswordQuestion1: "What is your mother's maiden name?",
      forgottenPasswordAnswer1: 'docusign'
    }
  }];
  return client.admin.addUsers(usersToAdd)
  .then(response => {
    t.ok(response.newUsers[0].userId);
    userId = response.newUsers[0].userId;
  });
});

test.serial(function deleteUsers (t) {
  let usersToDelete = [{userId}];
  return client.admin.deleteUsers(usersToDelete)
  .then(response => {
    t.same(response.users[0].userId, userId);
    t.same(response.users[0].userStatus, 'closed');
  });
});

test(function getTemplates (t) {
  return client.admin.getTemplates()
  .then(response => {
    t.ok(response.envelopeTemplates);
  });
});

test(function getPlan (t) {
  return client.admin.getPlan()
  .then(response => {
    t.ok(response.planName);
    t.ok(response.accountIdGuid);
    t.ok(response.accountName);
  });
});
