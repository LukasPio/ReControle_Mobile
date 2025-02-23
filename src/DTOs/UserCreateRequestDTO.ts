import { z } from "zod"

export const UserCreateSchema = z.object({
    name: z.string().min(1, "Nome não foi inserido."),
    email: z.string().email("E-mail inválido. Tente novamente."),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
    passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não conferem",
    path: ["passwordConfirm"], // Indica que o erro está no campo "passwordConfirm"
});

export type UserCreateRequestDTO = z.infer<typeof UserCreateSchema>;