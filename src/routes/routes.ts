import { Router } from 'express';
import providerRoute from '../providers/providers.routes';
import versionRoute from '../version/version.routes';
import userRoute from '../users/users.routes';

const mainRouter: Router = Router();

mainRouter.use('/providers', providerRoute);
mainRouter.use('/version', versionRoute);
mainRouter.use('/users', userRoute);

export default mainRouter;