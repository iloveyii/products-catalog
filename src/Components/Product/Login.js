import React from 'react';


export default class Login extends React.Component {
    render() {
        return(
            <div className="row">
                <aside style={{"padding": "0"}} className="col-sm-10 offset-sm-1 text-center">
                    <p>Login form style 3</p>

                    <div className="card">
                        <article className="card-body">
                            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                            <hr />
                                <p className="text-success text-center">Some message goes here</p>
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                            </div>
                                            <input name="" className="form-control" placeholder="Email or login"
                                                   type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                            </div>
                                            <input className="form-control" placeholder="******" type="password" />
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
        );
    }
}