import React from 'react';
import { ShoppingCartContextProvider } from './useShoppingCartContext';
import { ShoopingCartContent } from './ShoppingCartLoader';



export default function ShoppingCart () {
    return (
        <ShoppingCartContextProvider>
            <div className='grid px-10 py-10'>
                <ShoopingCartContent />
            </div>
        </ShoppingCartContextProvider>
    );
}