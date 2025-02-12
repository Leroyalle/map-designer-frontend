'use client';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Card, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib';
import { ObjectBtns, ObjectParamsMain, ObjectSelector } from './components';
import { mapDescription, TMapDescSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCanvasSlice } from '@/store';
import { toast } from 'sonner';

interface Props {
  className?: string;
}

export const ObjectParams: React.FC<Props> = ({ className }) => {
  const [mapTypeValue, setMapTypeValue] = React.useState('');
  const [uploadLink, setUploadLink] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState('');
  const { canvas, selectedObject } = useCanvasSlice();

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

  useEffect(() => {
    if (selectedObject) {
      form.setValue('name', selectedObject.get('name') || '');
      form.setValue('desc', selectedObject.get('desc') || '');
      form.setValue('shortDesc', selectedObject.get('shortDesc') || '');
      form.setValue('time', selectedObject.get('time') || '');
      form.setValue('floor', selectedObject.get('floor') || undefined);
      form.setValue('link', selectedObject.get('link') || '');
    }
    console.log('SELECTED:', selectedObject);
  }, [selectedObject]);

  const errorMap = form.formState.errors.mapType;

  const onSubmit = (data: TMapDescSchema) => {
    console.log(data);
    selectedObject?.set({ ...data });
    toast.success(`Объект ${data.name} сохранен`);
  };

  const onClose = () => {
    canvas?.discardActiveObject();
    canvas?.renderAll();
  };

  if (!selectedObject) {
    return null;
  }

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
          <ObjectBtns onClose={onClose} />
        </Card>
      </form>
    </FormProvider>
  );
};
