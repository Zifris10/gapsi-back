import { ModelDefined, DataTypes, Optional } from 'sequelize';
import { sequelizeConnection } from '../config';
import { ProvidersInterface } from '../interfaces';
import { SCHEMAS, TABLES } from '../helpers';

type OptionalAttributes = Optional<ProvidersInterface, 'createdAt' | 'updatedAt' | 'deleted'>;

export const ProvidersModel: ModelDefined<
    ProvidersInterface,
    OptionalAttributes
> = sequelizeConnection.define(TABLES.PROVIDERS, {
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
    }
}, {
    schema: SCHEMAS.PUBLIC
});