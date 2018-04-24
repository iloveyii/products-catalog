
const ProductsReducer = (state=[], action) => {
    let products = state.slice(0);

    switch (action.type) {
        case 'Product.Create':
            const lastProduct = products[products.length - 1];
            const productArray = [{...action.payload.product, i : lastProduct.i + 1}];
            const productAdded = products.concat(productArray);
            localStorage.setItem('products', JSON.stringify(productAdded));

            return productAdded;

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

            localStorage.setItem('products', JSON.stringify(products));
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