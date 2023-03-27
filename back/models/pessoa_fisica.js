const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Pessoa_fisica = database.define('pessoa_fisica',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      cpf:{
        type: Sequelize.STRING(11)
      },
    genero:{
        type: Sequelize.STRING(10)
      }
},{
    timestamps:true
});

module.exports = Pessoa_fisica;