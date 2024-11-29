import "./style.css";
import 'animate.css';


export default function HeroComponet() {
  return (
    <div className="hero-page h-screen md:h-['50%']">
      <div className="child-container">
        <h1 className="animate__animated animate__fadeInLeft text-[white] font-bold ">
          Pakistan's Favorite <br /> Active-wear.
        </h1>
        <button className="animate__animated animate__fadeInUp text-[white]">Shop Now</button>
      </div>
    </div>
  );
}
