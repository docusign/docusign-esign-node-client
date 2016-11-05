/* CoreRecipes.js
 *
 * Simple script that demonstrates how to accomplish various REST API use-cases.
 */

var docusign = require('docusign-esign');

// Note: Following values are class members for readability and easy testing
// TODO: Enter your DocuSign credentials
var UserName = '[EMAIL]';
var Password = '[PASSWORD]';

// TODO: Enter your Integrator Key (aka API key), created through your developer sandbox preferences
var IntegratorKey = '[INTEGRATOR_KEY]';

// for production environment update to 'www.docusign.net/restapi'
var BaseUrl = 'https://demo.docusign.net/restapi';

/* ****************************************************************************************************************
* RequestSignatureOnDocument()
*
* This recipe demonstrates how to request a signature on a document by first making the
* Login API call then the Create Envelope API call.
******************************************************************************************************************/
var RequestSignatureOnDocument = function () {
  // TODO: Enter signer information and path to a test file
  var signerName = '[SIGNER_NAME]';
  var signerEmail = '[SIGNER_EMAIL]';

  // point to a local document for testing
  var SignTest1File = '[PATH/TO/DOCUMENT/TEST.PDF]';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Create Envelope API (AKA Signature Request)
      // ===============================================================================

      // create a byte array that will hold our document bytes
      var fileBytes = null;
      try {
        var fs = require('fs');
        var path = require('path');
        // read file from a local directory
        fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
      } catch (ex) {
        // handle error
        console.log('Exception: ' + ex);
      }

      // create an envelope that will store the document(s), field(s), and recipient(s)
      var envDef = new docusign.EnvelopeDefinition();
      envDef.setEmailSubject('Please sign this document sent from Node SDK)');

      // add a document to the envelope
      var doc = new docusign.Document();
      var base64Doc = new Buffer(fileBytes).toString('base64');
      doc.setDocumentBase64(base64Doc);
      doc.setName('TestFile.pdf'); // can be different from actual file name
      doc.setDocumentId('1');

      var docs = [];
      docs.push(doc);
      envDef.setDocuments(docs);

      // add a recipient to sign the document, identified by name and email we used above
      var signer = new docusign.Signer();
      signer.setEmail(signerEmail);
      signer.setName(signerName);
      signer.setRecipientId('1');

      // create a signHere tab somewhere on the document for the signer to sign
      // default unit of measurement is pixels, can be mms, cms, inches also
      var signHere = new docusign.SignHere();
      signHere.setDocumentId('1');
      signHere.setPageNumber('1');
      signHere.setRecipientId('1');
      signHere.setXPosition('100');
      signHere.setYPosition('100');

      // can have multiple tabs, so need to add to envelope as a single element list
      var signHereTabs = [];
      signHereTabs.push(signHere);
      var tabs = new docusign.Tabs();
      tabs.setSignHereTabs(signHereTabs);
      signer.setTabs(tabs);

      // add recipients (in this case a single signer) to the envelope
      envDef.setRecipients(new docusign.Recipients());
      envDef.getRecipients().setSigners([]);
      envDef.getRecipients().getSigners().push(signer);

      // send the envelope by setting |status| to "sent". To save as a draft set to "created"
      envDef.setStatus('sent');

      // use the |accountId| we retrieved through the Login API to create the Envelope
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the createEnvelope() API
      envelopesApi.createEnvelope(accountId, envDef, null, function (error, envelopeSummary, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (envelopeSummary) {
          console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        }
      });
    }
  });
}; // end RequestSignatureOnDocument()

