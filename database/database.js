const Sequelize = require('sequelize');

const connection = new Sequelize('curso','root','2254aabb',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
