import '../Style/Userfooter.css';

function Userfooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-col">
          <h3>Company</h3>
          <h4>About us</h4>
          <h4>Our Services</h4>
          <h4>Privacy Policy</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="site-footer-col">
          <h3>Get Help</h3>
          <h4>FAQ</h4>
          <h4>Shopping</h4>
          <h4>Returns</h4>
          <h4>Order Status</h4>
          <h4>Payment Options</h4>
        </div>
        <div className="site-footer-col">
          <h3>Online Shop</h3>
          <h4>Watch</h4>
          <h4>Bag</h4>
          <h4>Shoes</h4>
          <h4>Dress</h4>
        </div>
        <div className="site-footer-col">
          <h3>Follow Us</h3>
          <div className="site-footer-social">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-youtube" />
          </div>
        </div>
      </div>
      <p className="site-footer-copy">© 2026 Ekart. All rights reserved.</p>
    </footer>
  );
}

export default Userfooter;
