import React from "react";

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/self1.jpg)" }}
                  ></div>
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Passinate Software Engineer <br></br>& Content Creator</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  As a soon-to-be graduate of the University of Toronto's Computer Science program (Dec 2023), 
                  I'm a software engineer with seven years of Java & C experience under my belt. Having honed my
                   skills over the years, I now excel in back-end development and performance optimization. Yes, 
                   maintaining the highest code standards is not just my job; it's my passion.
                  <br /> <br />
                  When not immersed in lines of code or exploring the latest industry trends, you'll 
                  find me traversing the slopes, hiking trails, or venturing to new places. And I'll 
                  probably be capturing the scenery with my camera - it's my secondary lens on the world!

                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/Chuanyang_QIao_Resume.pdf" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
