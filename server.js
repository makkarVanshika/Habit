const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb+srv://sketchuphandin:4OVZFzByi8GTSgxj@cluster0.12eiowb.mongodb.net/habitList?retryWrites=true&w=majority";

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

    const db = client.db('mydb');
    const collection = db.collection('mycollection');

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

