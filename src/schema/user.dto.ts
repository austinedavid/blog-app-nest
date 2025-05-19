import {z} from "zod"

export const userInfo = z.object({
    name: z.string().min(5, {message:"please provide a valid name"}),
    email: z.string().email(),
    password:z.string(),
    gender: z.enum(["Male", "Female"]),
    hobbies:z.array(z.string())
})

export type userInfoType = z.infer< typeof userInfo>