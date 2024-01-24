import React, { useState } from "react";
import "../css/testimonials.css"; // Import your CSS file for styling

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "john-doe.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "John Doe",
    country: "USA",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "john-doe.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "John Doe",
    country: "USA",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "john-doe.jpg", // Replace with actual image path
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction) => {
    const totalSlides = testimonialsData.length;
    if (direction === "prev") {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
      );
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  return (
    <div className="testimonial-slider">
      {testimonialsData.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`testimonial-card ${
            index === currentSlide ? "active" : ""
          }`}
        >
          <img src={testimonial.image} alt={`User ${index + 1}`} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.country}</p>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
      <button
        onClick={() => handleSlideChange("prev")}
        className="slide-btn prev-btn"
      >
        &lt;
      </button>
      <button
        onClick={() => handleSlideChange("next")}
        className="slide-btn next-btn"
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonialSlider;
