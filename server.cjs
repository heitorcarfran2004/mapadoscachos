// Servidor estatico simples para conferir a pagina localmente:
//   node server.cjs   ->  http://localhost:3121
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3121;
const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf'
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const arquivo = path.join(__dirname, rel);

  // nao deixa sair da pasta do funil
  if (!arquivo.startsWith(__dirname)) { res.writeHead(403).end('403'); return; }

  fs.readFile(arquivo, (err, buf) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('404'); return; }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(arquivo).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
}).listen(PORT, () => console.log('Servindo em http://localhost:' + PORT));
