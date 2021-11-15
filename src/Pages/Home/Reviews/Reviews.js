import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('https://salty-hollows-81337.herokuapp.com/reviews')
            .then(res => {
                setReviews(res.data);
                console.log(res.data);
            })
    }, []);
    return (
        // <!-- Testimonials-->
        <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    {
                        reviews.map(reviewItem => <Review
                            key={reviewItem._id}
                            reviewItem={reviewItem}
                        ></Review>)
                    }
                  
                </div>
            </div>
        </section>
    );
};

export default Reviews;