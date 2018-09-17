var express = require("express");
var parser = require("body-parser");
var db = require("./db");
var path = require("path");
const router = require("./routes.js");
var PORT = 9001;
var cors = require("cors");

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: 'http://localhost:9001',
//     credentials: true
//   }));

app.use("/api", router);

app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(PORT, () => console.log("port is listening on 9001"));
