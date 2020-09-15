// genScript.js

let babel          = require('@babel/core');
let fs             = require('fs');
let ReactDOMServer = require('react-dom/server');
let React          = require('react');
let pageTemplate   = require('./pageTemplate.js');

script = babel.transformFileSync(
  'components.jsx', 
  {presets : [['@babel/react']]}
);

fs.writeFileSync('components.js',script.code);
let components = require('./components.js');

hydrateHTML = pageTemplate.getPage(
  'MyButton',
  ReactDOMServer.renderToString(React.createElement(components.MyButton)),
  'hydrate',
  'ReactDOM.hydrate() sample'
);

renderHTML = pageTemplate.getPage(
  'MyButton',
  '',
  'render',
  'ReactDOM.render() sample'
);

fs.writeFileSync('hydrate.html',hydrateHTML);
fs.writeFileSync('render.html',renderHTML);