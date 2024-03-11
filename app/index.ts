import express from 'express'
import { router as coinsRouterV1 } from './coins/v1/coins.router'
import { router as countryRouterV1 } from './countries/v1/countries.router'
import { swagger } from './swagger'
import {globalErrorHandler} from "../middleware/globalErrorHandler";

const result = express()

result.use('/api/v1', [coinsRouterV1, countryRouterV1]);

result.use(globalErrorHandler);
swagger(result);

module.exports = result
