const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => {
  fs.createReadStream("index.html").pipe(res);
});
app.listen(3000);
