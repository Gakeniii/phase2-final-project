import React from 'react';
import Girl from '../images/girl-happy.jpg'
import Doctors from '../images/doctors.jpg'
import Session from '../images/session.jpg'

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About the Schedualy</h1>
        <p className="about-description">
          Fonnded on the 11th of November 2024, say goodbye to disorganized spreadsheets, lost paperwork, and the inefficiencies that often come with traditional client management methods. This app empowers you to focus on what matters most: providing quality care and guidance to your clients. By streamlining the organization of patient information, the app allows you to maintain a structured, reliable system that can be accessed anytime, anywhere.
        </p>
        <p className="about-description">
          We understand that managing a practice on your own can be challenging. That's why Schedualy offers features designed to reduce administrative burdens. Whether you're keeping track of multiple clients or managing frequent appointments, this app is built to make your life easier. You can quickly access past sessions, add new appointment details, and update client information, all from a user-friendly interface. It’s like having a personal assistant that handles your client scheduling for you.
        </p>
        <p className="about-description">
          Our app also emphasizes security and privacy. We know that your clients’ information is sensitive, and safeguarding it is a top priority. Schedualy incorporates industry-standard security protocols to ensure that all data remains confidential and accessible only to authorized users. Rest assured that your clients' data is protected, allowing you to maintain the highest standards of professionalism and trust in your practice.
        </p>
        <p className="about-description">
          Whether you’re just starting out as a solo practitioner or you’ve been in the field for years, Schedualy adapts to your needs. Our goal is to support your growth and make client management as seamless as possible. We are committed to continuous improvement, and we’re constantly updating the app based on feedback from users like you to ensure that it remains the most effective tool for client management.
        </p>
        <p className="about-description">
          Thank you for choosing Schedualy. We’re excited to be a part of your journey, and we look forward to helping you streamline your practice and enhance your clients' experiences. With Schedualy, managing appointments and client data has never been easier. Welcome to a new way of managing your practice with efficiency and care.
        </p>
      </div>
      <div className="slideshow-container">
        <div className="slide fade">
          <img src={Girl} alt="Image 1" />
        </div>
        <div className="slide fade">
          <img src={Doctors} alt="Image 2" />
        </div>
        <div className="slide fade">
          <img src={Session} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
