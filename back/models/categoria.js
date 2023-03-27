const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Categoria = database.define('categoria',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      descricao:{
        type: Sequelize.STRING(30),
        allowNull: false
      }
},{
    timestamps:true
});

module.exports = Categoria;