import { Router } from 'express';
import { QUERY_PARAMS, schemaID, schemaProvider, schemaQueryParams } from '../helpers';
import { ValidatorHandler } from '../handlers';
import ProvidersController from './providers.ctrl';

const providerRoute: Router = Router();

providerRoute
    .delete('/:id', [
        ValidatorHandler.validate(schemaID, QUERY_PARAMS.PARAMS)
    ], ProvidersController.delete)
    .get('/', [
        ValidatorHandler.validate(schemaQueryParams, QUERY_PARAMS.QUERY)
    ], ProvidersController.list)
    .post('/', [
        ValidatorHandler.validate(schemaProvider, QUERY_PARAMS.BODY)
    ], ProvidersController.create);

export default providerRoute;

/**
 * @openapi
 * /providers/{id}:
 *   delete:
 *     description: Delete provider
 *     tags: [PROVIDERS]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 error:
 *                   type: string
 *                   example: Not Acceptable
 *                 message:
 *                   type: string
 *                   example: Error message
 */

/**
 * @openapi
 * /providers/?limit=20&offset=0:
 *   get:
 *     description: Get providers
 *     tags: [PROVIDERS]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example: [{
 *                     id: befaee6f-9948-4573-8f70-0362e52f024e,
 *                     name: Provider 1,
 *                     socialReason: Razón Social 1,
 *                     address: Dirección 1
 *                   }]
 *                 total:
 *                   type: integer
 *                   example: 23
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 error:
 *                   type: string
 *                   example: Not Acceptable
 *                 message:
 *                   type: string
 *                   example: Error message
 */

/**
 * @openapi
 * /providers/:
 *   post:
 *     description: Create provider
 *     tags: [PROVIDERS]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               socialReason:
 *                 type: string
 *               address:
 *                 type: string
 *           example:
 *             name: Nombre 1
 *             socialReason: Razón Social 1
 *             address: Dirección 1
 *     responses:
 *       200:
 *         description: Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example: {
 *                     id: befaee6f-9948-4573-8f70-0362e52f024e,
 *                     deleted: false,
 *                     name: Nombre 1,
 *                     socialReason: Razón Social 1,
 *                     address: Dirección 1,
 *                     updatedAt: 2023-02-21T03:43:57.013Z,
 *                     createdAt: 2023-02-21T03:43:57.013Z
 *                   }
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 error:
 *                   type: string
 *                   example: Not Acceptable
 *                 message:
 *                   type: string
 *                   example: Error message
 */