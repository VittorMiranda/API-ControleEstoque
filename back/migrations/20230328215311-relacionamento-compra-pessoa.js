'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('compra', 'pessoa_id', { 
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('compra', 'pessoa_id', { 
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
