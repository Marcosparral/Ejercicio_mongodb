import mongoose from "mongoose";
import { envs } from "./envs.config.js";

const { db } = envs;

export const dbConnect = async () => {
    try {
        await mongoose.connect(db.uri);
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);

    }
};