import React, { Component } from 'react';

import ProductItem from './ProductItem';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onDelete(i) {
        console.log(i);
        const { deleteProduct } = this.props;
        deleteProduct(i);
    }

    onUpdate(product) {
        console.log(product);
        const { updateProduct } = this.props;
        updateProduct(product);
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-left">
                    <h2 className="col-12">Products List</h2>
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                <div className="form-inline">
                                    <div className="col-sm"><strong>Item</strong></div>
                                    <div className="col-sm"><strong>Price</strong></div>
                                    <div className="col-sm text-center"><i className="fas fa-cogs"></i></div>
                                </div>

                            </li>
                            {this.props.products.map( (product, i)  => (
                                <ProductItem key={i} i={i} product={product} onDelete={this.onDelete} onUpdate={this.onUpdate} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;