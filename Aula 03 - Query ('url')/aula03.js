const http = require('http');
const porta = 3000;
const host = '127.0.0.1'

const servidor = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' }) //* Aqui podemos mudar o formato da resposta

  if (req.url == '/') {                     //! Rota 1 -> "/" ou root
    res.write('<h1>Seja Bem Vindo!</h1>')
  }

  else if (req.url == '/canal') {           //! Rota 2 -> "/canal"
    res.write('<h1>CFB Cursos</h1>')
  }

  else if (req.url == "/cursos") {          //! Rota 3 -> "/cursos"
    res.write('<h1>Temos Varios Cursos</h1>')
  }

  else if (req.url == "/cursos/node") {     //! Rota 4 -> "/cursos/node"
    res.write('<h1>Temos curso de NodeJS</h1>')
  }

  res.end();

})

servidor.listen(porta, host, () => console.log("Server Online"))
