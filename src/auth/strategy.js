// Load modules.
var OAuth2Strategy = require('passport-oauth2')
  , util = require('util')
  , uri = require('url')
  , crypto = require('crypto')
  , Profile = require('./profile')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError
  , docusignAuthorizationError = require('./errors/docusignauthorizationerror')
  , docusignTokenError = require('./errors/docusigntokenerror')
  , docusignAPIError = require('./errors/docusignapierror');


/**
 * `Strategy` constructor.
 *
 * The docusign authentication strategy authenticates requests by delegating to
 * docusign using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your docusign application's App ID
 *   - `clientSecret`  your docusign application's App Secret
 *   - `callbackURL`   URL to which docusign will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new docusignStrategy({
 *         clientID: 'YOUR-123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/docusign/callback'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {object} options
 * @param {function} verify
 * @access public
 */
function Strategy(options, verify) {
  options = options || {};
  this._baseURL = options.sandbox ? 'https://account-d.docusign.com/oauth' : 'https://account.docusign.com/oauth';
  options.authorizationURL = options.authorizationURL || this._baseURL + '/auth';
  options.tokenURL = options.tokenURL || this._baseURL + '/token';
  options.scopeSeparator = options.scopeSeparator || ',';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'docusign';
  this._profileURL = options.profileURL || this._baseURL + '/userinfo';
  this._profileFields = options.profileFields || null;
  this._clientSecret = options.clientSecret;
}

// Inherit from `OAuth2Strategy`.
util.inherits(Strategy, OAuth2Strategy);


/**
 * Authenticate request by delegating to docusign using OAuth 2.0.
 *
 * @param {http.IncomingMessage} req
 * @param {object} options
 * @access protected
 */
Strategy.prototype.authenticate = function (req, options) {
  //   FIX: https://github.com/jaredhanson/passport-oauth/issues/16
  if (req.query && req.query.error_code && !req.query.error) {
    return this.error(new docusignAuthorizationError(req.query.error_message, parseInt(req.query.error_code, 10)));
  }

  OAuth2Strategy.prototype.authenticate.call(this, req, options);
};

/**
 * Return extra docusign-specific parameters to be included in the authorization
 * request. Not supported yet!!!
 *
 * Options:
 *  - `display`  Display mode to render dialog, { `page`, `popup`, `touch` }.
 *
 * @param {object} options
 * @return {object}
 * @access protected
 */
Strategy.prototype.authorizationParams = function (options) {
  var params = {};

  if (options.display) {
    params.display = options.display;
  }

  if (options.authType) {
    params.auth_type = options.authType;
  }
  if (options.authNonce) {
    params.auth_nonce = options.authNonce;
  }

  return params;
};

/**
 * Retrieve user profile from docusign.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `docusign`
 *   - `sub`              the user's docusign sub ID
 *   - `name`             the user's full name
 *   - `given_name`       the user's first name
 *   - `family_name`      the user's last name
 *   - `accounts`         an array containing all the DocuSign's accounts linked to the user
 *   - `email`            the contact email address granted by the user
 *
 * @param {string} accessToken
 * @param {function} done
 * @access protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {
  var url = uri.parse(this._profileURL);
  if (this._profileFields) {
    //var fields = this._convertProfileFields(this._profileFields);
    var fields = this._profileFields;
    if (fields !== '') {
      url.search = (url.search ? url.search + '&' : '') + 'fields=' + fields;
    }
  }
  url = uri.format(url);

  this._oauth2.useAuthorizationHeaderforGET(true);
  this._oauth2.get(url, accessToken, function (err, body, res) {
    var json;

    if (!body && err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {
        }
      }

      if (json && json.error && typeof json.error == 'object') {
        return done(new docusignAPIError(json.error.message, json.error.type, json.error.code, json.error.error_subcode, json.error.fbtrace_id));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }

    var profile = Profile.parse(json);
    profile.provider = 'docusign';
    profile._raw = body;
    profile._json = json;

    done(null, profile);
  });
};

/**
 * Parse error response from docusign OAuth 2.0 token endpoint.
 *
 * @param {string} body
 * @param {number} status
 * @return {Error}
 * @access protected
 */
Strategy.prototype.parseErrorResponse = function (body, status) {
  var json = JSON.parse(body);
  if (json.error && typeof json.error == 'object') {
    return new docusignTokenError(json.error.message, json.error.type, json.error.code, json.error.error_subcode, json.error.fbtrace_id);
  }
  return OAuth2Strategy.prototype.parseErrorResponse.call(this, body, status);
};

/**
 * Convert docusign profile to a normalized profile.
 *
 * @param {object} profileFields
 * @return {string}
 * @access protected
 */
Strategy.prototype._convertProfileFields = function (profileFields) {
  var map = {
    'sub': 'sub',
    'name': 'name',
    'given_name': 'given_name',
    'family_name': 'family_name',
    'email': 'email',
    'accounts': 'accounts'
  };

  var fields = [];

  profileFields.forEach(function (f) {
    // return raw docusign profile field to support the many fields that don't
    // map cleanly to Portable Contacts
    if (typeof map[f] === 'undefined') {
      return fields.push(f);
    }
    ;

    if (Array.isArray(map[f])) {
      Array.prototype.push.apply(fields, map[f]);
    } else {
      fields.push(map[f]);
    }
  });

  return fields.join(',');
};


// Expose constructor.
module.exports = Strategy;