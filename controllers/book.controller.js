const bookModel = require("../models/book.model");

exports.getAll = (req, res) => {
  bookModel.getAll().then((data) => {
    res
      .status(200)
      .send({
        data: data,
        message: "sucessfully fetched all the books",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.create = (req, res) => {
  let bookData = {
    title: req.body.title,
    pageCount: req.body.pageCount,
    isbn: req.body.isbn,
  };

  bookModel.create(bookData).then((data) => {
    res
      .status(200)
      .send({
        data: data,
        message: "data inserted",
      });
    }).catch((err) => {
        console.log(err);
      });
};

exports.getById = (req, res) => {

    // let book = bookModel.getById(req.params.id);
    bookModel.getById(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "id" + req.params.id
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res) => {

    bookModel.update(req.params.id, req.body).then((data) => {
        res.status(200).send({
            data: data,
            message: "fields updated sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.delete = (req, res) => {

    bookModel.delete(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "item deleted sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};
