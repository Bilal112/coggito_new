import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { HashLink as Link } from 'react-router-hash-link';
import LatestBlog from '../../components/LatestBlog/LatestBlog';
import LetsChat from '../../components/LetsChat/LetsChat';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';
import './cc.css'
const Cc = () => {
    return (
        <div className='container-fluid p-0' id='cc-page' >
            <div className='cc-service-page-background' >
            <ReactTypingEffect
                    text="CLOUD COMPUTING" //text=["Hello.", "World!"]
                    className='typed-text'
                />
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/#home">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Cloud Computing</li>
                </ol>
            </nav>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <div className='p-2' >
                            <img src='https://thinkitsolutions.com/wp-content/uploads/2019/07/cloud-pic-2.png' className='img img-fluid cc-img-1' />
                        </div>
                    </div>
                    <div className='col-sm col-md-6' >
                        <div className='p-3' >
                            <h4>What’s Cloud Computing?</h4>
                            <p className='text-justify' >
                                Artificial intelligence (AI) is a branch of computer science, which includes the creation of machines that can perform human-like tasks. Some machines have the ability to work and react similar to humans, and examples of these include Siri and self-driving cars. The ultimate goal is for machines that work via artificial intelligence to duplicate the cognitive ability of humans.
                            </p>
                            <p className='text-justify' >
                                Computers and machines have been created that have the ability to plan, solve problems and recognize speech, but there is more involved in human intelligence than that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='container' >
                <div className='row' >
                    <div className='col-sm col-md-6' >

                        <div className='p-3' >
                            <h4>The Future of Cloud Computing</h4>
                            <p className='text-justify' >
                            Scientists and researchers continue to explore the potential of artificial intelligence. Technology is continually moving forward, and it’s impossible to know for sure how extensively the field of AI will grow. Some recent trends include voice-activated software and facial recognition software, both of which have the potential to protect consumers from fraud. Robots are being used in manufacturing, as well as in environments which are dangerous to humans.
                            </p>
                            <p className='text-justify' >
                            While self-driving cars have been developed, they haven’t yet reached a wide level of acceptance. There is some concern that as artificial intelligence continues to advance, some jobs could become obsolete, such as drivers.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm col-md-6' >
                        <div className='p-2' >

                            <img src='https://blog.tcitechs.com/hubfs/cloud%20computing.jpg' className='img img-fluid cc-img-1' />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <LatestBlog/>
            <br/>
            <LetsChat/>
            <br/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default Cc;