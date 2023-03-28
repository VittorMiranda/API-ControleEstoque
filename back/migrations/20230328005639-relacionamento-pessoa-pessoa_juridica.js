'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('pessoa_juridica', 'pessoa_id', { 
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: false});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('pessoa_juridica', 'pessoa_id');
  }
};
