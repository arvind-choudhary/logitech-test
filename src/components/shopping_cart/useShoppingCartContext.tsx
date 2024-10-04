import React, { ComponentProps, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import { IShoppingCartApiResponse, IShoppingCartContext, ICartInfo, ICartProduct } from './shoppingCartTypes'

interface ShoppingCartHeaderProps extends ComponentProps<'div'>{}

const ShoppingCartContext = createContext<IShoppingCartContext>({
    cartData: [],
    isError: false,
    isLoading: false,
    productsInCart: [],
    onResetCart: () => {},
    onRemoveProduct: () => {},
});

const url = 'https://dummyjson.com/carts';

export const ShoppingCartContextProvider = (props: ShoppingCartHeaderProps) => {
    const { isLoading, data, isError } = useFetch<IShoppingCartApiResponse>(url);
    const [cartData, setCartData] = useState<ICartInfo[]>([]);
    const [productsInCart, setProductsInCart] = useState<ICartProduct[]>([]);

    const onRemoveProduct = useCallback((id: number) => {
        setProductsInCart(prevState => prevState.filter(product => product.id !== id));
    }, [])

    const onResetCart = useCallback(() => {
        setProductsInCart([]);
    }, [])

    useEffect(() => {
        if (!isLoading && !isError) {
            if (data?.carts) {
                setCartData(data.carts);
                setProductsInCart(cartData.flatMap((cart: ICartInfo) => cart.products) || []);
            }
        }
    }, [data, isLoading, isError])


    
    return <ShoppingCartContext.Provider value={{
        cartData,
        isError,
        isLoading,
        productsInCart,
        onResetCart,
        onRemoveProduct
    }}>{props.children}</ShoppingCartContext.Provider>;

}

export const useShoppingCartContext = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('ShoppingCartContext must be used with ShoppingCartContextProvider!');
    }
    return context;
}