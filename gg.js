const Expections = require('./src/api/expections');

const ValidationFailureExpection = Expections.ValidationFailureExpection;
const TypeErrorExpection = Expections.TypeErrorExpection;

function ggg(){
    throw new ValidationFailureExpection('mongoose_ObjectId_validation | Missing id')
}

try { 
    ggg()
} catch ( error ) {
    console.log(error);
}