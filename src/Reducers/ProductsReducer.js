
const ProductsReducer = (state=[], action) => {
    let products = state.slice(0);

    switch (action.type) {
        case 'Product.Create':
            const lastProduct = products.length ? products[products.length - 1] : { i: 0};
            const productArray = [{...action.payload.product, i : lastProduct.i + 1}];
            const productAdded = products.concat(productArray);
            localStorage.setItem('products', JSON.stringify(productAdded));

            return productAdded;

        case 'Product.Read.Success':
            return action.payload.products.slice(0);

        case 'Product.Update':
            // find the index of product that needs to be updated
            const index = products.findIndex( product => {
                return product.i === action.payload.product.i
            });

            if(index > -1) {
                products[index].name = action.payload.product.name;
                products[index].price = action.payload.product.price;
            }

            localStorage.setItem('products', JSON.stringify(products));
            return products;

        case 'Product.Delete':
            const filteredProducts = products.filter( (product, key) => ( product.i === action.payload.product.i ? false : true) );
            localStorage.setItem('products', JSON.stringify(filteredProducts));
            return filteredProducts;

        default:
            return products;
    }
};

export default ProductsReducer;