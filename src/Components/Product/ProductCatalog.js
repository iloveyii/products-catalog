import React, { Component } from 'react';

import ProductForm from './ProdcutForm';
import ProductList from './ProductList';

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
        // localStorage.setItem('products', JSON.stringify(products));
    }

    updateProduct(product) {
        console.log('Update product' + product);
        let products = this.state.products;
        products = products.map((p, i) => {
            if(i == product.i) {
                p.name = product.name;
                p.price = product.price;
            }
            return p;
        });

        this.setState({products});
        // localStorage.setItem('products', JSON.stringify(products));
    }

    deleteProduct(i) {
        const { products } = this.state;
        const filteredProducts = products.filter( (product, key) => (key == i ? false : true) );
        this.setState({products: filteredProducts});
        // localStorage.setItem('products', JSON.stringify(filteredProducts));
    }

    render() {
        return(
            <div>
                <br/>
                <h1>Product Catalog</h1>
                <br/>
                <ProductForm />
                <ProductList deleteProduct={this.deleteProduct} updateProduct={this.updateProduct} />
            </div>

        );
    }
}

export default ProductCatalog;


