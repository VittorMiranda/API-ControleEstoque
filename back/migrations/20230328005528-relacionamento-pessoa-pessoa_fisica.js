'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('pessoa_fisica', 'pessoa_id', { 
      type: Sequelize.INTEGER,
      references:{model:'pessoa', key: 'id'},
      onDelete:'CASCADE',
      allowNull: false});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('pessoa_fisica', 'pessoa_id');
  }
};
