'use strict';
const tableName = 'version';
const schema = 'public';
const data = require('./data/202305131345-createVersion.json');

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