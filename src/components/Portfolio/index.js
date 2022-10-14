
import React from "react";

function Project({ data }) {
  const { name, description, photo, link } = data;
  return (
    <a
      href={link}
      target=""
      rel=""
      className=""
    >
      <img
        src={photo}
        alt={name}
        className=""
      ></img>
      <h2 className="">
        {name}
      </h2>
      <p className="">{description}</p>
    </a>
  );
}

function Portfolio() {
  const projects = [
    {
      name: "Project",
      description:
        "Project",
      photo: Project,
      link: "www.github.com/coleyrockin",
    }
  ];
  return (
    <div className="">
      {projects.map((x) => (
        <Project data={x} key={x.name}></Project>
      ))}
    </div>
  );
}

export default Portfolio;