import React from 'react';
import './about.css'


const About = () => {
    return (
        <div className='container-fluid about-main-background' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >About Us</h1>
                </div>
            </div>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <div className='about-img-grid' >
                            <div className='img-grid-child' >
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-03.jpg' className='grid-img mt-5' />
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-04.jpg' className='grid-img' />
                            </div>
                            <div className='img-grid-child' >
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-04.jpg' className='grid-img' />
                                <img src='https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-03.jpg' className='grid-img mt-n5' />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-6' >
                        <div className='mission-container' >
                            <div className='mission-box' >
                                <h3 className='text-white' >Our Mission</h3>
                                <p className='text-white text-justify' >
                                    Our mission is to democratize education through the offering of world-class higher education opportunities that are accessible, flexible, and economical. Virtually anyone on the planet with an internet connection and a commitment to self-empowerment through learning can come to Udacity, master a suite of job-ready skills, and pursue rewarding employment.
                            </p>
                            </div>
                        </div>
                        <div class="arrow bounce">
                            <a class="fa fa-arrow-down fa-2x" href="#story"></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container' id='story' >
                <div className='row' >
                    <div className='col-sm-12' >
                        <div className='story-content' >
                        <h3 className='mb-4' >Our Story</h3>
                        <p>
                            We provide data science as a service. To remain competitive, meeting business demands in real-time is no longer optional. It’s imperative. Decision-making has to be done quickly and based on intelligent strategies. Our services offer a cost-effective and convenient way to assist with your analysis projects. We can quickly get answers to any questions you have regarding your data and what your next steps should be. We work for a variety of verticals, including the following:
                        </p>
                        <ul>
                            <li>Healthcare</li>
                            <li>
                                Finance
                            </li>
                            <li>
                                Marketing
                            </li>
                        </ul>
                        <p>
                            Whatever your target market is, we can gather knowledge of your customers’ needs, wants, and desires. Uncovering the actual needs and wants of your target market puts you in an ideal position to deliver exactly what they are looking for. We have the ability to deliver rapid reactions to changes in behavior, leading to new and better insights. Access to this type of analysis speeds up decision making and leads to process improvements.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;