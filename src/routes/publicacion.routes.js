import express from "express";
import {
    agregarPublicacion,
    modificarPublicacion,
    buscarPublicacionesPorUsuario,
    borrarPublicacionPorFecha,
  } from '../controllers/publicacion.controller.js';

const router = express.Router();

router.post('/publicaciones', agregarPublicacion);
router.put('/publicaciones/:id', modificarPublicacion);
router.get('/publicaciones/:usuarioID', buscarPublicacionesPorUsuario);
router.delete('/publicaciones', borrarPublicacionPorFecha);


export default router;