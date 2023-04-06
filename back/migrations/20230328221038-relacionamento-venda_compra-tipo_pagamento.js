'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('venda_compra', 'tipo_pagamendo_id', { 
      type: Sequelize.INTEGER,
      references:{model:'tipo_pagamento', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('venda_compra', 'tipo_pagamendo_id', { 
      type: Sequelize.INTEGER,
      references:{model:'tipo_pagamento', key: 'id'},
      onDelete:'CASCADE',
      allowNull: true});
  }
};
