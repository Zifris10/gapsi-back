import VersionService from './version.service';
import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from '../handlers';
import { STATUS_CODES } from '../helpers';
import { VersionInterface, StatusResponseInterface } from '../interfaces';

class VersionController {
    public static async getOne(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getVersion: VersionInterface = await VersionService.findOne();
            const dataSend: StatusResponseInterface = {
                statusCode: STATUS_CODES.OK,
                data: getVersion
            };
            RequestHandler.handlerResponse(res, dataSend);
        } catch (error: any) {
            next(error);
        }
    }
};

export default VersionController;