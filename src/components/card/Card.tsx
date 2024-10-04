import React, { ComponentProps } from 'react';
import { classes } from '../../utility/className';

export interface ICardProps extends ComponentProps<'div'> {}
export interface ICardHeaderProps extends ComponentProps<'div'> {}
export interface ICardBodyProps extends ComponentProps<'div'> {}
export interface ICardFooterProps extends ComponentProps<'div'> {}

export function Card ({ className = '', children, ...restProps }: ICardProps) {
  return (
    <div className={classes('card', className)} {...restProps}>
      {children}
    </div>
  );
}

Card.Header = ({ children, className = '', ...restProps}: ICardHeaderProps) => {
  return (
    <div className={classes("card-header", className)} {...restProps}>
      { children }
    </div>
  )
}

Card.Body = ({ children, className = '', ...restProps}: ICardBodyProps) => {
    return (
      <div className={classes("card-body", className)} {...restProps}>
        { children }
      </div>
    )
}

Card.Footer = ({ children, className = '', ...restProps}: ICardFooterProps) => {
    return (
      <div className={classes("card-footer", className)} {...restProps}>
        { children }
      </div>
    )
}