'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('produto', 'marca_id', { 
      type: Sequelize.STRING(30),
      references:{model:'marca', key: 'marca'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('produto', 'marca_id', { 
      type: Sequelize.STRING(30),
      references:{model:'marca', key: 'marca'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
