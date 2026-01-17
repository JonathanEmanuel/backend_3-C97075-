export function bigString() {
  // Ajustar tamaño para demo (p.ej. 100k - 1MB)
  const chunk = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  return chunk.repeat(20000); // ~1.1MB aprox (según encoding)
}
