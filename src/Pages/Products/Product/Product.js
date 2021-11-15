import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, productTitle, price, img } = product;

    return (
        <div className="col mb-5">
            <div className="card shadow h-100">
                <div className="card-images">
                    <img className="card-img-top" src={img} alt="..." />
                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title text-custom-2 fs-5 text-dark mb-1">{productTitle}</h5>
                    <p className="text-center"><span className="fs-6 fw-bold">${price}</span> </p>
                    {/* <div className="d-flex justify-content-between"><p><i className="far fa-clock me-1"></i>{days} Days</p><p><i className="fas fa-map-marked me-1"></i>{location}</p></div> */}

                    <div className="text-center">
                        <Link to={`/order/${_id}`}>
                            <button className="btn bg-custom text-white mt-auto">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;