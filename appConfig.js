const dotenv = require('dotenv');
dotenv.config();

const APP_CONFIGS = {
    JWT_SECRET: process.env.JWT_SECRET,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
    RESEND_API_KEY: process.env.RESEND_API_KEY
}


module.exports = APP_CONFIGS;