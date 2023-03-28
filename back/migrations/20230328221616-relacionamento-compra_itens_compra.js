'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('itens_compra', 'compra_id', { 
      type: Sequelize.INTEGER,
      references:{model:'compra', key: 'id'},
      onDelete:'CASCADE',
      allowNull: false});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('itens_compra', 'compra_id');
  }
};
