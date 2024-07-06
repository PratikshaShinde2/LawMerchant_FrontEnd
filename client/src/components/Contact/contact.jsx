import React, { useRef, useState } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wooya4p', 'template_1f0c8se', form.current, 'VF82sHZPz1WcrDWz-')
            .then((result) => {
                console.log(result.text);
                alert('Mail sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again.');
            });
    };

    return (
        <div className="contact-container">
            <h3>Any Queries?</h3>
            <p>Let us know!</p>
            <form ref={form} onSubmit={sendEmail} >
                <div className="form-group input">
                    <label>Name</label>
                    <input type="text" name="from_name" required />
                    <label>Email</label>
                    <input type="email" name="from_email" required />
                    <label>Message</label>
                    <textarea name="message" required />
                </div>
                
                <button type="submit" className="button btn send-btn ">Send</button>
            </form>
        </div>
    );
}

export default Contact;
