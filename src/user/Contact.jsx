import React from 'react';
import "../Style/usercontact.css";
import video2 from '../images/earth2.mp4';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="contact h-[100vh] w-full flex item-center justify-center bg-black relative overflow-hidden flex-wrap">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="contact2 flex item-center justify-around bg-transparent">
          <div className="contactUs">
            <h3>Contact Us</h3>
            <p>Feel free to use the form or drop us an email.</p>
            <ul>
              <li>+91 9777238708</li>
              <li>souravkhatai6@gmail.com</li>
              <li>Bhubaneswar,Odisha</li>
            </ul>
          </div>

          <div className="conttactForm">
            <form action="https://formspree.io/f/xgvkkvgb" method="post">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your name ji" id="name" />
              <label htmlFor="gmail">Gmail</label>
              <input type="email" placeholder="Enter your gmail" id="gmail" />
              <label htmlFor="phone">Phone</label>
              <input type="number" pattern="[0-9]{10}" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={3}></textarea>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';
export default Contact;
