
const repo = require('../acceso_datos/personas_repo');

module.exports = {
    agregar: (persona) => repo.agregarPersona(persona),
    listar: () => repo.listarPersonas(),
    modificar: (index, persona) => repo.modificarPersona(index, persona),
    eliminar: (index) => repo.eliminarPersona(index)
};
