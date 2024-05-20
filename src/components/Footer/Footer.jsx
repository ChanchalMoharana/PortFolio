import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer-part">
            <hr />
            <div className="footer-area">
                <div className='foot-left'>
                    <p>©{year} All Rights Reserved.</p>
                </div>
                <div className='foot-right'>
                    <CiMail size={25}/>
                    <CiInstagram size={25} />
                    <CiFacebook size={25} />
                </div>
            </div>
        </div>
    )
}

export default Footer
