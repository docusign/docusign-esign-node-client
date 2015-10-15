'use strict';

const Bluebird = require('bluebird');
const path = require('path');
const writeJson = require('write-json-file');

const authInfoPath = path.resolve('./auth-info.json');

module.exports = {
  getStoredAuthInfo,
  storeAuthInfo
};

function getStoredAuthInfo () {
  let authInfo;
  try {
    authInfo = require(authInfoPath);
  } catch (e) {
    authInfo = null;
  }
  return authInfo;
}

function storeAuthInfo (freshInfo) {
  // make sure we don't overwrite
  let storedInfo = getStoredAuthInfo();
  if (storedInfo == null) {
    return writeJson(authInfoPath, freshInfo);
  }
  return Bluebird.resolve();
}
