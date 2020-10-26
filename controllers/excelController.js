const excelRouter = require("express").Router();
const { getXlsxStream } = require("xlstream");

var upload = require("../multer");

excelRouter.post("/", upload.single("data"), async (req, res) => {
  const file = req.file;
  if (file.originalname.toLowerCase().endsWith(".xlsx")) {
    let result = 0;
    const stream = await getXlsxStream({
      filePath: file.path,
      sheet: 0,
    });
    stream.on("data", (x) => (result += x.raw.obj.A));
    stream.on("end", () => res.send(`SUM is ${result}`));
  } else {
    res.status(400).send("Bad file format");
  }
});

module.exports = excelRouter;
