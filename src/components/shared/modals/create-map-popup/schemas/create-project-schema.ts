import { z } from 'zod';

export const createProjectSchema = z.object({
  name: z.string().min(1, { message: 'Не менее 1 символа' }).max(20, {
    message: 'Не более 20 символов',
  }),
});

export type TCreateProjectSchema = z.infer<typeof createProjectSchema>;
