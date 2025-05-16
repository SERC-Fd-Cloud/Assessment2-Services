const express = require('express');
const path = require('path');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();
const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3001;
const BFF_URL = process.env.BFF_URL;

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

// File upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const formData = new FormData();
  formData.append('file', fs.createReadStream(file.path), file.originalname);
  try {
    await axios.post(`${BFF_URL}/process`, formData, { headers: formData.getHeaders() });
    res.json({ message: 'File uploaded and sent to BFF!' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending file to BFF' });
  }
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
