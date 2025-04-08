import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { init, transpile } from "jjsx";
import { join } from "path";
import dictionary from "./src/dictionary";
import routes, { PageRequest } from "./src/routes";
import getDictionary from "./src/get-dictionary";
import { minify } from 'html-minifier-terser';

init();

const buildDir = "./dist";
const languages = Object.keys(dictionary);
const routePaths = Object.keys(routes);

async function buildRoute(path: string) {
  const handler = routes[path];
  for (const lang of languages) {
    const req = { lang, path, dictionary: getDictionary(lang) };
    const jsx = handler(req);
    const pageHtml = transpile(jsx);
    const minified = await minify(pageHtml, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      decodeEntities: true,
      html5: true,
    });
    writeHtml(req, minified);
  }
}

function writeHtml(req: PageRequest, pageHtml: string) {
  const targetDir = join(buildDir, req.lang, req.path);
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "index.html"), pageHtml);
}

function main() {
  if (existsSync(buildDir)) {
    rmSync(buildDir, { recursive: true });
  }
  for (const path of routePaths) {
    buildRoute(path);
    console.log(`built ${path}`)
  }
  cpSync('static', 'dist', { recursive: true });
  if(process.env.NODE_ENV === 'dev'){
    server();
  }
}

function server() {
  // server.js
  const http = require('http');
  const fs = require('fs');
  const path = require('path');

  const PORT = 3000;
  const PUBLIC_DIR = path.join(__dirname, 'dist');

  http.createServer((req, res) => {
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath).toLowerCase() || '.html';
    if(ext === '.html' && !filePath.endsWith('html')){
      filePath = path.join(filePath, 'index.html');
    }

    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.json': 'application/json'
    };

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(err.code === 'ENOENT' ? 404 : 500);
        res.end(err.code === 'ENOENT' ? '404 Not Found' : 'Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      }
    });
  }).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

main();