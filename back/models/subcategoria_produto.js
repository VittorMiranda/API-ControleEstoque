const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Subcategoria_Produto = database.define('categoria',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
    produto_id:{
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true
    },
    categoria_id:{
        type: Sequelize.INTEGER,
        references:{model:'subcategoria', key: 'id'},
        onDelete:'CASCADE',
        allowNull: true
    }
      
    });

module.exports = Subcategoria_Produtoategoria_Produto;