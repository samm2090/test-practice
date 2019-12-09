//Accept params to create operational error or normal error with status code and message and maybe internal error

module.exports.ROLE_DOESNT_EXIST = (role) => {
    return {    
        id: 010101,
        message_en: `"${role}" role doesn't exist`,
        message_es: `el rol de "${role}" no existe`
    }
}

module.exports.createOperational = (code) => {
    
}