import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
      My name is Badr Brighach, and I am in my freshman year pursuing an 
      Full-stack developer degree at the Centre de Développement Informatique. Two things I can't live
        without Coffee and Coding <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am Programming enthusiast and fullstack Web developer.
        <br />
        <br />
        Currently pursuing my degree in Full-stack and honestly
        programming is fun .
        {/* <br />I also run NEWS media company{" "}
        <a
          href="https://www.eternalmac.com"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          Eternalmac.com
        </a>{" "}
        Where we post all tech news for techies. */}
        <br />
        <br />I love exploring different kind of fields and I do design
        in Photoshop. And I have few good{" "}
        <a
          href="https://www.artstation.com/codersground404"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects on Behance
        </a>{" "}
        too. Definitely check those out.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
      </p>
    </>
  );
};
