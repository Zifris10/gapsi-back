import UsersService from './users.service';
import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from '../handlers';
import { STATUS_CODES } from '../helpers';
import { UsersInterface, StatusResponseInterface } from '../interfaces';

class UsersController {
    public static async getOne(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getUser: UsersInterface = await UsersService.findOne();
            const dataSend: StatusResponseInterface = {
                statusCode: STATUS_CODES.OK,
                data: getUser
            };
            RequestHandler.handlerResponse(res, dataSend);
        } catch (error: any) {
            next(error);
        }
    }
};

export default UsersController;