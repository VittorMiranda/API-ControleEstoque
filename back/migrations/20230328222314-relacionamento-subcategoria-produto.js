'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subcategoria_produto', { 
        produto_subcategoria_id:{
        type: Sequelize.STRING(50),
        references:{model:'produto', key: 'nome'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      },
      subcategoria_id:{
        type: Sequelize.STRING(30),
        references:{model:'subcategoria', key: 'subcategoria'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subcategoria_produto');
  }
};
