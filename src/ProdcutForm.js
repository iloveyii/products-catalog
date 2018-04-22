import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired
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
        console.log('In handle on submit');
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-center">
                    <h1 className="col-12">Products Catalog</h1>
                    <form className="form-inline justify-content-center" onSubmit={this.handleOnSubmit}>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Enter product name" ref={} />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" placeholder="Enter product price"/>
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