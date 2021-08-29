/* NOTE: This file is for deployment */
const express = require("express");
const path = require("path");

const port = 5501;
const app = express();

app.use(express.static(path.join(__dirname, "./build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build"));
});

app.listen(port);
console.log(`Server started at http://www.zoomdemo.aankh.co:${port}`);
