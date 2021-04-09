const express = require("express");
const { renderToString } = require("react-dom/server");

const SSR = require("./static");

const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.status(200).send(renderMarkup(renderToString(SSR)));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Running at http://localhost:8000');
});

function renderMarkup(html) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>SSR Demo</title>
      <meta charset='utf-8' />
    </head>
    <body>
      <div id='app'>${html}</div>
      <script src='./index.js'></script>
    </body>
  </html>
  `;
}
