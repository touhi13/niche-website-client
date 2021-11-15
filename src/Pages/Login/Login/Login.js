import React, { useState } from 'react';
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4 text-custom-2">Login</h3>

                                    {/* <!-- Sign In Form --> */}
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleOnChange}/>
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleOnChange}/>
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label className="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-lg bg-custom text-white btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                                            <div className="text-center">
                                                <p>New Here? <Link className="small " to="/register">Register</Link></p>
                                                
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;