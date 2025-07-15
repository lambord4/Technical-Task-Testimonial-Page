import React from 'react';
import './TestimonialCard.scss';
import Icon from '../../assets/icon.png';

const TestimonialCard = ({ logo, companyName, feedback, avatar, authorName, authorTitle }) => {
  return (
    <div className="testimonial-card">
      <div className="company">
        <img src={logo} alt={companyName} className="company-logo" />
      </div>
      <div className="feedback">
        <p>{feedback}</p>
        <img src={Icon} alt="quote icon" className="feedback-icon" />
      </div>
      <div className="author">
        <img src={avatar} alt={authorName} className="avatar" />
        <div className='authorText'>
          <strong>{authorName}</strong>
          <p>{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
