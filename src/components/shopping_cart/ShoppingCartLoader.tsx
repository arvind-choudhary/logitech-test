import * as React from 'react';
import { useShoppingCartContext } from './useShoppingCartContext';
import ShoppingCartFooterSection from './ShoppingCartFooter';
import ShoppingCartHeader from './ShoppingCartHeader';
import ShoppingCartList from './ShoppingCartList';

export function ShoopingCartContent () {
    const { isLoading } = useShoppingCartContext();
    return (
        <div className='flex w-full h-full'>
            
   
            <div className='grid w-full px-10 py-10'>
            
                <ShoppingCartHeader />
                {
                    isLoading ? (
                        <div className='w-full flex place-content-center font-bold'>
                            Loading...
                        </div>
                    ) : (
                        <>
                            <ShoppingCartList />
                            <ShoppingCartFooterSection />
                        </>
                    )
                }
                
            </div>
        </div>
    );
}
