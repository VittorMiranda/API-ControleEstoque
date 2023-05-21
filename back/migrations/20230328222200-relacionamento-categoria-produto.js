'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoria_produto', { 
        produto_categoria_id:{
        type: Sequelize.STRING(50),
        references:{model:'produto', key: 'nome'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      },
      categoria_id:{
        type: Sequelize.STRING(30),
        references:{model:'categoria', key: 'categoria'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria_produto');
  }
};
