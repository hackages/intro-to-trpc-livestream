import * as trpc from '@trpc/server';
import { z } from 'zod';

export const todosRoutes = trpc.router()
    // api/trpc/value
  .query('one', {
    resolve(){}
  })
  .query('all', {
    input: z
      .object({
        text: z.string().nullish(),
        name: z.string(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}-${input?.name}`,
      };
    },
  });

