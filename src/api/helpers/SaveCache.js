const cache = require('../../config').CacheConfig;

function set_cache(originalUrl, response){
    return cache.set(originalUrl, response)
}

module.exports = {
    set_cache
}