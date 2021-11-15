import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrderRow from './MyOrderRow/MyOrderRow';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.post('https://salty-hollows-81337.herokuapp.com/my-orders', user)
            .then(res => {
                console.log(res.data)
                setOrders(res.data);
            })
    }, []);

    const handleCancelProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://salty-hollows-81337.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(orders => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <>
            {/* <ExtraBanner bannerText={"My Orders"}></ExtraBanner> */}
            <div className="container-fluid my-5">
                <h2 className="text-center text-dark my-5">Orders table</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, i) => <MyOrderRow
                                    key={order._id}
                                    order={order} serial={i + 1} handleCancelProduct={handleCancelProduct}
                                ></MyOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyOrders;