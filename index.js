// Importación de las librerías
const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue.bold('=== COMPROBACIÓN DE PAQUETES ===\n'));

// --- PRUEBA 1: Paquete 'validator' ---
const emailValido = 'usuario@dominio.com';
const emailInvalido = 'usuario-dominio-com';

console.log(chalk.yellow('1. Probando el paquete "validator":'));
console.log(`¿Es "${emailValido}" un email válido?:`, validator.isEmail(emailValido));
console.log(`¿Es "${emailInvalido}" un email válido?:`, validator.isEmail(emailInvalido));

// --- PRUEBA 2: Paquete 'chalk' ---
console.log('\n' + chalk.yellow('2. Probando el paquete "chalk":'));
console.log(chalk.green.bold('✔ Exito: El paquete chalk está dando formato al texto correctamente.'));
console.log(chalk.red.underline('✖ Ejemplo de alerta visual en formato rojo subrayado.'));