import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Введите корректный email' }),
  password: z.string().min(8, { message: 'Не менее 8 символов' }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
