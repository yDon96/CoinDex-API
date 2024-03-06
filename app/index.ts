import express from 'express'
import { router as coinsRouterV1 } from './coins/v1/coins.router'
import { router as countryRouterV1 } from './countries/v1/countries.router'

const result = express()

result.use('/api/v1', [coinsRouterV1, countryRouterV1])

module.exports = result
