const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

requireDir('./models');

app.use(require('./routes'));

app.listen(port, () => console.log(`Server is running on port: ${port}!`));