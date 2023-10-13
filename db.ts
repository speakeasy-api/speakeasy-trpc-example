import type { Drink } from "./models";

// Example database
const drinks: Drink[] = [];

export const db = {
  drink: {
    findByProductCode: async (productCode: string) => {
      return drinks.find((drink) => drink.productCode === productCode);
    },
    findAll: async () => {
      return drinks;
    },
    create: async (drink: Drink) => {
      drinks.push(drink);
      return drink;
    },
  },
};
