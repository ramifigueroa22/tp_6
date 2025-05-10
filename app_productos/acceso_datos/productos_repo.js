
let productos = [];

module.exports = {
    agregarProducto: (producto) => { productos.push(producto); },
    listarProductos: () => productos,
    modificarProducto: (index, nuevoProducto) => { productos[index] = nuevoProducto; },
    eliminarProducto: (index) => { productos.splice(index, 1); }
};
