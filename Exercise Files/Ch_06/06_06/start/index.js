const http = require("http");

const ulFromArray = array => `<ul>
  ${array.map(item => `<li>${item}</li>`).join("")}
</ul>`;

http
  .createServer((req, res) => {
    const [, ...routes] = req.url.split("/");
    res.setHeader("Content-Type", "text/html");

    if (routes.length) {
      res.end(ulFromArray(routes));
    } else {
      res.end(`<h1>Navigate to a deeply nested route</h1>`);
    }
  })
  .listen(3000, () => console.log("server up on port 3000"));

console.log("starting server");
