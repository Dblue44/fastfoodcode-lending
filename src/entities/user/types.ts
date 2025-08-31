import {z} from "zod";

export const userStoreSchema = z.object({
  showIntro: z.boolean(),
})

export type UserStore = z.infer<typeof userStoreSchema>
