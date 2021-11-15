import React from 'react';

const MyOrderRow = ({ order, serial, handleCancelProduct }) => {
    let { _id, product_id, productTitle, product_price, createdAt, status } = order;

    return (
        <tr>
            <td>{serial}</td>
            <td>{productTitle}</td>
            <td>${product_price}</td>
            <td>{status === 0 ? "Pending" : "Approved"}</td>
            <td> <button className="btn btn-danger" onClick={()=>{handleCancelProduct(_id)}}> Cancel </button></td>

        </tr>
    );
};

export default MyOrderRow;