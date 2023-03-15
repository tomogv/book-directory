const publicationModel = require("../models/publication.model");

exports.getAll = (req, res) => {
  publicationModel.getAll().then((data) => {
    res
      .status(200)
      .send({
        data: data,
        message: "sucessfully fetched all the publications",
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.create = (req, res) => {
  let publicationData = {
    name: req.body.name,
    email: req.body.email
  };

  publicationModel.create(publicationData).then((data) => {
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

    // let publication = publicationModel.getById(req.params.id);
    publicationModel.getById(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "id" + req.params.id
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.update = (req, res) => {

    publicationModel.update(req.params.id, req.body).then((data) => {
        res.status(200).send({
            data: data,
            message: "fields updated sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.delete = (req, res) => {

    publicationModel.delete(req.params.id).then((data) => {
        res.status(200).send({
            data: data,
            message: "item deleted sucessfully"
        });
    }).catch((err) => {
        console.log(err);
    });
};
