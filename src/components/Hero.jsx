import "../css/hero.css";
import { HeroImageOne, HeroImageTwo, HeroImageThree } from "../assets";
import DarkButton from "./DarkButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2 className="hero_h2_heading">
          Fly Through Invoicing Hassles with InvoicePilot -
        </h2>

        <h2 className="hero_h2_subtitle">Soaring Your Business!</h2>

        <p className="hero_para">
          Simplify your invoicing process, send professional invoices
          effortlessly, and accelerate payments. Elevate your business with a
          streamlined invoicing experience today.
        </p>

        <DarkButton content={"Get Started"} />
      </div>

      <div className="hero_right">
        <div className="hero_big_Image_box">
          <img src={HeroImageOne} alt="invoice hero image" />
        </div>

        <div className="hero_small_Images_box">
          <img src={HeroImageTwo} alt="invoice hero image" />

          <img src={HeroImageThree} alt="invoice hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
