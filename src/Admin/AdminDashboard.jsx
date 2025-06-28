import '../Style/AdminDashboard.css';
import { useState } from 'react';
const AdminDashboard = () => {
  let slides = [
    {

      src: "public/imgslider1.jpg",
      alt: "img1"
    },
    {
      src: "public/imgslider2.jpg",
      alt: "img2"
    },
    {
      src: "public/imgslider3.png",
      alt: "img3"
    }
  ]

  const [slide, setSlide] = useState(0);

  function leftSlide() {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1)

  }

  function rightSlide() {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1)
  }

  console.log(slides[slide].src)
  return (
    <div className="carousel">
      <div className='icon icon-left' onClick={leftSlide}><i class="fa-solid fa-angle-left"></i></div>

      <div className="icon icon-right" onClick={rightSlide}> <i class="fa-solid fa-angle-right"></i></div>

      <div className="slide">

        <img src={slides[slide].src} alt={slides[slide].src} key={slide} />

      </div>

      <div className="indicators">
        {slides.map((id) => {
          return (
            <span key={id} className={id === slide ? "indicator" : "indicator inactive-indicator"}></span>
            // <button key={id} onClick={setSlide()}></button>
          )
        })}
      </div>
    </div>
  );
}
export default AdminDashboard;