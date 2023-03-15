const publicationModel = require('../schemas/publication.schema');

exports.getAll = () => {
    return publicationModel.findAll();
};

exports.create = (publication) => {
    return publicationModel.create(publication);
};

exports.getById = (id) => {
    return publicationModel.findByPk(id);
};

exports.update = (id, data) => {
    return publicationModel.update(data, {where:{id:id}});
};

exports.delete = (id) => {
   return publicationModel.destroy({where:{id:id}});
}