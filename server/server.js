require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

//api add
const routes = require("./routes");
app.use(routes);

// host public react
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

console.log("Express Started");
app.listen(3000);
