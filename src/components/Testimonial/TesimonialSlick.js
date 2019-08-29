import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SlickSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <div class="card testimonial-card">
                        <div class="card-header test-header-outline">
                            <div className='img-testimonial-cover' >
                                <img src='https://images.ctfassets.net/2y9b3o528xhq/7Euv4R4M4WwASBuqKQXoyy/9356d631a59f9bfd093ff5ab30d51805/mike.jpg' className='img-testimonial' />
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">John Dou</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <span>
                                <i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card testimonial-card">
                        <div class="card-header test-header-outline">
                            <div className='img-testimonial-cover' >
                                <img src='https://images.ctfassets.net/2y9b3o528xhq/7Euv4R4M4WwASBuqKQXoyy/9356d631a59f9bfd093ff5ab30d51805/mike.jpg' className='img-testimonial' />
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">John Dou</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <span>
                                <i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card testimonial-card" >
                        <div class="card-header test-header-outline">
                            <div className='img-testimonial-cover' >
                                <img src='https://images.ctfassets.net/2y9b3o528xhq/7Euv4R4M4WwASBuqKQXoyy/9356d631a59f9bfd093ff5ab30d51805/mike.jpg' className='img-testimonial' />
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">John Dou</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <span id='contact' >
                                <i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>

            </Slider>
        );
    }
}

export default SlickSlider;