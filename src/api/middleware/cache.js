const cache = require('../../config').CacheConfigurations;

module.exports = (req, res, next) => {

    if (req.method != 'GET') cache.clear()

    next()
  
};