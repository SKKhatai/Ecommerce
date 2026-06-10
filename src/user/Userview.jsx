import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/men1.png';
import image2 from '../images/woman1.png';
import image3 from '../images/sale1.png';

function Userview() {
  const [slideItem, setSlide] = useState(0);

  const Items = [
    {
      id: 1,
      title: "70% off on men's shopping",
      description:
        'Discover the latest trends in menswear. Premium quality at unbeatable prices — limited time only.',
      image: image1,
    },
    {
      id: 2,
      title: "70% off on Women's shopping",
      description:
        'Elevate your style with our curated womenswear collection. Fashion that speaks for itself.',
      image: image2,
    },
    {
      id: 3,
      title: 'Sales on all products',
      description:
        'Shop everything from electronics to groceries. Massive discounts across every category.',
      image: image3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === Items.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [Items.length]);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-text glass-panel">
          <h1>{Items[slideItem].title}</h1>
          <p>{Items[slideItem].description}</p>
          <Link to="/userViewProducts" className="hero-cta">
            Shop Now
          </Link>
          <div className="hero-dots">
            {Items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSlide(idx)}
                className={idx === slideItem ? 'hero-dot active' : 'hero-dot'}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={Items[slideItem].image}
            alt={Items[slideItem].title}
            className="hero-product-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Userview;
