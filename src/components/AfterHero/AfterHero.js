import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './afterHero.css'
const AfterHero = () => {
    return (
        <div className='container-fluid after-hero-container'>
            <div className='container' >
                <div className='after-hero-content' >
                    <p>COME IN.</p>
                    <Link to='/chat' className='btn-second' >CHAT WITH US</Link>
                    <p>& BE HEALTHY</p>
                </div>
            </div>
        </div>

    )
}

export default AfterHero;