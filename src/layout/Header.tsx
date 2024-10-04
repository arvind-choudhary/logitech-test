import React,  { ComponentProps } from 'react';
import { classes } from '../utility/className';

export interface IHeaderProps extends ComponentProps<'div'> {
}

export function Header ({ children, className = '', ...restProps }: IHeaderProps) {
  return (
    <div className={classes('header', className)} {...restProps}>
      { children }
    </div>
  );
}
