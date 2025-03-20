import { Router } from 'express';
import { getAllPeliculas, getPeliculaById } from '../controllers/peliculas.controllers.js';

const router = Router();

router.get('/peliculas', getAllPeliculas);
router.get('/peliculas/:id', getPeliculaById);

export default router;