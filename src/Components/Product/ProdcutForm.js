import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    createProduct : PropTypes.func.isRequired
};

const defaultProps = {
    name : '',
    price: 0
};

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const { createProduct } = this.props ;
        if( this.nameInput.value.length && this.priceInput.value.length ) {
            createProduct({name: this.nameInput.value, price: this.priceInput.value});
            this.nameInput.value = '';
            this.priceInput.value = '';
            this.nameInput.focus();
        }

    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-center">
                    <form className="form-inline justify-content-center" onSubmit={this.handleOnSubmit}>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Enter product name" ref={nameInput => this.nameInput = nameInput} />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" placeholder="Enter product price" ref={priceInput => this.priceInput = priceInput} />
                        </div>
                        <button className="btn btn-primary mb-2">Add</button>
                    </form>
                    <hr/>
                </div>
            </div>
        );
    }
}

ProductForm.propTypes = propTypes;
ProductForm.defaultProps = defaultProps;

export default ProductForm;