
const express = require('express');
const router = express.Router();
const service = require('../logica_negocio/personas_service');

router.get('/', (req, res) => res.json(service.listar()));
router.post('/', (req, res) => {
    service.agregar(req.body);
    res.status(201).send('Persona agregada');
});
router.put('/:index', (req, res) => {
    service.modificar(parseInt(req.params.index), req.body);
    res.send('Persona modificada');
});
router.delete('/:index', (req, res) => {
    service.eliminar(parseInt(req.params.index));
    res.send('Persona eliminada');
});

module.exports = router;
