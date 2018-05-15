import React, { Component } from 'react';

import ProductForm from './ProductForm';
import ProductList from './ProductList';

class ProductCatalog extends Component {

    render() {
        return(
            <div style={Styles.container}>
                <h1 style={Styles.container.h1}>Product Catalog</h1>
                <ProductForm />
                <ProductList />
            </div>

        );
    }
}

const Styles = {
    container: {
        marginTop: '30px',
        h1: {
            marginBottom: '20px'
        }
    }
};

export default ProductCatalog;


