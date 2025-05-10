
const repo = require('../acceso_datos/productos_repo');

module.exports = {
    agregar: (producto) => repo.agregarProducto(producto),
    listar: () => repo.listarProductos(),
    modificar: (index, producto) => repo.modificarProducto(index, producto),
    eliminar: (index) => repo.eliminarProducto(index)
};
