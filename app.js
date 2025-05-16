const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;
const BFF_URL = process.env.BFF_URL || 'http://localhost:3000';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${BFF_URL}/healthz`);
    res.send(`Frontend is running. BFF health: ${response.data}`);
  } catch (err) {
    res.send('Frontend is running. BFF health: Unreachable');
  }
});

app.listen(port, () => console.log(`Frontend running on port ${port}`));
