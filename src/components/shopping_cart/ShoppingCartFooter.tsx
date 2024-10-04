import * as React from 'react';
import Button from '../_atoms/button';
import { useShoppingCartContext } from './useShoppingCartContext';

export default function ShoppingCartFooterSection () {
    const { onResetCart} = useShoppingCartContext()
    return (
        <footer className='flex place-items-start py-10 mt-5'>
            <Button className='w-full' onClick={onResetCart}>Reset</Button>
        </footer>
    );
}
