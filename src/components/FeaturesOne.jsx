import "../css/featuresone.css";
import sendIcon from "../images/lets-icons_send-fill.svg";
import currencyIcon from "../images/ri_currency-fill.svg";
import subscriptionIcon from "../images/wpf_renew-subscription.svg";
import billIcon from "../images/solar_bill-bold.svg";

const FeaturesOne = () => {
  return (
    <section className="features">
      <div className="block">
        <div className="features-body">
          <h1>
            <span className="blue">Features</span> Our Users Are Enjoying
          </h1>
          <p className="subheading">
            Enjooy remarkable while creating you customer invoices
          </p>
          <div className="features-block">
            <div className="feature-block">
              <img src={sendIcon} alt="" />
              <div className="text">
                <h3>Multiple invoice formats:</h3>
                <p>
                  Download invoices as PDFs, send them via email, or print them
                  directly. Client management: Store and manage client
                  information for efficient repeat invoicing.
                </p>
              </div>
            </div>
            <div className="feature-block">
              <img src={currencyIcon} alt="" />
              <div className="text">
                <h3>Pre- Design Template</h3>
                <p>
                  Professional-looking invoices in minutes: Choose from a
                  variety of templates designed to suit different industries and
                  styles.
                </p>
                <p>Pre design Template can be downloaded to your devices</p>
              </div>
            </div>
            <div className="feature-block">
              <img src={subscriptionIcon} alt="" />
              <div className="text">
                <h3>Payment Gateway Integration</h3>
                <p>
                  Secure and convenient online payments: Accept credit cards,
                  debit cards, and bank transfers directly within the app
                </p>
              </div>
            </div>
            <div className="feature-block">
              <img src={billIcon} alt="" />
              <div className="text">
                <h3> Invoice Tracking</h3>
                <p>
                  Real-time overview of invoice status: See which invoices are
                  sent, viewed, paid, or overdue at a glance Improve payment
                  collection rates and reduce administrative overhead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
