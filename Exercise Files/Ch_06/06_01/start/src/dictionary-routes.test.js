const express = require("express");
const dictionaryRoutes = require("./dictionary-routes");
const { save } = require("./lib");
const request = require("supertest");

jest.mock("./lib", () => ({
  save: jest.fn()
}));

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

  it("DELETE /dictionary/bbb - success", async () => {
    const { body } = await request(app).delete("/dictionary/bbb");
    expect(body).toEqual({
      status: "success",
      removed: "bbb",
      newLength: 2
    });
    expect(save).toHaveBeenCalledWith([
      { term: "aaa", defined: "test a" },
      { term: "ccc", defined: "test c" }
    ]);
  });
});
