import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-container' id='about-me'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-area'>
                <div className='about-left'>
                    <img src='../../images/CM Passport Photo.jpg' alt="My Pic" />
                </div>
                <div className='about-right'>
                    <p>An enthusiast software developer brimming with passion for developing innovative programs that expedite the efficiency and effectiveness of application. Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>
                    <ul className="skill-tree">
                        <li className='skills'><p>HTML & CSS</p><hr style={{width: '60%'}} /></li>
                        <li className='skills'><p>Javascript</p><hr style={{width: '50%'}}/></li>
                        <li className='skills'><p>Node Js with Express</p><hr style={{width: '40%'}}/></li>
                        <li className='skills'><p>React Js</p><hr style={{width: '50%'}}/></li>
                        <li className='skills'><p>MySQL</p><hr style={{width: '80%'}}/></li>
                    </ul>
                </div>
            </div>
            <div className="exp-numbers">
                <p><span>2+</span> <br /> Years of Experience</p><hr />
                <p><span>4+</span> <br /> Projects Completed</p><hr />
                <p><span>10+</span> <br /> Happy Clients</p>
            </div>
        </div>
    )
}

export default About