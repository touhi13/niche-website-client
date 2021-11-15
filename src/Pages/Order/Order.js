import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';



const Order = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`https://salty-hollows-81337.herokuapp.com/products/${productId}`)
            .then(res => {
                // console.log(res.data);
                setProduct(res.data)
                // console.log(product._id)
            })
    }, []);

    const onSubmit = data => {
        data.product_id = product._id;
        data.productTitle = product.productTitle;
        data.product_price = product.price;
        data.status = 0;
        axios.post('https://salty-hollows-81337.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <Navigation></Navigation>
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-md-6 col-12">
                        <img className="img-fluid" alt="" src={product?.img} />

                    </div>
                    <div className="col-xl-7 col-md-6 col-12 p-4">
                        <div className="d-flex flex-column justify-content-between my-3">
                            <h1 className=" text-custom-2">{product?.productTitle}</h1>

                            <p className=""><span className="product-price fs-4">${product?.price}</span></p>

                            <p>{product?.description}</p>
                        </div>
                        <div className="text-center">
                            <div className="h3 fw-bold text-custom-2">Order This product</div>
                            {/* <p className="mb-4 text-muted">Split layout contact form</p> */}
                        </div>

                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Name Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" defaultValue={user.displayName} placeholder="Name" {...register("name")} />
                                <label for="name">Name</label>
                            </div>

                            {/* <!-- Email Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="emailAddress" placeholder="Email Address" defaultValue={user.email} {...register("email", { required: true })} />
                                <label for="emailAddress">Email Address</label>
                            </div>
                            {/* <!-- Phone Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" defaultValue="" placeholder="Phone" {...register("phone")} />
                                <label for="phone">Phone</label>
                            </div>
                            {/* <!-- Address Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="address" defaultValue="" placeholder="Address" {...register("address")} />
                                <label for="address">Address</label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <div className="d-grid">
                                <button className="btn bg-custom text-white btn-lg " id="submitButton" type="submit">Order Now</button>
                            </div>
                        </form>
                        {/* <!-- End of contact form --> */}

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Order;