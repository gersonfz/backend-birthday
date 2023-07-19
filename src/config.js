import dotenv from 'dotenv';

dotenv.config();

export const ENV_CONFIG_PROCESS = {
    PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD
};