import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["All", "Experience", "Project", "Photography"];

const tabListContent = [
  {
    porftoliItems: [
      
      {
        img: "/img/Experience/amazon.png",
        title: " Amazon",
        meta: "Software Engineer Intern",
        portfolioLink: "https://www.linkedin.com/company/amazon/?originalSubdomain=ca",
      },
      {
        img: "/img/Experience/dataOnDemand.png",
        title: "Data On Demand",
        meta: "Data Engineer Intern",
        portfolioLink:
          "https://www.linkedin.com/company/dataondemandchinaltd./",
      },
      {
        img: "/img/Experience/b2-st.png",
        title: "B2ST",
        meta: "Start Up Company",
        portfolioLink:
          "https://github.com/dcsil/B2ST-App",
      },
      {
        img: "/img/Experience/education_pathway.jpg",
        title: "Education PathWay",
        meta: "MERN-Stack",
        portfolioLink: "https://www.youtube.com/watch?v=433Gg5AhhAE",
      },
      {
        img: "/img/Experience/database.png",
        title: "DataBase System",
        meta: "C++",
        portfolioLink:
          "https://github.com/FrankQQQQ/CSC443-Project",
      },
      {
        img: "/img/Experience/student_recruiter.png",
        title: "Student Recruiter",
        meta: "C",
        portfolioLink:
          "https://drive.google.com/file/d/1AWA8aeRuD3K4UgB7bHaTE5HTNkK2W__l/view?usp=sharing",
      },
      {
        img: "/img/Experience/pintos.jpg",
        title: "Operating system",
        meta: "C",
        portfolioLink: "https://web.stanford.edu/class/cs140/projects/pintos/pintos.html",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/Experience/amazon.png",
        title: "Amazon",
        meta: "Software Engineer Intern",
        portfolioLink:
          "https://www.linkedin.com/company/amazon/?originalSubdomain=ca",
      },
      {
        img: "/img/Experience/dataOnDemand.png",
        title: "Data On Demand",
        meta: "Data Engineer Intern",
        portfolioLink:
          "https://www.linkedin.com/company/dataondemandchinaltd./",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/Experience/b2-st.png",
        title: "B2ST",
        meta: "Start Up Company",
        portfolioLink:
          "https://github.com/dcsil/B2ST-App",
      },
      {
        img: "/img/Experience/education_pathway.jpg",
        title: "Enducation PathWay",
        meta: "MERN-Stack",
        portfolioLink: "https://www.youtube.com/watch?v=433Gg5AhhAE",
      },
      {
        img: "/img/Experience/database.png",
        title: "DataBase System",
        meta: "C++",
        portfolioLink:
          "https://github.com/FrankQQQQ/CSC443-Project",
      },
      {
        img: "/img/Experience/student_recruiter.png",
        title: "Student Recruiter",
        meta: "C",
        portfolioLink:
          "https://drive.google.com/file/d/1AWA8aeRuD3K4UgB7bHaTE5HTNkK2W__l/view?usp=sharing",
      },
      {
        img: "/img/Experience/pintos.jpg",
        title: "Operating system",
        meta: "C",
        portfolioLink: "https://web.stanford.edu/class/cs140/projects/pintos/pintos.html",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/Experience/photo/1.jpg",
        title: "Al's Habrich Trail",
        meta: "Vancouver",
        portfolioLink: "https://www.seatoskygondola.com/trails/als-habrich-trail/"
      },
      {
        img: "/img/Experience/photo/2.jpg",
        title: "Wreck Beach",
        meta: "Vancouver",
        portfolioLink: "https://visit.ubc.ca/see-and-do/gardens-and-nature/wreck-beach/"
      },
      {
        img: "/img/Experience/photo/3.jpg",
        title: "Whistler Mountain",
        meta: "Vancouver",
        portfolioLink: "https://www.whistler.com/"
      },
      {
        img: "/img/Experience/photo/4.jpg",
        title: "Malahat Skywalk",
        meta: "Victoria",
        portfolioLink: "https://malahatskywalk.com/"
      },
      {
        img: "/img/Experience/photo/5.jpg",
        title: "Hatley Castle",
        meta: "Los A",
        portfolioLink: "http://hatleycastle.com/"
      },
      {
        img: "/img/Experience/photo/6.jpg",
        title: "Disney Land",
        meta: "Los Angeles",
        portfolioLink: "https://disneyland.disney.go.com/en-ca/"
      },
      {
        img: "/img/Experience/photo/7.jpg",
        title: "Sea Shore",
        meta: "Los Angeles",
        portfolioLink: "https://www.losangeles.com/"
      },
      {
        img: "/img/Experience/photo/8.jpg",
        title: "Rocky Mountains",
        meta: "Colorado",
        portfolioLink: "https://www.losangeles.com/"
      },
      {
        img: "/img/Experience/photo/9.jpg",
        title: "Night",
        meta: "Toronto",
      },
      {
        img: "/img/Experience/photo/10.jpg",
        title: "universal studios hollywood",
        meta: "Los Angeles",
        portfolioLink: "https://www.universalstudioshollywood.com/web/en/us/"
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <div className="shane_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="shane_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

                <div className="portfolio_list has-effect">
                  <Gallery>
                    {tabListContent.map((tabContent, i) => (
                      <TabPanel key={i}>
                        <ul className="gallery_zoom">
                          {tabContent.porftoliItems.map((val, i) => (
                            <li
                              key={i}
                              data-aos="fade-right"
                              data-aos-duration="1200"
                              data-aos-delay={val.delayAnimation}
                            >
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={1000}
                                    height={1000}
                                  >
                                    {({ ref, open }) => (
                                      <img
                                        src={val.img}
                                        alt="portfolio"
                                        // role="button"
                                        // ref={ref}
                                        // onClick={open}
                                      />
                                    )}
                                  </Item>
                                </div>
                                <div className="mobile_title">
                                  <h3>
                                    <a
                                      href={val.portfolioLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {val.title}
                                    </a>
                                  </h3>
                                  <span>{val.meta}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
                  </Gallery>
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
