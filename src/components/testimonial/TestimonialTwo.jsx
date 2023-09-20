import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {

  const growOnHover = {
    transition: 'transform 0.3s ease-in-out',
    textDecoration: 'none',
  };

  const growOnHoverActive = {
    transform: 'scale(1.05)',
    textDecoration: 'none',
  };


  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (

    <Slider {...settings}>
      <li className="item">
        <div className="texts">
          <p>
            The University of Toronto (U of T) is one of Canada's most prestigious higher education institutions,
            located in the heart of Toronto, Ontario. Founded in 1827, it is known for being the birthplace of insulin
            and stem cell research, and it's often considered the best university in Canada and one of the top schools
            globally.

          </p>
          <div className="author">
            <div className="image">
              <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/education/UoftIcon.png"
                      })`,
                  }}
                ></div>
              </a>
            </div>
            <div className="short">
              <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer" style={growOnHover} onMouseOver={() => { growOnHover = growOnHoverActive }} onMouseOut={() => { growOnHover = growOnHover }}>
                <h3 className="author">
                  <span>University Of Toronto</span>
                </h3>
              </a>
              <h3 className="job">
                <span>Bachelor of Science with Honors <br></br>In Computer Science</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
      {/* End single slide item */}

    </Slider>

  );
}
