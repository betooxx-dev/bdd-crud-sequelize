import express from "express";
import {
    agregarComentario,
    modificarComentario,
    buscarComentariosPorPublicacion,
    borrarComentarioPorFechaYPublicacion,
  } from '../controllers/comentario.controller.js';

const router = express.Router();

router.post('/comentarios', agregarComentario);
router.put('/comentarios/:id', modificarComentario);
router.post('/comentarios-publicacion', buscarComentariosPorPublicacion);
router.delete('/comentarios', borrarComentarioPorFechaYPublicacion);

export default router;