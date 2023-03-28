const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Itens_compra = database.define('itens_compra',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      quantidade:{
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      valor_unitario:{
        type: Sequelize.DECIMAL(9,2),
      },
      total_item:{
        type: Sequelize.DECIMAL(9,2),
      }
});

module.exports = Itens_compra;