import React, { Component } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import { HashLink as Link } from 'react-router-hash-link';
import './chat.css'
class Chat extends Component {
    constructor(props) {
        super(props);

        this.directLine = new DirectLine({ token: 'm8Fw3rl9b4s.yQeQ8sYIbEhjT5cppXr_UJ7aszNKwAKvWjb1VZzxZGQ' });
    }
    render() {
        return (
            <div className='container-fluid chat-container p-0' >
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Chat</li>
                    </ol>
                </nav>
                <div className='container-fluid' >
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <h2 className='text-white text-center' >
                            Chat With Us
                        </h2>
                    </div>
                </div>
                <div className='bg-white p-0 frame-container' >
                {/* <ReactWebChat directLine={this.directLine} userID='YOUR_USER_ID' /> */}
                <iframe src='https://webchat.botframework.com/embed/chatbot-whealth?s=m8Fw3rl9b4s.yQeQ8sYIbEhjT5cppXr_UJ7aszNKwAKvWjb1VZzxZGQ'  style={{minWidth:'70%', width:'100%', minHeight: '420px'}}></iframe>
                </div>
                </div>
            </div>
        );
    }
}

export default Chat;