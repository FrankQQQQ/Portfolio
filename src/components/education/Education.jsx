import React from "react";
import Testimonial from "../../components/testimonial/TestimonialTwo";

const Education = () => {
  return (
    <> 
  <div className="shane_tm_section" >
        <div className="shane_tm_testimonials" >
          <div className="container"  >
            <div className="testimonials_inner" >
              <div
                className="left"  
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Education</span>
                  <h3>Education</h3>
                </div>

              
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + "img/education/university.png"
                        })`,
                    }}
                  ></div>
              
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
