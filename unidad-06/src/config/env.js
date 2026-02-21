import dotenv from 'dotenv';

dotenv.config();

export const env = {
    PORT: process.env.PORT || 4000,
    JWT_SECRET: process.env.JWT_SECRET || 'dev_secret',
    URI_DB: process.env.URI_DB || 'mongodb://localhost:27017/db'
}