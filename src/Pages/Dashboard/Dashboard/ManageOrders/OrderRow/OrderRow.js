import React from 'react';

const OrderRow = ({ order, serial, handelStatusChange, handleDeleteProduct }) => {
    let { _id, productTitle, email, phone, address, product_id, name, product_price, createdAt, status } = order;
    return (
        <tr>
            <td>{serial}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{productTitle}</td>
            <td>${product_price}</td>
            <td>{status === 0 ? "Pending" : "Shipped"}</td>
            <td>{<button className="btn bg-custom text-white me-1" onClick={() => { handelStatusChange({ _id, status }) }}> {status === 0 ? "Ship" : "Cancel"} </button>}
                <button className="btn bg-custom-2 text-white" onClick={() => { handleDeleteProduct(_id) }}> Delete </button>
            </td>

        </tr>
    );
};

export default OrderRow;