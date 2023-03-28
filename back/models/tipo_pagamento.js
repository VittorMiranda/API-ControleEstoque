const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Tipo_pagamento = database.define('tipo_pagamento',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      tipo:{
        type: Sequelize.STRING(45), 
        allowNull: false
      },
      status:{
        type: Sequelize.STRING(30)
      }
});

module.exports = Users;