const authorModel = require('../schemas/author.schema');

exports.getAll = () => {
    return authorModel.findAll();
};

exports.create = (author) => {
    return authorModel.create(author);
};

exports.getById = (id) => {
    return authorModel.findByPk(id);
};

exports.update = (id, data) => {
    return authorModel.update(data, {where:{id:id}});
};

exports.delete = (id) => {
   return authorModel.destroy({where:{id:id}});
};