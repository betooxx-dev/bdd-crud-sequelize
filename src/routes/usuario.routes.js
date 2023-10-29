import express from "express";
import {
  agregarUsuario,
  buscarUsuarios,
  borrarUsuario,
} from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/usuario/:email", buscarUsuarios);
router.post("/usuario", agregarUsuario);
router.delete("/usuario/:id", borrarUsuario);

export default router;
