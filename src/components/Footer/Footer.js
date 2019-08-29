import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './footer.css';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (

        <footer name="test1" class="footer-distributed">

            <div class="footer-left">

                <img src={logo} width='140px' height='80px' className='img img-fluid' />
                <p class="footer-company-about mt-4">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <br/>
                <br/>
                <p class="footer-company-name">Company Name &copy; 2015</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>21 Revolution Street</span> Paris, France</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+1 555 123456</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>

            </div>

            <div class="footer-right">
                <div className='text-white' >
                    <h4>Quick Links</h4>
                    <ul className='footer-links' >
                        <li><Link to="/#home">Home</Link></li>
                        <li><Link to="/#service">Services</Link></li>
                        <li><Link to="/#blog">Blog</Link></li>
                        <li> <Link to="/#contact">Contact Us</Link></li>
                        <li><Link to="/faq/#faq-top">Terms & FAQ</Link></li>
                    </ul>
                </div>
                <div class="footer-icons">

                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>

                </div>

            </div>
            {/* <Link to="/#home"><i class="fas fa-arrow-up"></i></Link> */}
        </footer>

    )
}

export default Footer;