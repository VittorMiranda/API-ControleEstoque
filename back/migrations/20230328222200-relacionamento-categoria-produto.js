'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('produto', 'categoria_id', { 
      type: Sequelize.INTEGER,
      references:{model:'categoria', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('produto', 'categoria_id', { 
      type: Sequelize.INTEGER,
      references:{model:'categoria', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
