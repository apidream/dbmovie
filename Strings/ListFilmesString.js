// Imports 
const mongoose = require('mongoose')

const Filmesdb = mongoose.model('Filmes', {
  id: Number,
  key: String,
  ano: String,
  avaliacao: String,
  banner: String,
  capa: String,
  classificação: String,
  duracao: String,
  filmes: String,
  genero: String,
  nome: String,
  player: String,
  treiler: String,
  descrição: String
})

module.exports = Filmesdb