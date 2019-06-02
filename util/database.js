const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'biggest1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
