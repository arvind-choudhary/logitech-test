import cs from 'classnames';
import { twMerge } from 'tailwind-merge'

export const classes = (...classes: string[]) => twMerge(cs(...classes))