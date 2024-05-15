const http = require('http');
require('dotenv').config('./.env')
const port = process.env.PORT || 3087;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = process.env.msg
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
