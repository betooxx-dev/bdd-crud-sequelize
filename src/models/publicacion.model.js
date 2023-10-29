import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../db.js";

class Publicacion extends Model {}

Publicacion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    },
    fechaCreacion: {
        type: DataTypes.DATE
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
    modelName: 'publicaciones', 
});

await Publicacion.sync();

export default Publicacion;
