import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ai from '../../assets/images/ai-service.jpg'
import cc from '../../assets/images/cc-service.jpg'
import dl from '../../assets/images/dl-service.jpg'
import ml from '../../assets/images/ml-service.jpg'
import './service.css'
const Services = () => {
    return (
        <div className='container-fluid service-main-container'  >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading' >Core Services</h1>
                </div>
            </div>
            <br />
            <br />
            <div className='container '>
                <div className='service-single-container' >
                    <div className='row no-gutters' >
                        <div className='col-sm col-md-5'>
                            <div className='service-img' >
                                <img src={ai} className='img' />
                            </div>
                        </div>
                        <div className='col-sm col-md-7 service-txt-container'>
                            <div className='service-txt' >
                                <h4>
                                    <span>Artificial</span> Intelligence
                            </h4>
                                <p className='mt-4' >
                                    Azure Bot Service provides the core components for creating bots, including the Bot Framework SDK for developing bots and the bot service for connecting bots to channels. In the topic, you'll be able to choose either .NET or Node.js template to create a bot using the Bot Framework SDK v4.
                                    Creating a bot with Azure Bot Service and creating a bot locally are independent, parallel ways to create a bot.
                            </p>
                                <span>
                              <Link to='/ai/#ai-page' >Read More...</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <br />
            <br />


            <div className='container '>
                <div className='service-single-container' >
                    <div className='row no-gutters' >
                        <div className='col-sm col-md-5 order-md-last order-sm-first'>
                            <div className='service-img' >
                                <img src={ml} className='img' />
                            </div>
                        </div>
                        <div className='col-sm col-md-7 service-txt-container'>
                            <div className='service-txt' >
                                <h4>
                                    <span>Machine</span> Learning
                            </h4>
                                <p className='mt-4' >
                                    Azure Bot Service provides the core components for creating bots, including the Bot Framework SDK for developing bots and the bot service for connecting bots to channels. In the topic, you'll be able to choose either .NET or Node.js template to create a bot using the Bot Framework SDK v4.
                                    Creating a bot with Azure Bot Service and creating a bot locally are independent, parallel ways to create a bot.
                            </p>
                                <span>
                                <Link to='/ml/#ml-page' >Read More...</Link>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <br />
            <br />

            <div className='container '>
                <div className='service-single-container' >
                    <div className='row no-gutters' >
                        <div className='col-sm col-md-5'>
                            <div className='service-img' >
                                <img src={dl} className='img' />
                            </div>
                        </div>
                        <div className='col-sm col-md-7 service-txt-container'>
                            <div className='service-txt' >
                                <h4>
                                    <span>Deep</span> Learning
                            </h4>
                                <p className='mt-4' >
                                    Azure Bot Service provides the core components for creating bots, including the Bot Framework SDK for developing bots and the bot service for connecting bots to channels. In the topic, you'll be able to choose either .NET or Node.js template to create a bot using the Bot Framework SDK v4.
                                    Creating a bot with Azure Bot Service and creating a bot locally are independent, parallel ways to create a bot.
                            </p>
                                <span>
                                <Link to='/dl/#dl-page' >Read More...</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br/>
            <br/>
            
            <div className='container '>
                <div className='service-single-container' >
                    <div className='row no-gutters' >
                        <div className='col-sm col-md-5 order-md-last order-sm-first'>
                            <div className='service-img' >
                                <img src={cc} className='img' />
                            </div>
                        </div>
                        <div className='col-sm col-md-7 service-txt-container'>
                            <div className='service-txt' >
                                <h4>
                                    <span>Cloud</span> Computing
                            </h4>
                                <p className='mt-4' >
                                    Azure Bot Service provides the core components for creating bots, including the Bot Framework SDK for developing bots and the bot service for connecting bots to channels. In the topic, you'll be able to choose either .NET or Node.js template to create a bot using the Bot Framework SDK v4.
                                    Creating a bot with Azure Bot Service and creating a bot locally are independent, parallel ways to create a bot.
                            </p>
                                <span id='blog' >
                                <Link to='/cc/#cc-page' >Read More...</Link>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;