import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { z } from "zod";

import { ProductCode, DrinkSchema } from "./models";
import { db } from "./db";

const t = initTRPC.meta<OpenApiMeta>().create();

export const appRouter = t.router({
  findByProductCode: t.procedure
    .meta({
      openapi: {
        method: "GET",
        path: "/find",
        summary: "Find a drink by product code",
        description: "Pass the product code of the drink to search for",
        tags: ["drinks"],
        example: {
          request: {
            code: "1234",
          },
          response: {
            drink: {
              name: "Beer",
              type: "BEER",
              price: 5.0,
              stock: 10,
              productCode: "1234",
              description: "A nice cold beer",
            },
          },
        },
      },
    })
    .input(z.object({ code: ProductCode }))
    .output(z.object({ drink: DrinkSchema.optional() }))
    .query(async ({ input }) => {
      const drink = await db.drink.findByProductCode(input.code);
      return { drink: drink };
    }),
});
