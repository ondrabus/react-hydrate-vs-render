// pageTemplate.js

exports.getPage = function(
  reactElementTag,
  reactElementString,
  reactDOMMethod,
  pageTitle
  ) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js" defer></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" defer></script>
      <script src="./components.js" defer></script>
	    <link rel="stylesheet" href="./style.css">
      <link href="https://fonts.googleapis.com/css2?family=Jua&family=Roboto:wght@300&display=swap" rel="stylesheet">
    </head>
    <body> 
		<main>
			<div class="card">
			  <h1>${ pageTitle }</h1>
			  <div id="react-root">${ reactElementString }</div>
			  <div class="buttons">
				  <a href="hydrate.html">ReactDOM.hydrate() sample</a>
				  <a href="render.html">ReactDOM.render() sample</a>
			  </div>
			</div>
		</main>
    </body>
    <script>
      window.addEventListener('load', (e) => {
        ReactDOM.${ reactDOMMethod }(
          React.createElement(${ reactElementTag }),
          document.getElementById('react-root')
        );
      });
    </script>
  </html>
  `;
}