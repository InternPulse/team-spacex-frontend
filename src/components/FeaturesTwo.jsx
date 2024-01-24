import "../css/featurestwo.css";
import { InvoiceImage2 } from "../assets";
import LightButton from "./LightButton";

const FeaturesTwo = () => {
  return (
    <section className="invoice-features-two-container">
      <div className="left-container">
        <img src={InvoiceImage2} alt="invoice making image" />
      </div>

      <div className="right-container">
        <h3>The Support You Need, When You Need It</h3>
        <ul>
          <li>
            <strong>Help From Start to Finish:</strong>
            Our Support team is highly knowledgeable and never transfers you to
            another department.
          </li>

          <li>
            <strong>4.8/5.0 Star Reviews:</strong>
            Yup, that's our Support team approval rating across 120,000+ reviews
          </li>

          <li>
            <strong>Global Support:</strong>
            We've got over 100 Support staff working across North America and
            Europe
          </li>
        </ul>

        <LightButton content={"Contact us"} style={"contact-us"} url={"#"} />
      </div>
    </section>
  );
};

export default FeaturesTwo;