/* ****************************************************************************************************************
* RequestSignatureFromTemplate()
*
* This recipe demonstrates how to request a signature from a template in your account.  Templates are design-time
* objects that contain documents, tabs, routing, and recipient roles.  To run this recipe you need to provide a
* valid templateId from your account along with a role name that the template has configured.
******************************************************************************************************************/
var RequestSignatureFromTemplate = function () {
  // TODO: Enter signer information and template info from a template in your account
  var signerName = '[SIGNER_NAME]';
  var signerEmail = '[SIGNER_EMAIL]';
  var templateId = '[TEMPLATE_ID]';
  var templateRoleName = '[TEMPLATE_ROLE_NAME]';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Create Envelope API (AKA Signature Request) from a Template
      // ===============================================================================

      // create a new envelope object that we will manage the signature request through
      var envDef = new docusign.EnvelopeDefinition();
      envDef.setEmailSubject('Please sign this document sent from Node SDK)');
      envDef.setTemplateId(templateId);

      // create a template role with a valid templateId and roleName and assign signer info
      var tRole = new docusign.TemplateRole();
      tRole.setRoleName(templateRoleName);
      tRole.setName(signerName);
      tRole.setEmail(signerEmail);

      // create a list of template roles and add our newly created role
      var templateRolesList = [];
      templateRolesList.push(tRole);

      // assign template role(s) to the envelope
      envDef.setTemplateRoles(templateRolesList);

      // send the envelope by setting |status| to "sent". To save as a draft set to "created"
      envDef.setStatus('sent');

      // use the |accountId| we retrieved through the Login API to create the Envelope
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the createEnvelope() API
      envelopesApi.createEnvelope(accountId, envDef, null, function (error, envelopeSummary, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (envelopeSummary) {
          console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        }
      });
    }
  });
}; // end RequestSignatureFromTemplate()

/* ****************************************************************************************************************
* GetEnvelopeInformation()
*
* This recipe demonstrates how to retrieve real-time envelope information for an existing envelope.  Note that
* DocuSign has certain platform rules in place which limit how frequently you can poll for status on a given
* envelope.  As of this writing the current limit is once every 15 minutes for a given envelope.
******************************************************************************************************************/
var GetEnvelopeInformation = function () {
  // TODO: Enter envelopeId of an envelope you have access to (i.e. you sent the envelope or you're an account admin)
  var envelopeId = '[ENVELOPE_ID]';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Get Envelope API
      // ===============================================================================

      // use the |accountId| we retrieved through the Login API to access envelope info
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the getEnvelope() API
      envelopesApi.getEnvelope(accountId, envelopeId, null, function (error, env, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (env) {
          console.log('Envelope: ' + JSON.stringify(env));
        }
      });
    }
  });
}; // end GetEnvelopeInformation()

/* ****************************************************************************************************************
* listRecipients()
*
* This recipe demonstrates how to retrieve real-time envelope recipient information for an existing envelope.
* The call will return information on all recipients that are part of the envelope's routing order.
******************************************************************************************************************/
var listRecipients = function () {
  // TODO: Enter envelopeId of an envelope you have access to (i.e. you sent the envelope or you're an account admin)
  var envelopeId = '[ENVELOPE_ID]';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  List Recipients() API
      // ===============================================================================

      // use the |accountId| we retrieved through the Login API
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the listRecipients() API
      envelopesApi.listRecipients(accountId, envelopeId, function (error, recips, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (recips) {
          console.log('Recipients: ' + JSON.stringify(recips));
        }
      });
    }
  });
}; // end listRecipients()

/* ****************************************************************************************************************
* ListEnvelopes()
*
* This recipe demonstrates how to retrieve real-time envelope status and information for an existing envelopes in
* your account.  The returned set of envelopes can be filtered by date, status, or other properties.
******************************************************************************************************************/
var ListEnvelopes = function () {
  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  List Envelope API
      // ===============================================================================

      // use the |accountId| we retrieved through the Login API
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // the list status changes call requires at least a from_date
      var options = new envelopesApi.ListStatusChangesOptions();

      // set from date to filter envelopes (ex: Dec 1, 2015)
      options.setFromDate('2015/12/01');

      // call the listStatusChanges() API
      envelopesApi.listStatusChanges(accountId, options, function (error, envelopes, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (envelopes) {
          console.log('EnvelopesInformation: ' + JSON.stringify(envelopes));
        }
      });
    }
  });
}; // end ListEnvelopes()

