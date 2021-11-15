import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Want to subscribe to our Monthly Subscription? Let us know!
</h2>

                        <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Email address input--> */}
                            <div class="row">
                                <div class="col">
                                    <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    {/* <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div> */}
                                </div>
                                <div class="col-auto"><button class="btn bg-custom text-white btn-lg" id="submitButton" type="submit">Subscribe</button></div>
                            </div>               

                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;