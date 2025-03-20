import { NotFoundError, PeliculasError } from "../errors/typeError.js";
import { Peliculas } from "../model/Peliculas.model.js";

export const getAllPeliculasServices = async () => {
    try {
        const peliculas = await Peliculas.find();

        if (peliculas.length === 0 || peliculas === null) {
            throw new NotFoundError(
                'No se encontraron peliculas',
                'No se encontraron peliculas en la base de datos'
            );
        };

        return peliculas;
    } catch(error) {
        throw new PeliculasError('Error al intentar obtener todas las peliculas', 500, error);
    };
};

export const getPeliculasByIdServices = async (id) => {
    try {
        const peliculas = await Peliculas.findById(id);

        if (!peliculas) {
            throw new NotFoundError(
                `Pelicula con el id: ${id} no encontrada`,
                `No se encontro la pelicula con el id: ${id}`
            );
        };

        return peliculas;
    } catch(error) {
        throw new PeliculasError('Error al intentar obtener una pelicula por ID', 500, error);
    };
};