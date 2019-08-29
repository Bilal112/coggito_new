import React from 'react';
import './services.css';
import ai from '../../assets/images/ai-service.jpg';
import dl from '../../assets/images/dl-service.jpg';
import ml from '../../assets/images/ml-service.jpg';
import cc from '../../assets/images/cc-service.jpg';
const Services = () => {
    return (
        <div className='container-fluid' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >Core Services</h1>
                </div>
            </div>
            <br/>
            <br/>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-12 col-lg-6' >
                        <div className='service-container' >
                            <div style={{ position: 'relative' }} >
                                <span className='sm-icon' ><i class="fas fa-brain"></i></span>
                                <img src={ai} />
                            </div>
                            <div className='ml-4 service-text-container' >
                                <h4><span className='service-text-underline' >Artificial</span> Intelligence</h4>
                                <p>
                                    With real world projects and immersive content built in partnership with top tier companies.
                                    <a href='#' > Read More</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-12 col-lg-6' >
                    <div className='service-container' >
                            <div style={{ position: 'relative' }} >
                                <span className='sm-icon' ><i class="fas fa-globe-europe"></i></span>
                                <img src={dl} />
                            </div>
                            <div className='ml-4 service-text-container' >
                                <h4><span className='service-text-underline' >Deep</span> Learning</h4>
                                <p>
                                    With real world projects and immersive content built in partnership with top tier companies.
                                    <a href='#' > Read More</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-12 col-lg-6' >
                        <div className='service-container' >
                            <div style={{ position: 'relative' }} >
                                <span className='sm-icon' ><i class="fas fa-snowflake"></i></span>
                                <img src={ml}/>
                            </div>
                            <div className='ml-4 service-text-container' >
                                <h4><span className='service-text-underline' >Machine</span> Learning</h4>
                                <p>
                                    With real world projects and immersive content built in partnership with top tier companies.
                                    <a href='#' > Read More</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-12 col-lg-6' >
                    <div className='service-container' >
                            <div style={{ position: 'relative' }} >
                                <span className='sm-icon' ><i class="fas fa-cloud-rain"></i></span>
                                <img src={cc} />
                            </div>
                            <div className='ml-4 service-text-container' >
                                <h4><span className='service-text-underline' >Cloud</span> Computing</h4>
                                <p>
                                    With real world projects and immersive content built in partnership with top tier companies.
                                    <a href='#' > Read More</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;