import React from 'react';
import { Route, Switch, useRouteMatch, Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ProductList from '../ProductList/ProductList';
import './Dashboard.css';
import ManageOrders from './ManageOrders/ManageOrders';
import MyOrders from './MyOrders/MyOrders';
import AddReviews from './AddReviews/AddReviews';
import Pay from '../Pay/Pay';

const Dashboard = (props) => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-custom flex-md-nowrap p-0 shadow">
                <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">Paprii.com</NavLink>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                <div className="navbar-nav ">
                    <div className="nav-item text-nowrap">
                        <NavLink className="nav-link  shadow-lg border border-1 rounded-pill px-3 mx-2" to="#" onClick={logout}>Sign out</NavLink>
                    </div>
                </div>
            </header>

            <div className="container-fluid">

                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

                        {admin ?
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={url}><i class="fas fa-home me-1"></i>Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/makeAdmin`}>
                                            <i class="fas fa-users-cog me-1"></i>Make Admin
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Manage Product</span>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item mb-0">
                                        <Link className="nav-link" to={`${url}/add-products`}>
                                            <i class="fas fa-plus-circle me-1"></i>Add Products
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/product-list`}><i class="fas fa-list-alt me-1"></i>Products List
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Manage Order</span>
                                </h6>
                                <ul className="nav flex-column mb-2">

                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/manage-orders`}>
                                            <i class="fab fa-first-order-alt me-1"></i>
                                            Order List
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            :
                            <div className="position-sticky pt-3">
                                <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={url}><i class="fas fa-home me-1"></i>Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/my-orders`}><i class="fas fa-border-all me-1"></i>
                                            My Orders
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/reviews`}>
                                        <i class="fas fa-comment-alt me-1"></i>
                                            Reviews
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`${url}/pay`}>
                                        <i class="fab fa-paypal me-1"></i>
                                            Pay
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route exact path={`${path}/my-orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/reviews`}>
                                <AddReviews></AddReviews>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-products`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/product-list`}>
                                <ProductList></ProductList>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-orders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                        </Switch>

                    </main>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;