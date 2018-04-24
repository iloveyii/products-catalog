const ProductsReducer = (state=[], action) => {
    console.log('ProductsReducer Inside', action);
    let products = state;

    switch (action.type) {
        case 'Product.Create':
            console.log('inside reducer products: Product.Create :', state);

            products.push(action.payload.product);
            return products;

        case 'Product.Update':
            console.log('inside reducer products: Product.Update: ', state);
            // find the index of product that needs to be updated
            const index = products.findIndex( product => {
                return product.i == action.payload.product.i
            });

            if(index > -1) {
                products[index].name = action.payload.product.name;
                products[index].price = action.payload.product.price;
            }

            return products;

        case 'Product.Delete':
            const filteredProducts = products.filter( (product, key) => ( product.i == action.payload.product.i ? false : true) );
            localStorage.setItem('products', JSON.stringify(filteredProducts));
            return filteredProducts;

        default:
            return state;
    }
};

export default ProductsReducer;