const Sequelize = require('sequelize');
const db = require('../configs/db.config');
const authorModel = require('../schemas/author.schema');
const publicationModel = require('../schemas/publication.schema');

const bookModel = db.define('books', {
    
    title: {
        type: Sequelize.STRING
    },
    pageCount: {
        type: Sequelize.INTEGER
    }, 
    isbn: {
        type: Sequelize.INTEGER 
    }

});

publicationModel.hasOne(bookModel);
// authorModel.hasMany(bookModel);
bookModel.belongsToMany(authorModel, {through: 'book_author'});

module.exports = bookModel;
