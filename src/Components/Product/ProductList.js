import React, { Component } from 'react';


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: this.props.products};
    }

    showFormControls() {
        return <span className="float-right">
            <button className="btn btn-success mx-sm-3 mb-2">Edit</button>
            <button className="btn btn-danger mx-sm-3 mb-2">Delete</button>
        </span>
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-left">
                    <h2 className="col-12">Products List 02</h2>
                    <div>
                        <ul className="list-group">
                            {this.state.products.map( (product, i)  => (
                                <li className="list-group-item" key={i}> { product.name }  | {product.price} | { this.showFormControls() }  </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;