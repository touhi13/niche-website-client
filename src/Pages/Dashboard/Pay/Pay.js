import React from 'react';
import './Pay.css';

const Pay = () => {
    return (
        <div className="pay mt-5">
         {/* <!-- Masthead-->/ */}
        
                <div class="container-fluid px-4 px-lg-0">
                    <h1 class="fst-italic lh-1 mb-4">This is Coming Soon</h1>
                    <p class="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>

                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        {/* <!-- Email address input--> */}
                        <div class="row input-group-newsletter">
                            <div class="col"><input class="form-control" id="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                            <div class="col-auto"><button class="btn bg-custom text-white disabled" id="submitButton" type="submit">Notify Me!</button></div>
                        </div>
                        <div class="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>

                        <div class="d-none" id="submitSuccessMessage">
                            <div class="text-center mb-3 mt-2">
                                <div class="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
       

                        <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                    </form>
                </div>
            

        {/* <div class="social-icons">
            <div class="d-flex flex-column flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark m-3" href="#!"><i class="fab fa-instagram"></i></a>
            </div>
        </div> */}
        </div>
    );
};

export default Pay;