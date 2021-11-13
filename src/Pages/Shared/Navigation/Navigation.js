import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <header className="p-3 bg-white text-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
                        <img src={logo} alt="" className="bi me-2" width="98" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="#" className="nav-link px-2 text-secondary">Home</NavLink></li>
                        <li><a href="#" className="nav-link px-2 text-dark">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-dark">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-dark">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-dark">About</a></li>
                    </ul>


                    {
                        !user?.email ?
                            <div className="text-end">
                                <NavLink to='/login'>
                                    <button type="button" className="btn btn-outline-success me-2">Login</button>
                                </NavLink>
                                <NavLink to='/register'>
                                    <button type="button" className="btn btn-warning">Sign-up</button>
                                </NavLink>
                            </div>
                            :
                            <li className="dropdown text-end ps-5 pt-2">
                                <NavLink to="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                                </NavLink>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li className="dropdown-item">{user.displayName}</li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="#" onClick={logout}>Sign out</NavLink></li>
                                </ul>
                            </li>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navigation;