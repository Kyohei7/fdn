'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('user_detail', [
    {
      first_name: 'Tommy',
      last_name: 'Bejo',
      email: 'tommy@mail.com',
      item: 'Barang1',
      quantity: 2,
      total_price: 100000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Joko',
      last_name: 'Widodo',
      email: 'joko@mail.com',
      item: 'Barang2',
      quantity: 1,
      total_price: 50000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Jusuf',
      last_name: 'Kalla',
      email: 'jusuf@mail.com',
      item: 'Barang3',
      quantity: 3,
      total_price: 150000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Tommy',
      last_name: 'Bejo',
      email: 'tommy@mail.com',
      item: 'Barang2',
      quantity: 2,
      total_price: 100000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Robert',
      last_name: 'Garcia',
      email: 'robert@mail.com',
      item: 'Barang10',
      quantity: 3,
      total_price: 150000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Muhammad',
      last_name: 'Rizki',
      email: 'rizki@mail.com',
      item: 'Barang4',
      quantity: 3,
      total_price: 150000,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      first_name: 'Reza',
      last_name: 'Rahardian',
      email: 'reza@mail.com',
      item: 'Barang5',
      quantity: 3,
      total_price: 150000,
      created_at: new Date(),
      updated_at: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('user_detail', null, {});
  }
};
