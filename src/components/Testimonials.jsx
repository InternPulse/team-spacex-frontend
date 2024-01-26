import "../css/testimonials.css";
import { TestimonialImage, TestimonialImageIcon } from "../assets";

// TestimonialSlider.js

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const testimonials = [
  {
    id: 10,
    name: "Dani daniels",
    country: "Texas, USA",
    content:
      "Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  commodo consequat.",
    image: TestimonialImage,
  },
  {
    id: 11,
    name: "Ryan John",
    country: "California",
    content:
      "Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  commodo consequat.",
    image: TestimonialImage,
  },
  {
    id: 12,
    name: "Cynthia Plack",
    country: "Spain",
    content:
      "Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  commodo consequat.",
    image: TestimonialImage,
  },
  {
    id: 13,
    name: "David Benson",
    country: "Mexico",
    content:
      "Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  commodo consequat.",
    image: TestimonialImage,
  },
  {
    id: 14,
    name: "Maxwell Adedeji",
    country: "Lagos, Nigeria",
    content:
      "Lorem ipsu dolor sit amet, consectetur adipiscg elit, sed do eiusmod tempor incididunt ut labor et  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  commodo consequat.",
    image: TestimonialImage,
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <>
      <section className="testimonial-heading-section">
        <div className="testimonial-heading-container">
          <h2>Why 20+ Million people have used InvoicePilot</h2>
          <img src={TestimonialImageIcon} alt="icon" className="icon" />

          <p>See what our users are saying about our services and support</p>
        </div>
      </section>

      <Swiper
        spaceBetween={30}
        // slidesPerView={3}
        breakpoints={{
          // when window width is <= 576px
          576: {
            slidesPerView: 1,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
          },
          // Default (larger screens)
          9999: {
            slidesPerView: 3,
          },
        }}
        navigation
        loop
        centeredSlides
        onSlideChange={() => console.log("Slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="testimonial-card-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-details">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-country">{testimonial.country}</p>
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
