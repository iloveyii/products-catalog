import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { apiRequest } from '../../Actions/ProductActions';

class Model {
    constructor(crud, data) {
        this.type = data.type;
        this.data = data;
        this.crud = crud;
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log('Clicked inside model')
    }

    display() {
        console.log('Display', this.data);
    }

    update() {
        console.log('Updating my self');
    }

    delete() {
        console.log('Deleting my self');
    }

    read() {
        console.log('Refreshing my self');
        // this.crud.read();
    }

    save() {
        console.log('Saving my self');
    }

    render(data) {
        console.log('I can render my self also and I know my css.');
        const markets = data.slice();
        let components = [];
        markets.forEach( m => {
            components.push(this.view(m));
        });
        console.log('components', components);
        return components;
    }

    view(data) {

        return (
            <div key={data.id} style={ {marginBottom: '20px'}}>
                <div style={ {width: '100%'}} className="ui card">
                    <div className="content">
                        <i className="left floated snowflake outline icon"></i>
                        <i className="right floated like icon"></i>
                        <i className="right floated star icon"></i>
                        <div className="left floated header">
                            {data.attributes.event.name}
                            <p></p>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated like">
                          <i className="compass icon"></i>
                            {data.attributes.event['start-time']}
                        </span>
                        <span className="right floated star">
                          <i className="star icon"></i>
                          <a onClick={this.onClick} href="#">Open</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class ProductList extends Component {

    componentDidMount() {
        const { apiRequest } = this.props;
        setTimeout(()=>{apiRequest();}, 1000);
    }

    componentWillMount() {
        console.log('Component will mount ');
        const crud = {
            create: '',
            read: this.props.apiRequest,
            update: '',
            delete: '',
            onClick: () => console.log('clicked')
        };
        const data = { id: 1000, name: 'IFK Goteborg v Djurgardens', type: 'CORRECT SCORE', value: "2 vs 3", status: 'waiting...'};
        this.model = new Model(crud, this.props.products);
        this.model.read();
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    render() {

        if( this.props.products === undefined ||  this.props.products.length < 1) {
            return <div>Loading...  </div>
        }
        return Array.isArray(this.props.products) && this.props.products[0].attributes ? this.model.render(this.props.products) :
        (
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