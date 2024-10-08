import React, { ComponentProps, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import { IShoppingCartApiResponse, IShoppingCartContext, ICartInfo, ICartProduct } from './shoppingCartTypes'

interface ShoppingCartHeaderProps extends ComponentProps<'div'>{}

const ShoppingCartContext = createContext<IShoppingCartContext>({
    cartData: [],
    isError: false,
    isLoading: false,
    productsInCart: [],
    onResetCartProducts: () => {},
    onRemoveProduct: () => {},
});

const url = 'https://dummyjson.com/carts';

export const ShoppingCartContextProvider = (props: ShoppingCartHeaderProps) => {
    const { isLoading, data, isError } = useFetch<IShoppingCartApiResponse>(url);
    const [cartData, setCartData] = useState<ICartInfo[]>([]);
    const [productsInCart, setProductsInCart] = useState<ICartProduct[]>([]);

    const onRemoveProduct = useCallback((uniqueId: string) => {
        setProductsInCart(prevState => prevState.filter(product => product.uniqueId !== uniqueId));
    }, []);

    const onSetProductsFromCart = useCallback(() => {
        const normalizeProductData = cartData.map((cart) => { 
            return cart.products.map((product) => {
                product.uniqueId = `${cart.id}-${product.id}`
                return product;
            })
        }).flat();
        setProductsInCart(normalizeProductData|| []);
    }, [cartData])

    const onResetCartProducts = useCallback(() => onSetProductsFromCart(), [cartData])

    useEffect(() => {
        if (!isLoading && !isError) {
            if (data?.carts) {
                setCartData(data.carts);
                onSetProductsFromCart()
            }
        }
    }, [data, isLoading, isError])
    
    return <ShoppingCartContext.Provider value={{
        cartData,
        isError,
        isLoading,
        productsInCart,
        onResetCartProducts,
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