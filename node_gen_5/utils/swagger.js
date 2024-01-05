import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager Api',
            description: 'Task Manager Application',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpecifica = swaggerJSDoc(options);

export default swaggerSpecifica;