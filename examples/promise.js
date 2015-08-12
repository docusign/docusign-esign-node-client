var docusign = require('docusign-node');

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
docusign.initAsync(integratorKey, docusignEnv, debug)
  // **********************************************************************************
  // Step 2 - Create a DocuSign Client Object
  // **********************************************************************************
  .then(function (response) {
    if (response.message === 'succesfully initialized') {
      return docusign.clientAsync(email, password);
    } else {
      throw new Error('Did not initialize');
    }
  })
  // **********************************************************************************
  // Step 3 - Request Signature via Template
  // **********************************************************************************
  .then(function (client) {
    return [client, client.envelopes.sendTemplateAsync('Sent from a Template', templateId, templateRoles)];
  })
  .spread(function (client, response) {
    console.log('The envelope information of the created envelope is: \n' + JSON.stringify(response));
    return client;
  })
  // **********************************************************************************
  // Step 4 - Revoke OAuth Token for Logout
  // **********************************************************************************
  .then(function (client) {
    return client.logOutAsync();
  })
  .catch(function (error) {
    console.log('Error: ', error.stack || error);
    process.exit(1);
  })
  .finally(function () {
    process.exit();
  });
