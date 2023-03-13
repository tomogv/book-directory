const Sequelize = require('sequelize');
const db = require('../configs/db.config');

const publicationModel = db.define('publications', {

    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = publicationModel;