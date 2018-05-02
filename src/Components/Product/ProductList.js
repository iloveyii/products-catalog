import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { apiRequest } from '../../Actions/ProductActions';



class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { apiRequest } = this.props;
        setTimeout(()=>{apiRequest();}, 1000);

    }

    render() {
        if(this.props.products === undefined ||  this.props.products.length < 1) {
            return <div>Loading...</div>
        }
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-left">
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">
                                <div className="form-inline">
                                    <div className="col-4"><strong>Item</strong></div>
                                    <div className="col-4"><strong>Price</strong></div>
                                    <div className="col-4 text-center"><i className="fas fa-cogs"></i></div>
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
);

const mapActionsToProps = {
    apiRequest
};
export default connect(mapStateToProps, mapActionsToProps)(ProductList);