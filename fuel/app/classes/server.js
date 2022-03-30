const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(express.static(__dirname + '/views'));
app.use(parser.json);
app.use('/', require('./controllers/renderTables'));
const PORT = process.env.PORT || 4444;
app.listen(PORT,  console.log("Server is running at: " + PORT));

app.use(express.urlencoded({extended: false}));





