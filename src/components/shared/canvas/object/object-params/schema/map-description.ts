import z from 'zod';

export const mapDescription = z.object({
  mapType: z.string().optional(),
  name: z.string().min(2, { message: 'Не менее 2-х символов' }),
  shortDesc: z.string().optional(),
  desc: z.string().optional(),
  floor: z.coerce
    .number({ invalid_type_error: 'Поле должно быть числом', required_error: 'Age is required' })
    .safe()
    .optional(),
  time: z.string().optional(),
  link: z.string().optional(),
});

export type TMapDescSchema = z.infer<typeof mapDescription>;
