import { notFound } from '@hapi/boom';
import { FindOptions } from 'sequelize';
import { VersionInterface } from '../interfaces';
import { VersionModel } from '../models';

class VersionService {
    public static async findOne(): Promise<VersionInterface> {
        const dataFind: FindOptions<VersionInterface> = {
            attributes: ['version'],
            where: {
                id: '19d1323e-39ff-4e59-801d-4b38254f4394'
            }
        };
        const findVersion = await VersionModel.findOne(dataFind);
        if(!findVersion) {
            throw notFound(`Oops, lo sentimos pero no hemos encontrado la versión.`);
        }
        return findVersion.dataValues;
    }
};

export default VersionService;