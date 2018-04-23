import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    product : PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        isNew: PropTypes.bool.isRequired
    }).isRequired
};

const defaultProps = {
    product: {
        name : '',
        price: '',
        isNew: true
    }
};

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="form-inline" onSubmit={this.handleOnSubmit}>
                <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Enter product name" defaultValue={product.name} ref={nameInput => this.nameInput = nameInput} />
                </div>
                <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Enter product price" defaultValue={product.price} ref={priceInput => this.priceInput = priceInput} />
                </div>
                <div className="col-sm text-right">
                    <button onClick={this.onSave} className="btn btn-primary mx-sm-3 mb-2">Save</button>
                    <button onClick={this.onCancel} className="btn btn-warn mx-sm-3 mb-2">Cancel</button>
                </div>
            </div>
        );
    }
}

Form.defaultProps = defaultProps;

export default Form;