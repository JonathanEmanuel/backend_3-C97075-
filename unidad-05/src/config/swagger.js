import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de la API REST',
            version: '1.0.1',
            description: 'Coder API Users'
        }
    },
    apis: ['./src/docs/*.yaml'],
})