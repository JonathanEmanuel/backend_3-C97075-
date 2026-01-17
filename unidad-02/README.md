# Backend III - Clase 02

## Requisitos
- Node.js 18+ (recomendado 20+)

## Instalación
```bash
npm install
cp .env.example .env
npm run dev
```

## Endpoints previstos
- `GET /health` → sanity check
- `GET /test/bigstring` → respuesta grande (para medir compresión)
- `GET /api/users?count=100` → usuarios mock (faker)

## Tests manuales (TDD sin framework)
- Login TDD:
```bash
npm run test:tdd:login
```
- Suma TDD:
```bash
npm run test:tdd:sum
```

> Nota: estos tests son "manuales" para enseñar el ciclo TDD. Luego pueden migrarse a Jest/Vitest.

https://jestjs.io