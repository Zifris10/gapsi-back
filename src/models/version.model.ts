import { ModelDefined, DataTypes, Optional } from 'sequelize';
import { sequelizeConnection } from '../config';
import { VersionInterface } from '../interfaces';
import { SCHEMAS, TABLES } from '../helpers';

type OptionalAttributes = Optional<VersionInterface, 'createdAt' | 'updatedAt'>;

export const VersionModel: ModelDefined<
    VersionInterface,
    OptionalAttributes
> = sequelizeConnection.define(TABLES.VERSION, {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    version: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    schema: SCHEMAS.PUBLIC
});