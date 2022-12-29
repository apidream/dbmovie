// Import
const router = require('express').Router();
const Filmesdb = require('../Strings/ListFilmesString')

router.post('/', async (req, res) => {
  const {
  id,
  key,
  ano,
  avaliacao,
  banner,
  capa,
  classificação,
  duracao,
  filmes,
  genero,
  nome,
  player,
  treiler,
  descrição
  } = req.body
  
  const Filmes = {
  id,
  key,
  ano,
  avaliacao,
  banner,
  capa,
  classificação,
  duracao,
  filmes,
  genero,
  nome,
  player,
  treiler,
  descrição
  }
  
  if(!id){
   return res.status(422).json({error: 'id e obrigatório'})
  }
  if(!key){
   return res.status(422).json({error: 'key e obrigatório'})
  }
  if(!ano){
   return res.status(422).json({error: 'ano e obrigatório'})
  }
  if(!avaliacao){
   return res.status(422).json({error: 'avaliacao e obrigatório'})
  }
  if(!banner){
   return res.status(422).json({error: 'banner e obrigatório'})
  }
  if(!capa){
   return res.status(422).json({error: 'capa e obrigatório'})
  }
  if(!classificação){
   return res.status(422).json({error: 'classificação e obrigatório'})
  }
  if(!duracao){
   return res.status(422).json({error: 'duracao e obrigatório'})
  }
  if(!filmes){
   return res.status(422).json({error: 'filmes e obrigatório'})
  }
  if(!genero){
   return res.status(422).json({error: 'genero e obrigatório'})
  }
  if(!nome){
   return res.status(422).json({error: 'nome e obrigatório'})
  }
  if(!player){
   return res.status(422).json({error: 'player e obrigatório'})
  }
  if(!treiler){
   return res.status(422).json({error: 'treiler e obrigatório'})
  }
  if(!descrição){
   return res.status(422).json({error: 'descrição e obrigatório'})
  }
  
  try{
  await Filmesdb.create(Filmes)
  return res.status(201).json({mensagem: 'filmes enviado'})
  }catch (error) {
  res.status(500).json({error: error})
  }
})

router.get('/', async (req, res) => {
  try {
   const filmesserve = await Filmesdb.find()
   return res.status(200).json(filmesserve)
  }catch (error) {
   res.status(500).json({error: error})
  }
})

module.exports = router