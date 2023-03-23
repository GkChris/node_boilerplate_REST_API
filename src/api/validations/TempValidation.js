const statusCodes = require('../../config').StatusCodes;
const validations = require('../../config').Validations;
const requests = require('../helpers/Requests');

function create_user(args){
    return new Promise(async(resolve, reject) => {

        if (
        
            !args?.email ||
        
            !args?.captchaToken 
        
        ) {
           
            reject(new Error(`${statusCodes.unprocessable_content.msg} | Missing required arguments`))
            
            return
        }



        if (
        
            args?.email?.length > validations.max_input_length || 
        
            args?.captchaToken?.length > validations.max_token_length
        
        ) {
    
            reject(new Error(`${statusCodes.unprocessable_content.msg} | Argument(s) failed to pass validation`))
    
            return
        }


        try {

            await requests.verifyCaptcha(args?.captchaToken)

        } catch ( error ) {

            reject(new Error(`${statusCodes.unprocessable_content.msg} | ${error}`))

            return

        }


        resolve(true);

        return

    })
}


module.exports = {
    create_user
}