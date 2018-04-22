import React, { Component } from 'react';

import ProductForm from './ProdcutForm';
import ProductList from './ProductList';

const defaultProps = {
    products: [
        {
            name: 'iPad',
            price: 75
        },
        {
            name: 'iPhone',
            price: 85
        }
    ]
};


class ProductCatalog extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.products);
        this.state = { products: this.props.products };
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    createProduct(product) {
        const { products }= this.state;
        products.push(product);
        this.setState({ products});

    }

    updateProduct(product) {

    }

    deleteProduct(product) {

    }

    render() {
        return(
            <div>
                <br/>
                <h1>Product Catalog</h1>
                <br/>
                <ProductForm createProduct = {this.createProduct} />
                <ProductList products={this.state.products} />
            </div>

        );
    }
}

ProductCatalog.defaultProps = defaultProps;

export default ProductCatalog;


