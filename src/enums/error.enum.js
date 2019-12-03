const ErrorTypes = require('./errorType.enum');

const Errors = Object.freeze({
    "RESOURCE_DOESNT_EXIST": {
        code: "030101",
        message_en: `The resource doesn't exist`,
        message_es: `Este recurso no existe`,
        system_message: `This resource doesn't exist`,
        httpErrorStatus: '404',
        type: ErrorTypes.APPLICATION
    },
    "ROLE_DOESNT_EXIST": {
        code: "010101",
        message_en: `This role doesn't exist`,
        message_es: `Este rol no existe`,
        system_message: `This role doesn't exist`,
        httpErrorStatus: '404',
        type: ErrorTypes.APPLICATION
    },
    "INVALID_CREDENTIALS": {
        code: "020101",
        message_en: `These credentials do not match our records`,
        message_es: `Estas credenciales no coinciden con nuestros registros`,
        system_message: `This user doesn't exist`,
        httpErrorStatus: '401',
        type: ErrorTypes.OPERATIONAL
    },
    "INTERNAL_ERROR": {
        code: "000000",
        message_en: `Server Internal Error`,
        message_es: `Error interno del servidor`,
        system_message: `NA`,
        httpErrorStatus: 'NA',
        type: ErrorTypes.RUNTIME
    }
});

module.exports = Errors;