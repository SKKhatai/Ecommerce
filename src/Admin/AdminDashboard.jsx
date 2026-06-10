import { useState } from 'react';
import '../Style/AdminDashboard.css';

const AdminDashboard = () => {
  const slides = [
    { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', alt: 'Store front' },
    { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', alt: 'Shopping' },
    { src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80', alt: 'Retail' },
  ];

  const [slide, setSlide] = useState(0);

  function leftSlide() {
    setSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  }

  function rightSlide() {
    setSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  }

  return (
    <div className="carousel scene-3d">
      <button type="button" className="icon icon-left" onClick={leftSlide} aria-label="Previous slide">
        <i className="fa-solid fa-angle-left" />
      </button>
      <button type="button" className="icon icon-right" onClick={rightSlide} aria-label="Next slide">
        <i className="fa-solid fa-angle-right" />
      </button>
      <div className="slide card-3d">
        <img src={slides[slide].src} alt={slides[slide].alt} key={slide} />
      </div>
      <div className="indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === slide ? 'indicator active-dot' : 'indicator inactive-indicator'}
            onClick={() => setSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
