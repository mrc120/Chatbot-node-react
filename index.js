const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ 'hello': 'dane' });
});
 
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);