const dotenv = require('dotenv');
dotenv.config();

const APP_CONFIGS = {
    JWT_SECRET: process.env.JWT_SECRET,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
}


module.exports = APP_CONFIGS;