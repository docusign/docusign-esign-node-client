DocuSign Node Client
===========

NPM module that wraps the <a href="https://www.docusign.com">DocuSign</a> API

For more information about the DocuSign API <a href="https://www.docusign.com/developer-center">click here</a>.

For more information about how to use this Node Package <a href="https://github.com/docusign/DocuSign-Node-Client/wiki">click here</a>.

Feel free to create a Pull Request! 

Pre-requisites
----------

### DocuSign Developer account (Free)

You can create your free dev account at the [DocuSign DevCenter](https://www.docusign.com/developer-center) using this [registration form](https://www.docusign.com/developer-center/get-started). You will need the **Integrator Key** from your developer account in order to use the DocuSign Node Client Library.

### Useful Reading

See [Common Terms](https://www.docusign.com/developer-center/explore/common-terms) for an explantion of the basic components of the DocuSign platform.

Getting Started
----------

This example shows you how to do the following:
- Create a DocuSign Object with an Integrator Key and a Target DocuSign Environment
- Create a DocuSign Client Object and Login using your DocuSign Account Credentials
- Create a new Envelope using a Template and sending to the recipient you specify
- Logout of the Client by Revoking the DocuSign user's OAuth Token

```
var docusign = require('docusign');
var async = require('async');


var integratorKey 		    = "***", //Integrator Key associated with your DocuSign Integration
		email 		        = "***", //Email for your DocuSign Account
		password	        = "***", //Password for your DocuSign Account
		docusignEnv		    = "***", //DocuSign Environment generally demo for testing purposes
		fullName		    = "***", //Recipient's Full Name
		recipientEmail		= "***", //Recipient's Email
		templateId		    = "***", //ID of the Template you with to create the Envelope with
		templateRoleName	= "***"; //Role Name of the Template

var templateRoles = [{
	email: email,
	name: fullName,
	roleName: tempalteRoleName,
}]

async.waterfall([
    //**********************************************************************************
    // Step 1 - Initialize DocuSign Object with Integratory Key and Desired Environment
    //**********************************************************************************
	function init(next){
		docusign.init(integratorKey, docusignEnv, debug, function(response){
			if(response.message === 'succesfully initialized'){
				next(null);
			} else {
				return;
			}
		});
	},

    //**********************************************************************************
    // Step 2 - Create a DocuSign Client Object
    //**********************************************************************************
	function createClient(next){
		docusign.client(email, password, function(response){
			if('error' in response){
				console.log('Error: ' + response.error);
				return;
			}
			next(null, response);
		});
	},

    //**********************************************************************************
    // Step 3 - Request Signature via Template
    //**********************************************************************************
	function sendTemplate(client, next){
      client.envelopes.sendEnvelope('Sent from a Template', templateId, templateRoles, function(err, response){
        if(response.error){
      	  console.log('Error: ' + response.error);
      	  return;
        }
        console.log('The envelope information of the created envelope is: \n' + JSON.stringify(response));
        next(null, client);
      });
    },

    //**********************************************************************************
    // Step 4 - Revoke OAuth Token for Logout
    //**********************************************************************************
    function logOut(client, next){
      client.logOut(function(err, response){
        if(!err){
      	  next(null);	
        } else {
      	  console.log(err);
        }
      });
    },

]);
```

How to run Unit Tests
-----------

There is a config.json file provided. Please copy your DocuSign Integrator key along with an Email Address, Password, Template Id, Template Role, and Envelope Id associated with your DocuSign account.

In the console run "npm test".
