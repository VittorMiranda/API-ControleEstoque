const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Pessoa_juridica = database.define('pessoa_juridica',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
    cnpj:{
        type: Sequelize.STRING(18), 
      },
    razao_social:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
    nome_fantasia:{
        type: Sequelize.STRING(30),
      },
    nome_fantasia:{
        type: Sequelize.STRING(30),
      },
    inscricao_municipal:{
        type: Sequelize.CHAR(9),
      },
      inscricao_estadual:{
        type: Sequelize.CHAR(9),
      }
},{
    timestamps:true
});

module.exports = Pessoa_juridica;