import React from 'react';
import { connect } from 'react-redux';
import { userLogInAction } from '../../Actions/UserActions';

const Alert = ({serverErrors}) => (
    typeof serverErrors === 'string' && serverErrors.length === 0 || Object.keys(serverErrors).length === 0
    ?
        null
    :
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>Holy guacamole!</strong> {serverErrors.serverErrors}.
        </div>
);

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data : {}, serverErrors: {}};
        this.userLogin = this.userLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.serverErrors);
        this.setState({serverErrors: nextProps.serverErrors});
        window.serverErrors = nextProps.serverErrors;

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
        const credentials = this.state.data;
        this.props.userLogInAction(credentials);
        setTimeout(()=>{
            if(Object.keys(this.state.serverErrors).length === 0) {
                this.props.history.push('/products');
            }
        }, 1000);

    }

    render() {
        return(
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-8">
                        <aside style={{"padding": "0"}} className="col-sm-10 offset-sm-1 text-center">
                            <Alert serverErrors={this.state.serverErrors} />
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
    serverErrors : state.user.serverErrors
});

const mapActionsToProps = {
    userLogInAction
};

export default connect(mapStateToProps, mapActionsToProps)(Login);