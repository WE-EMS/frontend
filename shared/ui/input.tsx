import { ComponentProps } from 'react';

import { cn } from '@/shared';

function Input({ className, type, ...restProps }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'placeholder:text-main-green-500 placeholder:font-normal selection:bg-main-green-900 selection:text-main-green-100 dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]',
        'aria-invalid:text-point-red aria-invalid:outline-point-red',
        'bg-main-green-50 py-2.5 px-3 border-0 outline outline-main-green-500 focus:text-main-green-600 focus:font-normal active:text-main-green-800 font-medium text-main-green-800',
        'text-sm tracking-0.025',
        className,
      )}
      {...restProps}
    />
  );
}

export { Input };
