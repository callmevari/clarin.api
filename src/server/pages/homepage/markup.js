module.exports = (jsx, props) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Clarin API - Homepage</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="mobile-web-app-capable" content="yes">
      <link rel="stylesheet" href="/bundle.css">
      <link rel="shortcut icon" type="image/ico" href="https://comercial.clarin.com/wp-content/uploads/2018/09/favicon.ico"/>
    </head>
    <body>
      <div id="root-app">${jsx}</div>
    </body>
  </html>
  <script>window.__PRELOAD_STATE__=${JSON.stringify(props)}</script>
  <script src="/bundle.js"></script>
`;
