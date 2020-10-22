const btcRouter = require("express").Router();
const request = require("request");

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btcRouter.get("/", (req, res) => {
  request(url, (error, response, body) => {
    if (response.statusCode !== 200) {
      res.sendStatus(response.statusCode);
    } else {
      const json = JSON.parse(body);
      res.send(`Price of BTC is ${json.bpi.EUR.rate} EUR`);
    }
  });
});

module.exports = btcRouter;
