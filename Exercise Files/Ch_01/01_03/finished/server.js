const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>method: ${req.method}</p>
            <p>url: ${req.url}</p>
        </body>
        </html>
    `);
  })
  .listen(3000);

console.log("Web Server Listening on Port 3000");
