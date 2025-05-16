const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('BFF is running');
});

app.get('/healthz', (req, res) => {
  res.send('BFF is healthy');
});

app.listen(port, () => console.log(`BFF running on port ${port}`));