const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: path.join(__dirname, '/.env')})

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client', 'dist')));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})