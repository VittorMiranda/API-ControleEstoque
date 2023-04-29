'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */ 
    await queryInterface.createTable('produto', {
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING(45), 
        allowNull: false
      },
      cod_barra:{
        type: Sequelize.STRING(20)
      },
      tamanho:{
        type: Sequelize.STRING(15)
      },
      descricao:{
        type: Sequelize.STRING(400)
      },
      imagem:{
        type: Sequelize.STRING(300)
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
      created_at:{
        type: Sequelize.DATE
      },
      updated_at:{
        type: Sequelize.DATE
      }
     });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('produto');
  }
};
