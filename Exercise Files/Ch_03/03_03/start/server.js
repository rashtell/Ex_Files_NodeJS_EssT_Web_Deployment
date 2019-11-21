const express = require("express");
let skiTerms = require("./skiTerms.json");

const app = express();

app.use(express.static("./client"));

app.get("/dictionary", (req, res) => {
  res.json(skiTerms);
});

app.listen(3000, () => {
  console.log(`Ski Dictionary at http://localhost:3000`);
});
