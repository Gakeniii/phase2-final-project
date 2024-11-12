import React from 'react';
import Profile from '../images/happy-group.jpg';

const Home = () => (
  <div id="home">
    <div className="content">
      <div className="text">
        <h1>Hello Dr. Gakeni,</h1>
        <p>We hope that this App is of great continous service to you.</p>
        <p>Keeping track of all your and patients and patient appointments .</p>
        <em>Our patients well-being is our top priority!</em>
      </div>
      <div className="image">
        <img src={Profile} alt="Patient registry" ></img>
      </div>
    </div>
  </div>
);

export default Home;
