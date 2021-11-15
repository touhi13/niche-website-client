import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item " style={{
                        backgroundImage: `url('https://i.ibb.co/GvjQNTK/ecp8j6.jpg')` }}>
                        <div className="carousel-caption">
                            <h5 className="fs-3">Customised flower arrangements are available for corporate houses based on bilateral agreement.</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item active" style={{
                        backgroundImage: `url('https://i.ibb.co/PZtjB2z/wp3100861.jpg')` }}>
                        <div className="carousel-caption">
                            <h5 className="fs-3">Check out our wide selection of flower arrangements to make your next occasion memorable.</h5>
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url('https://i.ibb.co/44V34HX/purple-flower-pot.jpg')` }}>
                        <div className="carousel-caption">
                            <h5 className="fs-3">Bring flowers to Thanksgiving dinner. Carousel Family Florist has traditional Thanksgiving centerpieces or modern arrangements for a fun surprise.</h5>
                            {/* <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    );
};

export default Banner;