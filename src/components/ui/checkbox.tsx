"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, style, ...props }, ref) => {
  // 인라인 스타일에서 크기 확인
  const inlineHeight = style?.height;
  const is14px = inlineHeight === '14px';
  
  // 체크박스 크기에 따라 체크 아이콘 크기 결정
  const hasForceSmall = className?.includes('!h-3 !w-3') || className?.includes('!min-h-[12px]');
  const isTiny = className?.includes('h-2 w-2');
  const isExtraSmall = className?.includes('h-2.5 w-2.5');
  const isSmall = className?.includes('h-3 w-3');
  
  const checkIconSize = is14px ? 'h-2.5 w-2.5' : hasForceSmall ? 'h-2 w-2' : isTiny ? 'h-1.5 w-1.5' : isExtraSmall ? 'h-2 w-2' : isSmall ? 'h-2.5 w-2.5' : 'h-4 w-4';
  const checkIconStyle = is14px ? { height: '10px', width: '10px' } : hasForceSmall ? { height: '8px', width: '8px' } : undefined;
  
  // 크기가 지정되지 않은 경우 기본 크기 적용
  const hasCustomSize = className?.includes('h-') && className?.includes('w-') || style?.height;
  const defaultSize = hasCustomSize ? '' : 'h-4 w-4';
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        defaultSize,
        className,
      )}
      style={style}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className={checkIconSize} style={checkIconStyle} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
