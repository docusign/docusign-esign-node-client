const docusign = require('../src/index');

const oAuth = docusign.ApiClient.OAuth;
const restApi = docusign.ApiClient.RestApi;
let config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const assert = require('assert');
const path = require('path');
const superagent = require('superagent');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
const fs = require('fs');

const userName = config.email;
const { privateKey } = config;
const { integratorKey } = config;
const { integratorKeyAuthCode } = config;
const { templateId } = config;

// for production environment update to "www.docusign.net/restapi"
const basePath = restApi.BasePath.DEMO;
const oAuthBasePath = oAuth.BasePath.DEMO;

const SignTest1File = 'docs/SignTest1.pdf';
const LargeTestDocument1 = 'docs/LargeTestDocument1.pdf';
const brandLogoPath = 'img/docusign-lgo.png';
const brandXmlPath = 'docs/brand.xml';
let accountId = '';
let envelopeId = '';
const { userId } = config;
const RedirectURI = 'https://www.docusign.com/api';
const privateKeyFilename = 'keys/docusign_private_key.txt';
const expiresIn = 3600;

if (privateKey) {
  let buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  const text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', (done) => {
  const apiClient = new docusign.ApiClient({
    basePath,
    oAuthBasePath,
  });
  const scopes = [
    oAuth.Scope.IMPERSONATION,
    oAuth.Scope.SIGNATURE,
  ];

  before((done) => {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    const oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then((res) => {
        let baseUri;
        let accountDomain;
        apiClient.addDefaultHeader('Authorization', `Bearer ${res.body.access_token}`);

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then((userInfo) => {
            accountId = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(`${accountDomain[0]}/restapi`);
            // console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch((error) => {
            if (error) {
              return done(error);
            }
          });
      })
      .catch((err) => {
        if (err) {
          return done(err);
        }
      });
  });
  it('oAuthBasePAth should update whenever BasePath does and match the environment', (done) => {
    const apiClient = new docusign.ApiClient({
      basePath: restApi.BasePath.DEMO,
    });
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);
    assert.notEqual(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.STAGE);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.STAGE);

    apiClient.setBasePath(restApi.BasePath.PRODUCTION);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.DEMO);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);

    return done();
  });
  /**
   *
   * New OAuth Methods Tests Start
   *
   */
  it('should be able to request a JWT user token', (done) => {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then((response) => {
        assert.ok(response.body.access_token);
        done();
      })
      .catch((err) => done(err));
  });

  it('should be able to request a JWT application token', (done) => {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTApplicationToken(integratorKey, scopes, privateKeyFile, expiresIn)
      .then((response) => {
        assert.ok(response.body.access_token);
        done();
      }).catch((err) => done(err));
  });
  it('should be able to log in with authorization code grant', (done) => {
    /*
    var responseType = apiClient.OAuth.ResponseType.CODE; // Here we specify a response type of code, retrieving a single use auth code to be used to request a token
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
    var authUri = apiClient.getAuthorizationUri(IntegratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);// get DocuSign OAuth authorization url

    // Open DocuSign OAuth login in a browser, res being your node.js response object.
     res.redirect(authUri);

    // IMPORTANT: after the login, DocuSign will send back a fresh
    // authorization code as a query param of the redirect URI.
    // You should set up a route that handles the redirect call to get
    // that code and pass it to token endpoint as shown in the next
    // lines:
    var code = '<once_you_get_the_oauth_code_put_it_here>'
    apiClient.generateAccessToken(IntegratorKeyAuthCode, ClientSecret, code)
      .then(function(oAuthToken){
        assert.equal(err, undefined);
        assert.notEqual(oAuthToken, undefined);
        assert.notEqual(oAuthToken.accessToken, undefined);
        assert.ok(oAuthToken.expiresIn > 0);

        console.log(oAuthToken);

        apiClient.getUserInfo(oAuthToken.accessToken)
          .then(function(userInfo){
            assert.equal(err, undefined);
            assert.notEqual(userInfo, undefined);
            assert.notEqual(userInfo.accounts, undefined);
            assert.ok(userInfo.accounts.length > 0);

            console.log("UserInfo: " + userInfo);
            // parse first account's basePath
            // below code required for production, no effect in demo (same
            // domain)
            apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
            return done(oAuthToken)

          })
          .catch(function(err){
            return done(err);
          });
      })
      .catch(function(err){
        return done(err);
      });
    */

    done(); // You will want to comment this line when uncommenting line 80
  });

  it('should be able to log in with implicit grant', (done) => {
    /*
    var responseType = apiClient.OAuth.ResponseType.TOKEN; // Here we specify a response type of 'token', retrieving our oauth token directly
    var scopes = [apiClient.OAuth.Scope.EXTENDED];
    var randomState = '*^.$DGj*)+}Jk'; // after successful login you should compare the value of URI decoded "state" query param with the one created here. They should match
    var authUri = apiClient.getAuthorizationUri(IntegratorKeyImplicit, scopes, RedirectURI, responseType, randomState); // get DocuSign OAuth authorization url

    // Open DocuSign OAuth login in a browser, res being your node.js response object.
      res.redirect(authUri);

    // IMPORTANT: after the login, DocuSign will send back a new
    // access token in the hash fragment of the redirect URI.
    // You should set up a client-side handler that handles window.location change to get
    // that token and pass it to the ApiClient object as shown in the next
    // lines:

    var token = '<once_you_get_the_oauth_token_put_it_here>';
    // now that the API client has an OAuth token, let's use it in all
    // DocuSign APIs

   apiClient.getUserInfo(token)
     .then(function(userInfo){
       assert.equal(err, undefined);
       assert.notEqual(userInfo, undefined);
       assert.notEqual(userInfo.accounts, undefined);
       assert.ok(userInfo.accounts.length > 0);

       console.log("UserInfo: " + userInfo);
       // parse first account's basePath
       // below code required for production, no effect in demo (same
       // domain)
       apiClient.setBasePath(userInfo.accounts[0].baseUri + "/restapi");
       return done(userInfo)

     })
     .catch(function(err){
       return done(err);
     });
    */
    done(); // You will want to comment this line when uncommenting line 118
  });

  it('should return a properly formatted authorization uri', (done) => {
    const responseType = apiClient.OAuth.ResponseType.CODE;
    const scopes = [apiClient.OAuth.Scope.EXTENDED];
    const randomState = '*^.$DGj*)+}Jk';
    const formattedScopes = scopes.join(encodeURI(' '));
    let authUri;
    let correctAuthUri;
    authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);
    correctAuthUri = `https://${
      oAuthBasePath
    }/oauth/auth`
      + `?response_type=${responseType
      }&scope=${formattedScopes
      }&client_id=${integratorKeyAuthCode
      }&redirect_uri=${encodeURIComponent(RedirectURI)
      }${randomState ? `&state=${randomState}` : ''}`;

    assert.equal(authUri, correctAuthUri);
    done();
  });

  it('should return an authorization uri to a valid page', (done) => {
    const responseType = apiClient.OAuth.ResponseType.CODE;
    const scopes = [apiClient.OAuth.Scope.EXTENDED];
    const randomState = '*^.$DGj*)+}Jk';
    const authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);

    superagent.get(authUri)
      .end((err, res) => {
        assert.equal(err, undefined);
        assert.equal(res.statusCode, 200);
        done();
      });
  });

  /**
   *
   * New Oauth Methods Tests End
   *
   */

  it('requestASignature', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = userName;
    signer.name = 'Pat Developer';
    signer.recipientId = '1';

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: undefined })
      .then((envelopeSummary) => {
        // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        assert.equal(envelopeSummary && Object.keys(envelopeSummary).length > 0, true);
        envelopeId = envelopeSummary.envelopeId;
        envelopesApi.updateRecipients('xxxxx-xxxx-xxxx', envelopeId, { recipients: envDef.recipients })
          .then((data) => {
            done();
          })
          .catch((error) => {
            debugger;
            return done(error);
          });
      })
      .catch((error) => {
        if (error) {
          debugger;
          return done(error);
        }
      });
  });
  // deprecated
  // it('bulkEnvelope update recipients', function (done) {
  //   var bulkEnvelopesApi = new docusign.BulkEnvelopesApi(apiClient);
  //   var bulkRecipients = [{ name: 'test User1', email: 'test1@mailinator.com' }, {
  //     name: 'test User2',
  //     email: 'test2@mailinator.com'
  //   }, { name: 'test User3', email: 'test3@mailinator.com' }];
  //   var fileBytes = null;
  //   try {
  //     var fs = require('fs');
  //     // read file from a local directory
  //     fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
  //   } catch (ex) {
  //     // handle error
  //     // console.log('Exception: ' + ex);
  //   }
  //
  //   // create an envelope to be signed
  //   var envDef = new docusign.EnvelopeDefinition();
  //   envDef.emailSubject = 'Please Sign my Node SDK Envelope';
  //   envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';
  //
  //   // add a document to the envelope
  //   var doc = new docusign.Document();
  //   var base64Doc = Buffer.from(fileBytes).toString('base64');
  //   doc.documentBase64 = base64Doc;
  //   doc.name = 'TestFile.pdf';
  //   doc.documentId = '1';
  //
  //   var docs = [];
  //   docs.push(doc);
  //   envDef.documents = docs;
  //
  //   // Add a recipient to sign the document
  //   var signer = new docusign.Signer();
  //   signer.email = userName;
  //   signer.name = 'Pat Developer';
  //   signer.recipientId = '1';
  //
  //   // create a signHere tab somewhere on the document for the signer to sign
  //   // default unit of measurement is pixels, can be mms, cms, inches also
  //   var signHere = new docusign.SignHere();
  //   signHere.documentId = '1';
  //   signHere.pageNumber = '1';
  //   signHere.recipientId = '1';
  //   signHere.xPosition = '100';
  //   signHere.yPosition = '100';
  //
  //   // can have multiple tabs, so need to add to envelope as a single element list
  //   var signHereTabs = [];
  //   signHereTabs.push(signHere);
  //   var tabs = new docusign.Tabs();
  //   tabs.signHereTabs = signHereTabs;
  //   signer.tabs = tabs;
  //
  //   // Above causes issue
  //   envDef.recipients = new docusign.Recipients();
  //   envDef.recipients.signers = [];
  //   envDef.recipients.signers.push(signer);
  //
  //   // send the envelope (otherwise it will be "created" in the Draft folder
  //
  //   var envelopesApi = new docusign.EnvelopesApi(apiClient);
  //
  //   envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
  //     .then(function (envelopeSummary) {
  //       if (envelopeSummary) {
  //         console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
  //         envelopeId = envelopeSummary.envelopeId;
  //         console.log(bulkRecipients);
  //         csvStringify(bulkRecipients, { header: true }, function (err, bulkRecipientsRequest) {
  //           if (err) {
  //             return done(err);
  //           }
  //           console.log(bulkRecipientsRequest);
  //           var byteArray = Buffer.from(bulkRecipientsRequest);
  //           console.log(byteArray);
  //
  //           bulkEnvelopesApi.updateRecipients(byteArray, accountId, envelopeId, '1')
  //             .then(function (data) {
  //               assert.equal(data.bulkRecipientsCount, bulkRecipients.length);
  //               done();
  //             })
  //             .catch(function (err) {
  //               console.log(err);
  //               done(err);
  //             });
  //         });
  //       }
  //     })
  //     .catch(function (error) {
  //       if (error) {
  //         return done(error);
  //       }
  //     });
  // });
  it('requestSignatureFromTemplate', (done) => {
    const templateRoleName = 'Needs to sign';

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // / assign template information including ID and role(s)
    envDef.templateId = templateId;

    // create a template role with a valid templateId and roleName and assign signer info
    const tRole = new docusign.TemplateRole();
    tRole.roleName = templateRoleName;
    tRole.name = 'Pat Developer';
    tRole.email = userName;

    // create a list of template roles and add our newly created role
    const templateRolesList = [];
    templateRolesList.push(tRole);

    // assign template role(s) to the envelope
    envDef.templateRoles = templateRolesList;

    // send the envelope by setting |status| to "sent". To save as a draft set to "created"
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
        assert.notEqual(envelopeSummary, {});
        done();
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('embeddedSigning', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = userName;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        if (envelopeSummary) {
          // console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
          const returnUrl = 'http://www.docusign.com/developer-center';
          const recipientView = new docusign.RecipientViewRequest();
          recipientView.returnUrl = returnUrl;
          recipientView.clientUserId = clientUserId;
          recipientView.authenticationMethod = 'email';
          recipientView.userName = name;
          recipientView.email = userName;
          envelopesApi.createRecipientView(accountId, envelopeSummary.envelopeId, { recipientViewRequest: recipientView })
            .then((viewUrl) => {
              if (viewUrl) {
                console.log(`ViewUrl is ${JSON.stringify(viewUrl)}`);
                done();
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('createTemplate', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const template = new docusign.EnvelopeTemplate();
    template.emailSubject = 'Please Sign my Node SDK Envelope';
    template.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    template.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.roleName = 'Signer1';
    signer.recipientId = '1';

    // Create a SignHere tab somewhere on the document for the signer to sign
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    template.recipients = new docusign.Recipients();
    template.recipients.signers = [];
    template.recipients.signers.push(signer);

    const envTemplate = new docusign.EnvelopeTemplate();
    envTemplate.name = 'myTemplate';
    template.envelopeTemplate = envTemplate;

    const templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(accountId, { envelopeTemplate: template })
      .then((templateSummary) => {
        if (templateSummary) {
          done();
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('downLoadEnvelopeDocuments', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, LargeTestDocument1));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = userName;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        if (envelopeSummary) {
          console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
          envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined')
            .then((pdfBytes) => {
              if (pdfBytes) {
                try {
                  const fs = require('fs');
                  // download the document pdf
                  const filename = `${accountId}_${envelopeSummary.envelopeId}_combined.pdf`;
                  const tempFile = path.resolve(__dirname, filename);
                  fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), (err) => {
                    if (err) console.log(`Error: ${err}`);
                  });
                  console.log(`Document from envelope ${envelopeSummary.envelopeId} has been downloaded to ${tempFile}`);
                  done();
                } catch (ex) {
                  console.log(`Exception: ${ex}`);
                }
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
  it('listDocuments', (done) => {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.listDocuments(accountId, envelopeId)
      .then((docsList) => {
        if (docsList) {
          assert.equal(envelopeId, docsList.envelopeId);
          console.log(`EnvelopeDocumentsResult: ${JSON.stringify(docsList)}`);

          envelopesApi.listDocuments(accountId, envelopeId)
            .then((docsListNoOpt) => {
              if (docsListNoOpt) {
                assert.equal(envelopeId, docsListNoOpt.envelopeId);
                assert.equal(JSON.stringify(docsList), JSON.stringify(docsListNoOpt));
                return done();
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
  it('listStatusBody', (done) => {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);
    const envelopeIdsRequest = new docusign.EnvelopeIdsRequest();
    envelopeIdsRequest.envelopeIds = [envelopeId];
    envelopesApi.listStatus(accountId, { envelopeIdsRequest, envelopeIds: 'request_body' })
      .then((data) => {
        assert.notEqual(data.envelopes, undefined);
        assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
        assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
        done();
      })
      .catch((error) => done(error));
  });
  it('listStatusQuery', (done) => {
    const envelopesApi = new docusign.EnvelopesApi(apiClient);
    envelopesApi.listStatusChanges(accountId, { envelopeIds: envelopeId })
      .then((data) => {
        assert.notEqual(data.envelopes, undefined);
        assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
        assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
        done();
      })
      .catch((error) => done(error));
  });

  // it('listStatusChangesOptions 70 envelopeIds', function (done) {
  //   console.log('starwars')
  //
  //   var envelopesApi = new docusign.EnvelopesApi(apiClient);
  //   var THIRTY_DAYS_AGO = new Date(new Date().setDate(new Date().getDate()-30));
  //
  //   var options = {
  //     count: "70", fromDate: THIRTY_DAYS_AGO
  //   };
  //   envelopesApi.listStatusChanges(accountId, options)
  //     .then(function (data) {
  //       var envelopIds = data.envelopes.reduce( function( acc, envelope ) {
  //         if (!acc.length) return envelope.envelopeId;
  //         return acc + ', ' + envelope.envelopeId;
  //       }, '');
  //       console.log(envelopIds);
  //       envelopesApi.listStatusChanges(accountId, {envelopeIds: envelopIds})
  //         .then( function(data) {
  //           assert.notEqual(data.envelopes, undefined);
  //           assert.notEqual(data.envelopes[0].attachmentsUri, undefined);
  //           assert.notEqual(data.envelopes[0].statusChangedDateTime, undefined);
  //           done();
  //         }).catch(function (error, resp) {
  //         return done(error);
  //       });;
  //     })
  //     .catch(function (error) {
  //       return done(error);
  //     });
  // });

  it('getDiagnosticLogs', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'downLoadEnvelopeDocuments';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = userName;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const diagApi = new docusign.DiagnosticsApi(apiClient);

    const diagSettings = new docusign.DiagnosticsSettingsInformation();
    diagSettings.apiRequestLogging = 'true';
    diagApi.updateRequestLogSettings({ diagnosticsSettingsInformation: diagSettings })
      .then((diagnosticsSettingsInformation) => {
        if (diagnosticsSettingsInformation) {
          console.log(`DiagnosticsSettingsInformation: ${JSON.stringify(diagnosticsSettingsInformation)}`);

          const envelopesApi = new docusign.EnvelopesApi(apiClient);

          envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
            .then((envelopeSummary) => {
              if (envelopeSummary) {
                console.log(`EnvelopeSummary: ${JSON.stringify(envelopeSummary)}`);
                envelopesApi.getDocument(accountId, envelopeSummary.envelopeId, 'combined')
                  .then((pdfBytes) => {
                    if (pdfBytes) {
                      try {
                        const fs = require('fs');
                        // download the document pdf
                        const filename = `${accountId}_${envelopeSummary.envelopeId}_combined.pdf`;
                        const tempFile = path.resolve(__dirname, filename);
                        fs.writeFile(tempFile, Buffer.from(pdfBytes, 'binary'), (err) => {
                          if (err) console.log(`Error: ${err}`);
                        });
                        console.log(`Document from envelope ${envelopeSummary.envelopeId} has been downloaded to ${tempFile}`);
                      } catch (ex) {
                        console.log(`Exception: ${ex}`);
                      }
                      diagApi.listRequestLogs()
                        .then((logsList) => {
                          if (logsList) {
                            const { requestLogId } = logsList.apiRequestLogs[0];
                            console.log(requestLogId);
                            diagApi.getRequestLog(requestLogId)
                              .then((diagBytes) => {
                                if (diagBytes) {
                                  try {
                                    const fs = require('fs');
                                    // download the document pdf
                                    const filename = `${requestLogId}.txt`;
                                    const tempFile = path.resolve(__dirname, filename);
                                    fs.writeFile(tempFile, diagBytes, (err) => {
                                      if (err) console.log(`Error: ${err}`);
                                    });
                                    console.log(`Diagnostics ID ${requestLogId} data has been downloaded to ${tempFile}`);
                                    done();
                                  } catch (ex) {
                                    console.log(`Exception: ${ex}`);
                                    done(ex);
                                  }
                                }
                              })
                              .catch((error) => {
                                if (error) {
                                  return done(error);
                                }
                              });
                          }
                        })
                        .catch((error) => {
                          if (error) {
                            return done(error);
                          }
                        });
                    }
                  })
                  .catch((error) => {
                    if (error) {
                      return done(error);
                    }
                  });
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('getTemplate', (done) => {
    const templatesApi = new docusign.TemplatesApi(apiClient);
    templatesApi.get(accountId, templateId)
      .then((envelopeTemplate) => {
        if (envelopeTemplate) {
          console.log(`EnvelopeTemplate: ${JSON.stringify(envelopeTemplate)}`);
          templatesApi.get(accountId, templateId)
            .then((envelopeTemplateNoOpts) => {
              if (envelopeTemplateNoOpts) {
                console.log(`EnvelopeTemplate: ${JSON.stringify(envelopeTemplateNoOpts)}`);
                assert.equal(envelopeTemplateNoOpts.emailSubject, envelopeTemplate.emailSubject);
                done();
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });

  it('update primary account brandlogo', (done) => {
    const accountsApi = new docusign.AccountsApi(apiClient);
    accountsApi.listBrands(accountId, { includeLogos: true })
      .then((brandsData) => {
        const currentBrand = brandsData.brands[0];
        const newLogoBytes = fs.readFileSync(path.resolve(__dirname, brandLogoPath));
        accountsApi.deleteBrandLogoByType(accountId, currentBrand.brandId, 'Primary')
          .then(() => {
            accountsApi.updateBrandLogoByType(newLogoBytes, accountId, currentBrand.brandId, 'Primary')
              .then(() => {
                accountsApi.getBrandLogoByType(accountId, currentBrand.brandId, 'Primary')
                  .then((brandLogo) => {
                    assert.notEqual(brandLogo, undefined);
                    done();
                  });
              });
          })
          .catch((error) => done(error));
      });
  });

  it('it updateBrandResourcesByContentType', (done) => {
    const accountsApi = new docusign.AccountsApi(apiClient);
    accountsApi.listBrands(accountId, { includeLogos: true })
      .then((brandsData) => {
        const currentBrand = brandsData.brands[0];
        const brandXmlBuffer = fs.readFileSync(path.resolve(__dirname, brandXmlPath));
        accountsApi.updateBrandResourcesByContentType(accountId, currentBrand.brandId, 'email', brandXmlBuffer)
          .then((data) => {
            assert.notEqual(data.createdByUserInfo, undefined);
            assert.notEqual(data.resourcesContentUri, undefined);
            return done();
          })
          .catch((error) =>
            // console.log(error)
            done(error));
      })
      .catch((error) =>
        // console.log(error)
        done(error));
  });

  it('create template with date and number tabs', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const template = new docusign.EnvelopeTemplate();
    template.emailSubject = 'Please Sign my Node SDK Envelope containing DateTabs and NumberTabs';
    template.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    template.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.roleName = 'Signer1';
    signer.recipientId = '1';

    const dateTab = new docusign.ModelDate();
    dateTab.documentId = '1';
    dateTab.pageNumber = '1';
    dateTab.recipientId = '1';
    dateTab.initialValue = '12/12/2000';
    dateTab.width = 42;
    dateTab.xPosition = '241';
    dateTab.yPosition = '445';

    const numberTab = new docusign.ModelNumber();
    numberTab.documentId = '1';
    numberTab.pageNumber = '1';
    numberTab.recipientId = '1';
    numberTab.width = 42;
    numberTab.value = '42';
    numberTab.xPosition = '271';
    numberTab.yPosition = '383';
    // can have multiple tabs, so need to add to envelope as a single element list
    const numberTabs = [];
    const dateTabs = [];
    numberTabs.push(numberTab);
    dateTabs.push(dateTab);

    const tabs = new docusign.Tabs();
    tabs.numberTabs = numberTabs;
    tabs.dateTabs = dateTabs;
    signer.tabs = tabs;

    // Above causes issue
    template.recipients = new docusign.Recipients();
    template.recipients.signers = [];
    template.recipients.signers.push(signer);

    const envTemplate = new docusign.EnvelopeTemplate();
    envTemplate.name = 'myTemplate ModelNumber';
    template.envelopeTemplate = envTemplate;

    const templatesApi = new docusign.TemplatesApi(apiClient);

    templatesApi.createTemplate(accountId, { envelopeTemplate: template })
      .then((templateSummary) => {
        if (templateSummary) {
          console.log(`TemplateSummary Number: ${JSON.stringify(templateSummary)}`);
          templatesApi.getDocumentTabs(accountId, templateSummary.templateId, 1).then((template) => {
            console.log(`TemplateSummary Number: ${JSON.stringify(template)}`);
            assert.equal(!!template.numberTabs, true);
            assert.equal(!!template.numberTabs.length, true);
            assert.equal(isNaN(template.numberTabs[0]), true);
            assert.equal(typeof (template.numberTabs[0]) === 'number', false);
            assert.equal(!!template.dateTabs, true);
            assert.equal(!!template.dateTabs.length, true);
            return done();
          });
        }
      })
      .catch((error) => {
        if (error) {
          // console.log('TemplateSummary Number Error: ' + JSON.stringify(templateSummary));
          console.error(error);
          return done(error);
        }
      });
  });

  it('resend envelope with envelope update', (done) => {
    let fileBytes = null;
    try {
      const fs = require('fs');
      // read file from a local directory
      fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
    } catch (ex) {
      // handle error
      console.log(`Exception: ${ex}`);
    }

    // create an envelope to be signed
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please Sign my Node SDK Envelope';
    envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

    // add a document to the envelope
    const doc = new docusign.Document();
    const base64Doc = Buffer.from(fileBytes).toString('base64');
    doc.documentBase64 = base64Doc;
    doc.name = 'TestFile.pdf';
    doc.documentId = '1';

    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // Add a recipient to sign the document
    const signer = new docusign.Signer();
    signer.email = userName;
    const name = 'Pat Developer';
    signer.name = name;
    signer.recipientId = '1';

    // this value represents the client's unique identifier for the signer
    const clientUserId = '2939';
    signer.clientUserId = clientUserId;

    // create a signHere tab somewhere on the document for the signer to sign
    // default unit of measurement is pixels, can be mms, cms, inches also
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '100';

    // can have multiple tabs, so need to add to envelope as a single element list
    const signHereTabs = [];
    signHereTabs.push(signHere);
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;
    signer.tabs = tabs;

    // Above causes issue
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope (otherwise it will be "created" in the Draft folder
    envDef.status = 'sent';

    const envelopesApi = new docusign.EnvelopesApi(apiClient);

    envelopesApi.createEnvelope(accountId, { envelopeDefinition: envDef })
      .then((envelopeSummary) => {
        if (envelopeSummary) {
          envelopesApi.update(accountId, envelopeSummary.envelopeId, { resendEnvelope: true })
            .then((envelopeUpdateSummary) => {
              if (envelopeUpdateSummary) {
                console.log(`envelopeUpdateSummary: ${JSON.stringify(envelopeUpdateSummary)}`);
                done();
              }
            })
            .catch((error) => {
              if (error) {
                return done(error);
              }
            });
        }
      })
      .catch((error) => {
        if (error) {
          return done(error);
        }
      });
  });
});
