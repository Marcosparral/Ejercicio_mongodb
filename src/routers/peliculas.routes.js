import { Router } from 'express';
import { getAllPeliculas } from '../controllers/peliculas.controllers.js';

const router = Router();

router.get('/peliculas', getAllPeliculas);

export default router;