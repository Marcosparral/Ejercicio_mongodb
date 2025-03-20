import { NotFoundError } from '../errors/typeError.js';
import {  Peliculas } from '../model/Peliculas.model.js';

export const getAllPeliculas = async (req, res, netx) => {
    try {
        const peliculas = await Peliculas.find();

        if(peliculas.length === 0 || peliculas === null) {
            throw new NotFoundError(
                'No se encontraron peliculas', 
                'No se encontraron peliculas en la base de datos');
        } 
        
        res.status(200).json({
            message: 'Peliculas encontradas con exito',
            statusCode: 200,
            data: peliculas
        });
    } catch (error) {
        netx(error);
    }
};
            