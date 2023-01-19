function test_actions(success){
    return new Promise(async(resolve, reject) => {
        if (success) resolve(true);
        else resolve(false)
    })
}


module.exports = {
    test_actions
}   