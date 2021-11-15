import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    const { admin } = useAuth({})
    return (
        <div>
            {
                admin ?
                    <ManageOrders></ManageOrders>
                    :
                    <MyOrders></MyOrders>
            }
        </div>
    );
};

export default DashboardHome;