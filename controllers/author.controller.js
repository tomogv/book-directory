const authorModel = require("../models/author.model");

exports.getAll = (req, res) => {
  authorModel.getAll().then((data) => {
    res
      .status(200)
      .send({
        data: data,
        message: "sucessfully fetched all the authors",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.create = (req, res) => {
  let authorData = {
    name: req.body.name,
    email: req.body.email
  };

  authorModel.create(authorData).then((data) => {
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

    // let author = authorModel.getById(req.params.id);
    authorModel.getById(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "id" + req.params.id
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res) => {

    authorModel.update(req.params.id, req.body).then((data) => {
        res.status(200).send({
            data: data,
            message: "fields updated sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.delete = (req, res) => {

    authorModel.delete(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "item deleted sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};
