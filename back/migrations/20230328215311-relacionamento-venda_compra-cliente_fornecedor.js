'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('venda_compra', 'cliente_fornecedor_id', { 
      type: Sequelize.INTEGER,
      references:{model:'cliente_fornecedor', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('venda_compra', 'cliente_fornecedor_id', { 
      type: Sequelize.INTEGER,
      references:{model:'cliente_fornecedor', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
