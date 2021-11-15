import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    // console.log(user);
    return (
        <header className="p-3 bg-light shadow-lg text-dark sticky-top">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={logo} alt="" className="bi me-2" width="98" />
                    </a>

                    <ul className="ms-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bolder">
                        <li><NavLink to="/" className="nav-link px-2 text-custom">Home</NavLink></li>
                        <li><NavLink to="/explore" className="nav-link px-2 text-custom">Explore</NavLink></li>
                        {
                            user?.email && <li><NavLink to="/Dashboard" className="nav-link px-2 text-custom">Dashboard</NavLink></li>
                        }
                    </ul>
                    {
                        !user?.email ?
                            <div className="text-end">
                                <NavLink to='/login'>
                                    <button type="button" className="btn bg-custom me-2 text-white">Login</button>
                                </NavLink>
                                <NavLink to='/register'>
                                    <button type="button" className="btn bg-custom-2 text-white">Sign-up</button>
                                </NavLink>
                            </div>
                            :
                            <div className="dropdown text-end ps-5 pt-2">
                                <NavLink to="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" /> */}
                                    <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg"alt="mdo" width="32" height="32" className="rounded-circle" />
                                </NavLink>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li className="dropdown-item">{user.displayName}</li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item bg-custom text-whit" to="#" onClick={logout}>Sign out</NavLink></li>
                                </ul>
                            </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navigation;