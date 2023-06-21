const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const controllers = require('./controllers')

require('dotenv').config({ path: path.join(__dirname, '/.env')})

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client', 'dist')));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', (req, res) => {
  console.log('received /create', req.body);
  // db.create()
    // .then(() => db.readAll())
    // .then((result) => res.send(result));
})

app.get('/read/:user_id', (req, res) => {
  console.log('received /read', ((req.params && req.params.user_id) || 'req.params.user_id is not how you find that info silly'));
  // db.readAll(req.params.user_id)
    // .then((result) => res.send(result));
})

app.get('/readOne/:id', (req, res) => {
  console.log('received /readOne', ((req.params && req.params.id) || 'req.params.id is not how you find that info silly'));
  // db.readOne()
    //.then((result) => res.send(result));
})

app.put('/update/:id', (req, res) => {
  console.log('received /update with id', ((req.params && req.params.id) || 'req.params.id is not how you find that info silly'), req.body);
  // db.update(req.params.id)
    // .then(() => res.sendStatus(204));
})

app.delete(':id', (req, res) => {
  console.log('received /delete', ((req.params && req.params.id) || 'req.params.id is not how you find that info silly'));
  // db.delete(req.params.id)
    // .then(() => res.sendStatus(204));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})