const logger = require('../../http/startup/logger');
const bcryptjs = require('bcryptjs');

module.exports.stringAndHashMatch = async (value, hash, type) => {
    logger.debug(`Comparing string with hash for the ${type}`)
    const matching = await bcryptjs.compare(value, hash);
    
    return matching;
};