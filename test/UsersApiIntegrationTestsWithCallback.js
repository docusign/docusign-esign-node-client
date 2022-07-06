var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var constants = require('./constants');
var USER_ID = constants.USER_ID;
var apiClient = constants.apiClient;
// var EMAIL = constants.EMAIL;
var ACCOUNT_ID = '';

describe('UsersApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      }).catch((err) => {
        console.error(err);
        return done(err);
      });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  var usersApi = new docusign.UsersApi(apiClient);

  it('should return the list of users for the specified account', (done) => {
    var listUsersCallback = function (error, userInformationList, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(userInformationList, undefined);
      assert.notStrictEqual(userInformationList.users, undefined);
      assert.notStrictEqual(userInformationList.users[0], undefined);
      assert.notStrictEqual(userInformationList.users[0].userId, undefined);
      done();
    };
    usersApi.list(ACCOUNT_ID, listUsersCallback);
  });

  it('getInformation returns the user information for a specified user', (done) => {
    var callback = function (error, data, __response) {
      if (error) {
        console.error(error);
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.groupList, undefined);
      assert.notStrictEqual(data.userSettings, undefined);
      assert.strictEqual(data.userId, USER_ID);
      done();
    };

    usersApi.getInformation(ACCOUNT_ID, USER_ID, callback);
  });

  // it('should create and add new user to the specified account if newUsersDefinition option is provided with user data', (done) => {
  //   var newUser = new docusign.UserInformation();
  //   newUser.company = 'TestCompany';
  //   newUser.email = EMAIL;
  //   newUser.firstName = 'First';
  //   newUser.lastName = 'Last';
  //   newUser.userName = 'TestUserName';

  //   var newUsersDefinition = new docusign.NewUsersDefinition();
  //   newUsersDefinition.newUsers = [];
  //   newUsersDefinition.newUsers.push(newUser);

  //   var callback = function (error, data, __response) {
  //     if (error) {
  //       console.error(error);
  //       return done(error);
  //     }
  //     assert.notStrictEqual(data, undefined);
  //     assert.equal(data.newUsers[0].email, EMAIL);
  //     assert.equal(data.newUsers[0].userName, 'TestUserName');
  //     done();
  //   };
  //   usersApi.create(ACCOUNT_ID, { newUsersDefinition }, callback);
  // });
});
