import React from 'react';
import SlickSlider from './TesimonialSlick';
import './testimonial.css'
const Testimonial = () => {
    return (
        <div className='container-fluid' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >What People Say</h1>
                </div>
            </div>
            <br/>
            <div className='container' >
                <SlickSlider />
            </div>
            <br  />
            <br/>
            <br/>
        </div>
    )
}

export default Testimonial;