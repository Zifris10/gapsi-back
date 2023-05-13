import { Router } from 'express';
import UsersController from './users.ctrl';

const userRoute: Router = Router();

userRoute
    .get('/', UsersController.getOne);

export default userRoute;

/**
 * @openapi
 * /users/:
 *   get:
 *     description: Get user
 *     tags: [USERS]
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
 *                     id: '1.0.0',
 *                     name: '1.0.0'
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