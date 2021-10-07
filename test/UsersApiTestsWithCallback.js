const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
let { ACCOUNT_ID, USER_ID, apiClient } = require('./constants');

describe('UsersApi Tests With Callbacks:', () => {
  before((done) => {
    try {
      JWTAuth(done).then((response) => {
        apiClient = response.apiClient;
        ACCOUNT_ID = response.ACCOUNT_ID;
        done();
      });
    } catch (err) {
      return done(err);
    }
  });

  const usersApi = new docusign.UsersApi(apiClient);

  it('should return the list of users for the specified account', (done) => {
    const listUsersCallback = function (error, userInformationList, __response) {
      if (error) {
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
    const callback = function (error, data, __response) {
      if (error) {
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.groupList, undefined);
      assert.notStrictEqual(data.userSettings, undefined);
      done();
    };

    usersApi.getInformation(ACCOUNT_ID, USER_ID, callback);
  });

  it('should create and add new user to the specified account if newUsersDefinition option is provided with user data', (done) => {
    const newUser = new docusign.UserInformation();
    newUser.company = 'TestCompany';
    newUser.email = 'test@email.com';
    newUser.firstName = 'First';
    newUser.lastName = 'Last';

    const newUsersDefinition = new docusign.NewUsersDefinition();
    newUsersDefinition.newUsers = [];
    newUsersDefinition.newUsers.push(newUser);

    const callback = function (error, data, __response) {
      if (error) {
        return done(error);
      }
      assert.notStrictEqual(data, undefined);
      assert.notStrictEqual(data.newUsers, undefined);
      assert.notStrictEqual(data.newUsers[0], undefined);
      assert.equal(data.newUsers[0].email, 'test@email.com');
      done();
    };
    usersApi.create(ACCOUNT_ID, { newUsersDefinition }, callback);
  });
});
