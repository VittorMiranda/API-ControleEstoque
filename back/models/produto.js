const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Produto = database.define('produto',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING(45), 
        allowNull: false
      },
      marca:{
        type: Sequelize.STRING(45)
      },
      cod_barra:{
        type: Sequelize.STRING(15)
      },
      tamanho:{
        type: Sequelize.STRING(15)
      },
      descricao:{
        type: Sequelize.STRING(45)
      },
      imagem:{
        type: Sequelize.STRING(100)
      },
      data_vencimento:{
        type: Sequelize.DATE
      },
      qtd_estoque:{
        type: Sequelize.INTEGER
      },
      qtd_min:{
        type: Sequelize.INTEGER
      },
      preco_custo:{
        type: Sequelize.DECIMAL(9,2)
      },
      preco_venda:{
        type: Sequelize.DECIMAL(9,2)
      },
      valor_lucro:{
        type: Sequelize.DECIMAL(9,2)
      },
      porcentagem_lucro:{
        type: Sequelize.FLOAT
      },
      preco_venda:{
        type: Sequelize.DECIMAL(9,2)
      }

},{
    timestamps:true
});

module.exports = Produto;