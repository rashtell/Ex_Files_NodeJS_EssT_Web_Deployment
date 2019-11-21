const express = require("express");
const dictionaryRoutes = require("./dictionary-routes");
const request = require("supertest");

jest.mock("../data/skiTerms.json", () => [
  { term: "aaa", defined: "test a" },
  { term: "bbb", defined: "test b" },
  { term: "ccc", defined: "test c" }
]);

const app = express();
app.use("/dictionary", dictionaryRoutes);

describe("dictionary-routes", () => {
  it("GET /dictionary - success", async () => {
    const { body } = await request(app).get("/dictionary");
    expect(body).toEqual([
      { term: "aaa", defined: "test a" },
      { term: "bbb", defined: "test b" },
      { term: "ccc", defined: "test c" }
    ]);
  });
});
