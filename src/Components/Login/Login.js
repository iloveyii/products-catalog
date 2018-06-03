import React from 'react';
import { connect } from 'react-redux';
import { userLogInAction } from '../../Actions/UserActions';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data : {}};
        this.userLogin = this.userLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        console.log('Login component did mount');
    }

    onChange(e) {
        this.setState({
            data : { ...this.state.data, [e.target.name]: e.target.value}
        });
    }
    userLogin(e) {
        e.preventDefault();
        console.log(e.target);
        const user = this.state.data;
        console.log(user);
        this.props.userLogInAction({user});
    }

    render() {
        return(
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-8">
                        <aside style={{"padding": "0"}} className="col-sm-10 offset-sm-1 text-center">

                            <div className="card">
                                <article className="card-body">
                                    <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                                    <hr />
                                    <p className="text-success text-center">Some message goes here</p>
                                    <form id="login-form" onSubmit={this.userLogin}>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                                </div>
                                                <input name="email" className="form-control" placeholder="Email or login"
                                                       type="email" onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                </div>
                                                <input name="password" className="form-control" placeholder="******"
                                                       type="password" onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Login</button>
                                        </div>
                                        <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                                    </form>
                                </article>

                            </div>
                        </aside>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapActionsToProps = {
    userLogInAction
};

export default connect(mapStateToProps, mapActionsToProps)(Login);