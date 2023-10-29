import Usuario from '../models/usuario.model.js';

export const agregarUsuario = async (req, res) => {
    
    try {
        console.log(req.body);
        const { nombre, email } = req.body;
        const usuario = await Usuario.create({ nombre, email });
        res.status(201).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al agregar usuario" });
    }
};

export const buscarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ where: { email: req.params.email } });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar usuarios por email" });
    }
};

export const borrarUsuario = async (req, res) => {
    try {
        const result = await Usuario.destroy({ where: { id: req.params.id } });
        res.json({ message: `${result} usuario eliminado` });
    } catch (error) {
        res.status(500).json({ message: "Error al borrar usuario" });
    }
};
