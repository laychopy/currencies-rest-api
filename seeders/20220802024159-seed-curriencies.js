'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Currencies',[
    {
      name: 'Bitcoin',
      symbol: 'btc',
      usdValue: 22950.78,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Ethereum',
      symbol: 'eth',
      usdValue: 1594.20,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Theter',
      symbol: 'usdt',
      usdValue: 1.0,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Currencies', null, {});
  }
};
