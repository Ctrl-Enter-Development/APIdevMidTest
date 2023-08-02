const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/calcular', controllers.calcular);
router.post('/verificarPrimo', controllers.verificarPrimo);
router.post('/calcularFatorial', controllers.calcularFatorial);
router.post('/verificarPalindromo', controllers.verificarPalindromo);
router.post('/calcularTabela', controllers.calcularTabela);
router.post('/contarVogais', controllers.contarVogais);
router.post('/calcularMedia', controllers.calcularMedia); 
router.post('/calcularInvestimento', controllers.calcularInvestimento); 

module.exports = router;
