import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import ProductCatalog from './Components/Product/ProductCatalog';
import Login from './Components/Product/Login';
import { UserUpdateAction } from './Actions/UserActions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update() {
        console.log(this.props, 'new user alex');
        this.props.UserUpdate('New User Alex');
    }
    render() {
        const { props } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className="ui container">
                    <div className="ui three item menu">
                        <br/>
                        <Link className="item" to="/products">Products</Link>
                        &nbsp;
                        <Link className="item" to="/login">Login</Link>
                    </div>
                    <Route path="/products" render={(props)=> (<ProductCatalog {...props} />) }/>
                    <Route path="/login" component={Login} />

                </div>

                <footer>
                    <hr/>
                </footer>
            </div>
        );
    }
}

/**
 * Get data from store
 * @param state
 */
const mapStateToProps = state => (
    {
        products: state.products,
        user: state.user
    }
);

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{UserUpdate: UserUpdateAction}}
 */
const mapActionsToProps = {
    UserUpdate: UserUpdateAction
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
