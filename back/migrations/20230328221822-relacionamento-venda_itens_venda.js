'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('itens_venda', 'venda_id', { 
      type: Sequelize.INTEGER,
      references:{model:'venda', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('itens_venda', 'venda_id', { 
      type: Sequelize.INTEGER,
      references:{model:'venda', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
