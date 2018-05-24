import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ProductCreateAction, ProductUpdateAction, ProductDeleteAction } from '../../Actions/ProductActions';


const propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    ProductCreateAction : PropTypes.func.isRequired
};

const defaultProps = {
    name : '',
    price: 0
};

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleClickPush = this.handleClickPush.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const { ProductCreateAction } = this.props ;
        if( this.nameInput.value.length && this.priceInput.value.length ) {
            ProductCreateAction({name: this.nameInput.value, price: this.priceInput.value});

            this.nameInput.value = '';
            this.priceInput.value = '';
            this.nameInput.focus();
        }
    }

    handleClickPush(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-center">
                    <form className="ui form" onSubmit={this.handleOnSubmit}>
                        <div className="field">
                            <div className="three fields">
                                <div className="field">
                                    <input type="text" className="form-control" placeholder="Enter product name" ref={nameInput => this.nameInput = nameInput} />
                                </div>
                                <div className="field">
                                    <input type="text" className="form-control" placeholder="Enter product price" ref={priceInput => this.priceInput = priceInput} />
                                </div>
                                <div className="field">
                                    <button className="ui primary button">Add</button>
                                    <button onClick={this.handleClickPush} className="ui pink button">Push to login</button>
                                </div>
                            </div>
                        </div>

                    </form>
                    <hr/>
                </div>
            </div>
        );
    }
}

ProductForm.propTypes = propTypes;
ProductForm.defaultProps = defaultProps;

const mapStateToProps = state => (
    {

    }
);
const mapActionsToProps = {
    ProductCreateAction,
    ProductUpdateAction,
    ProductDeleteAction
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(ProductForm));