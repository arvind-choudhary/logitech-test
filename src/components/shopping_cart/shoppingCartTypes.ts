export type ICartProduct = {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedTotal": number,
    "thumbnail": string
}

export type ICartInfo = {
    "id": number,
    "products": ICartProduct[],
    "total": number,
    "discountedTotal": number,
    "userId": number,
    "totalProducts": number,
    "totalQuantity": number
}

export interface IApiData {
    "carts": ICartInfo[],
    "total": number,
    "skip": number,
    "limit": number
}

export interface IShoppingCartApiResponse extends IApiData {
    isError: boolean;
    isLoading: boolean;
};

export interface IShoppingCartContext {
    cartData: ICartInfo[];
    isLoading: boolean;
    isError: boolean;
    productsInCart: ICartProduct[],
    onResetCart: () => void,
    onRemoveProduct: (id: number) => void
}