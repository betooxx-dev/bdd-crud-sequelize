import Publicacion from "../models/publicacion.model.js";

export const agregarPublicacion = async (req, res) => {
    try {
        const { titulo, contenido, usuarioID } = req.body;
        const publicacion = await Publicacion.create({ titulo, contenido, usuarioID });
        res.status(201).json(publicacion);
    } catch (error) {
        res.status(500).json({ message: "Error al agregar publicación" });
    }
};

export const modificarPublicacion = async (req, res) => {
    const { titulo, contenido } = req.body;
    try {
        const publicacion = await Publicacion.update({ titulo, contenido }, { where: { id: req.params.id } });
        res.json(publicacion);
    } catch (error) {
        res.status(500).json({ message: "Error al modificar publicación" });
    }
};

export const buscarPublicacionesPorUsuario = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({ where: { usuarioID: req.params.usuarioID } });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar publicaciones por usuario" });
    }
};

export const borrarPublicacionPorFecha = async (req, res) => {
    const { fecha } = req.body;
    try {
        const result = await Publicacion.destroy({ where: { fechaCreacion: fecha } });
        res.json({ message: `${result} publicaciones eliminadas` });
    } catch (error) {
        res.status(500).json({ message: "Error al borrar publicaciones por fecha" });
    }
};
