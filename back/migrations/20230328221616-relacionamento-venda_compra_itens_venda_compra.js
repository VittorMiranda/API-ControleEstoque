'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('itens_venda_compra', 'venda_compra_id', { 
      type: Sequelize.INTEGER,
      references:{model:'venda_compra', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('itens_venda_compra', 'venda_compra_id', { 
      type: Sequelize.INTEGER,
      references:{model:'venda_compra', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
