import { z } from "zod";

export const userscherma = z.object({
  id: z.string(),
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("email inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
});

export const loginSchema = userscherma.omit({
  name: true,
  telefone: true,
  id: true,
});

export const registerUserSchema = userscherma.omit({
  id: true,
});

export type UserData = z.infer<typeof userscherma>;
export type LoginData = z.infer<typeof loginSchema>;
export type RegisterUserData = z.infer<typeof registerUserSchema>;
