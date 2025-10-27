require('dotenv').config();

console.log('=== VARIABLES DE ENTORNO ===');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***EXISTE***' : 'NO DEFINIDA');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('============================');
