import "../css/featuresone.css";
import { InvoiceImage } from "../assets";
import DarkButton from "../components/DarkButton";

const FeaturesOne = () => {
  return (
    <section className="invoice-features-one-container">
      <div className="left-container">
        <h3>Professional Invoice</h3>
        <p>
          Impress clients with professional Invoice That clearly show the work
          you've done and what it costs.. then, just click send and use
          automated payment reminder to nudge client for payment.
        </p>

        <DarkButton content={"Learn More.."} style={"learn-more"} />
      </div>

      <div className="right-container">
        <img src={InvoiceImage} alt="invoice making image" />
      </div>
    </section>
  );
};

export default FeaturesOne;
