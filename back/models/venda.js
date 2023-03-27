const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Venda = database.define('venda',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nota_fiscal:{
        type: Sequelize.STRING(100)
      },
      data:{
        type: Sequelize.DATE  
      },
      total:{
        type: Sequelize.DECIMAL(9,2)  
      },
      desconto:{
        type: Sequelize.DECIMAL(9,2)  
      },
      valor_venda:{
        type: Sequelize.DECIMAL(9,2)  
      },
      status:{
        type: Sequelize.STRING(45)  
      }
},{
    timestamps:true
});

module.exports = Venda;