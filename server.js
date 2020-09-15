// server.js

let http = require('http');
let fs   = require('fs');

let renderPage       = fs.readFileSync('render.html');
let hydratePage      = fs.readFileSync('hydrate.html');
let componentsSource = fs.readFileSync('components.js');
let style			 = fs.readFileSync('style.css');

http.createServer((req, res) => {
  if (req.url == '/components.js') {
    // artificial delay
    setTimeout(() => {
    res.setHeader('Content-Type','text/javascript');
    res.end(componentsSource);
    }, 5000);
  } else if (req.url == '/render.html') {
    res.end(renderPage);
  } else if (req.url == '/hydrate.html') {
    res.end(hydratePage);
  } else if (req.url == '/style.css') {
	res.end(style);
  }
}).listen(8010,'127.0.0.1');