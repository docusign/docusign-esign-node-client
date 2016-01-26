'use strict';

var Bluebird = require('bluebird');
var path = require('path');
var writeJson = require('write-json-file');

var authInfoPath = path.resolve(__dirname, 'auth-info.json');

module.exports = {
  getStoredAuthInfo,
  storeAuthInfo
};

function getStoredAuthInfo () {
  var authInfo;
  try {
    authInfo = require(authInfoPath);
  } catch (e) {
    authInfo = null;
  }
  return authInfo;
}

function storeAuthInfo (freshInfo) {
  // make sure we don't overwrite
  var storedInfo = getStoredAuthInfo();
  if (storedInfo == null) {
    return writeJson(authInfoPath, freshInfo);
  }
  return Bluebird.resolve();
}
