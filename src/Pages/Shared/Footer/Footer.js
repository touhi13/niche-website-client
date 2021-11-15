import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // <!-- Footer-->
        <footer class="footer shadow mt-5 border- text-center bg-light">
            <div class="container px-4 px-lg-5">
                <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="fab fa-facebook-f"></i>
</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!">    <i class="fab fa-twitter"></i>
</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white" href="#!"><i class="fab fa-instagram"></i>
</a>
                    </li>
                </ul>
                <p class="text-muted small mb-0">Copyright &copy; paprii.com 2021</p>
            </div>
        </footer>
    );
};

export default Footer;