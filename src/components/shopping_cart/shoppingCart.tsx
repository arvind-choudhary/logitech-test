import React from 'react';
import ShoppingCartHeader from './ShoppingCartHeader';
import ShoppingCartList from './ShoppingCartList';
import ShoppingCartFooterSection from './ShoppingCartFooter';
import { ShoppingCartContextProvider, useShoppingCartContext } from './useShoppingCartContext';
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