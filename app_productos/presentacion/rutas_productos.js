
const express = require('express');
const router = express.Router();
const service = require('../logica_negocio/productos_service');

router.get('/', (req, res) => res.json(service.listar()));
router.post('/', (req, res) => {
    service.agregar(req.body);
    res.status(201).send('Producto agregado');
});
router.put('/:index', (req, res) => {
    service.modificar(parseInt(req.params.index), req.body);
    res.send('Producto modificado');
});
router.delete('/:index', (req, res) => {
    service.eliminar(parseInt(req.params.index));
    res.send('Producto eliminado');
});

module.exports = router;
