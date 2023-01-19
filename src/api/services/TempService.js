function test_actions(success){
    return new Promise(async(resolve, reject) => {
        if (success) resolve(true);
        else reject(new Error('Failure'))
    })
}


module.exports = {
    test_actions
}   