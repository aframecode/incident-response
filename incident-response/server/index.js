const express = require('express');
const app = express();
const port = 8080;
const data = require ('./data.json');

// TODO: Use connect history api
const history = require('connect-history-api-fallback');

const staticContent = express.static('dist');
// Static content
app.use(staticContent);

app.use(history({
    index: '/dist/index.html'
  }));

// Add passport or other lib here
app.get('/api/v1/incident', (req,res) => {
    res.json(data);
});

app.use(staticContent);
app.listen(port, () => {
    // TODO Add authentication or authorization and basic logging
})