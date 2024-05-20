import React from 'react'
import './Description.css'

function Description() {
    return (
        <div className='description'>
            <div className="port-image">
                <img src="../../images/profile image.jpeg" alt="Profile-Image" />
            </div>
            <div className='port-name'>   
                <h1 id='prof-name'>I'm Chanchal Moharana, </h1>
                <h1 id='prof-desc'>A <span>Full Stack Developer</span></h1>
                <p>Working at HCL Technologies, with 2 years of coding experience.</p>
            </div>
            <div className='con-res'>   
                <div className='connect-now'>Connect With Me</div>
                <div className='port-resume'>My Resume</div>
            </div>
        </div>
    )
}

export default Description;
