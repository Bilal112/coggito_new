import React, { Component } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import './chat.css'
class Chat extends Component {
    constructor(props) {
        super(props);

        this.directLine = new DirectLine({ token: 'm8Fw3rl9b4s.yQeQ8sYIbEhjT5cppXr_UJ7aszNKwAKvWjb1VZzxZGQ' });
    }
    render() {
        return (
            <div className='container-fluid chat-container' >
                <br/>
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <h2 className='text-white text-center' >
                            Chat With Us
                        </h2>
                    </div>
                </div>
                <br/>
                <br/>
                <div className='container' >
                <div className='bg-white p-0 frame-container' >
                {/* <ReactWebChat directLine={this.directLine} userID='YOUR_USER_ID' /> */}
                <iframe src='https://webchat.botframework.com/embed/chatbot-whealth?s=m8Fw3rl9b4s.yQeQ8sYIbEhjT5cppXr_UJ7aszNKwAKvWjb1VZzxZGQ'  style={{minWidth:'400px', width: '100%', minHeight: '500px'}}></iframe>
                </div>
                </div>
            </div>
        );
    }
}

export default Chat;