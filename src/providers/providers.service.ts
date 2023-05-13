import { notFound, badRequest } from '@hapi/boom';
import { FindAndCountOptions, FindOptions, WhereOptions } from 'sequelize';
import { ProvidersInterface } from '../interfaces';
import { ProvidersModel } from '../models';

class ProvidersService {
    public static async create(data: ProvidersInterface): Promise<ProvidersInterface> {
        const dataFind: FindOptions<ProvidersInterface> = {
            attributes: ['id'],
            where: {
                name: data.name
            }
        };
        const findProvider = await ProvidersModel.findOne(dataFind);
        if(findProvider) {
            throw badRequest(`Oops, lo sentimos pero el proveedor con nombre: ${data.name} ya existe.`);
        }
        const create = await ProvidersModel.create(data);
        return create.dataValues;
    }

    public static async update(data: Partial<ProvidersInterface>, where: WhereOptions<ProvidersInterface>, id: string): Promise<void> {
        const dataFind: FindOptions<ProvidersInterface> = {
            attributes: ['name'],
            where: {
                id
            }
        };
        const findProvider = await ProvidersModel.findOne(dataFind);
        if(!findProvider) {
            throw notFound(`Oops, lo sentimos pero no hemos logrado encontrar el proveedor con ID: ${id}.`);
        }
        const [ affectedCount ] = await ProvidersModel.update(data, { where });
        if(affectedCount === 0) {
            throw notFound('Oops, lo sentimos pero no hemos logrado actualizar el proveedor.');
        }
    }

    public static async findAndCountAll(data: Omit<FindAndCountOptions<ProvidersInterface>, 'group'>) {
        const { rows, count } = await ProvidersModel.findAndCountAll(data);
        return { rows, count };
    }
};

export default ProvidersService;