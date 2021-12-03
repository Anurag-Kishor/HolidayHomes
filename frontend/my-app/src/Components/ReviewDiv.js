import React from "react";
import testimonial2 from "../assets/2.png";
const ReviewDiv = () => {
  return (
    <div>
      <img src={testimonial2} />
      <div className="myCarousel">
        <h3>Shirley Fultz</h3>
        <h4>Designer</h4>
        <p>
          It's freeing to be able to catch up on customized news and not be
          distracted by a social media element on the same site
        </p>
      </div>
    </div>
  );
};

export default ReviewDiv;
