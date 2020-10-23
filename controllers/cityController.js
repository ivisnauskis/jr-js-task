const cityRouter = require("express").Router();
const fs = require("fs");

const filePath = "./node_modules/country-json/src/country-by-capital-city.json";

cityRouter.get("/", (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(400).send({ error: "cannot open file" });
    }

    let inputCountry = req.query.country;

    let countries = JSON.parse(data);
    let country = countries.find(
      (c) => c.country.toLowerCase() === inputCountry.toLowerCase()
    );

    if (country) {
      res.send(`Capital of Latvia is ${country.city}`);
    } else {
      res.sendStatus(400);
    }
  });
});

module.exports = cityRouter;
