const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.listen(process.env.PORT);
