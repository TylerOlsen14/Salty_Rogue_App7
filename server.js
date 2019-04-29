const express = require('express');// backend framework
const mongoose = require('mongoose');// ORM to interact with database
const bodyParser = require('body-parser');// allow requests and get data from body

const clients = require('./routes/api/clients')

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected ... '))
  .catch(err => console.log(err));

  //use routes
app.use('/api/clients', clients)

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server staterd on port ${port}`))


