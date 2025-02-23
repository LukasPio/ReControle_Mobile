import { string, z } from "zod"

export const UserLoginSchema = z.object({
    email: z.string().email("E-mail inválido. Tente novamente."),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres.")
})

export type UserLoginRequestDTO = z.infer<typeof UserLoginSchema>;