const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Compra = database.define('compra',{
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
      status:{
        type: Sequelize.STRING(45)  
      }
},{
    timestamps:true
});

module.exports = Compra;