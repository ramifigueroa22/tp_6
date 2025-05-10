
let personas = [];

module.exports = {
    agregarPersona: (persona) => { personas.push(persona); },
    listarPersonas: () => personas,
    modificarPersona: (index, nuevaPersona) => { personas[index] = nuevaPersona; },
    eliminarPersona: (index) => { personas.splice(index, 1); }
};
