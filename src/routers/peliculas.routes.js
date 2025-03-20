import { Router } from 'express';
import { getAllPeliculas, getPeliculaById, createPeliculas } from '../controllers/peliculas.controllers.js';

const router = Router();

router.get('/peliculas', getAllPeliculas);
router.get('/peliculas/:id', getPeliculaById);
router.post('/peliculas', createPeliculas);

export default router;