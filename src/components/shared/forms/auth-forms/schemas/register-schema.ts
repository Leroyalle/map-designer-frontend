import z from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Не менее 1 символа' })
    .max(20, { message: 'Не более 20 символов' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  password: z.string().min(8, { message: 'Не менее 8 символов' }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
