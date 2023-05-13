import ProvidersService from './providers.service';
import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from '../handlers';
import { trimStrings, firstLetterUpperCase, STATUS_CODES, PAGINATION } from '../helpers';
import { ProvidersInterface, StatusResponseInterface } from '../interfaces';
import { FindAndCountOptions, WhereOptions } from 'sequelize';

interface QueryProvidersInterface {
	limit?: string;
	offset?: string;
}

interface BodyProvidersInterface {
	name: string;
	socialReason: string;
    address: string;
}

class ProvidersController {
    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, socialReason, address } = req.body as BodyProvidersInterface;
            const trimName: string = firstLetterUpperCase(trimStrings(name));
            const trimSocialReason: string = firstLetterUpperCase(trimStrings(socialReason));
            const trimAddress: string = firstLetterUpperCase(trimStrings(address));
            const dataProvider: ProvidersInterface = {
                name: trimName,
                socialReason: trimSocialReason,
                address: trimAddress
            };
            const createProvider: ProvidersInterface = await ProvidersService.create(dataProvider);
            const dataSend: StatusResponseInterface = {
                statusCode: STATUS_CODES.OK,
                data: createProvider
            };
            RequestHandler.handlerResponse(res, dataSend);
        } catch (error: any) {
            next(error);
        }
    }

    public static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { limit, offset } = req.query as QueryProvidersInterface;
            const dataProviders: Omit<FindAndCountOptions<ProvidersInterface>, 'group'> = {
                attributes: ['id', 'name', 'socialReason', 'address'],
                where: {
                    deleted: false
                },
                order: [
                    ['name', 'ASC']
                ],
                raw: true,
                limit: limit ? parseInt(limit) : PAGINATION.LIMIT,
                offset: offset ? parseInt(offset) : PAGINATION.OFFSET
            };
            const getProviders = await ProvidersService.findAndCountAll(dataProviders);
            const dataSend: StatusResponseInterface = {
                statusCode: STATUS_CODES.OK,
                data: getProviders.rows,
                total: getProviders.count
            };
            RequestHandler.handlerResponse(res, dataSend);
        } catch (error: any) {
            next(error);
        }
    }

    public static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id: providerID } = req.params;
            const data: Partial<ProvidersInterface> = {
                deleted: true
            };
            const where: WhereOptions<ProvidersInterface> = {
                id: providerID
            };
            await ProvidersService.update(data, where, providerID);
            const dataSend: StatusResponseInterface = {
                statusCode: STATUS_CODES.OK
            };
            RequestHandler.handlerResponse(res, dataSend);
        } catch (error: any) {
            next(error);
        }
    }
};

export default ProvidersController;