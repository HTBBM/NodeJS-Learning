const express = require('express')
const rotas = express.Router()

let cursosInfo = [
  { 'curso': 'node', 'info': 'Curso de Node' },
  { 'curso': 'java', 'info': 'Curso de Java' },
  { 'curso': 'react', 'info': 'Curso de React' },
  { 'curso': 'arduino', 'info': 'Curso de Arduino' },
]

rotas.get('/', (req, res) => {
  res.json({ ola: 'Seja Bem Vindo' })
})

rotas.get('/:cursoid', (req, res) => {

  const curso = req.params.cursoid

  const cursoI = cursosInfo.find(i => i.curso == curso)

  if (!cursoI) {
    res.status(404).json(
      {
        error: 'Curso não encontrado',
        curso_pesquisado: curso
      }
    )
  }
  else {
    res.status(200).json(cursoI)
  }
})

module.exports = rotas




