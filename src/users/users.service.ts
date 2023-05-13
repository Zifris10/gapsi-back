import { notFound } from '@hapi/boom';
import { FindOptions } from 'sequelize';
import { UsersInterface } from '../interfaces';
import { UsersModel } from '../models';

class UsersService {
    public static async findOne(): Promise<UsersInterface> {
        const dataFind: FindOptions<UsersInterface> = {
            attributes: ['name', 'id'],
            where: {
                id: '37e0d869-6397-4d3c-8724-8c588783d112'
            }
        };
        const findUser = await UsersModel.findOne(dataFind);
        if(!findUser) {
            throw notFound(`Oops, lo sentimos pero no hemos encontrado el usuario.`);
        }
        return findUser.dataValues;
    }
};

export default UsersService;