/* ****************************************************************************************************************
* GetEnvelopeDocuments()
*
* This recipe demonstrates how to retrieve the documents from a given envelope.  Note that if the envelope is in
* completed status that you have the option of downloading just the signed documents or a combined PDF that contains
* the envelope documents as well as the envelope's auto-generated Certificate of Completion (CoC).
******************************************************************************************************************/
var GetEnvelopeDocuments = function () {
  // TODO: Enter envelopeId of an envelope you have access to (i.e. you sent the envelope or
  // you're an account admin in same account).  Also provide a valid documentId
  var envelopeId = '[ENVELOPE_ID]';
  var documentId = '[DOCUMENT_ID]';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Get Document API
      // ===============================================================================

      // use the |accountId| we retrieved through the Login API
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the getDocument() API
      envelopesApi.getDocument(accountId, envelopeId, documentId, function (error, document, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (document) {
          try {
            var fs = require('fs');
            var path = require('path');
            // download the document pdf
            var filename = accountId + '_' + envelopeId + '_' + documentId + '.pdf';
            var tempFile = path.resolve(__dirname, filename);
            fs.writeFile(tempFile, new Buffer(document, 'binary'), function (err) {
              if (err) console.log('Error: ' + err);
            });
            console.log('Document ' + documentId + ' from envelope ' + envelopeId + ' has been downloaded to ' + tempFile);
          } catch (ex) {
            console.log('Exception: ' + ex);
          }
        }
      });
    }
  });
}; // end GetEnvelopeDocuments()

/* ****************************************************************************************************************
* EmbeddedSending()
*
* This recipe demonstrates how to open the Embedded Sending view of a given envelope (AKA the Sender View).  While
* in the sender view the user can edit the envelope by adding/deleting documents, tabs, and/or recipients before
* sending the envelope (signature request) out.
******************************************************************************************************************/
var EmbeddedSending = function () {
  // TODO: Enter signer info and path to a test file
  var signerName = '[SIGNER_NAME]';
  var signerEmail = '[SIGNER_EMAIL]';

  // point to a local document for testing
  var SignTest1File = '[PATH/TO/DOCUMENT/TEST.PDF]';

  // we will generate this from the second API call we make
  var envelopeId = '';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Create Envelope API (AKA Signature Request)
      // ===============================================================================

      // create a byte array that will hold our document bytes
      var fileBytes = null;
      try {
        var fs = require('fs');
        var path = require('path');
        // read file from a local directory
        fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
      } catch (ex) {
        console.log('Exception: ' + ex);
      }

      // create an envelope that will store the document(s), field(s), and recipient(s)
      var envDef = new docusign.EnvelopeDefinition();
      envDef.setEmailSubject('Please sign this document sent from Node SDK)');

      // add a document to the envelope
      var doc = new docusign.Document();
      var base64Doc = new Buffer(fileBytes).toString('base64');
      doc.setDocumentBase64(base64Doc);
      doc.setName('TestFile.pdf'); // can be different from actual file name
      doc.setDocumentId('1');

      var docs = [];
      docs.push(doc);
      envDef.setDocuments(docs);

      // add a recipient to sign the document, identified by name and email we used above
      var signer = new docusign.Signer();
      signer.setEmail(signerEmail);
      signer.setName(signerName);
      signer.setRecipientId('1');

      // create a signHere tab somewhere on the document for the signer to sign
      // default unit of measurement is pixels, can be mms, cms, inches also
      var signHere = new docusign.SignHere();
      signHere.setDocumentId('1');
      signHere.setPageNumber('1');
      signHere.setRecipientId('1');
      signHere.setXPosition('100');
      signHere.setYPosition('100');

      // can have multiple tabs, so need to add to envelope as a single element list
      var signHereTabs = [];
      signHereTabs.push(signHere);
      var tabs = new docusign.Tabs();
      tabs.setSignHereTabs(signHereTabs);
      signer.setTabs(tabs);

      // add recipients (in this case a single signer) to the envelope
      envDef.setRecipients(new docusign.Recipients());
      envDef.getRecipients().setSigners([]);
      envDef.getRecipients().getSigners().push(signer);

      // set envelope's |status| to "created" so we can open the embedded sending view next
      envDef.setStatus('created');

      // use the |accountId| we retrieved through the Login API to create the Envelope
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the createEnvelope() API
      envelopesApi.createEnvelope(accountId, envDef, function (error, envelopeSummary, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (envelopeSummary) {
          envelopeId = envelopeSummary.getEnvelopeId();
          console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));

          // ===============================================================================
          // Step 3:  Create SenderView API
          // ===============================================================================
          // use the |accountId| we retrieved through the Login API
          var loginAccount = new docusign.LoginAccount();
          loginAccount = loginAccounts[0];
          var accountId = loginAccount.accountId;

          // instantiate a new EnvelopesApi object
          var envelopesApi = new docusign.EnvelopesApi();

          // set the url where you want the sender to go once they are done editing/sending the envelope
          var returnUrl = new docusign.ReturnUrlRequest();
          returnUrl.setReturnUrl('https://www.docusign.com/devcenter');

          // call the createEnvelope() API
          envelopesApi.createSenderView(accountId, envelopeId, returnUrl, function (error, senderView, response) {
            if (error) {
              console.log('Error: ' + error);
              return;
            }

            if (senderView) {
              console.log('ViewUrl: ' + JSON.stringify(senderView));
            }
          });
        }
      });
    }
  });
}; // end EmbeddedSending()

