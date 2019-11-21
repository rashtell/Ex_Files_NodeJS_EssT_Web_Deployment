const https = require("https");
const fs = require("fs");

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Snoopy",
  method: "GET"
};

const request = https.request(options, res => {
  let responseBody = "";
  res.setEncoding("UTF-8");

  res.on("data", data => {
    console.log("---chunk--- ", data.length);
    responseBody += data;
  });

  res.on("end", () => {
    fs.writeFile("./snoopy.html", responseBody, err => {
      if (err) {
        throw err;
      }
      console.log("file downloaded!");
    });
  });
});

request.end();
