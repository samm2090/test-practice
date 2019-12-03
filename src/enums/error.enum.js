const ErrorTypes = require('./errorType.enum');

const Errors = Object.freeze({
    "ROLE_DOESNT_EXIST": {
        code: "010101",
        message_en: `This role doesn't exist`,
        message_es: `Este rol no existe`,
        system_message: `This role doesn't exist`,
        httpErrorStatus: '500',
        type: ErrorTypes.APPLICATION
    },
    "INVALID_CREDENTIALS": {
        code: "020101",
        message_en: `These credentials do not match our records`,
        message_es: `Estas credenciales no coinciden con nuestros registros`,
        system_message: `This user doesn't exist`,
        httpErrorStatus: '401',
        type: ErrorTypes.OPERATIONAL
    }
});

module.exports = Errors;