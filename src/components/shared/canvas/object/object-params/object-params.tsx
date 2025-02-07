'use client';

import React from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { Paperclip, X } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from '@/components/ui';
import { cn } from '@/lib';
import { GreenCheck } from './components';
import { FormInput, TextareaInput } from '@/components/shared';
import { mapDescription, TMapDescSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  className?: string;
}

const roomTypes = [
  { name: 'Библиотека' },
  { name: 'Гардеробная' },
  { name: 'Игровая зона' },
  { name: 'Квартира' },
  { name: 'Кладовка' },
  { name: 'Котельная' },
  { name: 'Лофт' },
  { name: 'Мастерская' },
  { name: 'Офис' },
  { name: 'Пентхаус' },
  { name: 'Подвал' },
  { name: 'Ресторан' },
  { name: 'Серверная' },
  { name: 'Склад' },
  { name: 'Спортивный зал' },
  { name: 'Торговый зал' },
  { name: 'Цех' },
  { name: 'Чердак' },
];

export const ObjectParams: React.FC<Props> = ({ className }) => {
  const [mapTypeValue, setMapTypeValue] = React.useState('');
  const [uploadLink, setUploadLink] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const form = useForm<TMapDescSchema>({
    resolver: zodResolver(mapDescription),
    mode: 'onSubmit',
    defaultValues: {
      floor: 1,
      desc: '',
      link: '',
      name: '',
      shortDesc: '',
      time: '',
      mapType: '',
    },
  });

  const onSubmit = (data: TMapDescSchema) => {
    console.log(data);
    setMapTypeValue('');
    // form.reset();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    setFileName(file.name);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadLink(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className={cn('bg-[#262626] max-w-[373px] border-0', className)}>
          <CardHeader className="text-background flex flex-row items-center justify-between">
            <CardTitle className="font-medium">О помещении</CardTitle>

            <Controller
              name="mapType"
              defaultValue="Тип помещения"
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setMapTypeValue(value);
                  }}
                  value={mapTypeValue}>
                  <SelectTrigger className="bg-[#373737] max-w-[50%] rounded-[5px] select-none focus:outline-0 border-none focus:ring-0 rouded-[5px] w-[220px]">
                    <SelectValue placeholder="Тип помещения" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#373737] text-background border-0 rounded-[5px]">
                    {roomTypes.map((place, id) => (
                      <SelectItem
                        key={id}
                        value={place.name}
                        onClick={() => field.onChange(place.name)}
                        className="rounded-[5px] focus:bg-[#505050] focus:text-background">
                        {place.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormInput name="name" placeholder="Название" maxLength={40} />

            <div className="text-background bg-[#373737] border-[#5A5A5A] border-dashed border-2 rounded-sm p-3">
              {uploadLink ? (
                <div className="flex gap-x-[10px]">
                  <div className="rounded-full w-8 h-8 bg-[#5A5A5A] flex items-center justify-center flex-shrink-0">
                    <Paperclip size={16} />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <span>Вложение</span>
                    <Typography className="text-[#2196F3]">{fileName}</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <GreenCheck />
                    <X
                      className="cursor-pointer text-end"
                      size={21}
                      onClick={() => setUploadLink('')}
                    />
                  </div>
                </div>
              ) : (
                <label htmlFor="imageUpload" className="flex gap-x-[10px] cursor-pointer">
                  <div className="rounded-full w-8 h-8 bg-[#5A5A5A] flex items-center justify-center flex-shrink-0">
                    <Paperclip size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span>Добавить логотип</span>
                    <Typography className="text-[#6e6e6e]">
                      Нажмите, чтобы загрузить файл. Максимальный размер - 5MB
                    </Typography>
                  </div>
                  <input
                    onChange={handleImageUpload}
                    id="imageUpload"
                    type="file"
                    accept=".png,.jpg,.pdf"
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <FormInput
              name="shortDesc"
              placeholder="Краткое описание (80 символов)"
              maxLength={80}
            />

            <TextareaInput
              name="desc"
              placeholder="Подробное описание (240 символов)"
              classNames={{
                inputWrapper: 'bg-[#373737] hover:bg-[#373737] ',
              }}
              maxLength={240}
            />

            <div className="flex justify-between gap-4">
              <FormInput name="floor" placeholder="Этаж" maxLength={2} />
              <FormInput maxLength={11} name="time" placeholder="Время" />
            </div>
            <FormInput name="link" placeholder="Ссылка на сайт" />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              className="text-background border-[1px] border-background">
              Закрыть
            </Button>
            <Button type="submit">Сохранить</Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};
