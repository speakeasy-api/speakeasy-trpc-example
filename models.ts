import { z } from "zod";

const DrinkType = z
  .enum(["NON_ALCOHOLIC", "BEER", "WINE", "SPIRIT", "OTHER"])
  .describe("The type of drink");
type DrinkType = z.infer<typeof DrinkType>;

export const ProductCode = z.string().describe("The product code of the drink");
export type ProductCode = z.infer<typeof ProductCode>;

export const DrinkSchema = z.object({
  name: z.string().describe("The name of the drink"),
  type: DrinkType,
  price: z.number().describe("The price of the drink"),
  stock: z.number().describe("The number of drinks in stock"),
  productCode: ProductCode,
  description: z.string().nullable().describe("A description of the drink"),
});

export type Drink = z.infer<typeof DrinkSchema>;
