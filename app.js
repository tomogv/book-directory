var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var booksRouter = require("./routes/book.route");
// var authorRouter = require("./routes/author.route");
// var publicationRouter = require("./routes/publication.route");

const db = require("./configs/db.config");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);
// app.use("/authors", authorRouter);
// app.use("/publications", publicationRouter);

db.sync()
  .then(() => {
    console.log('db synced');
  })
  .catch((err) => console.log("Error: " + err));

module.exports = app;
