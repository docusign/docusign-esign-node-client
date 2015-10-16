'use strict';

const test = require('ava');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

let dsUtils;

test('[makeRequest] error', t => {
  let error = new Error('broken');
  dsUtils = proxyquire('../dsUtils', {
    request: sinon.stub().callsArgWith(1, error)
  });
  return dsUtils.makeRequest('broken', {})
  .catch(err => {
    t.ok(err);
    t.same(err, error);
  });
});

test('[makeRequest] errorCode in body', t => {
  let error = null;
  let body = {
    errorCode: 'Something broke',
    message: 'Who knows why'
  };
  let resp = { body };
  dsUtils = proxyquire('../dsUtils', {
    request: sinon.stub().callsArgWith(1, error, resp, body)
  });
  return dsUtils.makeRequest('broken', {})
  .catch(err => {
    t.ok(err);
    t.ok(err.name === 'DocuSignError');
  });
});

test('[makeRequest] error in body', t => {
  let error = null;
  let body = {
    error: 'Something broke',
    error_description: 'Who knows why'
  };
  let resp = { body };
  dsUtils = proxyquire('../dsUtils', {
    request: sinon.stub().callsArgWith(1, error, resp, body)
  });
  return dsUtils.makeRequest('broken', {})
  .catch(err => {
    t.ok(err);
    t.ok(err.name === 'DocuSignError');
  });
});
