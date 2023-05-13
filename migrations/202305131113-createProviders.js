'use strict';
const tableName = 'providers';

module.exports = {
    async up (queryInterface, DataTypes) {
        await queryInterface.createTable(tableName, {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            socialReason: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
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