/* ****************************************************************************************************************
* EmbeddedSigning()
*
* This recipe demonstrates how to open the Embedded Signing view of a given envelope (AKA the Recipient View).  The
* Recipient View can be used to sign document(s) directly through your UI without having to context-switch and sign
* through the DocuSign Website.  This is done by opening the Recipient View in an iFrame for web applications or
* a webview for mobile apps.
******************************************************************************************************************/
var EmbeddedSigning = function () {
  // TODO: Enter signer info and path to a test file
  var signerName = '[SIGNER_NAME]';
  var signerEmail = '[SIGNER_EMAIL]';

  // point to a local document for testing
  var SignTest1File = '[PATH/TO/DOCUMENT/TEST.PDF]';

  // we will generate this from the second API call we make
  var envelopeId = '';

  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Create Envelope API (AKA Signature Request)
      // ===============================================================================

      // create a byte array that will hold our document bytes
      var fileBytes = null;
      try {
        var fs = require('fs');
        var path = require('path');
        // read file from a local directory
        fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
      } catch (ex) {
        // TODO: handle error
        console.log('Exception: ' + ex);
      }

      // create an envelope that will store the document(s), field(s), and recipient(s)
      var envDef = new docusign.EnvelopeDefinition();
      envDef.setEmailSubject('Please sign this document sent from Node SDK)');

      // add a document to the envelope
      var doc = new docusign.Document();
      var base64Doc = new Buffer(fileBytes).toString('base64');
      doc.setDocumentBase64(base64Doc);
      doc.setName('TestFile.pdf'); // can be different from actual file name
      doc.setDocumentId('1');

      var docs = [];
      docs.push(doc);
      envDef.setDocuments(docs);

      // add a recipient to sign the document, identified by name and email we used above
      var signer = new docusign.Signer();
      signer.setEmail(signerEmail);
      signer.setName(signerName);
      signer.setRecipientId('1');

      // Must set |clientUserId| for embedded recipients and provide the same value when requesting
      // the recipient view URL in the next step
      signer.setClientUserId('1001');

      // create a signHere tab somewhere on the document for the signer to sign
      // default unit of measurement is pixels, can be mms, cms, inches also
      var signHere = new docusign.SignHere();
      signHere.setDocumentId('1');
      signHere.setPageNumber('1');
      signHere.setRecipientId('1');
      signHere.setXPosition('100');
      signHere.setYPosition('100');

      // can have multiple tabs, so need to add to envelope as a single element list
      var signHereTabs = [];
      signHereTabs.push(signHere);
      var tabs = new docusign.Tabs();
      tabs.setSignHereTabs(signHereTabs);
      signer.setTabs(tabs);

      // add recipients (in this case a single signer) to the envelope
      envDef.setRecipients(new docusign.Recipients());
      envDef.getRecipients().setSigners([]);
      envDef.getRecipients().getSigners().push(signer);

      // send the envelope by setting |status| to "sent". To save as a draft set to "created"
      envDef.setStatus('sent');

      // use the |accountId| we retrieved through the Login API to create the Envelope
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new EnvelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // call the createEnvelope() API
      envelopesApi.createEnvelope(accountId, envDef, null, function (error, envelopeSummary, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (envelopeSummary) {
          envelopeId = envelopeSummary.envelopeId;
          console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));

          // ===============================================================================
          // Step 3:  Create RecipientView API
          // ===============================================================================
          // use the |accountId| we retrieved through the Login API
          var loginAccount = new docusign.LoginAccount();
          loginAccount = loginAccounts[0];
          var accountId = loginAccount.accountId;

          // instantiate a new EnvelopesApi object
          var envelopesApi = new docusign.EnvelopesApi();

          // set the url where you want the recipient to go once they are done signing
          var returnUrl = new docusign.RecipientViewRequest();
          returnUrl.setReturnUrl('https://www.docusign.com/devcenter');
          returnUrl.setAuthenticationMethod('email');

          // recipient information must match embedded recipient info we provided in step #2
          returnUrl.setEmail(signerEmail);
          returnUrl.setUserName(signerName);
          returnUrl.setRecipientId('1');
          returnUrl.setClientUserId('1001');

          // call the CreateRecipientView API
          envelopesApi.createRecipientView(accountId, envelopeId, returnUrl, function (error, recipientView, response) {
            if (error) {
              console.log('Error: ' + error);
              return;
            }

            if (recipientView) {
              console.log('ViewUrl: ' + JSON.stringify(recipientView));
            }
          });
        }
      });
    }
  });
}; // end EmbeddedSigning()

