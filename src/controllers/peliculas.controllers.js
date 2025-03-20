

import { getAllPeliculasServices } from '../services/peliculas.services.js';

export const getAllPeliculas = async (req, res, netx) => {
    try {
        const peliculas = await getAllPeliculasServices();

        console.log(peliculas);

        if(peliculas.length === 0 || peliculas === null) {
            throw new NotFoundError(
                'No se encontraron peliculas', 
                'No se encontraron peliculas en la base de datos');
        };
        
        res.status(200).json({
            message: 'Peliculas encontradas con exito',
            statusCode: 200,
            data: peliculas
        });
    } catch (error) {
        netx(error);
    };
};

export const getPeliculaById = async (req, res, netx) => {
    try {
        const { id } = req.params;
        const peliculas = await getPeliculasByIdServices(id);

        console.log(peliculas);

        res.status(200).json({
            message: `Pelicula con el id: ${id} encontrada con exito`,
            statusCode: 200,
            data: peliculas,
        })
    } catch (error) {
        netx(error);
    };
};

export const createPeliculas = async (req, res, netx) => {
    try {
        const dataPelicula = req.body;
        const peliculas = await createPeliculasServices(dataPelicula);

        res.status(201).json({
            message: `Pelicula creada con exito`,
            statusCode: 200,
            data: peliculas,
        })
    } catch (error) {
        netx(error);
        
    }
}