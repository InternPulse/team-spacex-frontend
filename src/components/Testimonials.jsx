import "../css/testimonials.css";
import { TestimonialImageIcon } from "../assets";
import lineIcon from "../images/Line 5.svg";
import person1 from "../images/Ellipse 8.svg";
import stars from "../images/Frame 124.svg";
import person2 from "../images/Ellipse 9.svg";
import person3 from "../images/Ellipse 0.svg";

const TestimonialSlider = () => {
  return (
    <section className="testimonial">
      <div className="block">
        <div className="testimonial-heading-container">
          <h2>Why 20+ Million people have used InvoicePilot</h2>
          <img src={TestimonialImageIcon} alt="icon" className="icon" />
          <p>See what our users are saying about our services and support</p>
        </div>

        <div className="testimonial-blocks">
          <div className="testimonial-block">
            <h5>Emphasize Value</h5>
            <p>
              "Before [your app], I hated sending money internationally. It was
              expensive and a huge hassle. Now, it's instant and affordable!
              It's made a huge difference in connecting with my family overseas
            </p>
            <img className="line-icon" src={lineIcon} alt="" />
            <div className="testimonial-profile">
              <span>
                <img src={person1} alt="" />
                <div className="profile-name">
                  <h6>Maria S.</h6>
                  <p>Teacher</p>
                </div>
              </span>
              <img src={stars} alt="" />
            </div>
          </div>
          <div className="testimonial-block">
            <h5>Demonstrate Trust</h5>
            <p>
              "I was initially skeptical about using a new app for my finances.
              But [your app]'s security features and transparent fees really
              impressed me. Now, I feel completely confident using it for.....
            </p>
            <img className="line-icon" src={lineIcon} alt="" />
            <div className="testimonial-profile">
              <span>
                <img src={person2} alt="" />
                <div className="profile-name">
                  <h6>Jane Smith</h6>
                  <p>Lawyer</p>
                </div>
              </span>
              <img src={stars} alt="" />
            </div>
          </div>
          <div className="testimonial-block">
            <h5>Appeal to Emotions</h5>
            <p>
              "[Your app] has given me so much financial freedom. I can finally
              save for the things I really want, without having to worry about
              making ends meet. It's such a relief!"
            </p>
            <img className="line-icon" src={lineIcon} alt="" />
            <div className="testimonial-profile">
              <span>
                <img src={person3} alt="" />
                <div className="profile-name">
                  <h6>Jackson</h6>
                  <p>Artist</p>
                </div>
              </span>
              <img src={stars} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
