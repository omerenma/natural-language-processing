const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;

const API_KEY = process.env.API_KEY;
const API_URI = process.env.API_URI;
const PARAMS = process.env.PARAMS;

app.use(cors());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

// Get api data
app.get('/nlp', (req, res) => {
  // res.send(NLPData);
});

app.post('/apidata', async (req, res) => {
  const data = req.body.formText;
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${data}&lang=en`
  );
  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
