import { faker } from '@faker-js/faker';

export function generateProduct() {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price({ min: 5000, max: 20000, dec: 0, symbol: '$'}),
    stock: faker.number.int({min: 0, max: 100}),
    description: faker.commerce.productDescription()
  };
}

export function generateProducts(count = 10) {
  const safeCount = Math.max(0, Math.min(10000, Number(count) || 0));
  return Array.from({ length: safeCount }, () => generateProduct());
}
