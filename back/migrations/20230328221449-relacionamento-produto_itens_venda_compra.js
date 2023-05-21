'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('itens_venda_compra', 'produto_id', { 
      type: Sequelize.STRING(50),
      references:{model:'produto', key: 'nome'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('itens_venda_compra', 'produto_id', { 
      type: Sequelize.INTEGER,
      references:{model:'produto', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
