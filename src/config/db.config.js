import mongoose from 'mongoose';
import { envs } from './envs.config.js';
import { DataBaseError } from '../errors/typeError.js';

const { db } = envs;

export const dbConnect = async () => {
    try {
        await mongoose.connect(db.uri);
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        throw new DataBaseError('Error al conectar a la base de datos', 500, error);
        

    }
};