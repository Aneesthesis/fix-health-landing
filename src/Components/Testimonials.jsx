import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      author: "Aarav Kapoor",
      content:
        "The service at Fix Health was outstanding! I highly recommend it to everyone. The doctors are not only skilled but also very understanding.",
    },
    {
      id: 2,
      author: "Sanya Gupta",
      content:
        "I had a wonderful experience with Fix Health. The medical professionals are caring and thorough. The personalized care I received made a significant impact on my well-being.",
    },
    {
      id: 3,
      author: "Arjun Patel",
      content:
        "Fix Health has played a crucial role in my health journey. The doctors are dedicated, and the healthcare approach is holistic. I am thankful for the positive change it has brought to my life.",
    },
    {
      id: 4,
      author: "Neha Sharma",
      content:
        "I want to express my gratitude to Fix Health for the exceptional care. The doctors are not only knowledgeable but also compassionate. I highly recommend Fix Health for quality healthcare.",
    },
    {
      id: 5,
      author: "Rohan Khanna",
      content:
        "My experience with Fix Health has been phenomenal. The doctors take the time to understand your concerns and provide personalized solutions. I am grateful for the positive impact it has had on my health.",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials min-w-screen mx-auto p-8 bg-gray-900 rounded-lg mt-8 text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <Slider {...carouselSettings}>
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 border mx-4 my-4 border-gray-800 rounded-lg text-lg min-w-[200px] min-h-[200px]"
          >
            <p className="mb-2">{testimonial.content}</p>
            <p className="text-sm font-semibold">{`- ${testimonial.author}`}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
