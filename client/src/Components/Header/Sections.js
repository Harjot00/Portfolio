import React from "react";
import { Link } from "react-router-dom";

function Sections() {
  const sections = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Qualifications",
      link: "/#qualifications",
    },
    {
      name: "Portfolio",
      link: "/#portfolio",
    },

    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <ul className="mt-2 md:mt-0 md:flex justify-content items-center md:space-x-4 lg:space-x-12 scroll-smooth">
      {sections.map((section, idx) => {
        return (
          <a href={section.link} key={idx} className="scroll-mt-10">
            <li className="text-lg md:text-xl">
              <p>{section.name}</p>
            </li>
          </a>
        );
      })}
    </ul>
  );
}

export default Sections;
