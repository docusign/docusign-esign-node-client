var docusign = require('docusign-node');
var authStoreHelpers = require('./auth-store-helpers');
var DocuSignError = docusign.DocuSignError;
var storeAuthInfo = authStoreHelpers.storeAuthInfo;
var getStoredAuthInfo = authStoreHelpers.getStoredAuthInfo;

var integratorKey = '***';        // Integrator Key associated with your DocuSign Integration
var email = 'YOUR_EMAIL';         // Email for your DocuSign Account
var password = 'YOUR_PASSWORD';   // Password for your DocuSign Account
var docusignEnv = 'demo';         // DocuSign Environment generally demo for testing purposes
var fullName = 'Joan Jett';       // Recipient's Full Name
var templateId = '***';           // ID of the Template you want to create the Envelope with
var templateRoleName = '***';     // Role Name of the Template
var debug = false;                // Enable debug logging and debug responses from API

var templateRoles = [{
  email: email,
  name: fullName,
  roleName: templateRoleName
}];

// **********************************************************************************
// Step 1 - Initialize DocuSign Object with Integrator Key and Desired Environment
// **********************************************************************************
docusign.init(integratorKey, docusignEnv, debug)
  // **********************************************************************************
  // Step 2 - Create a DocuSign Client Object
  // **********************************************************************************
  .then(function (response) {
    var existingAuthInfo = getStoredAuthInfo();
    if (response.message === 'succesfully initialized') {
      if (existingAuthInfo != null) {
        return docusign.createClientFromAuth(existingAuthInfo);
      } else {
        return docusign.createClient(email, password);
      }
    } else {
      throw new Error('Did not initialize');
    }
  })
  // **********************************************************************************
  // Step 3 - Store the `authInfo` for later usage
  // **********************************************************************************
  .then(function (client) {
    return [client, storeAuthInfo(client.authInfo)];
  })
  // **********************************************************************************
  // Step 4 - Request Signature via Template
  // **********************************************************************************
  .spread(function (client) {
    return [client, client.envelopes.sendTemplate('Sent from a Template', templateId, templateRoles)];
  })
  .spread(function (client, response) {
    console.log('The envelope information of the created envelope is: \n' + JSON.stringify(response));
    return client;
  })
  // **********************************************************************************
  // Step 5 - Revoke OAuth Token for Logout
  // **********************************************************************************
  .then(function (client) {
    return client.logOut();
  })
  .catch(DocuSignError, function (dsError) {
    console.log('DocuSignError: ', dsError.stack || dsError);
    process.exit(1);
  })
  .catch(function (error) {
    console.log('Error: ', error.stack || error);
    process.exit(1);
  })
  .finally(function () {
    process.exit();
  });
