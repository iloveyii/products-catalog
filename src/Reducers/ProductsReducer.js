const ProductsReducer = (state=[], action) => {
    console.log('ProductsReducer Inside', action);
    switch (action.type) {
        case 'Product.Update':
            console.log('inside reducer products: ', state);
            return action.payload.product;
        case 'Product.Delete':
            console.log('Product.Delete', state);
            const products  = state;
            const filteredProducts = products.filter( (product, key) => (key == action.payload.product.i ? false : true) );
            localStorage.setItem('products', JSON.stringify(filteredProducts));
            console.log('filteredProducts', filteredProducts);
            console.log('inside reducer products: ', state);
            return filteredProducts;
        default:
            return state;
    }
};

export default ProductsReducer;