import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../db.js";

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'usuarios', 
});

await Usuario.sync();

export default Usuario;
