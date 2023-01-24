const cache = require('../../config').CacheConfigurations;

module.exports = (originalUrl, response) => {
    cache.set(originalUrl, response)
};