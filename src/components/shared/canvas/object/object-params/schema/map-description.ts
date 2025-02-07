import z from 'zod';

export const mapDescription = z.object({
  mapType: z.string().min(3, { message: 'Выберите тип объекта' }),
  name: z.string().min(2, { message: 'Не менее 2-х символов' }),
  shortDesc: z.string().min(2, { message: 'Укажите краткое описание' }),
  desc: z.string().optional(),
  floor: z.coerce.number({ invalid_type_error: 'Поле должно быть числом' }).int(),
  time: z.string().min(9, { message: 'Укажите корректное время в формате XX:XX-XX:XX' }),
  link: z.string().optional(),
});

export type TMapDescSchema = z.infer<typeof mapDescription>;
