const express = require("express");
const app = express();
require("colors");

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo!</h1>");
});

app.listen("3000", () => console.log("Server running on port: 3000".rainbow));

// NODE
// const http = require('http');
// const colors = require('colors')
//
// const handleServer = (req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write('<h1>Hola mundo!</h1>')
//     res.end();
// }
//
// const server = http.createServer(handleServer)
// server.listen(3000, () => console.log('Server running on port: 3000'.rainbow))
