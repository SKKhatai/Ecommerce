import React from 'react';
import '../Style/usercontact.css';
import video2 from '../images/earth2.mp4';

const Contact = React.forwardRef((props, ref) => (
  <div ref={ref} className="contact-wrapper">
    <div className="contact">
      <video
        className="contact-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video2} type="video/mp4" />
      </video>

      <div className="contact2">
        <div className="contactUs">
          <h3>Contact Us</h3>
          <p>Feel free to use the form or drop us an email.</p>
          <ul>
            <li>+91 9777238708</li>
            <li>souravkhatai6@gmail.com</li>
            <li>Bhubaneswar, Odisha</li>
          </ul>
        </div>

        <div className="conttactForm">
          <form action="https://formspree.io/f/xgvkkvgb" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" name="name" required />
            <label htmlFor="gmail">Email</label>
            <input type="email" placeholder="Enter your email" id="gmail" name="email" required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="10-digit number" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={3} placeholder="Your message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
));

Contact.displayName = 'Contact';
export default Contact;
