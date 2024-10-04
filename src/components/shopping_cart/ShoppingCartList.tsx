import * as React from 'react';
import { Card } from '../card/Card';
import { RenderListOfItems } from '../renderListOfItem/RenderListOfItems';
import { useShoppingCartContext } from './useShoppingCartContext';
import Button from '../_atoms/button';

export default function ShoppingCartList () {
    const { productsInCart, onRemoveProduct } = useShoppingCartContext()
    return (
        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
            <RenderListOfItems
                listofItems={productsInCart}
                callback={(product) => (
                    <Card className='md:min-w-full'>
                        <Card.Header>
                            <p className='font-bold text-wrap'>{product.title}</p>
                        </Card.Header>
                        <Card.Body>
                            <p className='font-light text-sm'>${product.price?.toFixed(2) ?? 0}</p>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => onRemoveProduct(product.id)}>Remove</Button>
                        </Card.Footer>
                    </Card>
                )}
            />
        </section>
    );
}
