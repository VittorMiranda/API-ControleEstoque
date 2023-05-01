'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('produto', 'marca_id', { 
      type: Sequelize.INTEGER,
      references:{model:'marca', key: 'marca_id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('produto', 'marca_id', { 
      type: Sequelize.INTEGER,
      references:{model:'marca', key: 'marca_id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
