import z from 'zod';
import { loginSchema } from './login-schema';

export const registerSchema = loginSchema.merge(
  z.object({
    name: z
      .string()
      .min(1, { message: 'Не менее 1 символа' })
      .max(20, { message: 'Не более 20 символов' }),
  }),
);

export type TRegisterSchema = z.infer<typeof registerSchema>;
