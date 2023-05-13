import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import helmet from 'helmet';
import mainRouter from './routes/routes';
import { openapiSpecification } from './config';
import { errorResponse } from './handlers';

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 4040;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', mainRouter);
app.use(errorResponse);
app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use(helmet());

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));