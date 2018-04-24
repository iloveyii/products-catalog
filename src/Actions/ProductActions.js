export const ProductCreateAction = newProduct => {
    return {
        type: 'Product.Create',
        payload: {
            newProduct: newProduct
        }
    }
};

export const ProductUpdateAction = newProduct => {
    return {
        type: 'Product.Update',
        payload: {
            newProduct: newProduct
        }
    }
};

export const ProductDeleteAction = product => {
    console.log('Inside ProductDeleteAction', product);
    return {
        type: 'Product.Delete',
        payload: {
            product: product
        }
    }
};