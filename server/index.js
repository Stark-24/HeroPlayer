var express = require("express");
var parser = require("body-parser");
var db = require("./db");
var path = require("path");
const router = require("./routes.js");
var PORT = 9001;
var cors = require("cors");

var app = express();

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


app.use("/api", router);

app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(PORT, () => console.log("port is listening on 9001"));
