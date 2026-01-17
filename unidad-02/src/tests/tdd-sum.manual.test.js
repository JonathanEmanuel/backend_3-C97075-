function suma(...nums) {
  // Completar
  return null;
}

function assertEq(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}. Expected=${expected} Actual=${actual}`);
  }
}

try {
  // Test 1: parámetro no numérico
  assertEq(suma('a', 1), null, 'Debe devolver null si algún parámetro no es numérico');

  // Test 2: ningún parámetro
  assertEq(suma(), 0, 'Debe devolver 0 si no se pasó ningún parámetro');

  // Test 3: suma correcta
  assertEq(suma(1, 2), 3, 'Debe sumar correctamente');

  // Test 4: n parámetros
  assertEq(suma(1, 2, 3, 4), 10, 'Debe sumar n parámetros');

  console.log('\n✅ Todos los tests manuales pasaron.');
} catch (e) {
  console.log('\n❌ Falló un test manual:', e.message);
  process.exitCode = 1;
}
