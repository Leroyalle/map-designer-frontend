import { FormInput } from '@/components/shared';
import React from 'react';

export const TimeFloorInputs: React.FC = () => {
  return (
    <div className="flex justify-between gap-4">
      <FormInput
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        name="floor"
        placeholder="Этаж"
        maxLength={2}
      />
      <FormInput
        classNames={{
          inputWrapper: 'object-form-wrapper',
          input: 'object-form-input',
        }}
        maxLength={11}
        name="time"
        placeholder="Время"
      />
    </div>
  );
};
