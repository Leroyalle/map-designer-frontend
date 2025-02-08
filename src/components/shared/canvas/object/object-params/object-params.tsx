'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Card, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib';
import { ObjectBtns, ObjectParamsMain, ObjectSelector } from './components';
import { mapDescription, TMapDescSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  className?: string;
}

export const ObjectParams: React.FC<Props> = ({ className }) => {
  const [mapTypeValue, setMapTypeValue] = React.useState('');
  const [uploadLink, setUploadLink] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState('');

  const form = useForm<TMapDescSchema>({
    resolver: zodResolver(mapDescription),
    mode: 'onSubmit',
    defaultValues: {
      floor: undefined,
      desc: '',
      link: '',
      name: '',
      shortDesc: '',
      time: '',
      mapType: '',
    },
  });

  const errorMap = form.formState.errors.mapType;

  const onSubmit = (data: TMapDescSchema) => {
    console.log(data);
    setUploadLink(null);
    setFileName('');
    setMapTypeValue('');
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className={cn('bg-[#262626] max-w-[373px] border-0', className)}>
          <CardHeader className="text-background flex flex-row items-center justify-between">
            <CardTitle className="font-medium">О помещении</CardTitle>

            <ObjectSelector
              errorMap={errorMap}
              mapTypeValue={mapTypeValue}
              setMapTypeValue={setMapTypeValue}
            />
          </CardHeader>

          <ObjectParamsMain
            fileName={fileName}
            setFileName={setFileName}
            uploadLink={uploadLink}
            setUploadLink={setUploadLink}
          />

          <ObjectBtns />
        </Card>
      </form>
    </FormProvider>
  );
};
