import {faker } from '@faker-js/faker';
import { generateProducts } from './generateProducts.js';

const ROLES = ['cliente', 'vendedor'];

export function generateUser() {
  const cant = faker.number.int({ min: 1, max: 7});
  const products = generateProducts( cant );

  return {
    id: faker.database.mongodbObjectId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement( ROLES ),
    age: faker.number.int({min: 18, max: 90}),
    icon: faker.internet.emoji(),
    avatar: faker.image.avatar(), 
    products
  }
}

export function generateUsers(count = 10) {
  const safeCount = Math.max(0, Math.min(10000, Number(count) || 0));
  return Array.from({ length: safeCount }, () => generateUser());
}
