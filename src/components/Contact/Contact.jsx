import React from 'react'
import './Contact.css'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
    async function onSubmit (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8d1592ef-0754-4f49-aece-31cca07cb88f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (
        <div className='contact-container' id='lets-connect'>
            <div className='contact-title'>
                <h1>Let's Connect</h1>
            </div>
            <div className='contact-area'>
                <div className='contact-left'>
                    <div className="contact-icon"><CiPhone /> <p>+91 7809471139</p></div>
                    <div className="contact-icon"><CiMail /> <p>chanchalmoharana@gmail.com</p></div>
                    <div className="contact-icon"><CiLocationOn /> <p>Bhubaneswar, Odisha</p></div>
                </div>
                <div className='contact-right'>
                    <form onSubmit={onSubmit} method="post">
                        <div className='contact-items'>
                            <label htmlFor='fname'>Name</label><input type="text" name="fname" id='fname' placeholder='Type Here' />
                        </div>
                        <div className='contact-items'>
                            <label htmlFor='email'>Email Id</label><input type="text" name="email" id='email' placeholder='Type Here' />
                        </div>
                        <div className='contact-items'>
                            <label htmlFor='description'>Any Messages For Me</label><textarea type="text" name="description" id='description' placeholder='Type Here' />
                        </div>
                        <button type="submit">Submit Now</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Contact
