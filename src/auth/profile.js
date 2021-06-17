/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function (json) {
  if (typeof json === 'string') {
    json = JSON.parse(json);
  }

  const profile = {};

  profile.sub = json.sub;
  profile.name = json.name;
  profile.given_name = json.given_name;
  profile.family_name = json.family_name;
  profile.created = json.created;
  profile.email = json.email;
  profile.accounts = json.accounts;

  return profile;
};
