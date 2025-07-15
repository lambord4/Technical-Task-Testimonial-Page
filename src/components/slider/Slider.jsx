import React, { useState } from 'react';
import './Slider.scss';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Slider = () => {
  const [cards, setCards] = useState(testimonials);
  const [index, setIndex] = useState(0);

  const prev = () => {
    const newIndex = (index - 1 + cards.length) % cards.length;
    setIndex(newIndex);
  };

  const next = () => {
    const newIndex = (index + 1) % cards.length;
    setIndex(newIndex);
  };

  const visibleCards = [
    cards[index % cards.length],
    cards[(index + 1) % cards.length],
    cards[(index + 2) % cards.length]
  ];

  return (
    <div className="slider-wrapper">
    <button className="arrow left" onClick={prev}>❮</button>

    <div className="slider">
      <div className="card-container">
        {visibleCards.map((card) => (
          <TestimonialCard key={card.id} {...card} />
        ))}
      </div>
      <div className="dots">
        {cards.map((_, i) => (
          <span key={i} className={i === index ? 'dot active' : 'dot'} />
        ))}
      </div>
    </div>

    <button className="arrow right" onClick={next}>❯</button>
  </div>
  );
};

export default Slider;

