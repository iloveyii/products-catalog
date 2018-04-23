import React, { Component } from 'react';


class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isEdit:false};
        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onEdit() {
        this.setState({isEdit: true});
    }

    onCancel() {
        this.setState({isEdit:false});
    }

    onSave(event) {
        event.preventDefault();
        const { onUpdate } = this.props;
        const product = {name:this.nameInput.value, price: this.priceInput.value,i:this.props.i};
        console.log(product);
        onUpdate(product);
        this.setState({isEdit:false});
    }

    showFormControls() {
        const { onDelete } = this.props;
        return <div className="col-sm text-right">
            <button onClick={this.onEdit} className="btn btn-success mx-sm-3 mb-2">Edit</button>
            <button onClick={ ()=>onDelete(this.props.i) } className="btn btn-danger mx-sm-3 mb-2">Delete</button>
        </div>
    }



    render() {
        const { i, product } = this.props;
        return (
            this.state.isEdit
                ? (
                    <li className="list-group-item" key={i}>
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
                    </li>
                )
                : (
                    <li className="list-group-item" key={i}>
                        <div className="form-inline" onSubmit={this.handleOnSubmit}>
                        <div className="col-sm">{ product.name }</div>
                        <div className="col-sm">{product.price}</div>
                        { this.showFormControls() }
                        </div>
                    </li>
                )
        );
    }
}

export default ProductItem;