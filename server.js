const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb');
const mongoURL = 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/submit', (req, res) => {
  MongoClient.connect(mongoURL, (err, client) => {
    if (err) throw err;

    const db = client.db('habitList');
    const collection = db.collection('habitName');

    const data = {
      name: req.body.habit,
      frequency: req.body.frequency,
    };

    collection.insertOne(data, (err, result) => {
      if (err) throw err;
      console.log('Data saved to MongoDB');
      client.close();
    });
  });
  res.redirect('/');
});

