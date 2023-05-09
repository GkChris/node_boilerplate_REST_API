function paginate(data, currentPage, pageSize){
    
    try { 
        validate_args(data, currentPage, pageSize)
    
        const firstItemPosition = currentPage !== 1 ? ( currentPage - 1 ) * pageSize : 0
        const endingPosition = currentPage !== 1 ? currentPage * pageSize : pageSize
        
        return data.slice(firstItemPosition, endingPosition)

    } catch ( error ) {
        throw new Error(error);
    }
}


const validate_args = (data, currentPage, pageSize) => {

    if ( !Array.isArray(data) ) {
        throw new Error('data argument has to be an array') 
    }

    if ( typeof currentPage != 'number' || currentPage < 1 ) {
        throw new Error('currentPage argument has to be a positive number greater than zero') 
    }

    if ( typeof pageSize != 'number' || pageSize < 1 ) {
        throw new Error('pageSize argument has to be a positive number greater than zero') 
    }

    return;

}

module.exports = {paginate}