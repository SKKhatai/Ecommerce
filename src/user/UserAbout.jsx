import { Link } from 'react-router-dom';
import Userfooter from './Userfooter';
import '../Style/UserAbout.css';

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '10K+', label: 'Products Listed' },
  { value: '500+', label: 'Cities Served' },
  { value: '24/7', label: 'Support' },
];

const values = [
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Fast Delivery',
    desc: 'Nationwide shipping with real-time tracking so your order arrives on time, every time.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Secure Payments',
    desc: 'Bank-grade encryption and trusted gateways keep every transaction safe and protected.',
  },
  {
    icon: 'fa-solid fa-rotate-left',
    title: 'Easy Returns',
    desc: 'Hassle-free 7-day return policy — if you are not satisfied, we make it right.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    desc: 'Our dedicated team is always ready to help you with orders, returns, or questions.',
  },
];

const highlights = [
  'Wide range of electronics, fashion & home essentials',
  'Best prices with seasonal deals & flash sales',
  'Secure checkout with multiple payment options',
  'Fast doorstep delivery across India',
];

function UserAbout() {
  return (
    <div className="about-page">
      <div className="orb orb-red" />
      <div className="orb orb-blue" />

      <header className="about-hero scene-3d">
        <span className="about-hero-badge">Our Story</span>
        <h1>
          About <span>eKart</span>
        </h1>
        <p>
          India&apos;s trusted online marketplace — bringing quality products, unbeatable prices,
          and a seamless shopping experience to your doorstep.
        </p>
      </header>

      <div className="about-stats">
        {stats.map((s) => (
          <div key={s.label} className="about-stat-card card-3d">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <section className="about-story">
        <div className="about-image-wrap scene-3d">
          <div className="about-image-glow" />
          <div className="about-image-frame">
            <img
              src="https://images.pexels.com/photos/4464487/pexels-photo-4464487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="eKart delivery team"
            />
          </div>
        </div>

        <div className="about-story-text glass-panel" style={{ padding: '2rem' }}>
          <h2>Your One-Stop Shop for Everything</h2>
          <p>
            At <strong>eKart</strong>, we bring you a wide range of products — from electronics and
            fashion to home essentials and groceries — all at the best prices. Our mission is to make
            online shopping smooth, reliable, and enjoyable for customers across India.
          </p>
          <p>
            With secure payments, fast delivery, easy returns, and round-the-clock support, we put
            your satisfaction at the heart of everything we do.
          </p>
          <ul className="about-check-list">
            {highlights.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-circle-check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-values">
        <h2>Why Choose eKart?</h2>
        <p className="about-values-sub">Hover a card to discover what sets us apart</p>
        <div className="about-values-grid">
          {values.map((v) => (
            <div key={v.title} className="about-value-flip">
              <div className="about-value-inner">
                <div className="about-value-front">
                  <div className="about-value-icon">
                    <i className={v.icon} />
                  </div>
                  <h3>{v.title}</h3>
                </div>
                <div className="about-value-back">
                  <p>{v.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="about-cta scene-3d">
        <div className="about-cta-inner">
          <h3>Ready to start shopping?</h3>
          <p>Explore thousands of products curated just for you.</p>
          <Link to="/userViewProducts" className="about-cta-btn">
            Browse Products
          </Link>
        </div>
      </div>

      <Userfooter />
    </div>
  );
}

export default UserAbout;
