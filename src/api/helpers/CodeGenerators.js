function six_digit(){
    const randomNumber = Math.floor(100000 + Math.random() * 900000)
    return randomNumber
}

module.exports = {
    six_digit
}