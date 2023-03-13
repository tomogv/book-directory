var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// var booksRouter = require("./routes/book.route");
// var authorRouter = require("./routes/author.route");
// var publicationRouter = require("./routes/publication.route");

const db = require("./configs/db.config.js");
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
// app.use("/books", booksRouter);
// app.use("/authors", authorRouter);
// app.use("/publications", publicationRouter);

const bookModel = require("./schemas/book.schema");
const authorModel = require("./schemas/author.schema");
const publicationModel = require("./schemas/publication.schema");
db.sync().then(() => {
  console.log("db synced");
  bookModel
    .sync({ alter: true })
    .then(() => {
      console.log("table synced");
    })
    .catch((err) => console.log("Error: " + err));
});
authorModel
  .sync({ alter: true })
  .then(() => {
    console.log("table synced");
  })
  .catch((err) => console.log("Error: " + err));
publicationModel
  .sync({ alter: true })
  .then(() => {
    console.log("table synced");
  })
  .catch((err) => console.log("Error: " + err))
.catch((err) => console.log("Error: " + err));

module.exports = app;
