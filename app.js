// Imports 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const filme = require('./Servidor/ListFilmes')
const serie = require('./Servidor/ListSeries')
const app = express()

app.use(express.json())

// routes

app.get("/", (req, res) => {
  res.send('Home api ❤️')
})

app.use('/filmes/post', filme);
app.use('/filmes/get', filme);
app.use('/serie/post', serie);
app.use('/serie/get', serie);

// database

const DB_USER_API = "DreamStudio";
const DB_PASSWORD_API = encodeURIComponent("1157390000");

mongoose.connect(`mongodb+srv://${DB_USER_API}:${DB_PASSWORD_API}@apicluster.jrtn1bc.mongodb.net/dbmovie?retryWrites=true&w=majority`)
.then(() => {
console.log('database ligado')
app.listen(3000, () => {
console.log('api rodando ❤️')
})
})
.catch((err) => console.log(err))