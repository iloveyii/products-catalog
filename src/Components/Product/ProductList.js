import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';


class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-left">
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                <div className="form-inline">
                                    <div className="col-sm"><strong>Item</strong></div>
                                    <div className="col-sm"><strong>Price</strong></div>
                                    <div className="col-sm text-center"><i className="fas fa-cogs"></i></div>
                                </div>

                            </li>
                            {this.props.products.map( product => (
                                <ProductItem key={product.i} product={product} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        products: state.products
    }
)
export default connect(mapStateToProps)(ProductList);