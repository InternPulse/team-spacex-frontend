import "../css/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="block">
        <div className="hero-body">
          <h1>
            Fly Through Invoicing Hassles with InvoicePilot –
            <span className="grey"> Soaring Your Business!</span>
          </h1>
          <p className="subheading">
            Simplify your invoicing process, send professional invoices
            effortlessly, and accelerate payments. Elevate your business with a
            streamlined invoicing experience today.
          </p>
          <div className="hero-btns">
            <button className="home-btn home-btn-blue">Get Started</button>
            <button className="home-btn home-btn-white">Pre-Template</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
