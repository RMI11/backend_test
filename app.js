const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

const citiesRoute = require('./routes/cities');

app.use('/cities', citiesRoute)

//ROUTES



app.get('/posts', (req, res) => {
 res.send('We are on home')
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECT_DB, { useNewUrlParser: true}, () => console.log('Connected to DB'));

// How to we start listening to the server
app.listen(3000);