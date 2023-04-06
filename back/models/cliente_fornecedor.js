const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Pessoa = database.define('pessoa',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING(50), 
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(40)   
      },
      cep:{
        type: Sequelize.CHAR(8)   
      },
      logradouro:{
        type: Sequelize.STRING(40)   
      },
      num_end:{
        type: Sequelize.STRING(10)   
      },
      bairro:{
        type: Sequelize.STRING(30)   
      },
      cidade:{
        type: Sequelize.STRING(40)   
      },
      uf:{
        type: Sequelize.STRING(2)   
      },
      cnpj:{
        type: Sequelize.STRING(18)
      },
      cpf:{
        type: Sequelize.STRING(14)
      },
      genero:{
        type: Sequelize.STRING(10)
      },
      created_at:{
        type: Sequelize.DATE
      },
      updated_at:{
        type: Sequelize.DATE
      }   
});

module.exports = Pessoa;