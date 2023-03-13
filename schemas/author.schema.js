const Sequelize = require('sequelize');
const db = require('../configs/db.config');

const authorModel = db.define('authors', {

    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = authorModel;