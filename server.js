const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'].split(',')[0];
  res.status(200).json({ ipaddress, language });
});

app.listen(process.env.PORT || 3000);

module.exports = app;
