const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Pessoa_tel = database.define('pessoa_tel',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      tipo:{
        type: Sequelize.STRING(30)
      },
      telefone:{
        type: Sequelize.STRING(15)
      }
},{
    timestamps:true
});

module.exports = Pessoa_tel;