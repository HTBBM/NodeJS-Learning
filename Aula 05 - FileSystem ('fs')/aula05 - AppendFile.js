const http = require('http');
const fs = require('fs');
const porta = process.env.PORT

const server = http.createServer((req, res) => {
  //? fs.open -> Alternativa ao AppendFile
  fs.appendFile('teste.txt', 'Curso de Node - CFB Cursos', (error) => { //* o Append Cria um arquivo
    if (error) throw error //! Se der erro, eu envio o erro
    console.log("Arquivo Criado")
  })

})

server.listen(porta || 3000, () => { console.log("Server Online") })