import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../db.js";

class Comentario extends Model {}

Comentario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido: {
        type: DataTypes.STRING
    },
    fechaCreacion: {
        type: DataTypes.DATE
    },
    publicacionID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'publicaciones',
            key: 'id'
        }
    },
    usuarioID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'comentarios', 
});

await Comentario.sync();

export default Comentario;
