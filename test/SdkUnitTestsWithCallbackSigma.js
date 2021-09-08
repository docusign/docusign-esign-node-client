var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config = require('../test-config');
var assert = require('assert');
var path = require('path');
var fs = require('fs');

var userName = config.email;
var integratorKey = config.integratorKey;

// for production environment update to "www.docusign.net/restapi"
var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var SignTest1File = 'docs/SignTest1.pdf';
var SignTest2File = 'docs/SignTest1.docx';
var templateId = config.templateId;
var accountId = '';
var envelopeId = '';
var recipientId = '';
var userId = config.userId;
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';
var expiresIn = 3600;

function getSignerTabsDefinition() {
    var signHere = docusign.SignHere.constructFromObject({
        documentId: '1',
        pageNumber: '1',
        recipientId: '1',
        xPosition: '100',
        yPosition: '100'
    });

    var signHereTabs = [];
    signHereTabs.push(signHere);
    var tabs = new docusign.Tabs();
    tabs.signHereTabs = signHereTabs;

    return tabs;
}

describe('SDK Unit Tests With Callbacks (Sigma):', function (done) {
    var apiClient = new docusign.ApiClient({
        basePath: basePath,
        oAuthBasePath: oAuthBasePath
    });
    var scopes = [
        oAuth.Scope.IMPERSONATION,
        oAuth.Scope.SIGNATURE
    ];

    before(function (done) {
        // IMPORTANT NOTE:
        // the first time you ask for a JWT access token, you should grant access by making the following call
        // get DocuSign OAuth authorization url:
        var oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
        // open DocuSign OAuth authorization url in the browser, login and grant access
        // console.log(oauthLoginUrl);
        // END OF NOTE
        var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
        apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn, function (err, res) {
            var baseUri,
                accountDomain;
            if (err) {
                return done(err);
            }
            apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

            apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
                if (err) {
                    return done(err);
                }
                accountId = userInfo.accounts[0].accountId;
                baseUri = userInfo.accounts[0].baseUri;
                accountDomain = baseUri.split('/v2');
                apiClient.setBasePath(accountDomain[0] + '/restapi');
                // todo uncomment
                console.log('LoginInformation: ' + JSON.stringify(userInfo));
                return done();
            });
        });
    });

    describe('EnvelopesApi tests:', function () {
        const envelopesApi = new docusign.EnvelopesApi(apiClient);

        it('Get envelope by id', function (done) {
            var fileBytes = null;
            try {
                // read file from a local directory
                fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
            } catch (ex) {
                // handle error
                console.log('Exception: ' + ex);
            }

            // create an envelope to be signed
            var envDef = new docusign.EnvelopeDefinition();
            envDef.emailSubject = 'Please Sign my Node SDK Envelope';
            envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

            // add a document to the envelope
            var doc = new docusign.Document();
            var base64Doc = Buffer.from(fileBytes).toString('base64');
            doc.documentBase64 = base64Doc;
            doc.name = 'TestFile.pdf';
            doc.documentId = '1';

            var docs = [];
            docs.push(doc);
            envDef.documents = docs;

            // Add a recipient to sign the document
            var signer = new docusign.Signer();
            signer.email = userName;
            signer.name = 'Pat Developer';
            signer.recipientId = '1';

            // create a signHere tab somewhere on the document for the signer to sign
            // default unit of measurement is pixels, can be mms, cms, inches also
            var tabs = getSignerTabsDefinition();
            signer.tabs = tabs;

            // Above causes issue
            envDef.recipients = new docusign.Recipients();
            envDef.recipients.signers = [];
            envDef.recipients.signers.push(signer);

            // send the envelope (otherwise it will be "created" in the Draft folder
            envDef.status = 'sent';

            var getEnvelopeCallback = function (error, envelope, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelope, undefined);
                done();
            }

            var createEnvelopeCallback = function (error, envelopeSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeSummary, undefined);
                envelopeId = envelopeSummary.envelopeId

                envelopesApi.getEnvelope(accountId, envelopeSummary.envelopeId, getEnvelopeCallback);
            }

            envelopesApi.createEnvelope(accountId, {envelopeDefinition: envDef}, createEnvelopeCallback);
        })

        it('Get envelope recipients', function (done) {

            var listRecipientsCallback = function (error, recipients, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(recipients, undefined);
                recipientId = recipients.signers[0].recipientIdGuid

                done();
            }

            envelopesApi.listRecipients(accountId, envelopeId, listRecipientsCallback)
        })

        it('Create sender view', function (done) {
            var fileBytes = null;
            try {
                // read file from a local directory
                fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
            } catch (ex) {
                // handle error
                console.log('Exception: ' + ex);
            }

            // create an envelope to be signed
            var envDef = new docusign.EnvelopeDefinition();
            envDef.emailSubject = 'Please Sign my Node SDK Envelope';
            envDef.emailBlurb = 'Hello, Please sign my Node SDK Envelope.';

            // add a document to the envelope
            var doc = new docusign.Document();
            var base64Doc = Buffer.from(fileBytes).toString('base64');
            doc.documentBase64 = base64Doc;
            doc.name = 'TestFile.pdf';
            doc.documentId = '1';

            var docs = [];
            docs.push(doc);
            envDef.documents = docs;

            // Add a recipient to sign the document
            var signer = new docusign.Signer();
            signer.email = userName;
            var name = 'Pat Developer';
            signer.name = name;
            signer.recipientId = '1';

            // this value represents the client's unique identifier for the signer
            var clientUserId = '2939';
            signer.clientUserId = clientUserId;

            // create a signHere tab somewhere on the document for the signer to sign
            // default unit of measurement is pixels, can be mms, cms, inches also
            var signHere = new docusign.SignHere();
            signHere.documentId = '1';
            signHere.pageNumber = '1';
            signHere.recipientId = '1';
            signHere.xPosition = '100';
            signHere.yPosition = '100';

            // can have multiple tabs, so need to add to envelope as a single element list
            var signHereTabs = [];
            signHereTabs.push(signHere);
            var tabs = new docusign.Tabs();
            tabs.signHereTabs = signHereTabs;
            signer.tabs = tabs;

            // Above causes issue
            envDef.recipients = new docusign.Recipients();
            envDef.recipients.signers = [];
            envDef.recipients.signers.push(signer);

            // make the envelope with "created" (draft) status
            envDef.status = 'created';


            var createSenderViewCallback = function (error, viewUrl, _response) {
                if (error) {
                    return done(error);
                }

                if (viewUrl) {
                    console.log('ViewUrl is ' + JSON.stringify(viewUrl));
                    done();
                }
            }

            var createEnvelopeCallback = function (error, envelopeSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeSummary, undefined)
                var returnUrl = 'http://www.docusign.com/developer-center';
                var returnUrlRequest = new docusign.ReturnUrlRequest();
                returnUrlRequest.returnUrl = returnUrl;

                envelopesApi.createSenderView(accountId, envelopeSummary.envelopeId, {returnUrlRequest}, createSenderViewCallback)
            }

            envelopesApi.createEnvelope(accountId, {envelopeDefinition: envDef}, createEnvelopeCallback)
        })

        it('Update recipients', function (done) {
            var newSigner = new docusign.Signer();
            newSigner.email = userName;
            newSigner.name = 'Signer2';
            newSigner.recipientId = '2';

            // this value represents the client's unique identifier for the signer
            var clientUserId = '2939';
            newSigner.clientUserId = clientUserId;

            // create a signHere tab somewhere on the document for the signer to sign
            // default unit of measurement is pixels, can be mms, cms, inches also
            var signHere = new docusign.SignHere();
            signHere.documentId = '1';
            signHere.pageNumber = '1';
            signHere.recipientId = '1';
            signHere.xPosition = '100';
            signHere.yPosition = '100';

            // can have multiple tabs, so need to add to envelope as a single element list
            var signHereTabs = [];
            signHereTabs.push(signHere);
            var tabs = new docusign.Tabs();
            tabs.signHereTabs = signHereTabs;
            newSigner.tabs = tabs;

            var newRecipients = new docusign.Recipients();
            newRecipients.signers = [];
            newRecipients.signers.push(newSigner);


            var listRecipientsCallback = function (error, recipients, _response) {
                if (error) {
                    return done(error);
                }

                assert.equal(recipients.recipientCount, 2);
                done();
            }

            var updateRecipientsCallback = function (error, recipientsUpdateSummary, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(recipientsUpdateSummary, undefined);
                assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);

                envelopesApi.listRecipients(accountId, envelopeId, listRecipientsCallback)
            }

            envelopesApi.updateRecipients(accountId, envelopeId, {recipients: newRecipients}, updateRecipientsCallback)
        })

        it('Get audit events', function (done) {

            var listAuditEventsCallback = function (error, envelopeAuditEventResponse, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeAuditEventResponse, undefined);
                assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
                assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
                done();
            }

            envelopesApi.listAuditEvents(accountId, envelopeId, listAuditEventsCallback)
        })

        it('Update documents', function (done) {
            var newFileBytes = null;
            try {
                // read file from a local directory
                newFileBytes = fs.readFileSync(path.resolve(__dirname, SignTest2File));
            } catch (ex) {
                // handle error
                console.log('Exception: ' + ex);
            }


            var newEnvDef = new docusign.EnvelopeDefinition();

            // add a document to the envelope
            var newDoc = new docusign.Document();
            var base64Doc2 = Buffer.from(newFileBytes).toString('base64');
            newDoc.documentBase64 = base64Doc2;
            newDoc.name = 'TestFile.docx';
            newDoc.documentId = '2';

            var newDocs = [];
            newDocs.push(newDoc);
            newEnvDef.documents = newDocs;

            var oldDocumentsCount = 0;


            var secondListDocumentsCallback = function (error, documents, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(documents, undefined);
                assert.notStrictEqual(documents.envelopeDocuments, undefined);
                assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
                done();
            }

            var updateDocumentsCallback = function (error, envelopeDocumentsResult, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(envelopeDocumentsResult, undefined);

                envelopesApi.listDocuments(accountId, envelopeId, secondListDocumentsCallback)
            }

            var firstListDocumentsCallback = function (error, oldDocuments, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(oldDocuments, undefined);
                assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
                oldDocumentsCount = oldDocuments.envelopeDocuments.length;

                envelopesApi.updateDocuments(accountId, envelopeId, {envelopeDefinition: newEnvDef}, updateDocumentsCallback)
            }

            envelopesApi.listDocuments(accountId, envelopeId, firstListDocumentsCallback)
        })

        it('Get recipient tabs', function (done) {

            var listTabsCallback = function (error, tabs, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(tabs, undefined);
                done();
            }

            var listRecipientsCallback = function (err, recipients, _response) {
                if (err) {
                    return done(err);
                }

                assert.notStrictEqual(recipients, undefined);
                assert.notStrictEqual(recipients.signers, undefined);
                assert.notStrictEqual(recipients.signers[0], undefined);

                envelopesApi.listTabs(accountId, envelopeId, recipients.signers[0].recipientId, listTabsCallback)
            }

            envelopesApi.listRecipients(accountId, envelopeId, listRecipientsCallback)
        })

        it('GET Template Recipients', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            envelopesApi.listRecipients(accountId, envelopeId, callback)

        })

        it('Create Recipient tabs', function (done) {
            const signHere = docusign.SignHere.constructFromObject({
                documentId: '1',
                pageNumber: '1',
                recipientId: '1',
                xPosition: '200',
                yPosition: '200'
            });

            const signHereTabs = [];
            signHereTabs.push(signHere);
            const tabs = new docusign.Tabs();
            tabs.signHereTabs = signHereTabs;

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            envelopesApi.createTabs(accountId, envelopeId, recipientId, {tabs}, callback)

        })

        it('Put Recipient tab', function (done) {

            const signHere = docusign.SignHere.constructFromObject({
                documentId: '1',
                pageNumber: '1',
                recipientId: '1',
                xPosition: '200',
                yPosition: '200'
            });

            const signHereTabs = [];
            signHereTabs.push(signHere);
            const tabs = new docusign.Tabs();
            tabs.signHereTabs = signHereTabs;

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.updateTabs(accountId, envelopeId, recipientId, {tabs}, callback)
        })

        it('Delete Recipient', function (done) {
            const recipientId = '1'
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.deleteRecipient(accountId, envelopeId, recipientId, callback)
        })

        it('Delete Recipients', function (done) {
            const signer = new docusign.Signer();
            signer.email = userName;
            signer.recipientId = '1';

            const recipients = new docusign.Recipients();
            recipients.signers = [];
            recipients.signers.push(signer);

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            envelopesApi.deleteRecipients(accountId, envelopeId, {recipients}, callback)
        })

        it('Put status', function (done) {

            const callback = function (error, envelope, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(envelope, undefined);

                const envelopeIds = [envelopeId];
                const transactionIds = [envelope.transactionId];

                const envelopeIdsRequest = new docusign.EnvelopeIdsRequest()
                envelopeIdsRequest.envelopeIds = envelopeIds;
                envelopeIdsRequest.transactionIds = transactionIds;

                return envelopesApi.listStatus(accountId, {envelopeIdsRequest, envelopeIds, transactionIds},
                    (error, envelopesInformation, __response) => {
                        assert.notStrictEqual(envelopesInformation, undefined);
                        done();
                    })
            }
            envelopesApi.getEnvelope(accountId, envelopeId, {}, callback)
        })

        it('Get custom fields', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined);
                done();
            }
            envelopesApi.listCustomFields(accountId, envelopeId, callback)

        })
    })

    describe('AccountsApi tests:', function () {
        it('Get account info', function (done) {
            var accountsApi = new docusign.AccountsApi(apiClient);

            var getAccountInformationCallback = function (error, accountInfo, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(accountInfo, undefined);
                assert.notStrictEqual(accountInfo.accountSettings, undefined);
                done();
            }

            accountsApi.getAccountInformation(accountId, {includeAccountSettings: true}, getAccountInformationCallback)
        })
    })

    describe('TemplatesApi tests:', function () {
        it('Get templates', function (done) {
            var templatesApi = new docusign.TemplatesApi(apiClient);

            var listTemplatesCallback = function (error, templateResults, _response) {
                if (error) {
                    return done(error);
                }

                assert.notStrictEqual(templateResults, undefined);
                assert.notStrictEqual(templateResults.envelopeTemplates, undefined);
                done();
            }

            templatesApi.listTemplates(accountId, listTemplatesCallback)
        })
    })

    describe('UsersApi tests:', function () {
        const usersApi = new docusign.UsersApi(apiClient);

        it('Get users', function (done) {
            var listUsersCallback = function (error, userInformationList, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(userInformationList, undefined);
                assert.notStrictEqual(userInformationList.users, undefined);
                assert.notStrictEqual(userInformationList.users[0], undefined);
                done();
            }
            usersApi.list(accountId, listUsersCallback)
        })

        it('Get user', function (done) {
            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }

            usersApi.getInformation(accountId, userId, callback)

        })

        it('Create user', function (done) {
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
                assert.notStrictEqual(data, undefined)
                done();
            }
            usersApi.create(accountId, {newUsersDefinition}, callback)

        })
    })
    describe('DiagnosticsApi tests:', function () {
        it('Get settings', function (done) {
            const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.deepEqual(data, {
                    apiRequestLogging: 'false',
                    apiRequestLogMaxEntries: '50',
                    apiRequestLogRemainingEntries: '0'
                })
                done();
            }

            diagnosticsApi.getRequestLogSettings(accountId, callback)
        })
    })



    describe('FoldersApi tests:', function () {
        const foldersApi = new docusign.FoldersApi(apiClient);

        it('Put Folders', function (done) {
            const foldersRequest = new docusign.FoldersRequest();
            foldersRequest.envelopeIds = [];
            foldersRequest.envelopeIds.push(envelopeId);

            const callback = function (error, data, __response) {
                if (error) {
                    return done(error);
                }
                assert.notStrictEqual(data, undefined)
                done();
            }
            foldersApi.moveEnvelopes(accountId, 'recyclebin', {foldersRequest}, callback)

        })
    })

});
