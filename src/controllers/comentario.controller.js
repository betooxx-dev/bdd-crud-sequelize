import Comentario from "../models/comentario.model.js";

export const agregarComentario = async (req, res) => {
  try {
    const { contenido, publicacionID, usuarioID } = req.body;
    const comentario = await Comentario.create({
      contenido,
      publicacionID,
      usuarioID,
    });
    res.status(201).json(comentario);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar comentario" });
  }
};

export const modificarComentario = async (req, res) => {
  const { contenido } = req.body;
  try {
    const comentario = await Comentario.update(
      { contenido },
      { where: { id: req.params.id } }
    );
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ message: "Error al modificar comentario" });
  }
};

export const buscarComentariosPorPublicacion = async (req, res) => {
  try {
    const { publicacionID } = req.body;
    const comentarios = await Comentario.findAll({ where: { publicacionID } });
    res.json(comentarios);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al buscar comentarios por publicación" });
  }
};

export const borrarComentarioPorFechaYPublicacion = async (req, res) => {
  const { fecha, publicacionID } = req.body;
  try {
    const result = await Comentario.destroy({
      where: { fechaCreacion: fecha, publicacionID },
    });
    res.json({ message: `${result} comentarios eliminados` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al borrar comentarios por fecha y publicación" });
  }
};
