'use strict';
const tableName = 'version';

module.exports = {
    async up (queryInterface, DataTypes) {
        await queryInterface.createTable(tableName, {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            version: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.fn('NOW')
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.fn('NOW')
            }
        });
    },
    async down (queryInterface) {
        await queryInterface.dropTable({
            schema: 'public',
            tableName
        });
    }
};