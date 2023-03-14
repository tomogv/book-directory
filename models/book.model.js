const bookModel = require('../schemas/book.schema');

exports.getAll = () => {
    return bookModel.findAll();
};

exports.create = (book) => {
    return bookModel.create(book);
};

exports.getById = (id) => {
    return bookModel.findByPk(id);
};

exports.update = (id, data) => {
    return bookModel.update(data, {where:{id:id}});
};

exports.delete = (id) => {
   return bookModel.destroy({where:{id:id}});
}