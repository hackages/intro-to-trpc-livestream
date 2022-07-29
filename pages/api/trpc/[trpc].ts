import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { todosRoutes } from '../../../routers/todos.routes';

// todos.all => query 
// todos.edit => mutation
export const appRouter = trpc.router().merge('todos.', todosRoutes)

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});