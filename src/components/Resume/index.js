import React from "react";

function Resume() {
  return (
    <div className="">
      <article className="p-2 m-2">
        <h2 className="underline">Resume</h2>
        <a
          className=""
          href="/resume.txt"
          target="_blank"
          download
        >
          Download my resume, or Find me on Linkedin (Link in Footer).
        </a>
      </article>
      <article className="">
        <h2 className="text-lg underline">Web Development Knowledge</h2>
        <ul className="p-3 m-3">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>MongoDB, Mongoose</li>
          <li>MySQL, Sequlize</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node.Js</li>
          <li>Responsive design</li>
          <li>Express</li>
        </ul>
      </article>
    </div>
  );
}

export default Resume;