import React from 'react';
import './letsChat.css'

const LetsChat = () => {
    return (
        <div className='container-fluid letsChat-main-container' >
            <div className='row' >
                <div className='col-sm-12' >
                    <h1 className='primary-sec-heading text-white' >Let's Talk</h1>
                </div>
            </div>
            <br/>
            <div className='row' >
                <div className='col-sm-12 text-center' >
                <button className='btn-second' >Let's Chat With Us</button>
                </div>
            </div>
        </div>
    )
}

export default LetsChat;