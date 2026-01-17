import { login } from '../services/login.service.js';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Interceptamos console
const originalLog = console.log;
let logs = [];
console.log = (msg) => {
  logs.push(String(msg));
  originalLog(msg);
};

function resetLogs() {
  logs = [];
}

// "Tests" manuales (sin framework) 
try {
  resetLogs();
  login('', '123');
  assert(logs.includes('No se ha proporcionado un usuario'), 'Test: usuario vacío');

  resetLogs();
  login('coderUser', '');
  assert(logs.includes('No se ha proporcionado un password'), 'Test: password vacío');

  resetLogs();
  login('otro', '123');
  assert(logs.includes('Credenciales incorrectas'), 'Test: usuario incorrecto');

  resetLogs();
  login('coderUser', '999');
  assert(logs.includes('Contraseña incorrecta'), 'Test: password incorrecto');

  resetLogs();
  login('coderUser', '123');
  assert(logs.includes('logueado'), 'Test: login correcto');

  originalLog('\n✅ Todos los tests manuales pasaron.');
} catch (e) {
  originalLog('\n❌ Falló un test manual:', e.message);
  process.exitCode = 1;
} finally {
  console.log = originalLog;
}
