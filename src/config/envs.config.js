import dotenv from 'dotenv';

dotenv.config();

export const envs = {
    port: process.env.PORT || 3020,
    db: {
        uri: process.env.MONGO_URI
    }
};