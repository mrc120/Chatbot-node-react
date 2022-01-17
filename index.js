const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./routes/dialogFlowRoutes.js')(app);


app.use(bodyParser.json());

 
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);