import React from 'react';
import './latestblog.css';
import { HashLink as Link } from 'react-router-hash-link';
const LatestBlog = () => {
    return (
        <div className='container-fluid' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >Latest Blog</h1>
                </div>
            </div>
            <div className='container mt-5' >
                <div className='row' >
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title">Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!.......</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                    <div class="card mb-3 blog-card">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title" >Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!....</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                    <div class="card mb-3 blog-card">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title">Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!.....</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container blog-btn-container' >
            <Link to='/blog/#blog-top' className='btn-second' >Read More...</Link>
            </div>

        </div>
    )
}

export default LatestBlog