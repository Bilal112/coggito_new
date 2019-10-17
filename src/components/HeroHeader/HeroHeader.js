import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hero.css';
const HeroHeader = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    };
    return (
        <div className='container-fluid p-0' id='home' >
            <Slider {...settings} className='slider-container' >
                <div >
                    <div className='hero-left-1' >
                        <div className='container hero-content'>
                            <h1><span className='text-dark text-special' >Connect</span> with your health</h1>
                            <h5>
                                Preventive and Modern Medicine in your Hand
                            </h5>
                        </div>
                    </div>
                </div>





                <div>
                    <div className='hero-left-2' >
                    <div className='container hero-content'>
                            <h1><span className='text-dark text-special' >Connect</span> with your health</h1>
                            <h5>
                                Preventive and Modern Medicine in your Hand
                            </h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='hero-left-3' >
                    <div className='container hero-content'>
                            <h1><span className='text-dark text-special' >Connect</span> with your health</h1>
                            <h5>
                                Preventive and Modern Medicine in your Hand
                            </h5>
                        </div>
                    </div>
                </div>
                <div  >
                    <div className='hero-left-4' >
                    <div className='container hero-content'>
                            <h1><span className='text-dark text-special' >Connect</span> with your health</h1>
                            <h5>
                                Preventive and Modern Medicine in your Hand
                            </h5>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HeroHeader;