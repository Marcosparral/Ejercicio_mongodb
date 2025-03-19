import mongoose, { Types } from "mongoose";


const Schema = mongoose.Schema;

const PeliculasSchema = new Schema({
    titulo: { type: String, required: true },
    director: { type: String, required: true },
    ano_estreno: { type: Number, required: true },
    duracion: { type: Number, required: true },
    puntaje_critica: { type: Types.Double, required: true },
    gano_oscar: { type: Boolean, required: true },
}, {versionKey: false, timestamps: false});

export const Peliculas = mongoose.model('Peliculas', PeliculasSchema);