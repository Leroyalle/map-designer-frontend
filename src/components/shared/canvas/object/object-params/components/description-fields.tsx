import React from 'react';
import { FormInput, TextareaInput } from '@/components/shared';

export const DescriptionFields: React.FC = () => {
  return (
    <>
      {' '}
      <FormInput
        name="shortDesc"
        placeholder="Краткое описание (80 символов)"
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        maxLength={80}
      />
      <TextareaInput
        name="desc"
        placeholder="Подробное описание (240 символов)"
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        maxLength={240}
      />
    </>
  );
};
