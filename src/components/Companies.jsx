import {
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
} from "../assets";
import "../css/companies.css";

const Companies = () => {
  return (
    <section className="companies">
      <p className="companies-text">
        Trusted by Businesses for all Their invoice needs
      </p>

      <div className="companies-logos">
        <div>
          <img src={CompanyLogo1} alt="logo" />
        </div>

        <div>
          <img src={CompanyLogo2} alt="logo" />
        </div>

        <div>
          <img src={CompanyLogo3} alt="logo" />
        </div>

        <div>
          <img src={CompanyLogo4} alt="logo" />
        </div>
        <div>
          <img src={CompanyLogo5} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
