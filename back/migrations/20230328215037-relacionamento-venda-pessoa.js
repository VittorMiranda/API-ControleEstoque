'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('venda', 'pessoa_id', { 
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: false});
  
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('venda', 'pessoa_id');
  }
};
