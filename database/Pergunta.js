const Sequelize = require('sequelize');
const connection = require('./database')

const Pergunta = connection.define('pergunta', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});


module.exports = Pergunta;
/*Pergunta.sync({force: false}).then(() => {
    console.log('deu certo');
}).catch((err) => {
    console.log(err);
})*/