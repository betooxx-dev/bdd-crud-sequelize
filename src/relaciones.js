import  Usuario  from "./models/usuario.model.js";
import  Publicacion  from "./models/publicacion.model.js";
import  Comentario  from "./models/comentario.model.js";

const relaciones = () => {
  Usuario.hasMany(Publicacion);
  Usuario.hasMany(Comentario);

  Publicacion.hasMany(Comentario);
  Publicacion.belongsTo(Usuario);

  Comentario.belongsTo(Publicacion);
  Comentario.belongsTo(Usuario);
};

export default relaciones;
