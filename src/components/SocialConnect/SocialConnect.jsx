import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

const Socials = ({ text, dimenssion, fontSize, to }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <li
        className="one-social-wrap"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover()}
      >
        <Icon
          icon={`arcticons:${text}`}
          style={{
            width: dimenssion,
            height: dimenssion,
            transform: hover ? "rotate(-10deg)" : "",
          }}
        />
        <a href={to} target="_blank" className="socials-name" rel="noreferrer">
          <p style={{ fontSize: fontSize }}>{text}</p>
        </a>
      </li>
    </>
  );
};

const SocialConnect = ({ dim, size }) => {
  return (
    <>
      <ul className="socials-wrap">
        <Socials
          text="Stack overflow"
          to="https://stackoverflow.com/users/22065903/badr-brighach"
          dimenssion={dim}
          fontSize={size}
        />
        <Socials
          text="linkedin"
          to="https://www.linkedin.com/in/badr-brighach/"
          dimenssion={dim}
          fontSize={size}
        />
        <Socials
          text="github"
          to="https://github.com/badrbrighach"
          dimenssion={dim}
          fontSize={size}
        />
      </ul>
    </>
  );
};

export default SocialConnect;
