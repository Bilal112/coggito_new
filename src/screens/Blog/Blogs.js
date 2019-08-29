import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { HashLink as Link } from 'react-router-hash-link';
import Footer from '../../components/Footer/Footer';
import './blogs.css'


const Blogs = () => {
    return (
        <div className='container-fluid p-0' id='blog-top'>
            <div className='blog-page-background' >
                <ReactTypingEffect
                    text="BLOGS" //text=["Hello.", "World!"]
                    className='typed-text'
                />
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/#home">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Blogs</li>
                </ol>
            </nav>
            <div className='container mt-5' >
                <div className='row' >
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal" >
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title">Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!.......</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title" >Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!....</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
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
            <br />
            <div className='container mt-5'  >
                <div className='row' >
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title">Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!.......</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title" >Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!....</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
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
            <br />
            <div className='container mt-5' >
                <div className='row' >
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title">Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!.......</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
                            <img class="card-img-top" src="https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title blog-card-title" >Nullam tarpis dras capibas</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum delectus impedit libero. Id, unde!....</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm col-md-4' >
                        <div class="card mb-3 blog-card" data-toggle="modal" data-target="#myModal">
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
            <br />
            <Footer />
            {/* The modal  start*/}
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h3 class="modal-title blog-modal-title p-2">Nullam tarpis dras capibas</h3>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <div class="modal-body">
                            <img src='https://snazzytheme.com/premium-themes/projectai-v1.0.3/images/image1.png' className='img img-fluid' />
                        <div className='p-3' >
                            <p className='text-justify' >
                            Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* The modal end */}
        </div>
    )
}

export default Blogs;