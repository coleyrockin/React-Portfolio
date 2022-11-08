import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { Mongodb, Mysql, ReactJs, Bulma, Tailwindcss, Nodedotjs } from "@icons-pack/react-simple-icons";
function Resume() {
  return (
    <article className="">
      <h2 className="text-lg underline">Web Development Knowledge</h2>
      <ul className="p-3 m-3">
        <li className="flex items-center">HTML<FaHtml5 /></li>
        <li className="flex items-center">CSS<FaCss3Alt /></li>
        <li className="flex items-center">Javascript ES6<FaJsSquare /></li>
        <li className="flex items-center">MongoDB<Mongodb size={18} /></li>
        <li className="flex items-center">MySQL<Mysql size={22} /></li>
        <li className="flex items-center">React<ReactJs size={18} color="#61DAFB" /></li>
        <li className="flex items-center">Bootstrap<FaBootstrap /> | BULMA <Bulma size={18} /> | Tailwind <Tailwindcss size={18} />  </li>
        <li className="flex items-center">Node.Js < Nodedotjs size={18} /> & various packages</li>
        <li className="flex items-center">Responsive design</li>
        <li className="flex items-center">Express</li>
        <li className="flex items-center">Git</li>
        <li className="flex items-center">Database Theory</li>


      </ul>
      <h2>In progress of learning AWS, JAVA, C#, and Python</h2>
    </article >
  );
}

export default Resume;
