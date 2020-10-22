const express = require("express");
const app = express();
const btcRouter = require("./controllers/btcController");
const cityRouter = require("./controllers/cityController");
const excelRouter = require("./controllers/excelController");

app.use("/btc", btcRouter);
app.use("/capital", cityRouter);
app.use("/excel-sum", excelRouter);

module.exports = app;
