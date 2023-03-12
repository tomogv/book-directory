const Sequelize = require('sequelize');

const sequelize = new Sequelize('books_directory', 'gv', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;