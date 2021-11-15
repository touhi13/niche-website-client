import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow/OrderRow';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState(false);


    useEffect(() => {
        axios.get('https://salty-hollows-81337.herokuapp.com/orders')
            .then(res => {
                setOrders(res.data);
                setStatus(false);
            })
    }, [status]);
    const handelStatusChange = (data) => {
        const url = 'https://salty-hollows-81337.herokuapp.com/orders/status';
        const proceed = window.confirm('Are you sure, you want to change status?');
        if (proceed) {
        axios.post(url, data)
            .then(res => {
                if (res.data.acknowledged === true) {
                    setStatus(true);
                }
            })
        }
    }
    const handleDeleteProduct = (id)=>{
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
        <div className="container-fluid">
                <h2 className="text-center text-dark my-5">Orders table</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Product Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            orders?.map((order,i)=> <OrderRow
                                key={order._id}
                                order={order} handelStatusChange={handelStatusChange} serial={i+1} handleDeleteProduct={handleDeleteProduct}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;