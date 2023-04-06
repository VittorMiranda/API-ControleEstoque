const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Categoria_Subcategoria = database.define('categoria',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
    categoria_id:{
        type: Sequelize.INTEGER,
        references:{model:'categoria', key: 'id'},
        onDelete:'CASCADE',
        allowNull: true
    },
    subcategoria_id:{
        type: Sequelize.INTEGER,
        references:{model:'subcategoria', key: 'id'},
        onDelete:'CASCADE',
        allowNull: true
      },
      
    });

module.exports = Categoria_Subcategoria;