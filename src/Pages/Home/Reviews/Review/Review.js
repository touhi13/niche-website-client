import React from 'react';
import ReactStars from "react-rating-stars-component";


const Review = ({ reviewItem }) => {

    const { review, customerName, customerImg, rating } = reviewItem;

    return (
        <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img class="img-fluid rounded-circle mb-3" src={customerImg} alt="..." />
                <h5>{customerName}</h5>
                <div className = "container-fluid">
                <ReactStars
                    classNames = "mx-auto"
                    edit={false}
                    count={5}
                    value={rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                </div>
                <p class="font-weight-light mb-0">{review}</p>
            </div>
        </div>
    );
};

export default Review;