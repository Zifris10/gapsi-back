import { Dialect, Sequelize } from 'sequelize';

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_DIALECT
} = process.env;

const databaseUser = DB_USER as string;
const databaseName = DB_NAME as string;
const databaseHost = DB_HOST as string;
const databaseDialect = DB_DIALECT as Dialect;
const databasePassword = DB_PASSWORD as string;

export const sequelizeConnection = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: databaseDialect,
    host: databaseHost,
    define: {
        timestamps: true,
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});