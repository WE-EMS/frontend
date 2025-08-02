'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/shared/util/index';
import { IconCheck } from '../asset/icon';
import { ComponentProps } from 'react';

function Checkbox({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'cursor-pointer',

        // 상태 기반 스타일
        'data-[state=checked]:bg-main-green-700',
        'data-[state=checked]:border-main-green-700',

        // focus 상태 (접근성)
        'focus-visible:border-ring',
        'focus-visible:ring-ring/50',
        'focus-visible:ring-[3px]',

        // 에러 상태
        'aria-invalid:ring-destructive/20',
        'dark:aria-invalid:ring-destructive/40',
        'aria-invalid:border-destructive',

        // 레이아웃 및 스타일
        'size-4 shrink-0 rounded-[4px] border border-main-green-700',
        'transition-shadow outline-none',

        // 비활성 상태
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <IconCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
