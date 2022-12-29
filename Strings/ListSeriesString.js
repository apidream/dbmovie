// Imports 
const mongoose = require('mongoose')

const Seriesdb = mongoose.model('Series', {
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
  episodios: String,
  treiler: String,
  descrição: String
})

module.exports = Seriesdb