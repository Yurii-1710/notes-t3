import { text } from "stream/consumers";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";


export const topicRouter = createTRPCRouter({
  
  getAll: protectedProcedure
  .query( async ({ ctx }) => {
    const topics = await ctx.db.topic.findMany({
      where: {
        user: {id: ctx.session.user.id},
      }
    })
    return topics ?? null
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.topic.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id
        }
      })
    })
})