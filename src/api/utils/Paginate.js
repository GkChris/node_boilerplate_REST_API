function paginate(dataArray, currentPageNumber, itemsPerPage){
    
    try { 
        validate_args(dataArray, currentPageNumber, itemsPerPage)
    
        const firstItemPosition = currentPageNumber !== 1 ? ( currentPageNumber - 1 ) * itemsPerPage : 0
        const endingPosition = currentPageNumber !== 1 ? currentPageNumber * itemsPerPage : itemsPerPage
        
        return dataArray.slice(firstItemPosition, endingPosition)

    } catch ( error ) {
        throw new Error(error);
    }
}


const validate_args = (dataArray, currentPageNumber, itemsPerPage) => {

    if ( !Array.isArray(dataArray) ) {
        throw new Error('dataArray argument has to be an array') 
    }

    if ( typeof currentPageNumber != 'number' || currentPageNumber < 1 ) {
        throw new Error('currentPageNumber argument has to be a positive number greater than zero') 
    }

    if ( typeof itemsPerPage != 'number' || itemsPerPage < 1 ) {
        throw new Error('itemsPerPage argument has to be a positive number greater than zero') 
    }

    return;

}

module.exports = {paginate}