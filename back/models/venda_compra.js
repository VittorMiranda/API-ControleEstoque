const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Compra = database.define('compra',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      tipo_transacao:{
        type: Sequelize.STRING(10)
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
      status:{
        type: Sequelize.STRING(45)  
      }
      
    });

module.exports = Compra;