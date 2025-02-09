'use client';
import React, { useState } from 'react';
import { UploadField } from './upload-field';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '@/components/shared/form-input';
import { createProjectSchema, TCreateProjectSchema } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui';
import { useCreateProject } from '@/hooks';

interface Props {
  onClose: () => void;
}

export const DialogMainBlock: React.FC<Props> = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { createProject, isPending: isPendingCreate } = useCreateProject();

  const form = useForm<TCreateProjectSchema>({
    resolver: zodResolver(createProjectSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: TCreateProjectSchema) => {
    const formData = new FormData();
    formData.append('name', data.name);
    if (selectedFile) formData.append('image', selectedFile);
    await createProject(formData);
    onClose();
  };

  return (
    <FormProvider {...form}>
      <form className="grid gap-4 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          required
          id="projectName"
          placeholder="Название проекта"
          isClearable
          size="lg"
        />
        <UploadField selectedFile={selectedFile} onChange={setSelectedFile} />
        <Button type="submit" className="py-7 mb-10 text-lg" isLoading={isPendingCreate}>
          Создать проект
        </Button>
      </form>
    </FormProvider>
  );
};
