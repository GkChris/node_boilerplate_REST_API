function deepClone(object){
    return typeof object === "object" ? JSON.parse(JSON.stringify(object)) : object;
}

module.exports = deepClone;