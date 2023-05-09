const Fuse = require('fuse.js')


function fuzzySearch(query, collection, keys, threshold){

    try {

        validate_args(query, collection, keys, threshold)
            
        const fuseOptions = {
            includeScore: true,
            threshold: threshold ? threshold : 0.6,
            keys: keys
        };

        const fuse = new Fuse(collection, fuseOptions);

        const results = fuse.search(query);

        results.sort((a, b) => b.score - a.score);
        
        const formattedResults = results.map((item) => {
            return item.item
        })

        return formattedResults;

    } catch ( error ) {
        throw new Error(error)
    }

}


const validate_args = (query, collection, keys, threshold) => {

    if ( typeof query != 'string' ) {
        throw new Error('query argument has to be a string') 
    }

    if ( !Array.isArray(collection) ) {
        throw new Error('data argument has to be an array of objects') 
    }

    if ( !Array.isArray(keys) ) {
        throw new Error('keys argument has to be an array of string') 
    }

    for ( let key of keys ) {
        if ( typeof key !== 'string' ) {
            throw new Error('keys argument has to be an array of string') 
        }
    }

    if ( threshold && ( typeof threshold != 'number' || threshold < 0 || threshold > 1 ) ) {
        throw new Error('threshold argument has to be a float number between 0 and 1') 
    }

    return;

}


module.exports = {fuzzySearch}