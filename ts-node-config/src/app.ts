import * as http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.write('Hello world!');
  res.end();
});

server.listen(3000, () => console.log('Server on port: 3000'));
