const express = require('express');
const app = express();
const port = 8080;
const data = require ('./data.json');
const path = require('path');


app.use('js', express.static(path.join(__dirname +'dist')));

// Add passport or other lib here
app.get('/incident', (req,res) => {
    res.json(data);
});

// TODO: Support history mode
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname +'/dist/index.html'));
});



app.listen(port, () => {
    // TODO Add authentication or authorization and basic logging
})