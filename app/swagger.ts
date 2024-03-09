const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'CoinDex API',
        version: '1.0.0',
        contact: {
            name: "Youssef Donadeo",
            url: "https://www.ydonadeo.xyz",
            email: "you.donadeo@gmail.com"
        },
    },
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['**/*.ts'],
};

const specs = swaggerJsdoc(options)

const swagger = (app: any) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
}

export { swagger };