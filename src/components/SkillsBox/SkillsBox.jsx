import React from "react";
import "./style.css";
const SkillsBox = () => {
  const Skills = {
    WebSkills: [
      "HTML-CSS",
      "JavaScript",
      "React",
      "Python",
      "Next.js",
      "Boostrap",
      "Mysql",
      "PHP",
      "Firebase",
      "GIT and GitHub",
    ],
    CompetetiveSkills: ["Data Structures", "Algorithms"],
    Extras: ["Linux", "VScode", "Figma", "Photoshop", "Canva"],
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>As Full-stack Developer</h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>As Competetive-Programmer</h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Extras</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
