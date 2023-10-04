import React from "react";

const SocialShare = [
  {
    iconName: "email",
    link: "chuanyang.qiao.work@gmail.com",
  },
  { iconName: "phone", link: "https://twitter.com/" },
  {
    iconName: "location",
    link: "https://www.instagram.com/",
  },
  { iconName: "linkedin", link: "https://www.linkedin.com/in/chuanyang-qiao/" },
  {
    iconName: "github",
    link: "https://github.com/FrankQQQQ",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
