import React, { forwardRef, useImperativeHandle, useRef, ComponentPropsWithRef } from 'react';
import { classes } from '../../utility/className';

export interface IButtonRef {}

export interface IButtonProps extends ComponentPropsWithRef<'button'> {}

const Button = forwardRef<IButtonRef, IButtonProps>(({ className = '', children, ...restProps }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () =>({
        focus() {
            buttonRef.current?.focus();
        },
    }));

  return (
    <button 
      className={classes('button', className)} 
      ref={buttonRef} 
      {...restProps}
    >
      {children}
    </button>
  );
})

export default Button;
