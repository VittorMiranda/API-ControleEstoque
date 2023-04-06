'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('cliente_fornecedor_tel', 'cliente_fornecedor_id', { 
      type: Sequelize.INTEGER,
      references:{model:'cliente_fornecedor', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('cliente_fornecedor_tel', 'cliente_fornecedor_id', { 
      type: Sequelize.INTEGER,
      references:{model:'cliente_fornecedor', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