/* ****************************************************************************************************************
* EmbeddedConsole()
*
* This recipe demonstrates how to open the DocuSign Console in an embedded view.  DocuSign recommends you use an
* iFrame for web applications and a webview for mobile apps.
******************************************************************************************************************/
var EmbeddedConsole = function () {
  // initialize the api client
  var apiClient = new docusign.ApiClient();
  apiClient.setBasePath(BaseUrl);

  // create JSON formatted auth header
  var creds = '{"Username":"' + UserName + '","Password":"' + Password + '","IntegratorKey":"' + IntegratorKey + '"}';
  apiClient.addDefaultHeader('X-DocuSign-Authentication', creds);

  // assign api client to the Configuration object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // ===============================================================================
  // Step 1:  Login() API
  // ===============================================================================
  // login call available off the AuthenticationApi
  var authApi = new docusign.AuthenticationApi();

  // login has some optional parameters we can set
  var loginOps = new authApi.LoginOptions();
  loginOps.setApiPassword('true');
  loginOps.setIncludeAccountIdGuid('true');
  authApi.login(loginOps, function (error, loginInfo, response) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    if (loginInfo) {
      // list of user account(s)
      // note that a given user may be a member of multiple accounts
      var loginAccounts = loginInfo.getLoginAccounts();
      console.log('LoginInformation: ' + JSON.stringify(loginAccounts));

      // ===============================================================================
      // Step 2:  Create ConsoleView API
      // ===============================================================================

      // use the |accountId| we retrieved through the Login API
      var loginAccount = new docusign.LoginAccount();
      loginAccount = loginAccounts[0];
      var accountId = loginAccount.accountId;

      // instantiate a new envelopesApi object
      var envelopesApi = new docusign.EnvelopesApi();

      // set the url where you want the user to go once they logout of the Console
      var returnUrl = new docusign.ConsoleViewRequest();
      returnUrl.setReturnUrl('https://www.docusign.com/devcenter');

      // call the createConsoleView() API
      envelopesApi.createConsoleView(accountId, returnUrl, function (error, consoleView, response) {
        if (error) {
          console.log('Error: ' + error);
          return;
        }

        if (consoleView) {
          console.log('ConsoleView: ' + JSON.stringify(consoleView));
        }
      });
    }
  });
}; // end EmbeddedConsole()

// *****************************************************************
// *****************************************************************
// main() -
// *****************************************************************
// *****************************************************************
// Test #1
console.log('Running test #1...\n');
RequestSignatureOnDocument();
console.log('\nTest #1 Complete.\n-----------------');

// Test #2
console.log('Running test #2...\n');
RequestSignatureFromTemplate();
console.log('\nTest #2 Complete.\n-----------------');

// Test #3
console.log('Running test #3...\n');
GetEnvelopeInformation();
console.log('\nTest #3 Complete.\n-----------------');

// Test #4
console.log('Running test #4...\n');
listRecipients();
console.log('\nTest #4 Complete.\n-----------------');

// Test #5
console.log('Running test #5...\n');
ListEnvelopes();
console.log('\nTest #5 Complete.\n-----------------');

// Test #6
console.log('Running test #6...\n');
GetEnvelopeDocuments();
console.log('\nTest #6 Complete.\n-----------------');

// Test #7
console.log('Running test #7...\n');
EmbeddedSending();
console.log('\nTest #7 Complete.\n-----------------');

// Test #8
console.log('Running test #8...\n');
EmbeddedSigning();
console.log('\nTest #8 Complete.\n-----------------');

// Test #9
console.log('Running test #9...\n');
EmbeddedConsole();
console.log('\nTest #9 Complete.\n-----------------');
