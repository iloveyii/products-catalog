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
        this.state = {
            name: '',
            price: '',
            errors: {}
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleClickPush = this.handleClickPush.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value});
        if(!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({errors})
        }
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const { ProductCreateAction } = this.props ;
        // validation
        let errors = {};
        if(this.state.name === '') errors.name = "Can't be empty";
        if(this.state.price === '') errors.price = "Can't be empty";
        this.setState({errors});

        if( Object.keys(errors).length === 0) {
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
                        <div className="three fields">
                            <div className={`field${this.state.errors.name ? ' error' : ''}`}>
                                <input type="text" name="name" onChange={this.handleChange} placeholder="Enter product name" ref={nameInput => this.nameInput = nameInput} />
                                <span style={{display: this.state.errors.name ? 'inline-block' : 'none'}} className="invalid-feedback">{this.state.errors.name}</span>
                            </div>
                            <div className={`field${this.state.errors.price ? ' error' : ''}`}>
                                <input type="text" name="price" onChange={this.handleChange}  placeholder="Enter product price" ref={priceInput => this.priceInput = priceInput} />
                                <span style={{display: this.state.errors.price ? 'inline-block' : 'none'}} className="invalid-feedback">{this.state.errors.price}</span>
                            </div>
                            <div className="field">
                                <button className="ui primary button">Add</button>
                                <button onClick={this.handleClickPush} className="ui pink button">Push to login</button>
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