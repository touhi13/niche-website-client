import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
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
                                    <h3 className="login-heading mb-4">Welcome back!</h3>

                                    {/* <!-- Sign In Form --> */}
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInputName" placeholder="Name" />
                                            <label for="floatingInputName" name="name" onBlur={handleOnBlur}>Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" onBlur={handleOnBlur} placeholder="name@example.com" name="email" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" onBlur={handleOnBlur} placeholder="Password" name="password"/>
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword2" onBlur={handleOnBlur} placeholder="Confirm Password" name="password2"/>
                                            <label for="floatingPassword2">Confirm Password</label>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label className="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                                            <div className="text-center">
                                                <a className="small" href="#">Forgot password?</a>
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

export default Register;