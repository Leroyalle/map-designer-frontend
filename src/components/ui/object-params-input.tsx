'use client';
import * as React from 'react';
import { cn } from '@/lib';
interface Props extends React.ComponentProps<'input'> {
  mark?: boolean;
}

export const ObjectParamsInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, mark = true, ...props }, ref) => {
    const [value, setValue] = React.useState('');
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className={cn('flex relative', className)}>
        <input
          className="w-full rounded-[5px] border-[1.5px] py-2 px-4 text-sm border-[#5A5A5A] font-medium bg-[#373737] text-background placeholder:text-[#5c5c5c] outline-0"
          value={value}
          onChange={onChangeValue}
          type={type}
          {...props}
          ref={ref}
        />

        {mark && value === '' && (
          <span className="absolute right-3 top-1/4 text-[#E53B35] select-none text-xl font-medium">
            *
          </span>
        )}
      </div>
    );
  },
);
ObjectParamsInput.displayName = 'Input';
