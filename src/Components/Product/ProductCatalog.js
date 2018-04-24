import React, { Component } from 'react';

import ProductForm from './ProdcutForm';
import ProductList from './ProductList';

class ProductCatalog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <br/>
                <h1>Product Catalog</h1>
                <br/>
                <ProductForm />
                <ProductList />
            </div>

        );
    }
}

export default ProductCatalog;


