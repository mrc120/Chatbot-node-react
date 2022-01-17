const dialogflow = require('dialogflow');
const config = require('../config/keys')
const sessionClient = new dialogflow.SessionsClient();

const sessionpath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID)


module.exports = app => {



    app.post('/api/df_text_query', (req, res) => {
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: req.body.text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
        };
        sessionClient
            .detectintent(request)
            .then(responses => {
                console.log('Detected intent');
                const result = responses[0].queryResult;
                console.log(` Query: ${result.queryText}`);
                console.log(` Response: ${result.fullfilmentText}`);
                if (result.intent) {
                    console.log(` Intent: ${result.intent.displayName}`);
                } else {
                    console.log("No  intent matches.");
                }
            }).catch(err => {
                console.error('ERROR:', err)
            });

            res.send({'do': 'text_query'})
    });
    
    app.post('/api/df_event_query', (req, res) => {
        res.send({ 'do': 'event query' });
    });
}
