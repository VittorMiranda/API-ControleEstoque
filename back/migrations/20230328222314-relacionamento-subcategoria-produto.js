'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('produto', 'subcategoria_id', { 
      type: Sequelize.INTEGER,
      references:{model:'subcategoria', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('produto', 'subcategoria_id', { 
      type: Sequelize.INTEGER,
      references:{model:'subcategoria', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
