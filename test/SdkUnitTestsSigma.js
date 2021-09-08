var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
    config = require('../test-config');
} catch (err) {
    console.error(err);
}
var assert = require('assert');
var path = require('path');

var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

var userName = config.email;
var integratorKey = config.integratorKey;

// for production environment update to "www.docusign.net/restapi"
var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var SignTest1File = 'docs/SignTest1.pdf';
var SignTest2File = 'docs/SignTest1.docx';
var accountId = '';
var envelopeId = '';
var transactionId = '123';
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

describe('SDK Unit Tests (Sigma):', function (done) {
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
        console.log(oauthLoginUrl);
        // END OF NOTE
        var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
        apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
            .then(function (res) {
                var baseUri,
                    accountDomain;
                apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

                // console.log(apiClient.getUserInfo(res.body.access_token));
                apiClient.getUserInfo(res.body.access_token)
                    .then(function (userInfo) {
                        accountId = userInfo.accounts[0].accountId;
                        baseUri = userInfo.accounts[0].baseUri;
                        accountDomain = baseUri.split('/v2');
                        apiClient.setBasePath(accountDomain[0] + '/restapi');
                        // console.log('LoginInformation: ' + JSON.stringify(userInfo));
                        done();
                    })
                    .catch(function (error) {
                        if (error) {
                            return done(error);
                        }
                    });
            })
            .catch(function (err) {
                if (err) {
                    return done(err);
                }
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
            var signer1 = new docusign.Signer();
            signer1.email = userName;
            signer1.name = 'Pat Developer';
            signer1.recipientId = '1';

            var signer2 = new docusign.Signer();
            signer2.email = 'another@email.com';
            signer2.name = 'Pat Manager';
            signer2.recipientId = '2';

            var tabs = getSignerTabsDefinition();
            signer1.tabs = tabs;
            signer2.tabs = tabs;

            // Above causes issue
            envDef.recipients = new docusign.Recipients();
            envDef.recipients.signers = [];
            envDef.recipients.signers.push(signer1, signer2);

            // send the envelope (otherwise it will be "created" in the Draft folder
            envDef.status = 'created';


            envelopesApi.createEnvelope(accountId, {envelopeDefinition: envDef})
                .then(function (envelopeSummary) {
                    assert.notStrictEqual(envelopeSummary, undefined);
                    envelopeId = envelopeSummary.envelopeId;
                    return envelopeSummary;
                })
                .then(function (envelopeSummary) {
                    return envelopesApi.getEnvelope(accountId, envelopeSummary.envelopeId)
                })
                .then(function (envelope) {
                    assert.notStrictEqual(envelope, undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        });

        it('Get envelope recipients', function (done) {

            envelopesApi.listRecipients(accountId, envelopeId)
                .then(function (recipients) {
                    assert.notStrictEqual(recipients, undefined);

                    recipientId = recipients.signers[0].recipientIdGuid
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Create sender view', function (done) {
            var fileBytes = null;
            try {
                // read file from a local directory
                fileBytes = fs.readFileSync(path.resolve(__dirname, SignTest1File));
            } catch (ex) {
                // handle error
                console.log(`Exception: ${ex}`);
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

            var tabs = getSignerTabsDefinition();
            signer.tabs = tabs;

            // Above causes issue
            envDef.recipients = new docusign.Recipients();
            envDef.recipients.signers = [];
            envDef.recipients.signers.push(signer);

            // make the envelope with "created" (draft) status
            envDef.status = 'created';

            envelopesApi.createEnvelope(accountId, {envelopeDefinition: envDef})
                .then(function (envelopeSummary) {
                    var returnUrl = 'http://www.docusign.com/developer-center';
                    var returnUrlRequest = new docusign.ReturnUrlRequest();
                    returnUrlRequest.returnUrl = returnUrl;

                    return envelopesApi.createSenderView(accountId, envelopeSummary.envelopeId, {returnUrlRequest})
                })
                .then(function (viewUrl) {
                    if (viewUrl) {
                        console.log(`ViewUrl is ${JSON.stringify(viewUrl)}`);
                        done();
                    }
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
        //
        it('Update recipients', function (done) {
            var newSigner = new docusign.Signer();
            newSigner.email = userName;
            newSigner.name = 'Signer2';
            newSigner.recipientId = '2';
            //
            // this value represents the client's unique identifier for the signer
            var clientUserId = '2939';
            newSigner.clientUserId = clientUserId;
            //
            var tabs = getSignerTabsDefinition();
            newSigner.tabs = tabs;
            //
            var newRecipients = new docusign.Recipients();
            newRecipients.signers = [];
            newRecipients.signers.push(newSigner);
            //
            envelopesApi.updateRecipients(accountId, envelopeId, {recipients: newRecipients})
                .then(function (recipientsUpdateSummary) {
                    assert.notStrictEqual(recipientsUpdateSummary, undefined);
                    assert.notStrictEqual(recipientsUpdateSummary.recipientUpdateResults, undefined);
                    //
                    return envelopesApi.listRecipients(accountId, envelopeId)
                })
                .then(function (recipients) {
                    assert.notStrictEqual(recipients, undefined);
                    assert.equal(recipients.recipientCount, 2);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
        //
        it('Get audit events', function (done) {
            //
            envelopesApi.listAuditEvents(accountId, envelopeId)
                .then(function (envelopeAuditEventResponse) {
                    assert.notStrictEqual(envelopeAuditEventResponse, undefined);
                    assert.notStrictEqual(envelopeAuditEventResponse.auditEvents, undefined);
                    assert.notStrictEqual(envelopeAuditEventResponse.auditEvents[0], undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Update documents', function (done) {
            var newFileBytes = null;
            try {
                // read file from a local directory
                newFileBytes = fs.readFileSync(path.resolve(__dirname, SignTest2File));
            } catch (ex) {
                // handle error
                console.log(`Exception: ${ex}`);
            }

            //
            var newEnvDef = new docusign.EnvelopeDefinition();
            //
            // add a document to the envelope
            var newDoc = new docusign.Document();
            var base64Doc2 = Buffer.from(newFileBytes).toString('base64');
            newDoc.documentBase64 = base64Doc2;
            newDoc.name = 'TestFile.docx';
            newDoc.documentId = '2';
            //
            var newDocs = [];
            newDocs.push(newDoc);
            newEnvDef.documents = newDocs;
            var oldDocumentsCount = 0;
            //
            envelopesApi.listDocuments(accountId, envelopeId)
                .then(function (oldDocuments) {
                    assert.notStrictEqual(oldDocuments, undefined);
                    assert.notStrictEqual(oldDocuments.envelopeDocuments, undefined);
                    oldDocumentsCount = oldDocuments.envelopeDocuments.length;
                    //
                    return envelopesApi.updateDocuments(accountId, envelopeId, {envelopeDefinition: newEnvDef})
                })
                .then(function (envelopeDocumentsResult) {
                    assert.notStrictEqual(envelopeDocumentsResult, undefined);
                    //
                    return envelopesApi.listDocuments(accountId, envelopeId)
                })
                .then(function (documents) {
                    assert.notStrictEqual(documents, undefined);
                    assert.notStrictEqual(documents.envelopeDocuments, undefined);
                    assert.equal(documents.envelopeDocuments.length, oldDocumentsCount + 1);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Get recipient tabs', function (done) {

            envelopesApi.listRecipients(accountId, envelopeId)
                .then(function (recipients) {
                    assert.notStrictEqual(recipients, undefined);
                    assert.notStrictEqual(recipients.signers, undefined);
                    assert.notStrictEqual(recipients.signers[0], undefined);

                    return envelopesApi.listTabs(accountId, envelopeId, recipients.signers[0].recipientId)
                })
                .then(function (tabs) {
                    assert.notStrictEqual(tabs, undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('GET Template Recipients', function (done) {
            envelopesApi.listRecipients(accountId, envelopeId)
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
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

            envelopesApi.createTabs(accountId, envelopeId, recipientId, {tabs})
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
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

            envelopesApi.updateTabs(accountId, envelopeId, recipientId, {tabs})
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Delete Recipient', function (done) {
            const recipientId='1'
            envelopesApi.deleteRecipient(accountId, envelopeId, recipientId)
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Delete Recipients', function (done) {
            const signer = new docusign.Signer();
            signer.email = userName;
            signer.recipientId = '1';

            const recipients = new docusign.Recipients();
            recipients.signers = [];
            recipients.signers.push(signer);

            envelopesApi.deleteRecipients(accountId, envelopeId, {recipients})
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Put status', function (done) {
            envelopesApi.getEnvelope(accountId, envelopeId)
                .then((envelope) => {
                    assert.notStrictEqual(envelope, undefined);

                    const envelopeIds = [envelopeId];
                    const transactionIds = [envelope.transactionId];

                    const envelopeIdsRequest = new docusign.EnvelopeIdsRequest()
                    envelopeIdsRequest.envelopeIds = envelopeIds;
                    envelopeIdsRequest.transactionIds = transactionIds;

                    return envelopesApi.listStatus(accountId, {envelopeIdsRequest, envelopeIds, transactionIds})
                })
                .then((envelopesInformation) => {
                    assert.notStrictEqual(envelopesInformation, undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('Get custom fields', function (done) {
            envelopesApi.listCustomFields(accountId, envelopeId)
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })

    describe('AccountsApi tests:', function () {
        it('Get account info', function (done) {
            var accountsApi = new docusign.AccountsApi(apiClient);
            accountsApi.getAccountInformation(accountId, {includeAccountSettings: true})
                .then(function (accountInfo) {
                    assert.notStrictEqual(accountInfo, undefined);
                    assert.notStrictEqual(accountInfo.accountSettings, undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })

    describe('TemplatesApi tests:', function () {
        it('Get templates', function (done) {
            var templatesApi = new docusign.TemplatesApi(apiClient);
            templatesApi.listTemplates(accountId)
                .then(function (templateResults) {
                    assert.notStrictEqual(templateResults, undefined);
                    assert.notStrictEqual(templateResults.envelopeTemplates, undefined);
                    assert.notStrictEqual(templateResults.envelopeTemplates[0], undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })

    describe('UsersApi tests:', function () {
        const usersApi = new docusign.UsersApi(apiClient);

        it('Get users', function (done) {
            usersApi.list(accountId)
                .then(function (userInformationList) {
                    assert.notStrictEqual(userInformationList, undefined);
                    assert.notStrictEqual(userInformationList.users, undefined);
                    assert.notStrictEqual(userInformationList.users[0], undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })

        it('get user (30)', function (done) {
            usersApi.getInformation(accountId, userId)
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
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

            usersApi.create(accountId, {newUsersDefinition})
                .then((data) => {
                    assert.notStrictEqual(data, undefined)
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })

    describe('DiagnosticsApi tests:', function () {
        const diagnosticsApi = new docusign.DiagnosticsApi(apiClient);
        it('Get settings', function (done) {
            diagnosticsApi.getRequestLogSettings()
                .then((data) => {
                    assert.deepEqual(data, {
                        apiRequestLogging: 'false',
                        apiRequestLogMaxEntries: '50',
                        apiRequestLogRemainingEntries: '0'
                    })
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })


    describe('FoldersApi tests:', function () {
        const envelopesApi = new docusign.EnvelopesApi(apiClient);
        const foldersApi = new docusign.FoldersApi(apiClient);

        it('Put Folders ', function (done) {
            const foldersRequest = new docusign.FoldersRequest();
            foldersRequest.envelopeIds = [];
            foldersRequest.envelopeIds.push(envelopeId);

            envelopesApi.getEnvelope(accountId, envelopeId)
                .then((envelope) => {
                    assert.notStrictEqual(envelope, undefined);

                    return foldersApi.moveEnvelopes(accountId, 'recyclebin', {foldersRequest})
                })
                .then((foldersResponse) => {
                    assert.notStrictEqual(foldersResponse, undefined);
                    done();
                })
                .catch(function (error) {
                    if (error) {
                        return done(error);
                    }
                });
        })
    })

});
