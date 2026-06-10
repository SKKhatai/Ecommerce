import Userview from './Userview';
import Userfooter from './Userfooter';
import Contact from './Contact';
import ProductFeature from './ProductFeature';

function Userhomepage() {
  return (
    <div className="homepage-wrap">
      <div className="orb orb-red homepage-orb" />
      <div className="orb orb-blue homepage-orb" />
      <Userview />
      <ProductFeature />
      <div id="contact-section">
        <Contact />
      </div>
      <Userfooter />
    </div>
  );
}

export default Userhomepage;
