import React from "react";
import { SkillsHeading, SkillsCard, SkillsContainer } from "./Skills.style";

function Skills() {
  // NOTE: Nice work!
  const skillsArray = [
    {
      skill: "Design",
      skillName1: ["Figma", "Adobe XD", "Canva"],
    },
    {
      skill: "Programming",
      skillMajor1: "Languages",
      skillName1: ["HTML 5", "CSS3", "JavaScript"],
      skillMajor2: "Frameworks",
      skillName2: ["Sass", "React JS", "Next JS"],
    },
    {
      skill: "Other",
      skillMajor1: "Api",
      skillName1: ["Strapi", "Wordpress", "Craft"],
    },
  ];
  return (
    <>
      <SkillsHeading>
        <h2 id="skills">Skills</h2>
      </SkillsHeading>
      <SkillsContainer>
        {skillsArray.map(
          ({ skill, skillMajor1, skillMajor2, skillName1, skillName2 }) => (
            <SkillsCard key={skill}>
              <h3>{skill}</h3>
              <h4>{skillMajor1 ? skillMajor1 : ""}</h4>
              {skillName1.map((elm) => (
                <p key={elm + 1}>{elm}</p>
              ))}
              <h4>{skillMajor2 ? skillMajor2 : ""}</h4>
              {skillName2
                ? skillName2.map((elm) => <p key={elm}>{elm}</p>)
                : ""}
            </SkillsCard>
          )
        )}
      </SkillsContainer>
    </>
  );
}

export default Skills;
