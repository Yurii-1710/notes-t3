import { z } from "zod";
import { todoInput } from "~/app/todos/types";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findMany({
      where: { userId: ctx.session.user.id }
    })
    return todos ?? null
  }),

  create: protectedProcedure
  .input(todoInput)
  .mutation(async ({ ctx, input }) => {
    return ctx.db.todo.create({
      data: {
        text: input,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        }
      }
    })
  }),

  delete: protectedProcedure
  .input(z.string())
  .mutation(async ({ ctx, input }) => {
    return ctx.db.todo.delete({
      where: {
        id: input
      }
    })
  }),

  toggle: protectedProcedure
  .input(z.object({
    id: z.string(),
    done: z.boolean(),
  }))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.todo.update({
      where: {
        id: input.id,
      },
      data: {
        done: input.done
      }
    })
  })

})