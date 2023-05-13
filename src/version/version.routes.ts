import { Router } from 'express';
import VersionController from './version.ctrl';

const versionRoute: Router = Router();

versionRoute
    .get('/', VersionController.getOne);

export default versionRoute;

/**
 * @openapi
 * /version/:
 *   get:
 *     description: Get version
 *     tags: [VERSION]
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
 *                     version: '1.0.0'
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