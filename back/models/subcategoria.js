const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Subcategoria = database.define('subcategoria',{
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

module.exports = Subcategoria;