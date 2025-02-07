import z from 'zod';

export const codeSchema = z.object({
  code: z.string().min(6, { message: 'Не менее 6 символов' }).max(6, {
    message: 'Не более 6 символов',
  }),
});

export type TCodeSchema = z.infer<typeof codeSchema>;
