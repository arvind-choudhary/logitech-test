import React, { useMemo } from "react";
import { useShoppingCartContext } from "./useShoppingCartContext";

export default function ShoppingCartHeader() {
    const { productsInCart } = useShoppingCartContext();
    const totalPrice = useMemo(() => productsInCart?.reduce((acc, item) => acc + item.price, 0) || 0, [productsInCart]);
    return (
        <header className="flex place-content-between pb-5 border-b-2 border-gray-300">
            <div className="right__section">
                <h2 className="text-3xl font-bold">Shopping Cart</h2>
                <div>Cart contain {productsInCart?.length ?? 0} products</div>
            </div>
            <div className="left__section">
                <div className="inline-flex place-content-end text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
            </div>
        </header>
    );
}