import z from 'zod';

export const mapDescription = z.object({
  mapType: z.string().optional(),
  name: z.string().min(2, { message: 'Не менее 2-х символов' }).max(20, {
    message: 'Не более 20 символов',
  }),
  shortDesc: z.string().optional(),
  desc: z.string().optional(),
  floor: z.number().optional(),
  time: z.string().optional(),
  link: z.string().optional(),
});

export type TMapDescSchema = z.infer<typeof mapDescription>;
