const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();
app.use(express.json());
app.use(cors())

// Iniciando o DB // docker pull mongo && docker run --name mongodb -p 27017:27017 -d mongo & docker ps
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true
});
requireDir('./src/models');

const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
