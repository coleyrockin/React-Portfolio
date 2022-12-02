import React from "react";
import MVCTechBlog from "../../assets/images/MVC.png"
import JATE from "../../assets/images/JATE.png"
import NURTI from "../../assets/images/NURTI.png"
import OhSnap from "../../assets/images/OhSnap.png"
import ContactC from "../../assets/images/ContactC.png"
import Crustulum from "../../assets/images/CrustPasteHP1.png"

function Project({ data }) {
  const { name, description, photo, link, link2 } = data;
  return (
    <a
      href={link}
      target=""
      rel=""
      className="flex flex-col justify-center items-center"
    >
      <img
        src={photo}
        alt={name}
        className="h-48 w-54 p-1"
      ></img>
      <h2 className="w-full text-center">
        {name}
      </h2>
      <p className="p-1 m-1">{description}</p>
      <a href={link2}>
        <button href={link2} target="" rel="">github</button>
      </a>
    </a>

  );
}

function Portfolio() {
  const projects = [
    {
      name: "MVC Tech blog",
      description:
        "Blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well.",
      photo: MVCTechBlog,
      link: "https://github.com/coleyrockin/MVCTechBlog",
      link2: "https://www.google.com",
    },
    {
      name: "JATE",
      description:
        "A text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria.",
      photo: JATE,
      link: "https://pwaalldaytexteditor.herokuapp.com/",
    },
    {
      name: "Nutri Wizzard",
      description:
        "First collaborative project using two API's, one API is no longer active for prices (Red Circle - Target), and Edamam for nutritional facts.",
      photo: NURTI,
      link: "https://coleyrockin.github.io/Runrob/",
    },
    {
      name: "Oh Snap",
      description:
        "Single-page application called Oh Snap! that uses React state, props, Hooks, and reusable UI components.",
      photo: OhSnap,
      link: "https://coleyrockin.github.io/photo-port/",
    },
    {
      name: "Contact Cards",
      description:
        "MVP of a Contact Cards app and turn it into a Progressive Web Application (PWA).",
      photo: ContactC,
      link: "https://dry-beyond-26861.herokuapp.com/",
    },
    {
      name: "Crustulum Bucket",
      description:
        "Crustulum Bucket is a pastebin site that was a collaborative project using MERN stack made with three other developers.",
      photo: Crustulum,
      link: "https://crustulum-bucket.herokuapp.com/",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-10">
      {projects.map((x) => (
        <Project data={x} key={x.name}></Project>
      ))}
    </div>
  );
}

export default Portfolio;