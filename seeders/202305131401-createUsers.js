'use strict';
const tableName = 'users';
const schema = 'public';
const data = require('./data/202305131401-createUsers.json');

module.exports = {
    async up (queryInterface) {
        await queryInterface.bulkInsert({
            schema,
            tableName
        }, data);
    },
    async down (queryInterface) {
        await queryInterface.bulkDelete({
            schema,
            tableName
        }, data);
    }
};