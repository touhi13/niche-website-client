import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductRow = ({ product, serial, handleDeleteProduct, currentPage }) => {
    let { _id, productTitle, img, quantity, price } = product;
    return (
        <tr>
            <td>{serial}</td>
            <td><img className="img-fluid" width="256px" src={img} alt="" /></td>
            <td className="">{productTitle}</td>
            {/* <td className="product-desc">{description}</td> */}
            <td>{quantity}</td>
            <td>${price}</td>
            <td>
                <NavLink to={`/order/${_id}`}><button className="btn btn-info me-1" > Details </button></NavLink>
                <NavLink to={{
                    pathname: `/edit-product/${_id}`,
                    state: { from: currentPage }
                }}><button className="btn btn-primary me-1"> Edit </button></NavLink>
                <button className="btn btn-danger me-1" onClick={() => { handleDeleteProduct(_id) }}> Delete </button>
            </td>

        </tr>
    );
};

export default ProductRow;