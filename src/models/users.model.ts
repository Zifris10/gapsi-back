import { ModelDefined, DataTypes, Optional } from 'sequelize';
import { sequelizeConnection } from '../config';
import { UsersInterface } from '../interfaces';
import { SCHEMAS, TABLES } from '../helpers';

type OptionalAttributes = Optional<UsersInterface, 'createdAt' | 'updatedAt'>;

export const UsersModel: ModelDefined<
    UsersInterface,
    OptionalAttributes
> = sequelizeConnection.define(TABLES.USERS, {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    schema: SCHEMAS.PUBLIC
});