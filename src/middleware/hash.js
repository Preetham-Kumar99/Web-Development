const bcrypt = require('bcrypt');

const {systemConfig} = require('../configs')

let hash = async function (password){
    const salt = await bcrypt.gensalt(systemConfig.salt)
    const hashed = await bcrypt.hash(password, salt);
    return hashed
}

module.exports = {
    hash
}