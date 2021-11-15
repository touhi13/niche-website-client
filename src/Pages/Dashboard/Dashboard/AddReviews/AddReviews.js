import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../../hooks/useAuth';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const [reviews, setReviews] = useState([])


    console.log(user);
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    useEffect(() => {
        axios.get('https://salty-hollows-81337.herokuapp.com/reviews')
            .then(res => {
                setReviews(res.data);
            })
    }, []);
    const onSubmit = data => {
        data.customerName = user.displayName;
        data.customerImg = user.photoURL;
        data.rating = rating;
        console.log(data);
        axios.post('https://salty-hollows-81337.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            {/* <ExtraBanner bannerText={"Add Tour"}></ExtraBanner> */}
            <div className="container px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 rounded-3 shadow-lg">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <div className="h1 fw-light">Add Review</div>
                                    {/* <p className="mb-4 text-muted">A functional, Bootstrap 5 contact form with validation built using SB Forms. Try it out!</p> */}
                                </div>
                                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />


                                    {/* <!-- Description Input --> */}
                                    <div className="form-floating my-3">
                                        <textarea className="form-control" id="review" type="text" placeholder="Add Review" style={{ height: "10rem" }}{...register("review")}></textarea>
                                        <label htmlFor="review"> Add Review</label>
                                    </div>


                                    {/* <!-- Submit button --> */}
                                    <div className="d-grid">
                                        <button className="btn bg-custom text-white btn-lg" id="submitButton" type="submit">Submit</button>
                                    </div>
                                </form>
                                {/* <!-- End of contact form --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddReviews;