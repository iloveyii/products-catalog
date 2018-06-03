import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import { UserUpdateAction } from './Actions/UserActions';
import ProductCatalog from './Components/Product/ProductCatalog';
import Login from './Components/Login/Login';
import TriggerList from './Components/Trigger/TriggerList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}

                <div className="ui container">
                    <div className="ui three item menu">
                        <br/>
                        <Link className="item" to="/login">Login</Link>
                        &nbsp;
                        <Link className="item" to="/products">Products</Link>
                        &nbsp;
                        <Link className="item" to="/trigger">Trigger</Link>
                    </div>
                    <Route path="/products" render={(props)=> (<ProductCatalog {...props} />) }/>
                    <Route path="/login" component={Login} />
                    <Route path="/trigger" component={TriggerList} />

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
const mapActionsToProps = {};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
