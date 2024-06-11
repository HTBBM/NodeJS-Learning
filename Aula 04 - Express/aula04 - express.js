//npm install express --save


const express = require('express');
const app = express()
const porta = process.env.PORT //*  => Seta a porta caso a gente nao saiba

app.get('/', (req, res) => {
  res.send('CFB Cursos')
})

app.get('/canal', (req, res) => {
  res.json(
    {
      canal: "Curso de Node"
    }
  )
})




app.listen(porta || 3000, () => console.log('Servidor Rodando'))