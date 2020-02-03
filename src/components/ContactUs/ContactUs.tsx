import React from 'react'
import './style/style.scss'

export const ContactUs: React.FC<{}> = () => {
    return (
        <div className="contact-us-page w-1239">
        <div className="contact-us-main-banner">
            <div className="content">
                <h1>Contact Us</h1>
                <span>We’re located at 1221 Admiral St. Richmond, VA 23220 Call us at 1 (800) - 817 - 1204</span>
            </div>
        </div>
        <div className="main-content">
            <div className="map">
                <img/>
            </div>
            <div className="contact-us-form">
                <h2>Get In Touch</h2>
                <p>Fill out the form below and let’s get started</p>
                <form>
                    <div className="form-row">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="website">WEBSITE</label>
                        <input type="text" name="website" id="website"/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="message">MESSAGE</label>
                        <input type="text" name="message" id="message"/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="SUBMIT"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
