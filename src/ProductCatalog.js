import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductForm from './ProdcutForm';

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
    }

    render() {
        return(
            <div>
                <ProductForm />
            </div>

        );
    }
}

ProductCatalog.defaultProps = defaultProps;

export default ProductCatalog;


