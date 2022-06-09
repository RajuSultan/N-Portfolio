import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    // setDone(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setDone(false)
        emailjs.sendForm('service_o7xbeyb', 'template_caqq7jg', form.current, 'VXaCNpocy4fwFJoP9')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user-name' className='user' placeholder='Name' />
                    <input type="email" name='user-email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value='Send' className='button' />
                    <div>{done && <span>Thanks for Contacting me!</span>}</div>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>

        </div>
    );
};

export default Contact;