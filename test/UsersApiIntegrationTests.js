var docusign = require('../src/index');
var assert = require('assert');
var JWTAuth = require('./helpers').JWTAuth;
var constants = require('./constants');
var USER_ID = constants.USER_ID;
var apiClient = constants.apiClient;
var EMAIL = constants.EMAIL;

var ACCOUNT_ID = '';

describe('UsersApi tests:', () => {
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
    usersApi.list(ACCOUNT_ID)
      .then((userInformationList) => {
        assert.notStrictEqual(userInformationList, undefined);
        assert.notStrictEqual(userInformationList.users, undefined);
        assert.notStrictEqual(userInformationList.users[0], undefined);
        assert.notStrictEqual(userInformationList.users[0].userId, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          console.error(error);
          return done(error);
        }
      });
  });

  it('getInformation returns the user information for a specified user', (done) => {
    usersApi.getInformation(ACCOUNT_ID, USER_ID)
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        assert.notStrictEqual(data.groupList, undefined);
        assert.notStrictEqual(data.userSettings, undefined);
        assert.strictEqual(data.userId, USER_ID);
        done();
      })
      .catch((error) => {
        if (error) {
          console.error(error);
          return done(error);
        }
      });
  });
  it('should create and add new user to the specified account if newUsersDefinition option is provided with user data', (done) => {
    var newUser = new docusign.UserInformation();
    newUser.email = EMAIL;

    var newUsersDefinition = new docusign.NewUsersDefinition();
    newUsersDefinition.newUsers = [];
    newUsersDefinition.newUsers.push(newUser);

    usersApi.create(ACCOUNT_ID, { newUsersDefinition })
      .then((data) => {
        assert.notStrictEqual(data, undefined);
        assert.notStrictEqual(data.newUsers, undefined);
        assert.notStrictEqual(data.newUsers[0], undefined);
        assert.notStrictEqual(data.newUsers[0].email, undefined);
        done();
      })
      .catch((error) => {
        if (error) {
          console.error(error);
          return done(error);
        }
      });
  });
});
