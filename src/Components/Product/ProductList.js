import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { apiRequest } from '../../Actions/ProductActions';
import PropTypes from "prop-types";



class ProductList extends Component {
    constructor(props) {
        super(props);
        console.log('Component constructor ');
    }
    componentDidMount() {
        console.log('Component DID mount ');
        const { apiRequest } = this.props;
        setTimeout(()=>{apiRequest();}, 500);
    }

    render() {

        if( this.props.products === undefined ||  this.props.products.length < 1) {
            return <div>Loading...  </div>
        }

        return (
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
                                <ProductItem key={product._id} product={product} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    products : PropTypes.array.isRequired,
    apiRequest : PropTypes.func.isRequired,
};

const mapStateToProps = state => (
    {
        products: state.products
    }
);

const mapActionsToProps = {
    apiRequest
};
export default connect(mapStateToProps, mapActionsToProps)(ProductList);